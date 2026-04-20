export type NavItem = {
  href: string;
  label: string;
};

export type Highlight = {
  value: string;
  label: string;
  detail: string;
  href?: string;
};

export type HomeSection = {
  id: string;
  title: string;
  lead: string;
  body: string[];
  bullets?: string[];
};

export type FeatureCard = {
  title: string;
  body: string;
};

export const siteMetadata = {
  title: "Legalizirajmo.si",
  description:
    "Minimalen pregled predloga modela in predloga zakona o popolni legalizaciji ter regulaciji konoplje.",
  siteUrl: "https://legalizirajmo.si",
};

export const lawPdfUrl = "https://legalizirajmo.si/zakon-o-konoplji-v1.1.pdf";

export const navItems: NavItem[] = [
  { href: "/", label: "Domov" },
  { href: "/model", label: "Model" },
  { href: "/zakon", label: "Zakon" },
];

export const homeHighlights: Highlight[] = [
  {
    value: "15 mio EUR",
    label: "konservativno ocenjenih dodatnih letnih prihodkov",
    detail: "Ocena temelji na obdavčitvi regulirane prodaje izdelkov iz konoplje.",
    href: "/model#priloznosti",
  },
  {
    value: "18.000+",
    label: "novih delovnih mest v prvem letu legalizacije v Koloradu",
    detail: "Primer pokaže, kako hitro se lahko odprejo podjetniške in razvojne priložnosti.",
    href: "/model#priloznosti",
  },
  {
    value: "70 %",
    label: "vseh kršitev na področju prepovedanih drog je bilo povezanih s konopljo",
    detail: "Regulacija bi razbremenila sodišča in policijo ter omejila črni trg.",
    href: "/model#priloznosti",
  },
];

export const homeSections: HomeSection[] = [
  {
    id: "prohibicija",
    title: "Prohibicija ne deluje",
    lead: "Sedanja ureditev povzroča več škode kot koristi in problematiko konoplje reducira na represijo.",
    body: [
      "Sedanja ureditev na področju gojenja in uživanja konoplje ima zaradi svoje represivne narave precej več negativnih kot pozitivnih učinkov. Medicinska raba ostaja omejena, rekreativna raba pa je prepuščena črnemu trgu.",
      "Tak pristop ne varuje uporabnikov, ne podpira javnega zdravja in ne omogoča, da bi gospodarski potencial te rastline ostal na domačih tleh.",
    ],
  },
  {
    id: "moznosti",
    title: "Izkoristimo možnosti, ki jih ponuja konoplja",
    lead: "Glavni cilj predloga je omogočiti svobodno in varno uporabo izdelkov iz konoplje v medicinske, industrijske in rekreativne namene.",
    body: [
      "Reguliran trg lahko prispeva k dvigu gospodarske rasti, dodatnim proračunskim prihodkom, novim delovnim mestom in bolj odgovorni uporabi.",
    ],
    bullets: [
      "dvig gospodarske rasti in nova delovna mesta",
      "več prihodkov v državni proračun",
      "manjši negativni učinki rekreativne rabe",
      "večja turistična privlačnost Slovenije",
      "razbremenitev sodišč in policije",
      "manj prostora za kriminal in neoznačene izdelke",
    ],
  },
  {
    id: "odgovoren-pristop",
    title: "Odgovoren pristop k izzivom družbe",
    lead: "Legalizacija ni poziv k nekritični rabi, ampak predlog za bolj zrelo in učinkovito družbeno ureditev.",
    body: [
      "Del prihodkov iz trošarin bi bil namenjen mladinskim centrom, ozaveščanju, izobraževanju in raziskavam na področju drog. S tem se naslovijo razlogi, zaradi katerih se zloraba sploh razvija.",
      "Namesto da energijo in javna sredstva porabljamo za pregon odraslih uporabnikov, bi jih preusmerili v preventivo, zdravljenje in kakovosten nadzor.",
    ],
  },
];
