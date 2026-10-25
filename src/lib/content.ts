export const profile = {
  name: "Lucas A. Baldi",
  handleIg: "@_lubaldi",
  igUrl: "https://instagram.com/_lubaldi",
  email: "lucas.araujobaldi01@gmail.com",
  emailWork: "lucas@beplus.company",
  hometown: "Osasco",
  phone: "(11) 9.4516-1450",
  whatsapp: "https://wa.me/5511945161450",
  linkedin: "https://www.linkedin.com/in/lucas-ara%C3%BAjo-baldi-33874b8a/",
  spotify: "https://open.spotify.com/user/4ysdcqkgnw5nekilhljtv4a36",
  location: "Birigui, SP · Brasil",
  role: "Analista de Marketing Sênior",
  tagline: "Marketing, Design e Estratégia com IA",
  headline: "10 anos conectando marcas a resultados.",
  bio:
    "Analista de Marketing generalista com mais de 10 anos de experiência, formado em Design e Marketing Digital e pós-graduado em Comunicação e Marketing. Atuo em produção de conteúdo, gestão de social media, criação de artes, edição de vídeo, e-mail marketing e estratégias de Growth & Performance para marcas como Red Bull, Coca-Cola, Boticário, Bradesco, Seara e Ipiranga. Uso IA (Claude, GPT, Gemini, Seedance e CapCut) para otimizar processos e potencializar entregas — de roteiro e direção de arte à produção de vídeo e ativação digital.",
  deliverables: [
    "Planejamento mensal de conteúdo para redes sociais",
    "Campanhas de lançamento e ativações de marca",
    "Criação, direção de arte e edição de peças (posts e vídeos)",
    "Gestão de mídia paga (performance)",
    "Relatórios mensais e análise de métricas com foco em insights e melhoria contínua",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
  aiTools?: string[];
};

export const experiences: Experience[] = [
  {
    company: "BePlus Academy · FanClub Brasil",
    role: "Direção Criativa & Produção Digital com IA",
    period: "Mai. 2026 — Atual",
    current: true,
    summary:
      "Produção de conteúdo, artes e vídeos para marcas como Red Bull, Coca-Cola, Boticário (Vult), Bradesco, Seara, Corteva e Ipiranga, com uso intensivo de IA (Claude, GPT, Gemini e Seedance) e edição em CapCut para otimizar processos e escalar entregas. Atuo em roteiro, storytelling, direção de arte e criação de assets, além de UI design e definição de fluxo de web apps para ativações.",
    highlights: [
      "Grandes marcas: Red Bull, Coca-Cola, Boticário (Vult), Bradesco, Seara, Corteva, Ipiranga",
      "Roteiro, storytelling, direção de arte e criação de assets com IA",
      "UI design e definição de fluxo de web apps para ativações",
      "Gestão de fornecedores, cronogramas e acompanhamento presencial de eventos",
      "Projetos: CCXP26, Red Bull Icons e ativações no varejo",
    ],
    tags: ["Produção", "Direção Criativa", "IA", "UI Design", "Ativações"],
    aiTools: ["Claude", "GPT", "Gemini", "Seedance", "CapCut"],
  },
  {
    company: "Hospital Evangélico de Sorocaba",
    role: "Analista de Marketing Sênior",
    period: "Abr. 2025 — Abr. 2026",
    summary:
      "Desenvolvo e executo o planejamento estratégico de marketing, alinhado aos objetivos da empresa. Atuo em conjunto com agência parceira, acompanhando demandas, prazos e qualidade. Gerencio canais digitais (redes sociais, site, e-mail marketing e mídia paga), planejo campanhas de endomarketing, organizo eventos institucionais e coordeno cronogramas garantindo entregas dentro do prazo e orçamento.",
    highlights: [
      "Inauguração do Centro Médico Integrado",
      "Festa de 90 anos do HES e 30 anos do Instituto de Oncologia de Sorocaba",
      "Lançamento do Eva Plano de Saúde",
      "Reestruturação do site institucional e vídeo institucional",
      'Criação do livro "Entre Vistas" valorizando histórias dos colaboradores',
      "20+ palestras e eventos ao longo de 2025",
    ],
    tags: ["Saúde", "Institucional", "Imprensa", "Direção de Arte"],
  },
  {
    company: "Hero Base — Produtora de vídeos",
    role: "Coord. de Marketing",
    period: "Jan. 2023 — Dez. 2024",
    summary:
      "Planejamento e execução de campanhas de marketing digital, gestão de equipes para otimizar performance e engajamento. Criação de conteúdos alinhados ao branding, administração de mídias sociais e campanhas de tráfego pago. Desenvolvimento de estratégias de awareness para fortalecer a marca na comunidade gamer, promovendo ativações e parcerias com influenciadores. Análise de métricas e KPIs para otimizar campanhas e garantir crescimento sustentável. Ponte com o time de PR e agenciamento dos influenciadores em publis com marcas parceiras.",
    highlights: [
      "Ação BYD × Fortnite: comunicação digital e lançamento presencial integrado",
      "Red Bull Ladeira Abaixo — Edição Geek: entregas ao cliente, execução presencial, alinhamento com influenciadores, testes do mapa temático",
      "Campanha de Valorant campeã em 2024",
      "Lançamento de atleta eleito melhor jogador de Fortnite 2024 (Prêmio eSports Brasil)",
      "Arena gamer itinerante em shoppings de SC (6 meses)",
    ],
    tags: ["eSports", "Ativações", "Direção de Arte", "Fortnite", "Valorant"],
  },
  {
    company: "Players Bank · Itaú",
    role: "Coord. de Marketing",
    period: "Abr. 2022 — Jun. 2023",
    summary:
      "Elaborava e implementava campanhas de marketing digital focadas em awareness, conversão e vendas, incluindo estratégias para promoção de cartões e abertura de contas. Liderava a equipe na criação de conteúdo para redes sociais, garantindo alinhamento com o branding e engajamento do público. Supervisionava lançamentos de novos cartões promocionais, coordenando ativações estratégicas e campanhas pagas.",
    highlights: [
      "Cartão Player's Bank Mastercard LoL Esports (parceria LOUD + Gaules)",
      "Estratégia orgânica + paga integrada ao posicionamento da marca",
      "Coordenação de copy, e-mail marketing, wireframes e landing pages",
      "Três vídeos promocionais dirigidos à comunidade LoL",
      "Acompanhamento de projetos externos em feiras digitais e feedbacks recorrentes para equipes",
    ],
    tags: ["Financeiro", "Gaming", "Copywriting", "Performance"],
  },
  {
    company: "Blockchain Academy",
    role: "Designer Pleno",
    period: "2020 — 2022",
    summary:
      "Direção visual, identidade e peças gráficas para uma das primeiras escolas de blockchain do Brasil. Frente de comunicação e design para lançamentos de cursos, eventos e campanhas de aquisição.",
    highlights: [
      "Direção de arte de campanhas de lançamento",
      "Identidade visual e material didático",
      "Suporte a mídia paga com criativos otimizados",
    ],
    tags: ["Web3", "Design", "EdTech"],
  },
];

export type Education = {
  degree: string;
  school: string;
  status: string;
};

export const education: Education[] = [
  {
    degree: "Graduação em Fonoaudiologia",
    school: "Unicesumar · Birigui",
    status: "Cursando",
  },
  {
    degree: "Pós-graduação em Comunicação e Marketing",
    school: "Instituto Líbano",
    status: "Concluído · Dez. 2025",
  },
  {
    degree: "Bacharel em Design Digital",
    school: "Faculdades Integradas Rio Branco",
    status: "Concluído · Dez. 2018",
  },
];

export type ArticleImage = { src: string; w: number; h: number; alt: string; caption?: string };

export type ArticleChapter = {
  kicker: string;
  title: string;
  body: string[];
  bullets?: string[];
  images?: ArticleImage[];
  // vídeo hospedado no site, tocado no próprio player
  video?: { src: string; poster: string; caption?: string; sourceUrl?: string };
  // árvore de canais (plano de mídia) renderizada em texto
  plan?: { channel: string; items: string[] }[];
};

export type Article = {
  lead: string;
  context: string[];
  stats: { value: string; label: string; source?: string }[];
  hero: ArticleImage;
  chapters: ArticleChapter[];
};

export type Project = {
  slug: string;
  year: string;
  title: string;
  client: string;
  category: string;
  cover: string;
  // imagem do topo da subpágina quando a capa (4:5) não serve em 16:9
  heroImage?: string;
  description: string;
  links?: { label: string; url: string }[];
  video?: string;
  article?: Article;
  // fotos soltas abaixo da imagem principal, para projetos sem matéria
  gallery?: ArticleImage[];
  // projetos de uma vitrine (ex.: Hero Base) saem da galeria principal e
  // aparecem só dentro da página da vitrine
  group?: string;
};

export type Showcase = {
  slug: string;
  title: string;
  role: string;
  period: string;
  category: string;
  cover: string;
  intro: string[];
  // ordem dos cases na vitrine
  featured: string[];
  // quantos dos primeiros cases entram como destaque; o resto vai pra "Mais ações"
  highlights?: number;
  // perfis das marcas cuidadas no período
  links?: { label: string; url: string }[];
  // vitrine ainda sem cases: entra na galeria e a página mostra "em breve"
  soon?: boolean;
};

export const showcases: Showcase[] = [
  {
    slug: "beplus",
    title: "BePlus",
    role: "Direção Criativa & IA",
    period: "2026",
    category: "Vitrine · IA",
    cover: "/portfolio/beplus/capa.jpg",
    intro: [
      "Direção criativa e produção digital com IA na BePlus, cocriando com a agência: roteiro, direção de arte e criação de assets para marcas grandes.",
    ],
    featured: [],
    soon: true,
  },
  {
    slug: "hero-base",
    title: "Hero Base",
    role: "Coord. de Marketing",
    period: "2023—24",
    category: "Vitrine · eSports",
    cover: "/portfolio/hero-base/emblema.jpg",
    intro: [
      "Dois anos coordenando o marketing da Hero Base, organização e produtora de conteúdo gamer. Liderava a linha editorial das publicações e a criação de conteúdo com os influenciadores, cocriando junto com o meu time.",
      "Também fazia a conexão com o time de PR para levar a marca a portais e campanhas externas, e era a ponte entre os influenciadores e as marcas que queriam fazer publi com eles, no papel de agenciamento.",
      "Aqui ficam as ações de destaque desse período. Clique em uma para ler o case.",
    ],
    featured: ["hero-experience", "estacio-enem-lendario", "byd-fortnite", "atletas-hero-base"],
  },
  {
    slug: "hospital-evangelico",
    title: "Hospital Evangélico",
    role: "Analista de Marketing Sênior",
    period: "2025—26",
    category: "Vitrine · Saúde",
    cover: "/portfolio/hes/vitrine-capa.jpg",
    intro: [
      "Um ano no marketing do Hospital Evangélico de Sorocaba, uma casa com mais de 90 anos de história na cidade. Também passei pelo endomarketing, mas meu foco era a comunicação externa: como o hospital se posicionava em Sorocaba e na região.",
      "Fazia a ponte com a imprensa, das entrevistas em rádio e TV às pautas com o corpo médico e ao relacionamento com os jornais da região. Nas redes sociais, criava conteúdo e trabalhava em parceria com a agência que assessorava o hospital na criação das peças.",
      "Aqui ficam as ações de destaque desse período. Clique em uma para ler o case.",
    ],
    featured: ["hes-centro-medico", "hes-muro", "entre-vistas", "hes-90-anos"],
    highlights: 4,
    links: [
      { label: "Instagram · Hospital Evangélico", url: "https://www.instagram.com/he_sorocaba/" },
      { label: "Instagram · Instituto de Oncologia", url: "https://www.instagram.com/institutooncologiaios/" },
      { label: "Jovem Pan · entrevista com o diretor-presidente", url: "https://www.instagram.com/reels/DPPac5hjbxN/" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "players-bank",
    year: "2022—23",
    title: "Player's Bank × Itaú",
    client: "Itaú Unibanco",
    category: "Case · Cartões",
    cover: "/portfolio/players-bank/lol-capa.jpg",
    description:
      "Coordenação de marketing do banco digital gamer do Itaú: os cartões League of Legends do Worlds 2022 e o cartão personalizado da LOUD com Gaules, do plano de mídia à landing page.",
    links: [
      {
        label: "Itaú · Relações com Investidores",
        url: "https://www.itau.com.br/relacoes-com-investidores/noticias/players-bank-do-itau-lanca-conta-gratuita-para-jovens-com-menos-de-18-anos/",
      },
      {
        label: "Tecno Informe",
        url: "https://tecnoinforme.com.br/itau-apresenta-o-cartao-players-bank-mastercard-lol-esports",
      },
      {
        label: "Nerdweek",
        url: "https://nerdweek.com.br/players-bank-lanca-cartao-de-credito-em-parceria-com-a-loud/",
      },
      {
        label: "Universo do Seguro",
        url: "https://universodoseguro.com.br/players-bank-lanca-cartao-para-integrantes-da-tribo/",
      },
      {
        label: "Behance · Cartões League of Legends",
        url: "https://www.behance.net/gallery/187388773/Cartoes-League-of-Legends-Players-Bank-Itau",
      },
      {
        label: "Behance · LOUD & Gaules",
        url: "https://www.behance.net/gallery/220073899/Players-Bank-Itau-Loud-Gaules",
      },
    ],
    article: {
      lead: "O banco que joga junto. Como foi coordenar o marketing do Player's Bank, a conta digital do Itaú feita para gamers, em duas das campanhas de cartão mais barulhentas do cenário: League of Legends e LOUD.",
      context: [
        "O Player's Bank nasceu no início de 2022 como a conta digital gratuita do Itaú Unibanco para a comunidade gamer, construída junto com nomes do cenário de jogos e e-sports. Rendimento de 100% do CDI, cashback no crédito, atendimento pelo Discord e cartões que conversam com quem joga.",
        "Entrei como coordenador de marketing para transformar esses cartões em campanha: planejar, liderar o time criativo e levar cada lançamento das redes sociais ao e-mail, à landing page e ao Discord.",
      ],
      stats: [
        { value: "+1 mi", label: "de cadastros no Player's Bank até junho de 2022", source: "Itaú RI" },
        { value: "2", label: "vencedores levados ao Mundial de League of Legends, com tudo pago" },
        { value: "4", label: "frentes no plano de mídia: redes, e-mail, Discord e landing page" },
      ],
      hero: {
        src: "/portfolio/players-bank/lol-abertura.jpg", w: 1920, h: 760,
        alt: "Novos cartões League of Legends 2022 do Player's Bank com Mastercard",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · Worlds 2022",
          title: "Cartões League of Legends",
          body: [
            "Liderei o planejamento e a execução da campanha dos cartões personalizados de League of Legends, o Player's Bank Mastercard LoL Esports, junto com uma equipe de profissionais. O objetivo era impulsionar as vendas e dar visibilidade para os cartões no momento mais quente do ano para a comunidade: o Mundial.",
            "Coordenei o processo criativo da produção à publicação nas redes oficiais do Player's Bank, destacando os diferenciais e a exclusividade de cada cartão. A campanha fechou com uma ação promocional que sorteou dois vencedores para assistir ao Mundial de League of Legends com todas as despesas pagas, o que gerou um aumento significativo no engajamento e na percepção positiva da marca.",
          ],
          bullets: [
            "Régua de e-mail marketing do lançamento ao sorteio",
            "Social media com conteúdo de pré-hype, curiosidades e última chamada",
            "Landing page com seleção de campeão e listagem dos cartões",
            "Três vídeos promocionais para a comunidade LoL",
          ],
          images: [
            { src: "/portfolio/players-bank/lol-campanha.jpg", w: 1000, h: 970, alt: "Influenciadora apresentando os cartões League of Legends", caption: "Key visual da campanha com os cartões de campeões." },
            { src: "/portfolio/players-bank/lol-email.jpg", w: 625, h: 785, alt: "Peças de e-mail marketing da campanha Worlds 2022", caption: "E-mail marketing." },
            { src: "/portfolio/players-bank/lol-social.jpg", w: 690, h: 785, alt: "Posts de social media da campanha Worlds 2022", caption: "Social media." },
            { src: "/portfolio/players-bank/lol-landing.jpg", w: 1740, h: 780, alt: "Landing pages dos cartões League of Legends", caption: "Landing pages: escolha seu campeão e peça o cartão." },
          ],
        },
        {
          kicker: "Capítulo 02 · LOUD & Gaules",
          title: "Um cartão feito pela tribo",
          body: [
            "Com a LOUD e o Gaules, o cartão virou skin: a campanha promocional do cartão personalizado da LOUD, com direção de arte e criação de mídia para os canais do Player's Bank. Estratégia orgânica e paga integrada ao posicionamento da marca, com copy, e-mail marketing, wireframes e landing pages coordenados pelo time.",
            "Cada frente puxava o público para dentro do app: usar o código de criador LOUD rendia voucher de 10% na loja oficial, pedir o cartão dava a camisa Legacy da LOUD, e a chegada do Gaules virou o mote “A tribo invadiu o Player's Bank”.",
          ],
          images: [
            { src: "/portfolio/players-bank/loud-abertura.jpg", w: 1740, h: 790, alt: "Cartões Player's Bank da LOUD e Gaules", caption: "Direção de arte e criação de mídia. Campanha promocional de skin personalizada." },
            { src: "/portfolio/players-bank/loud-emails.jpg", w: 1781, h: 830, alt: "E-mails da campanha LOUD Player's Bank", caption: "Régua de e-mail: do BGC ao cartão da tribo." },
            { src: "/portfolio/players-bank/loud-cartao.jpg", w: 1781, h: 1092, alt: "Peças do cartão personalizado da LOUD", caption: "Cartão personalizado com código de criador LOUD e 10% OFF na loja." },
            { src: "/portfolio/players-bank/loud-camisa.jpg", w: 1781, h: 487, alt: "Peças da camisa Legacy da LOUD", caption: "Peça agora e ganhe a camisa Legacy da LOUD." },
            { src: "/portfolio/players-bank/loud-gaules.jpg", w: 1781, h: 1000, alt: "Peças com Gaules para o Player's Bank", caption: "A tribo invadiu o Player's Bank. #IssoMudaOGame" },
          ],
        },
        {
          kicker: "Capítulo 03 · Planejamento",
          title: "Cronograma e linha editorial",
          body: [
            "Por trás das peças, desenvolvi o cronograma detalhado e a linha editorial da campanha de cartões, para que cada fase tivesse começo, meio e fim em todos os canais. Inclusive a Conta Start, a conta do Player's Bank para jovens de 14 a 17 anos, entrou na régua de e-mails de sustentação.",
          ],
          plan: [
            { channel: "Redes sociais", items: ["Instagram: pré-hype, lançamento, sustentação, últimos dias e finalização", "Twitter: réplica das publicações e interação com influenciadores"] },
            { channel: "E-mail marketing", items: ["Lançamento da campanha e direcionamento para o Worlds", "5 e-mails de sustentação: convide um amigo, dobre suas chances, cartão personalizado, conta para menor de idade", "Pontuação, número da sorte e agradecimentos"] },
            { channel: "Discord", items: ["Ações de lançamento e resultados finais", "Sustentação: premiações, campeonatos com influenciadores, eventos com times e novidades do cartão"] },
            { channel: "Landing page", items: ["Homepage direcionada à venda e listagem dos cartões", "Explicação da campanha do Worlds, banners de benefícios e CTAs em todas as seções"] },
          ],
          images: [
            { src: "/portfolio/players-bank/plano-de-midia.jpg", w: 960, h: 1105, alt: "Mapa do plano de mídia da campanha", caption: "Plano de mídia da campanha." },
          ],
        },
      ],
    },
  },
  {
    slug: "byd-fortnite",
    year: "2024",
    title: "BYD × Fortnite",
    client: "BYD",
    category: "Ativação gamer",
    group: "hero-base",
    cover: "/portfolio/byd/cartaz-4x5.jpg",
    heroImage: "/portfolio/byd/arena-banner.jpg",
    description:
      "Coordenação de marketing da estreia da BYD no Fortnite: a Blade Ball BYD City, mapa exclusivo da Level8, e a Hero Cup, torneio da Hero Base com dois SUVs elétricos de prêmio.",
    links: [
      {
        label: "GamingEra",
        url: "https://gamingera.biz/byd-fortnite-hero-base-level8/",
      },
      {
        label: "Adrenaline",
        url: "https://www.adrenaline.com.br/games/byd-inaugura-blade-ball-byd-city-no-fortnite/",
      },
      {
        label: "Pichau Arena",
        url: "https://www.pichauarena.com.br/noticias/fortnite-byd-campeonato/",
      },
      {
        label: "R7 Entretenimento",
        url: "https://entretenimento.r7.com/nitro/games/game-hall/inovacao-sustentavel-byd-revoluciona-o-fortnite-com-blade-ball-e-suvs-eletricos-26082024/",
      },
    ],
    article: {
      lead: "Uma montadora de carros elétricos entrando no Fortnite com mapa próprio e o maior prêmio de torneio de games do Brasil. Como foi coordenar o marketing da BYD City e da Hero Cup.",
      context: [
        "Em agosto de 2024 a BYD estreou no cenário gamer brasileiro com duas frentes: a Blade Ball BYD City, espaço exclusivo da marca dentro do Fortnite criado pela Level8, e a Hero Cup, campeonato organizado pela Hero Base dentro desse mapa.",
        "Na Hero Base, fui coordenador de marketing da ação, trabalhando junto com os times da Level8 e da BYD do mapa até a final.",
      ],
      stats: [
        { value: "2", label: "SUVs 100% elétricos BYD Yuan Pro para a dupla campeã" },
        { value: "64", label: "jogadores na disputa, entre comunidade e influenciadores" },
        { value: "15 dias", label: "do lançamento do mapa à grande final" },
      ],
      hero: {
        src: "/portfolio/byd/arena-banner.jpg", w: 2079, h: 756,
        alt: "Key visual da Blade Ball BYD City no Fortnite",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · O mapa",
          title: "Blade Ball BYD City",
          body: [
            "A cidade da BYD no Fortnite roda a energia solar: placas no corpo dos jogadores carregam a Bateria Blade, a tecnologia que a marca usa nos carros elétricos. O mapa da Level8 entrou no ar em 22 de agosto de 2024 e levou o discurso de energia limpa da BYD para dentro do jogo.",
          ],
        },
        {
          kicker: "Capítulo 02 · O torneio",
          title: "Hero Cup",
          body: [
            "A Hero Cup teve classificatórias abertas para a comunidade em 29 e 30 de agosto e final em 5 de setembro, mesmo dia do lançamento nacional do BYD Yuan Pro. A transmissão oficial foi nos canais da Hero Base, com nomes do cenário como Tayhuhu, Toniket, Paula Nobre, Tixinha e Frtt.",
          ],
        },
        {
          kicker: "Capítulo 03 · Meu papel",
          title: "Coordenação de marketing",
          body: [
            "Coordenei a comunicação da ação de ponta a ponta, junto com os times da Level8 e da BYD, do mapa no ar até a final transmitida ao vivo.",
          ],
          bullets: [
            "Estruturação das redes sociais da ação",
            "Linha editorial e conteúdo com os influenciadores da Hero Base",
            "Briefings para os times de criação",
            "Direção de arte das peças e dos visuais das lives",
            "Lançamento presencial integrado ao Fortnite",
            "Conexão com o PR para levar a ação a portais de games",
          ],
        },
      ],
    },
  },
  {
    slug: "hero-experience",
    year: "2023",
    title: "Hero Experience",
    client: "Hero Base",
    category: "Evento físico",
    group: "hero-base",
    cover: "/portfolio/hero-base/he-cover-temp.jpg",
    heroImage: "/portfolio/hero-base/he-kv.jpg",
    description:
      "Arena gamer itinerante da Hero Base em shoppings de Santa Catarina, com campeonatos, estúdio para criadores, cosplay e encontro com youtubers. Direção e construção do evento físico, da validação do layout à desmontagem.",
    links: [
      {
        label: "NSC Total",
        url: "https://www.nsctotal.com.br/entretenimento/evento-gratuito-reune-arena-de-jogos-campeonatos-e-encontro-com-youtubers-em-joinville",
      },
      {
        label: "Garten Shopping",
        url: "https://www.gartenshopping.com.br/detalhes-fique-por-dentro/flakes-power-e-atracao-na-hero-experience-do-garten-shopping/",
      },
      {
        label: "Univille",
        url: "https://www.univille.edu.br/noticias/2022.8/univille-e-hero-base-firmam-parceria/886918",
      },
      {
        label: "Behance · Hero Experience",
        url: "https://www.behance.net/gallery/187597179/Hero-Experience-Proj-Hero-Base",
      },
    ],
    article: {
      lead: "Toda a experiência de ser um verdadeiro herói, no meio do shopping. Como foi tirar do papel a Hero Experience, a arena gamer da Hero Base que rodou por shoppings de Santa Catarina.",
      context: [
        "A Hero Experience estreou em abril de 2023 no Garten Shopping, em Joinville, e seguiu em itinerância por outros shoppings do estado. Era um evento para o público jovem, de crianças a adolescentes: quem passava pelo shopping entrava para jogar, assistir campeonatos, ver cosplayers e encontrar os criadores da Hero Base.",
        "Aqui o trabalho foi de direção de evento. Participei da construção da arena de ponta a ponta, da validação do layout com o arquiteto à montagem e à desmontagem, e coordenei toda a linha editorial e a divulgação nas redes.",
      ],
      stats: [
        { value: "4", label: "áreas na arena: Hero Arena, Hero Stage, Hero Store e Hero Studio" },
        { value: "5", label: "jogos nos campeonatos: Fortnite, LoL, CS:GO, Valorant e Free Fire" },
        { value: "Grátis", label: "entrada no Hero Stage e na Hero Store para quem passava pelo shopping" },
      ],
      hero: {
        src: "/portfolio/hero-base/he-kv.jpg", w: 1920, h: 1010,
        alt: "Key visual da Hero Experience com os criadores da Hero Base",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · A arena",
          title: "Um parque gamer no shopping",
          body: [
            "A arena tinha palco para campeonatos e desafios, estúdio para quem queria começar a fazer conteúdo, loja de produtos e concurso de cosplay. Na estreia, Flakes Power, fundador da Hero Base, subiu ao palco para bate-papo, showmatch de Fortnite com fãs e meet & greet, ao lado de nomes como Manteiga, Derponce e Hero Nicks.",
          ],
          bullets: [
            "Hero Arena · campeonatos",
            "Hero Stage · desafios e encontros no palco",
            "Hero Studio · espaço para novos criadores",
            "Hero Store · produtos da Hero Base",
          ],
        },
        {
          kicker: "Capítulo 02 · Meu papel",
          title: "Do layout à desmontagem",
          body: [
            "Foi um projeto de evento físico. Validei o layout da arena com o arquiteto, acompanhei a montagem da estrutura e participei de todas as etapas da construção, até a desmontagem. Em paralelo, coordenei a linha editorial e a produção da divulgação nas redes sociais: passaporte, desafios de fim de semana, agenda de criadores e chamadas de última semana.",
          ],
          bullets: [
            "Validação do layout com o arquiteto",
            "Montagem e desmontagem da estrutura",
            "Coordenação da operação do evento",
            "Linha editorial e divulgação nas redes",
          ],
          images: [
            { src: "/portfolio/hero-base/he-posts.jpg", w: 1920, h: 2320, alt: "Peças de divulgação e fotos da Hero Experience", caption: "Divulgação nas redes e a arena montada." },
          ],
        },
      ],
    },
  },
  {
    slug: "estacio-enem-lendario",
    year: "2023",
    title: "Enem Lendário × Estácio",
    client: "Estácio",
    category: "Mapa Fortnite",
    group: "hero-base",
    cover: "/portfolio/estacio/cartaz-4x5.jpg",
    heroImage: "/portfolio/estacio/banner.jpg",
    description:
      "Coordenação de marketing do Enem Lendário, hub gratuito de preparação para o Enem 2023 da Estácio com mapa próprio no Fortnite e cinco gênios da humanidade como mentores.",
    links: [
      {
        label: "Artplan",
        url: "https://artplan.com.br/trabalho/estacio/enem-lendario-estacio/",
      },
      {
        label: "Brasil Escola",
        url: "https://vestibular.brasilescola.uol.com.br/enem/conheca-enem-lendario-estacio.htm",
      },
      {
        label: "Marcas pelo Mundo",
        url: "https://marcaspelomundo.com.br/anunciantes/estacio-traz-os-maiores-genios-da-humanidade-em-campanha-para-o-enem-2023/",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/p/Cx_C70nuidh/",
      },
    ],
    article: {
      lead: "E se desse para estudar para o Enem com os maiores gênios da humanidade? A Estácio levou essa pergunta para dentro do Fortnite. Como foi coordenar o marketing do mapa e da linha editorial do Enem Lendário.",
      context: [
        "Em outubro de 2023 a Estácio lançou o Enem Lendário, um hub gratuito e 100% online de preparação para o Enem, criado pela Artplan. O centro da campanha era um mapa no Fortnite, desenvolvido pela Level8 em UEFN, onde o estudante joga ao lado de personagens históricos que ensinam cada área da prova.",
        "Na Hero Base, coordenei o marketing do projeto: a divulgação do mapa e toda a linha editorial da campanha.",
      ],
      stats: [
        { value: "5", label: "gênios da humanidade como mentores, um para cada área da prova" },
        { value: "3,9 mi", label: "de inscritos no Enem 2023, o público da campanha", source: "Brasil Escola" },
        { value: "3", label: "plataformas: mapa no Fortnite, simulado no WhatsApp e aulões no TikTok" },
      ],
      hero: {
        src: "/portfolio/estacio/banner.jpg", w: 2081, h: 756,
        alt: "Key visual do Enem Lendário Estácio com os cinco gênios no Fortnite",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · O mapa",
          title: "Aula com os lendários",
          body: [
            "No mapa, cada gênio virou mentor de uma área do Enem: ler as estrelas com Galileu Galilei, ouvir Isaac Newton explicar as próprias leis, atravessar a história com Joana D'Arc, entrar no ateliê de Frida Kahlo e encarar as ambiguidades de Machado de Assis.",
          ],
          bullets: [
            "Galileu Galilei · Matemática",
            "Isaac Newton · Ciências da Natureza",
            "Joana D'Arc · Ciências Humanas",
            "Frida Kahlo · Linguagens e Códigos",
            "Machado de Assis · Redação",
          ],
        },
        {
          kicker: "Capítulo 02 · Multiplataforma",
          title: "Do jogo ao simulado",
          body: [
            "O Fortnite puxava o público, e a preparação seguia em outras frentes: um simuladão no WhatsApp com milhares de questões de edições anteriores e a série ENEM+ no TikTok, com aulões da professora Débora Aladim e conteúdo Disney+, além de lives e prêmios lendários.",
          ],
        },
        {
          kicker: "Capítulo 03 · Meu papel",
          title: "Mapa e linha editorial",
          body: [
            "Coordenei o marketing do projeto pela Hero Base, cuidando da divulgação do mapa e da linha editorial que conectava o jogo às outras frentes da campanha.",
          ],
          bullets: [
            "Linha editorial das publicações da campanha",
            "Criação de conteúdo com os influenciadores, junto com o meu time",
            "Divulgação do mapa nos canais da Hero Base",
          ],
        },
      ],
    },
  },
  {
    slug: "hes-90-anos",
    year: "2025",
    title: "90 Anos HES · 30 Anos IOS",
    client: "Hospital Evangélico de Sorocaba",
    category: "Evento institucional",
    group: "hospital-evangelico",
    cover: "/portfolio/hes/90-capa.jpg",
    heroImage: "/portfolio/hes/90-salao.jpg",
    gallery: [
      { src: "/portfolio/hes/90-homenagem.jpg", w: 1920, h: 1277, alt: "Médicos homenageados no palco do Jantar dos Médicos", caption: "Homenagem aos médicos que marcaram a história do hospital." },
      { src: "/portfolio/hes/90-bolo.jpg", w: 1920, h: 1279, alt: "Equipe do hospital e banda reunidas em volta do bolo de 90 e 30 anos", caption: "O bolo dos 90 + 30 anos." },
      { src: "/portfolio/hes/90-painel.jpg", w: 1920, h: 1277, alt: "Painel verde com as marcas do Hospital Evangélico e do IOS", caption: "Painel com as marcas do Hospital Evangélico e do IOS." },
      { src: "/portfolio/hes/90-plateia.jpg", w: 1920, h: 1277, alt: "Convidados nas mesas do salão", caption: "Convidados no salão." },
    ],
    description:
      "Celebração dos 90 anos do Hospital Evangélico e 30 anos do Instituto de Oncologia de Sorocaba. Evento para 250 convidados com médicos antigos da casa — direção criativa, identidade visual, cenografia, palco e coordenação da operação.",
    links: [
      {
        label: "LinkedIn · Jantar dos Médicos",
        url: "https://www.linkedin.com/posts/uma-tradi%C3%A7%C3%A3o-que-nasce-para-celebrar-nossa-ugcPost-7367262315638931457-keIX/",
      },
    ],
  },
  {
    slug: "atletas-hero-base",
    year: "2024",
    title: "Atletas & Creators",
    client: "Hero Base",
    category: "Gestão de talento",
    group: "hero-base",
    cover: "/portfolio/916gon.png",
    description:
      "Comunicação dos talentos da Hero Base em 2024: o melhor atleta de Fortnite do ano, a chegada do Suetam, o primeiro creator de Valorant e o time campeão da VCB.",
    links: [
      {
        label: "GE Globo · 916Gon melhor atleta",
        url: "https://ge.globo.com/video/916gon-e-eleito-melhor-atleta-de-fortnite-no-premio-esports-brasil-2024-13181050.ghtml",
      },
      {
        label: "YouTube · Finalmente Suetam na Hero Base",
        url: "https://www.youtube.com/watch?v=W7S4NuI8HjA",
      },
      {
        label: "VZone · Sabininhu",
        url: "https://vzone.gg/noticia/hero-base-anuncia-chegada-de-sabininhu-como-criador-de-conteudo/",
      },
      {
        label: "Portal da Propaganda",
        url: "https://www.portaldapropaganda.com.br/noticias/27433/hero-base-anuncia-a-chegada-de-novo-streamer/",
      },
      {
        label: "Revista Empreende",
        url: "https://revistaempreende.com.br/hero-base-anuncia-a-chegada-de-sabininhu-como-novo-criador-de-conteudo-da-organizacao/",
      },
      {
        label: "GE Globo · Hero Base campeã da VCB",
        url: "https://ge.globo.com/esports/blogs/por-dentro-dos-esports/post/2024/05/03/vcb-2024-hero-base-e-campea-brasileira-da-etapa-1.ghtml",
      },
    ],
    article: {
      lead: "Uma organização gamer vive dos rostos que veste a camisa. Em 2024 coordenei a comunicação dos talentos da Hero Base, do anúncio de cada chegada ao prêmio de melhor atleta de Fortnite do Brasil.",
      context: [
        "A Hero Base nasceu em 2021 em Joinville, fundada por João “Flakes Power” Sampaio, com foco em Fortnite. Em 2024 a organização cresceu para outros jogos, entrou no Valorant competitivo e ampliou o elenco de atletas e criadores de conteúdo.",
        "Como coordenador de marketing, cuidei de como cada um desses nomes chegava ao público e às marcas: anúncios, linha editorial, conteúdo, PR e publis.",
      ],
      stats: [
        { value: "#1", label: "916Gon, eleito melhor atleta de Fortnite no Prêmio eSports Brasil 2024", source: "GE Globo" },
        { value: "288 mil", label: "visualizações no vídeo de chegada do Suetam", source: "YouTube" },
        { value: "13 anos", label: "idade do Sabininhu ao virar o primeiro creator de Valorant da Hero Base" },
      ],
      hero: {
        src: "/portfolio/916gon.png", w: 2280, h: 1282,
        alt: "Atletas da Hero Base com a camisa da organização",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · Fortnite",
          title: "916Gon e Suetam",
          body: [
            "O 916Gon fechou 2024 eleito melhor atleta de Fortnite no Prêmio eSports Brasil, e o lançamento e a comunicação dele passaram pelo marketing da Hero Base. Em outubro, a organização anunciou a chegada do Suetam com o vídeo “Finalmente Suetam na Hero Base!!!”, que passou de 288 mil visualizações.",
          ],
          images: [
            { src: "/portfolio/hero-base/suetam-thumb.jpg", w: 1280, h: 720, alt: "Suetam de costas com a camisa Hero Base", caption: "Finalmente Suetam na Hero Base." },
          ],
        },
        {
          kicker: "Capítulo 02 · Valorant",
          title: "Sabininhu e o time campeão",
          body: [
            "Em julho de 2024 a Hero Base anunciou Lucas “Sabininhu” Sabino, de Joinville, como seu primeiro streamer e criador de conteúdo de Valorant. Com 13 anos, ele chegou ao rank máximo do jogo aos 11 e somava mais de 80 mil seguidores. O anúncio saiu com vídeo nas redes e a hashtag #HEROSabininhu.",
            "No mesmo ano, organizei as lives do time de Valorant, cronogramas, fluxos de entrega e peças que deram suporte ao título da Hero Base na primeira etapa da VCB 2024.",
          ],
          images: [
            { src: "/portfolio/hero-base/sabininhu.jpg", w: 1600, h: 900, alt: "Sabininhu com a camisa da Hero Base", caption: "Sabininhu, primeiro creator de Valorant da Hero Base." },
            { src: "/portfolio/hero-base-vcb.png", w: 2720, h: 1720, alt: "Time de Valorant da Hero Base levantando o troféu da VCB 2024", caption: "Hero Base campeã da etapa 1 da VCB 2024." },
          ],
        },
        {
          kicker: "Capítulo 03 · Meu papel",
          title: "Da linha editorial à publi",
          body: [
            "Com cada talento, o trabalho ia além do anúncio. Eu liderava a linha editorial e cocriava os conteúdos junto com o meu time e com os próprios influenciadores. Para fora, fazia a ponte com o PR e com as marcas que queriam fazer publi com eles.",
          ],
          bullets: [
            "Linha editorial das publicações da organização",
            "Criação de conteúdo com os influenciadores, cocriada com o time",
            "Conexão com o PR para divulgação em portais e campanhas externas",
            "Agenciamento dos influenciadores em publis com marcas e patrocinadores",
          ],
        },
      ],
    },
  },
  {
    slug: "hes-centro-medico",
    year: "2025",
    title: "Centro Médico Integrado",
    client: "Hospital Evangélico de Sorocaba",
    category: "Case · Institucional",
    group: "hospital-evangelico",
    cover: "/portfolio/hes/cmi-capa.jpg",
    description:
      "Revitalização do prédio do Centro Médico Integrado do Hospital Evangélico, do alinhamento com o time de arquitetura à estratégia de divulgação da inauguração.",
    links: [
      {
        label: "Jornal Cruzeiro",
        url: "https://www.jornalcruzeiro.com.br/conteudo-de-marca/2025/09/752227-hospital-evangelico-reforca-tradicao-inovacao-e-amplia-servicos-com-novo-centro-medico-integrado.html",
      },
      {
        label: "Sorocaba.com.br",
        url: "https://sorocaba.com.br/saude-bem-estar/hospital-evangelico-amplia-atendimento-e-inaugura-novo-centro-medico-integrado/",
      },
    ],
    article: {
      lead: "Um prédio renovado para o atendimento ambulatorial do Hospital Evangélico. No Centro Médico Integrado, acompanhei a revitalização desde o alinhamento com o time de arquitetura até a estratégia de divulgação da inauguração.",
      context: [
        "Com mais de 90 anos de história em Sorocaba, o Hospital Evangélico é referência em qualidade, humanização e estrutura. Em 2025, o hospital inaugurou o Centro Médico Integrado, o CMI: um espaço moderno e acolhedor, voltado só ao atendimento ambulatorial especializado.",
        "Meu papel foi fazer a obra virar notícia. Do diálogo com a arquitetura à imprensa e às redes, cuidei para que a cidade soubesse o que estava abrindo e por quê.",
      ],
      stats: [
        { value: "6", label: "consultórios, além de um centro de estudos para reuniões e treinamentos", source: "Jornal Cruzeiro" },
        { value: "17", label: "especialidades médicas atendidas no novo espaço", source: "Jornal Cruzeiro" },
        { value: "90+", label: "anos de história do Hospital Evangélico em Sorocaba" },
      ],
      hero: {
        src: "/portfolio/hes/cmi-abertura.jpg", w: 1788, h: 880,
        alt: "Entrada do Hospital Evangélico de Sorocaba",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · A obra",
          title: "Da planta à porta aberta",
          body: [
            "Acompanhei a revitalização do prédio junto com o time de arquitetura, alinhando o que o espaço precisava comunicar para pacientes e médicos. O CMI foi projetado para atender os dois de forma mais eficiente, com agilidade e humanização.",
            "O resultado são seis consultórios, uma recepção própria e um centro de estudos para reuniões, treinamentos e ações educativas na área da saúde.",
          ],
          images: [
            { src: "/portfolio/hes/cmi-recepcao.jpg", w: 1903, h: 1268, alt: "Recepção do Centro Médico Integrado", caption: "Recepção do Centro Médico Integrado." },
            { src: "/portfolio/hes/cmi-consultorios.jpg", w: 1920, h: 638, alt: "Dois consultórios do Centro Médico Integrado", caption: "Consultórios." },
            { src: "/portfolio/hes/cmi-estudos.jpg", w: 1903, h: 1268, alt: "Centro de estudos do Centro Médico Integrado", caption: "Centro de estudos." },
          ],
        },
        {
          kicker: "Capítulo 02 · Divulgação",
          title: "A cidade fica sabendo",
          body: [
            "Pensei a estratégia de divulgação da inauguração para dentro e para fora do hospital. Para fora, a pauta foi para a imprensa da região e para as redes sociais do hospital, com as peças criadas em parceria com a agência. Para dentro, o endomarketing apresentou o novo espaço aos colaboradores.",
          ],
          bullets: [
            "Alinhamento com o time de arquitetura durante a obra",
            "Estratégia de divulgação da inauguração",
            "Relacionamento com a imprensa regional",
            "Conteúdo para as redes sociais do hospital, com a agência parceira",
            "Comunicação interna para os colaboradores",
          ],
        },
      ],
    },
  },
  {
    slug: "hes-muro",
    year: "2026",
    title: "A Linha do Cuidado",
    client: "Hospital Evangélico de Sorocaba",
    category: "Case · Arte urbana",
    group: "hospital-evangelico",
    cover: "/portfolio/hes/muro-capa.jpg",
    description:
      "Depois do desmoronamento de parte do muro do hospital, a reconstrução virou um mural de 100 metros na cidade, com o artista Guaen Lee.",
    links: [
      {
        label: "Jornal Cruzeiro",
        url: "https://www.jornalcruzeiro.com.br/conteudo-de-marca/2026/03/758493-arte-em-muro-do-hospital-evangelico-de-sorocaba-homenageia-profissionais-de-saude.html",
      },
      { label: "Instagram · Guaen Lee", url: "https://www.instagram.com/guaen/" },
      { label: "Instagram · o filme do muro", url: "https://www.instagram.com/p/DWR5UyKgj7C/" },
    ],
    article: {
      lead: "Parte do muro do Hospital Evangélico desabou. Na reconstrução, a gente viu a chance de devolver mais do que um muro para a cidade: 100 metros de arte contando a história das vidas que passam pelo hospital.",
      context: [
        "O muro fica na Avenida General Carneiro, uma das mais movimentadas de Sorocaba, e antes era alvo de pichação. Depois do desmoronamento e da reconstrução, surgiu a ideia de transformar o espaço em um mural da cidade.",
        "O painel “A Linha do Cuidado”, do artista plástico Guaen Lee, retrata as várias vidas que passam pelo hospital: de uma criança a um adolescente, um idoso, um funcionário, um médico, um executivo.",
      ],
      stats: [
        { value: "100 m", label: "de muro transformados em galeria a céu aberto", source: "Jornal Cruzeiro" },
        { value: "1", label: "linha vermelha que costura todos os retratos do painel" },
      ],
      hero: {
        src: "/portfolio/hes/muro-banner.jpg", w: 2000, h: 727,
        alt: "Mural A Linha do Cuidado no muro do Hospital Evangélico",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · A ideia",
          title: "Da queda ao mural",
          body: [
            "Participei da construção da ideia: em vez de só levantar o muro de novo, usar os 100 metros para contar a história do hospital pelas pessoas. Quem é atendido e quem cuida, lado a lado.",
            "No painel, uma linha vermelha percorre todas as figuras. Para o artista, ela é a costura invisível do cuidado, o fio que conecta vidas e histórias. O fundo em azul e turquesa conversa com as cores institucionais do hospital e traz a textura da street art brasileira.",
          ],
          images: [
            { src: "/portfolio/hes/muro-retratos.jpg", w: 1903, h: 1268, alt: "Retratos de uma criança, um médico, uma idosa e uma enfermeira no mural", caption: "A linha vermelha atravessa todos os retratos." },
          ],
        },
        {
          kicker: "Capítulo 02 · Execução",
          title: "Da aprovação à última pincelada",
          body: [
            "Cuidei da aprovação da arte e acompanhei a pintura junto com o Guaen Lee até o painel ficar pronto. Hoje ele faz parte da rotina de quem passa pela avenida.",
          ],
          images: [
            { src: "/portfolio/hes/muro-trechos.jpg", w: 1920, h: 638, alt: "Trechos do mural A Linha do Cuidado", caption: "Trechos do painel na Avenida General Carneiro." },
          ],
        },
        {
          kicker: "Capítulo 03 · Divulgação",
          title: "Um filme para a cidade",
          body: [
            "Para lançar o mural, produzimos um vídeo que conta a história do muro e das pessoas por trás dele, publicado nas redes sociais do hospital. A obra também ganhou matéria no Jornal Cruzeiro.",
          ],
          video: {
            src: "/portfolio/hes/muro-filme.mp4",
            poster: "/portfolio/hes/muro-poster.jpg",
            caption: "O filme do muro, publicado no Instagram do Hospital Evangélico.",
            sourceUrl: "https://www.instagram.com/p/DWR5UyKgj7C/",
          },
          bullets: [
            "Construção da ideia do mural",
            "Aprovação da arte com o artista",
            "Acompanhamento da pintura",
            "Vídeo de lançamento para as redes sociais",
          ],
        },
      ],
    },
  },
  {
    slug: "entre-vistas",
    year: "2025—26",
    title: 'Livro "Entre Vistas"',
    client: "Hospital Evangélico de Sorocaba",
    category: "Case · Publicação",
    group: "hospital-evangelico",
    cover: "/portfolio/hes/livro-capa.jpg",
    description:
      "Entre Vistas: o Hospital pelas Vozes de Quem Cuida. Livro com 30 depoimentos de quem trabalha e trabalhou no Hospital Evangélico, construído do convite aos colaboradores à escrita com a escritora Gabriela.",
    links: [
      { label: "Instagram · Gabriela, a escritora", url: "https://www.instagram.com/agabiescreve/" },
    ],
    article: {
      lead: "Um hospital contando a própria história pela voz de quem cuida. Entre Vistas foi o primeiro livro que construí: do convite aos colaboradores às entrevistas, à curadoria das histórias e à escrita junto com a escritora Gabriela.",
      context: [
        "O livro nasceu de uma iniciativa do Hospital Evangélico, a partir de uma vontade do Dr. Fraga, diretor-presidente, de registrar quem faz a história da casa. Tirei a ideia do papel junto com a Milena, da equipe multidisciplinar, e com o time do hospital.",
        "O resultado é Entre Vistas: o Hospital pelas Vozes de Quem Cuida. Quem narra é o próprio hospital, contando a vida de quem trabalha e de quem já trabalhou lá.",
      ],
      stats: [
        { value: "30", label: "depoimentos de enfermeiros, técnicos, recepcionistas e equipes de apoio" },
        { value: "1º", label: "livro que construí na carreira, do convite à escrita" },
      ],
      hero: {
        src: "/portfolio/hes/livro-banner.jpg", w: 2000, h: 727,
        alt: "Exemplares do livro Entre Vistas na Livraria Leitura",
      },
      chapters: [
        {
          kicker: "Capítulo 01 · Como nasceu",
          title: "Um convite no Dia da Enfermagem",
          body: [
            "Começamos em 2025, com uma ação do Dia da Enfermagem: os colaboradores se candidatavam para contar a própria história. Depois chamamos cada um para conversar, gravamos os relatos e filtramos como cada história entraria no livro.",
            "Apareceram histórias de superação, de amor, de perda e até de milagres que essas pessoas presenciaram nos corredores do hospital.",
          ],
          bullets: [
            "Campanha de inscrição no Dia da Enfermagem",
            "Conversas e gravação das histórias",
            "Curadoria dos relatos",
            "Comunicação do projeto dentro do hospital",
          ],
        },
        {
          kicker: "Capítulo 02 · A escrita",
          title: "Quem escreve é a Gabriela",
          body: [
            "Com as histórias em mãos, encontramos a escritora Gabriela, que transformou os depoimentos em livro. Foi um trabalho a várias mãos: o hospital abriu as portas, o time ajudou a garimpar as histórias e a Gabriela deu a elas uma narrativa sensível e afetiva.",
          ],
          images: [
            { src: "/portfolio/hes/livro-gabriela.jpg", w: 1242, h: 1318, alt: "A escritora Gabriela segurando o livro Entre Vistas no lançamento", caption: "A escritora Gabriela no lançamento do livro." },
            { src: "/portfolio/hes/livro-capa.jpg", w: 1122, h: 1402, alt: "Exemplares do livro Entre Vistas expostos na livraria", caption: "Entre Vistas: o Hospital pelas Vozes de Quem Cuida." },
          ],
        },
        {
          kicker: "Capítulo 03 · O lançamento",
          title: "Cuidar também é construir histórias",
          body: [
            "O livro foi lançado na Livraria Leitura do Shopping Iguatemi Esplanada, em Sorocaba. Saí do hospital antes do lançamento, então não participei da publicação, mas toda a construção, a captação e a comunicação até ali passaram por mim.",
            "Para mim, como profissional de marketing, foi um desafio novo e um dos projetos mais bonitos que já fiz.",
          ],
        },
      ],
    },
  },
];

export const skills = [
  "Social Media & Produção de Conteúdo",
  "E-mail Marketing & Inbound",
  "Growth & Performance",
  "Edição de Vídeo",
  "UI Design & Web Apps",
  "IA para Marketing (Claude, GPT, Gemini, Seedance)",
  "Liderança de Equipe",
  "Direção Criativa",
  "Direção de Arte",
  "Ativações Presenciais",
  "Comunicação Institucional",
  "Inglês Intermediário",
];

export const tools = [
  "Claude",
  "GPT",
  "Gemini",
  "Seedance",
  "CapCut",
  "Ferramentas Adobe",
  "Photoshop",
  "After Effects",
  "Premiere",
  "Figma",
  "Meta Ads",
  "Google Ads",
];

// === Modo pessoal ===
export const personal = {
  headline: "Fora do escritório.",
  subhead: "30 anos, umbandista, curioso.",
  bio:
    "30 anos, de Osasco — a cidade do cachorro-quente e das pombas. Em migração de área: estudando fonoaudiologia enquanto sigo vivendo de comunicação. Fora do trabalho: umbandista, cinéfilo, gamer, entusiasta de impressão 3D e sempre com um pé nos estudos de cultura indígena.",
  curiosities: [
    {
      icon: "GraduationCap",
      color: "sky",
      title: "Estudando Fonoaudiologia",
      body: "Migrando de área aos poucos. Novo curso, nova lógica — voz, escuta e cognição me pegaram.",
    },
    {
      icon: "Gamepad2",
      color: "cobalt",
      title: "Gamer desde sempre",
      body: "Cresci acompanhando cenário competitivo — o que virou também parte da carreira. Fim de semana é console garantido.",
    },
    {
      icon: "Film",
      color: "ice",
      title: "Cinéfilo · Team Marvel",
      body: "Direção de arte, trilha sonora e Marvel sem culpa. Assumo o time e sigo assistindo tudo que sai.",
    },
    {
      icon: "Feather",
      color: "navy",
      title: "Cultura Indígena",
      body: "Estudo cosmovisão, grafismo e cultura dos povos originários — respeito à raiz, ao território e à ancestralidade.",
    },
    {
      icon: "Video",
      color: "cobalt",
      title: "Criador de conteúdo",
      body: "Dono de páginas monetizadas no TikTok — audiência real, estratégia de conteúdo aplicada na prática.",
    },
  ],
  nowPlaying: {
    label: "Ouvindo agora",
    value: "Pontos de Umbanda · Nação Zumbi · trilha do dia",
  },
  favoriteQuote:
    "\"Toda tecnologia é ancestral. Só muda o material.\"",
};

// Galeria da home: projetos soltos + um card por vitrine, no lugar do
// primeiro projeto daquele grupo
export type GalleryItem =
  | { kind: "project"; project: Project }
  | { kind: "showcase"; showcase: Showcase };

export const galleryItems: GalleryItem[] = (() => {
  const items: GalleryItem[] = [];
  const placed = new Set<string>();
  for (const s of showcases) {
    if (s.soon) {
      items.push({ kind: "showcase", showcase: s });
      placed.add(s.slug);
    }
  }
  for (const p of projects) {
    if (!p.group) {
      items.push({ kind: "project", project: p });
      continue;
    }
    if (placed.has(p.group)) continue;
    const showcase = showcases.find((s) => s.slug === p.group);
    if (showcase) items.push({ kind: "showcase", showcase });
    placed.add(p.group);
  }
  return items;
})();

export const groupProjects = (group: string) => {
  const s = showcases.find((x) => x.slug === group);
  const list = projects.filter((p) => p.group === group);
  if (!s) return list;
  const rank = (p: Project) => {
    const i = s.featured.indexOf(p.slug);
    return i < 0 ? s.featured.length : i;
  };
  return [...list].sort((a, b) => rank(a) - rank(b));
};
