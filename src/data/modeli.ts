export type PolicyDetail = { label: string; value: string };

export type PolicyModel = {
  id: string;
  badge: string;
  badgeVariant: 'red' | 'orange' | 'teal' | 'blue' | 'green';
  title: string;
  summary: string;
  details: PolicyDetail[];
};

export const comparatorMeta = {
  eyebrow: 'PRIMERJAVA MODELOV',
  title: 'Izberite vaš model',
  scaleLeft: 'najbolj restriktivno',
  scaleRight: 'najbolj dopustno',
};

export const emailSignup = {
  title: 'Ostanite obveščeni',
  body: 'Vpišite vaš e-poštni naslov in obvestili vas bomo o nadaljnjih korakih kampanje.',
  placeholder: 'travo@legalizirajmo.si',
  button: 'Obvestite me',
  disclaimer: 'Vašega naslova ne bomo delili s tretjimi osebami.',
};

export const policyModels: PolicyModel[] = [
  {
    id: 'kriminalizacija',
    badge: 'KRIMINALIZACIJA',
    badgeVariant: 'red',
    title: 'Popolna prepoved',
    summary:
      'Zaradi naključne preiskave in 0,8 g, ki sem jih imela samo pri sebi, sem pristala v priporu in tam čakala na hišno preiskavo. V zapisnik so zapisali, da skrivam dokaze, ker sem jim rekla, da imam CBD. Samo po sreči, ker doma nisem imela več ničesar, in milosti sodnika se je končalo brez zaporne kazni in kartoteke.',
    details: [
      { label: 'POSEDOVANJE', value: 'Zaporne ali denarne kazni, hišne preiskave, uničena življenja.' },
      { label: 'PRIDELAVA', value: 'Kdor rastlino vzgoji doma, stori kaznivo dejanje, ne glede na količino in namen.' },
      { label: 'PRODAJA/DOBAVA', value: 'Večletne zaporne kazni, tudi, če si le podaril nekaj prijatelju.' },
      { label: 'PRIHODKI', value: 'Konoplja se prodaja, denar se obrača ,od tega pa imajo koristi samo mafija in preprodajalci.' },
      { label: 'JAVNO ZDRAVJE', value: 'Izdelki krožijo brez nadzora in nihče ne preverja potencialno smrtonosnih primesi. Uporabniki in pacienti so prepuščeni sami sebi.' },
    ],
  },
  {
    id: 'dekriminalizacija',
    badge: 'DEKRIMINALIZACIJA',
    badgeVariant: 'orange',
    title: 'Delna reforma',
    summary:
      'S punco sva se sprehajala ob Dravi. Dan je bil dolg in prijeten, razpoloženje sproščeno in odločila sva se, da stestirava uparjalnik, ki sem ga dobil za rojstni dan. Takrat do naju pristopi moški, star vsaj okoli štirideset let, v adidas trenirki in rdečih Nike Air Force supergah, oblečen nekoliko preveč mladostno, da ne bi vzbudil suma. Predstavi se kot kriminalist in mi zaseže, kar sem imel pri sebi. Razpoloženje je bilo v trenutku pokvarjeno, zato sva se s punco premaknila drugam. Ko sem se čez ramo še enkrat ozrl nazaj, sem videl, kako si kriminalist mirno zvija mojo travo.',
    details: [
      {
        label: 'POSEDOVANJE',
        value: 'Prekršek; globa podobna prometni brez kazenskega postopka',
      },
      { label: 'PRIDELAVA', value: 'Kaznivo dejanje' },
      { label: 'PRODAJA/DOBAVA', value: 'Ostaja kaznivo dejanje' },
      { label: 'PRIHODKI', value: 'Nič; črni trg ostaja nespremenjen' },
      { label: 'JAVNO ZDRAVJE', value: 'Brez nadzora kakovosti; vsebnost THC neznana' },
    ],
  },
  {
    id: 'ceski-model',
    badge: 'DEKRIMINALIZACIJA+',
    badgeVariant: 'teal',
    title: 'Češki model',
    summary:
      'Sem češki Pirat. Doma sem posadil tri sadike in prvič sem res vedel, kaj uživam in kako je bilo vzgojeno. Občasno grem v lokalni park, kjer vem, da nikogar ne motim in počutim sem se kot božanstvo, ker mi končno nihče nič ne more samo zato ker kadim en špinel in sem malo zadet. Včasih je prav lepo biti iz države z bolj smiselnimi zakoni.',
    details: [
      { label: 'POSEDOVANJE', value: 'Odraslim je dovoljeno imeti do 100 g doma in do 25 g v javnosti.' },
      { label: 'PRIDELAVA', value: 'Odrasli lahko doma vzgojijo do tri rastline za lastno uporabo.' },
      {
        label: 'PRODAJA/DOBAVA',
        value: 'Ostajata prepovedani. Tudi brezplačno deljenje med prijatelji ali sosedi je pravno tvegano.',
      },
      { label: 'PRIHODKI', value: 'Neposrednih davčnih prihodkov ni, država pa prihrani pri pravosodju in zaporniškem sistemu.' },
      { label: 'JAVNO ZDRAVJE', value: 'Uporabniki se izognejo kazenski evidenci, vendar trg z izdelki z visoko vsebnostjo THC še naprej deluje brez nadzora.' },
    ],
  },
  {
    id: 'piratski-model',
    badge: 'POPOLNA LEGALIZACIJA',
    badgeVariant: 'green',
    title: 'Piratski model',
    summary:
      'Oglasil sem se v lokalni trgovini s THC izdelki, kjer sem si lahko izbral točno tisto sorto, ki mi je na tisti deževen dan najbolj ustrezala. Ko sem pod stresom, mi včasih paše, in dobro je vedeti, da lahko vse kupim v preverjeni trgovini po pošteni ceni. Nato si zvijem špinel in se odpravim na kavo.',
    details: [
      { label: 'POSEDOVANJE', value: 'Dovoljeno odraslim, z jasno določenimi količinskimi omejitvami.' },
      {
        label: 'PRIDELAVA',
        value: 'Vzpostavljen je licenčni sistem, ki daje prednost manjšim domačim pridelovalcem pred velikimi tujimi korporacijami.',
      },
      {
        label: 'PRODAJA/DOBAVA',
        value: 'Prodaja poteka v licenciranih trgovinah, oglaševanje pa je omejeno po zgledu tobačnih izdelkov.',
      },
      {
        label: 'PRIHODKI',
        value: 'Prihodki iz trošarin se stekajo v državni proračun in se namenjajo preventivnim programom, mladinskim dejavnostim ter zdravstvu.',
      },
      {
        label: 'JAVNO ZDRAVJE',
        value: 'Vzpostavljena so znanstveno utemeljena merila za vožnjo in delo pod vplivom, zagotovljen je strog nadzor kakovosti izdelkov ter okrepljena zaščita mladoletnih.',
      },
    ],
  },
];
