import type { ArticleSection } from "./predlog";

export const zakonIntroHtml = `
  <p>Zakon za popolno legalizacijo in regulacijo konoplje smo <strong><a href="https://piratskastranka.si" title="Pirati">Pirati</a></strong> pripravili na osnovi <a href="/model" title="Predlog modela za popolno legalizacijo in regulacijo konoplje">Modela za popolno legalizacijo in regulacijo</a>.</p>
  <p>Zakon predstavlja bolj odgovorno soočanje s problematiko konoplje, ki je zdaj reducirana na nesmiselno represijo.</p>
`;

export const zakonSections: ArticleSection[] = [
  {
    id: "popolna-legalizacija",
    label: "Popolna legalizacija",
    title: "Popolna legalizacija",
    html: `
      <p>Konopljo se v celoti črta iz <a href="http://www.pisrs.si/Pis.web/pregledPredpisa?id=URED6743" target="_blank">Uredbe o razvrstitvi prepovedanih drog</a>. Črta se tudi ostala dosedanja (nepotrebno restriktivna) ureditev industrijske konoplje. S tem rastlino industrijsko konopljo izenačimo z drugimi poljščinami. Dodatno reguliramo le psihoaktivno sestavino.</p>
    `,
  },
  {
    id: "mladoletni",
    label: "Mladoletni",
    title: "Prepoved za mladoletne ostaja!",
    html: `
      <p>Prodaja in uporaba izdelkov z višjo vsebnostjo THC se po vzoru ureditve alkohola prepove za vse mladoletne osebe. Strogo se prepove tudi vsako izpostavljanje oziroma omogočanje uporabe mladoletnim osebam. Zakon tudi odgovornost in kazen za krajo konoplje z višjo vrednostjo THC iz polj polaga na lastnika polja, v kolikor polje (ali druga površina) ni bilo primerno zaščiteno.</p>
    `,
  },
  {
    id: "omejitev-thc",
    label: "THC, ne rastlina",
    title: "Zakon omejuje prodajo in rabo THC, ne rastline!",
    html: `
      <p>Zakon določa štiri koncepte:</p>
      <ul>
        <li><strong>Konoplja</strong> je povsem legalna rastlina, ne glede na vsebnost THC, ki se jo goji skladno z regulacijo, ki zadeva druge poljščine.</li>
        <li><strong>THC</strong> je psihoaktivna substanca, ki jo zakon strogo regulira. Strogo prepoveduje uživanje s strani mladoletnih oseb. Prepovedano je tudi izpostavljanje mladoletnih oseb THC-ju. Primer: če se mladoletna oseba "zadane" s konopljo iz vrta, bo za izpostavljanje odgovarjal lastnik vrta oziroma konoplje.</li>
        <li><strong>Izdelki z nižjo vsebnostjo THC</strong> imajo vsebnost THC do 0,9 %. Tem bi lahko rekli izdelki iz "industrijske konoplje".</li>
        <li><strong>Izdelki z višjo vsebnostjo THC</strong> imajo vsebnost THC nad 0,9 % - njihova pridelava, predelava in prodaja je strogo regulirana. Vsi taki prodani izdelki so tudi obremenjeni s trošarino, iz katere lahko država financira preventivne, kurativne in nadzorne programe.</li>
      </ul>
    `,
  },
  {
    id: "zascita-uporabnikov",
    label: "Zaščita uporabnikov",
    title: "Zaščita uporabnikov",
    html: `
      <p>Z regulacijo konoplje uporabniki pridobijo zaščito inšpekcijskih organov, ki smo jo državljani vajeni pri vseh ostalih izdelkih. Na vsakem izdelku je tudi navedena vsebnost posameznih kanabinoidov, sorta ter potrdilo, da izdelek ni onesnažen s pesticidi, drugimi drogami ali drugimi škodljivimi snovmi.</p>
    `,
  },
  {
    id: "samooskrba",
    label: "Samooskrba",
    title: "Samooskrba",
    html: `
      <p>Vsi polnoletni državljani in državljanke imajo pravico gojiti konopljo z vsebnostjo THC nad 1 % za lastne potrebe v skupni površini 3 m2. Vendar te konoplje ne smejo prodajati ali posredovati mladoletnim osebam.</p>
    `,
  },
  {
    id: "licencni-sistem",
    label: "Licenčni sistem",
    title: "Licenčni sistem komercialne pridelave, predelave in prodaje, ki spodbuja malo gospodarstvo",
    html: `
      <p>Licenčni sistem zagotavlja sledljivost vseh izdelkov z višjo vsebnostjo THC, ki se prodajajo od pridelovalca, predelovalca do prodajalca.</p>
      <p>Pridobitev je enostavna in je na voljo vsem, ki izpolnjujejo minimalne pogoje za izvajanje dejavnosti, kar omogoča vzpostavitev zdravega trga brez politično vsiljenih monopolov.</p>
      <p>Na voljo so med sabo združljive licence: za pridelavo, predelavo in prodajo.</p>
      <p>Sistem dodatno podpira male proizvajalce z nižjo stopnjo trošarine in bolj enostavno regulacijo, ki pod eno licenco združuje pridelavo, mehansko predelavo (sušenje, mletje, stiskanje ...) in butično prodajo. Taka ureditev predstavlja veliko priložnost za male kmete.</p>
    `,
  },
  {
    id: "kajenje-v-javnosti",
    label: "Kajenje v javnosti",
    title: "Delna prepoved kajenja v javnosti",
    html: `
      <p>Zaradi mnogih skrbi o kajenju v javnosti zakon tovrstno početje prepoveduje. Vendar zakon lokalnim skupnostim omogoča, da same določijo, na katerih javnih prostorih dovolijo kajenje konoplje.</p>
    `,
  },
  {
    id: "financiranje",
    label: "Financiranje ukrepov",
    title: "Financiranje ukrepov za preprečevanje škodljivih posledic rabe konoplje",
    html: `
      <p>Velik del sredstev, pobranih iz naslova prodanih izdelkov z višjo vsebnostjo THC, se nameni:</p>
      <ul>
        <li>informiranju, izobraževanju in osveščanju javnosti in posameznih skupin o škodljivih posledicah zlorabe konoplje,</li>
        <li>pripravi in izvajanju programov za spodbujanje zdravega življenjskega sloga,</li>
        <li>podpori institucijam, združenjem, nevladnim organizacijam, lokalnim skupnostim in posameznikom pri izvajanju preventivnih programov.</li>
      </ul>
    `,
  },
  {
    id: "spremljanje-zakona",
    label: "Spremljanje posledic",
    title: "Spremljanje negativnih in pozitivnih posledic zakona",
    html: `
      <p>Iz zbranih sredstev se financira tudi shema za nadzor negativnih in pozitivnih posledic rabe konoplje in tega zakona.</p>
    `,
  },
  {
    id: "posebne-trgovine",
    label: "Posebne trgovine in lekarne",
    title: "Prodaja le v posebnih trgovinah in lekarnah",
    html: `
      <p>Izdelke z višjo vsebnostjo THC bo možno kupiti le v lekarnah in posebnih trgovinah, katerih izključna dejavnost je prodaja izdelkov iz konoplje.</p>
    `,
  },
];
