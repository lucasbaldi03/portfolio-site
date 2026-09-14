export const profile = {
  name: "Lucas A. Baldi",
  handleIg: "@_lubaldi",
  igUrl: "https://instagram.com/_lubaldi",
  email: "lucas.araujobaldi01@gmail.com",
  linkedin: "https://www.linkedin.com/in/lucas-ara%C3%BAjo-baldi-33874b8a/",
  spotify: "https://open.spotify.com/user/4ysdcqkgnw5nekilhljtv4a36",
  location: "Sorocaba, SP · Brasil",
  role: "Marketing Coordinator & Senior Analyst",
  tagline: "Marketing, Design e Estratégia",
  headline: "10 anos conectando marcas a resultados.",
  bio:
    "Planejamento e execução de iniciativas de marketing, conectando estratégia, criação e resultado. Da direção criativa à performance, atuando ponta a ponta em marcas de tecnologia, saúde, esports e entretenimento.",
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
    company: "BePlus",
    role: "Produção Criativa & Estratégia",
    period: "2026 — atual",
    current: true,
    summary:
      "Produção criativa e estratégia para marcas, atendendo clientes em parceria com a agência FanClub. Uso intensivo de IA para vídeo, texto, conteúdo e desenvolvimento de aplicativos digitais.",
    highlights: [
      "Grandes marcas: Red Bull, Seara, Diageo, Corteva, Coca-Cola",
      "Direção criativa + roteiro + produção de vídeo com IA",
      "Criação de apps e experiências digitais",
    ],
    tags: ["Produção", "Direção Criativa", "IA"],
    aiTools: ["Claude", "ChatGPT", "Seedance 2.5", "Suno", "Nano Banana Pro"],
  },
  {
    company: "Hospital Evangélico de Sorocaba",
    role: "Coordenador de Marketing",
    period: "2025 — 2026",
    summary:
      "Coordenação geral da comunicação: frentes externa e interna, relacionamento com imprensa e gestão de mídia on/off. Planejamento estratégico de campanhas, lançamentos e posicionamento institucional articulando fornecedores, parceiros e áreas internas.",
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
    company: "Hero Base eSports",
    role: "Coordenador de Marketing",
    period: "2023 — 2025",
    summary:
      "Coordenação das ativações com grandes marcas no cenário gamer, estruturação das redes sociais, briefings, direção de arte de peças e visuais das lives, cronogramas e entregas com fornecedores.",
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
    company: "Players Bank (Itaú)",
    role: "Analista de Marketing Senior",
    period: "2022 — 2023",
    summary:
      "Coordenação e direção criativa do lançamento dos cartões promocionais do Players Bank em parceria com a LOUD, o Gaules e a comunidade de League of Legends. Estratégias de mídia orgânica e paga, copywriting, landing pages e vídeos promocionais.",
    highlights: [
      "Cartão Player's Bank Mastercard LoL Esports (parceria LOUD + Gaules)",
      "Estratégia orgânica + paga integrada ao posicionamento da marca",
      "Coordenação de copy, e-mail marketing, wireframes e landing pages",
      "Três vídeos promocionais dirigidos à comunidade LoL",
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

export type Project = {
  title: string;
  client: string;
  category: string;
  cover: string;
  description: string;
  links?: { label: string; url: string }[];
  video?: string;
};

export const projects: Project[] = [
  {
    title: "Cartão Player's Bank × LoL Esports",
    client: "Players Bank / Itaú",
    category: "Lançamento",
    cover: "/portfolio/players-bank-lol.png",
    description:
      "Coordenação e direção criativa do lançamento do cartão promocional em parceria com a LOUD e Gaules. Estratégia orgânica + paga, três vídeos promocionais e ativações para a comunidade de League of Legends.",
    links: [
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
    ],
  },
  {
    title: "BYD × Fortnite",
    client: "Hero Base",
    category: "Ativação gamer",
    cover: "/portfolio/byd-fortnite.png",
    description:
      "Coordenação da ação com a BYD: estruturação de redes sociais, criação de briefings, direção de arte de peças e visuais das lives. Lançamento presencial integrado ao Fortnite.",
    links: [
      {
        label: "R7 Entretenimento",
        url: "https://entretenimento.r7.com/nitro/games/game-hall/inovacao-sustentavel-byd-revoluciona-o-fortnite-com-blade-ball-e-suvs-eletricos-26082024/",
      },
    ],
  },
  {
    title: "90 Anos HES · 30 Anos IOS",
    client: "Hospital Evangélico de Sorocaba",
    category: "Evento institucional",
    cover: "/portfolio/hes-90-anos.png",
    description:
      "Celebração dos 90 anos do Hospital Evangélico e 30 anos do Instituto de Oncologia de Sorocaba. Evento para 250 convidados com médicos antigos da casa — direção criativa, identidade visual, cenografia, palco e coordenação da operação.",
  },
  {
    title: "VCB 2024 — Hero Base Campeã",
    client: "Hero Base",
    category: "Campanha eSports",
    cover: "/portfolio/hero-base-vcb.png",
    description:
      "Organização das lives do time de Valorant, cronogramas, fluxos de entrega e criação de peças que deram suporte à conquista do campeonato em 2024.",
    links: [
      {
        label: "GE Globo",
        url: "https://ge.globo.com/esports/blogs/por-dentro-dos-esports/post/2024/05/03/vcb-2024-hero-base-e-campea-brasileira-da-etapa-1.ghtml",
      },
    ],
  },
  {
    title: "916Gon — Melhor Atleta de Fortnite 2024",
    client: "Hero Base",
    category: "Gestão de talento",
    cover: "/portfolio/916gon.png",
    description:
      "Lançamento e comunicação do atleta reconhecido como melhor jogador de eSports de 2024 no Prêmio eSports Brasil.",
    links: [
      {
        label: "GE Globo",
        url: "https://ge.globo.com/video/916gon-e-eleito-melhor-atleta-de-fortnite-no-premio-esports-brasil-2024-13181050.ghtml",
      },
    ],
  },
  {
    title: "Centro Médico Integrado — HES",
    client: "Hospital Evangélico de Sorocaba",
    category: "Institucional",
    cover: "/portfolio/hes-centro-medico.png",
    description:
      "Coordenação da inauguração do Centro Médico Integrado — comunicação externa e interna, imprensa, mídia on/off e articulação de fornecedores e áreas internas.",
    links: [
      {
        label: "Sorocaba.com.br",
        url: "https://sorocaba.com.br/saude-bem-estar/hospital-evangelico-amplia-atendimento-e-inaugura-novo-centro-medico-integrado/",
      },
    ],
  },
  {
    title: "Eva Plano de Saúde — Lançamento",
    client: "Hospital Evangélico de Sorocaba",
    category: "Lançamento",
    cover:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=70",
    description:
      "Planejamento estratégico e lançamento do Eva Plano de Saúde, articulando comunicação institucional, mídia paga e relacionamento com imprensa.",
    links: [
      {
        label: "Jornal Cruzeiro",
        url: "https://www.jornalcruzeiro.com.br/conteudo-de-marca/2026/02/756774-hospital-evangelico-de-sorocaba-anuncia-lancamento-do-eva-plano-de-saude.html",
      },
    ],
  },
  {
    title: 'Livro "Entre Vistas"',
    client: "Hospital Evangélico de Sorocaba",
    category: "Publicação institucional",
    cover: "/portfolio/entre-vistas.png",
    description:
      "Livro criado a partir de histórias reais dos colaboradores do Hospital Evangélico de Sorocaba. Direção editorial, conceito e coordenação da publicação que valoriza quem cuida de vidas.",
  },
];

export const skills = [
  "Direção Criativa",
  "Direção de Arte",
  "Estratégia de Marca",
  "Mídia Paga",
  "Copywriting",
  "Coordenação de Equipe",
  "Edição de Vídeo",
  "Análise de Métricas",
  "Gestão de Fornecedores",
  "Ativações Presenciais",
  "Comunicação Institucional",
  "Relacionamento com Imprensa",
];

export const tools = [
  "Figma",
  "Adobe CC",
  "Photoshop",
  "After Effects",
  "Premiere",
  "Notion",
  "Meta Ads",
  "Google Ads",
  "Analytics",
  "Canva",
  "Midjourney",
];

// === Modo pessoal ===
export const personal = {
  headline: "Fora do escritório.",
  subhead: "30 anos, umbandista, curioso.",
  bio:
    "30 anos, sorocabano. Em migração de área — estudando fonoaudiologia enquanto sigo vivendo de comunicação. Fora do trabalho: umbandista, cinéfilo, gamer, entusiasta de impressão 3D e sempre com um pé nos estudos de cultura indígena.",
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
    {
      icon: "Layers",
      color: "sky",
      title: "Impressão 3D",
      body: "Entusiasta de 3D printing — do modelo à peça em casa. Onde tecnologia vira artesanato.",
    },
    {
      icon: "Sprout",
      color: "ice",
      title: "Pai de planta",
      body: "10+ filhotes em casa. Cada um com nome, ciclo de rega e sua manha própria.",
    },
    {
      icon: "ChefHat",
      color: "navy",
      title: "Amo cozinhar",
      body: "Infinitas receitas decoradas. Fim de dia bom termina com panela no fogão e trilha rolando.",
    },
  ],
  nowPlaying: {
    label: "Ouvindo agora",
    value: "Pontos de Umbanda · Nação Zumbi · trilha do dia",
  },
  favoriteQuote:
    "\"Toda tecnologia é ancestral. Só muda o material.\"",
};
