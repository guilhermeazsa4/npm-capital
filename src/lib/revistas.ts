export interface Revista {
  number: number;
  date: string;
  theme: string;
  description: string;
  image: string;
  pdfUrl: string;
  seoTitle: string;
  metaDescription: string;
  tags: string[];
  keywords: string[];
}

export const revistas: Revista[] = [
  {
    number: 46,
    date: "Jul/Out 2026",
    theme: "Proteção! Síndicos devem agir em casos de violência doméstica?",
    description:
      "O papel do síndico diante de situações de violência doméstica identificadas no condomínio, e até onde vai a responsabilidade da gestão nesses casos.",
    image: "/assets/revistas/46.jpg",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed46.pdf",
    seoTitle: "Violência doméstica em condomínio: papel do síndico",
    metaDescription:
      "Saiba como o síndico deve agir em casos de violência doméstica, quais são suas responsabilidades e como proteger moradores do condomínio.",
    tags: ["Violência doméstica", "Síndico", "Segurança condominial", "Direito condominial", "Moradores"],
    keywords: [
      "violência doméstica em condomínio",
      "papel do síndico em casos de agressão",
      "condomínio e medidas protetivas",
      "síndico pode chamar polícia em caso de agressão",
      "proteção aos moradores vítimas de violência",
      "responsabilidade civil do síndico",
    ],
  },
  {
    number: 45,
    date: "Fev/Abr 2026",
    theme: "Animais de estimação em condomínio",
    description:
      "O que a convenção pode e não pode restringir sobre a presença de animais de estimação nas unidades e áreas comuns.",
    image: "/assets/revistas/45.jpg",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed45.pdf",
    seoTitle: "Animais de estimação em condomínio: regras e direitos",
    metaDescription:
      "Entenda as regras para pets em condomínios, os direitos dos moradores, responsabilidades dos donos e quando o síndico pode agir.",
    tags: ["Animais de estimação", "Regras condominiais", "Convenção", "Moradores", "Síndico"],
    keywords: [
      "animais de estimação em condomínio",
      "condomínio pode proibir animais",
      "direitos dos moradores com pets",
      "síndico pode multar por animal",
      "jurisprudência sobre pets em condomínio",
      "regulamentação de animais no condomínio",
    ],
  },
  {
    number: 44,
    date: "Nov/Jan 2026",
    theme: "WhatsApp do condomínio: canal de comunicação eficiente, mas com limites",
    description:
      "Como usar grupos de WhatsApp para a comunicação condominial sem gerar conflitos ou expor moradores indevidamente.",
    image: "/assets/revistas/44.png",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed44.pdf",
    seoTitle: "WhatsApp do condomínio: regras e boas práticas",
    metaDescription:
      "Veja como usar o WhatsApp do condomínio de forma eficiente, evitando conflitos, problemas de privacidade e falhas na comunicação.",
    tags: ["Comunicação condominial", "WhatsApp", "Síndico", "Privacidade", "LGPD"],
    keywords: [
      "WhatsApp do condomínio regras",
      "grupo de WhatsApp do condomínio",
      "comunicação entre síndico e moradores",
      "privacidade no grupo do condomínio",
      "LGPD em comunicação condominial",
      "boas práticas para grupo de moradores",
    ],
  },
  {
    number: 43,
    date: "Ago/Out 2025",
    theme: "Acesso de entregadores em condomínio",
    description:
      "Regras e boas práticas para organizar a entrada de entregadores no condomínio sem comprometer a segurança dos moradores.",
    image: "/assets/revistas/43.png",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed43.pdf",
    seoTitle: "Entregadores em condomínio: regras de acesso e segurança",
    metaDescription:
      "Saiba como controlar o acesso de entregadores no condomínio, proteger moradores e criar regras seguras para delivery e encomendas.",
    tags: ["Entregadores", "Segurança condominial", "Portaria", "Delivery", "Controle de acesso"],
    keywords: [
      "entrada de entregadores no condomínio",
      "regras para delivery em condomínio",
      "controle de acesso de entregadores",
      "portaria e recebimento de encomendas",
      "cadastro de visitantes condomínio",
      "gestão de acesso condominial",
    ],
  },
  {
    number: 42,
    date: "Maio/Julho 2025",
    theme: "Instalação de carregador para carro elétrico em condomínio",
    description:
      "Como lidar com pedidos de instalação de carregadores elétricos nas garagens, da autorização em assembleia à divisão de custos.",
    image: "/assets/revistas/42.png",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed42.pdf",
    seoTitle: "Carregador de carro elétrico em condomínio: regras",
    metaDescription:
      "Entenda como instalar carregador para carro elétrico em condomínio, quais são as regras, custos e responsabilidades do síndico.",
    tags: ["Carro elétrico", "Infraestrutura", "Assembleia", "Sustentabilidade", "Síndico"],
    keywords: [
      "carregador de carro elétrico em condomínio",
      "vaga com carregador elétrico condomínio",
      "síndico pode negar carregador elétrico",
      "aprovação de carregador em assembleia",
      "wallbox em condomínio residencial",
      "sustentabilidade em condomínios",
    ],
  },
  {
    number: 41,
    date: "Fev/Abr 2025",
    theme: "Reformas em condomínio",
    description:
      "O que avaliar antes de autorizar reformas nas unidades e nas áreas comuns, evitando conflitos e problemas estruturais futuros.",
    image: "/assets/revistas/41.png",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed41.pdf",
    seoTitle: "Reforma em condomínio: regras, documentos e cuidados",
    metaDescription:
      "Descubra quais são as regras para reformas em apartamentos, documentos necessários, responsabilidades e limites dentro do condomínio.",
    tags: ["Reformas", "Obras condominiais", "Documentação", "Síndico", "NBR 16280"],
    keywords: [
      "reforma em apartamento regras condomínio",
      "síndico pode impedir reforma",
      "NBR 16280 reforma condomínio",
      "autorização para reforma residencial",
      "horários permitidos para reforma",
      "fiscalização de reformas pelo síndico",
    ],
  },
  {
    number: 40,
    date: "Nov/Jan 2025",
    theme: "Orientação para o síndico eficaz",
    description:
      "Práticas e atitudes que ajudam o síndico a conduzir a gestão do condomínio com mais organização e eficiência.",
    image: "/assets/revistas/40.jpg",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed40.pdf",
    seoTitle: "Como ser um síndico eficiente: guia de gestão",
    metaDescription:
      "Aprenda boas práticas para uma gestão condominial eficiente, organização financeira, liderança e relacionamento com moradores.",
    tags: ["Síndico", "Gestão de condomínio", "Liderança", "Planejamento financeiro", "Boas práticas"],
    keywords: [
      "como ser um síndico eficiente",
      "gestão profissional de condomínio",
      "responsabilidades do síndico",
      "planejamento financeiro condomínio",
      "relacionamento síndico moradores",
      "gestão de conflitos condomínio",
    ],
  },
  {
    number: 39,
    date: "Ago/Out 2024",
    theme: "Direito básico dos condôminos",
    description:
      "Um panorama dos direitos e deveres fundamentais de quem mora em condomínio, direto ao ponto e sem juridiquês.",
    image: "/assets/revistas/39.jpg",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed39.pdf",
    seoTitle: "Direitos dos condôminos: guia básico e legislação",
    metaDescription:
      "Conheça os principais direitos e deveres dos condôminos, regras do Código Civil e como resolver conflitos dentro do condomínio.",
    tags: ["Direitos dos condôminos", "Código Civil", "Legislação condominial", "Moradores", "Assembleia"],
    keywords: [
      "direitos dos condôminos",
      "deveres dos moradores condomínio",
      "código civil condomínio direitos",
      "convenção condominial direitos",
      "participação em assembleia condomínio",
      "legislação condominial brasileira",
    ],
  },
  {
    number: 38,
    date: "Maio/Julho 2024",
    theme: "Poda de árvores em condomínio",
    description:
      "Orientações sobre poda e manutenção de árvores nas áreas comuns, incluindo responsabilidades e cuidados legais envolvidos.",
    image: "/assets/revistas/38.jpg",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed38.pdf",
    seoTitle: "Poda de árvores em condomínio: regras e cuidados",
    metaDescription:
      "Saiba quando o condomínio pode realizar poda de árvores, quais cuidados legais existem e a responsabilidade do síndico.",
    tags: ["Poda de árvores", "Áreas verdes", "Responsabilidade ambiental", "Síndico", "Paisagismo"],
    keywords: [
      "poda de árvores em condomínio",
      "síndico pode cortar árvore condomínio",
      "autorização para poda de árvore",
      "responsabilidade ambiental condomínio",
      "laudo técnico para poda árvore",
      "paisagismo em condomínios",
    ],
  },
  {
    number: 37,
    date: "Fev/Abr 2024",
    theme: "Prestação de contas",
    description:
      "Como organizar e apresentar as contas do condomínio com transparência, reduzindo questionamentos em assembleia.",
    image: "/assets/revistas/37.jpg",
    pdfUrl: "https://revista-direito-e-condominio.s3.us-east-2.amazonaws.com/Revista_DC_ed37.pdf",
    seoTitle: "Prestação de contas do condomínio: guia para síndicos",
    metaDescription:
      "Entenda como funciona a prestação de contas do condomínio, documentos necessários, transparência e responsabilidades do síndico.",
    tags: ["Prestação de contas", "Transparência", "Finanças condominiais", "Síndico", "Auditoria"],
    keywords: [
      "prestação de contas condomínio",
      "síndico deve prestar contas",
      "transparência na administração condominial",
      "balancete mensal condomínio",
      "como analisar contas do condomínio",
      "responsabilidade financeira do síndico",
    ],
  },
];

export function getRevista(number: number) {
  return revistas.find((revista) => revista.number === number);
}
