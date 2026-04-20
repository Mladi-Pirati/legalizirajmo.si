import js from "@eslint/js";
import tsESlintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve tailwind-api-utils via eslint-plugin-tailwindcss's own dependency tree
// (tailwind-api-utils is a dep of the plugin but not a direct project dep)
const pluginRequire = createRequire(
  import.meta.resolve("eslint-plugin-tailwindcss"),
);
const { TailwindUtils } = pluginRequire("tailwind-api-utils");

// Load the Tailwind v4 design system once so the canonical-classes rule can use it
const tailwindUtils = new TailwindUtils();
await tailwindUtils.loadConfig(
  path.resolve(__dirname, "src/styles/global.css"),
);

/**
 * Walk an AST node value recursively and call `visit` with every Literal /
 * TemplateElement string that could be a class-name list.
 */
function walkClassValue(node, visit) {
  if (!node) return;
  switch (node.type) {
    case "Literal":
      if (typeof node.value === "string") visit(node, node.value);
      break;
    case "TemplateElement":
      if (node.value.cooked) visit(node, node.value.cooked);
      break;
    case "TemplateLiteral":
      node.quasis.forEach((q) => walkClassValue(q, visit));
      node.expressions.forEach((e) => walkClassValue(e, visit));
      break;
    case "ConditionalExpression":
      walkClassValue(node.consequent, visit);
      walkClassValue(node.alternate, visit);
      break;
    case "LogicalExpression":
      walkClassValue(node.right, visit);
      break;
    case "ArrayExpression":
      node.elements.forEach((el) => walkClassValue(el, visit));
      break;
  }
}

/** Custom rule: flag non-canonical Tailwind v4 class names */
const suggestCanonicalClassesRule = {
  meta: {
    type: "suggestion",
    docs: { description: "Suggest canonical Tailwind v4 class names" },
    messages: {
      suggestCanonicalClasses:
        "Class `{{cls}}` can be written as `{{canonical}}`",
    },
    schema: [],
  },
  create(context) {
    function checkClassString(node, value) {
      const classes = value.trim().split(/\s+/).filter(Boolean);
      for (const cls of classes) {
        // Skip obviously dynamic fragments (template expression remnants)
        if (cls.includes("${") || cls.includes("{")) continue;
        try {
          const canonical =
            tailwindUtils.context.canonicalizeCandidates([cls])[0];
          if (canonical !== cls) {
            context.report({
              node,
              messageId: "suggestCanonicalClasses",
              data: { cls, canonical },
            });
          }
        } catch {
          // ignore errors from invalid class names
        }
      }
    }

    function attributeVisitor(node) {
      // Only handle class / className attributes
      const nameNode = node.name;
      const attrName =
        nameNode?.name ?? nameNode?.name?.name ?? nameNode?.value ?? "";
      if (!/^class(Name)?$/.test(attrName)) return;

      if (!node.value) return;

      if (node.value.type === "Literal") {
        // class="..."
        checkClassString(node.value, node.value.value ?? "");
      } else if (node.value.type === "JSXExpressionContainer") {
        // class={...}
        walkClassValue(node.value.expression, checkClassString);
      }
    }

    return {
      JSXAttribute: attributeVisitor,
      TextAttribute(node) {
        // Astro / Angular plain text attributes: class="..."
        if (!/^class(Name)?$/.test(node.name ?? "")) return;
        if (typeof node.value === "string") {
          checkClassString(node, node.value);
        }
      },
    };
  },
};

export default [
  {
    ignores: [".astro/**", "dist/**", "astro.config.mjs"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tailwindPlugin.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        config: path.resolve(__dirname, "src/styles/global.css"),
      },
    },
  },
  {
    files: ["**/*.astro", "**/*.{ts,tsx}", "**/*.{js,jsx}"],
    plugins: {
      "@typescript-eslint": tsESlintPlugin,
      "tailwind-v4": {
        rules: { "canonical-classes": suggestCanonicalClassesRule },
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "tailwind-v4/canonical-classes": "warn",
    },
  },
];
