export interface Ebook {
  slug: string;
  title: string;
  format: string;
  image: string;
  description: string;
  externalHref: string;
  seoTitle: string;
  metaDescription: string;
  tags: string[];
  keywords: string[];
}

export const ebooks: Ebook[] = [
  {
    slug: "coisas-basicas-do-condominio",
    title: "Coisas Básicas do Condomínio",
    format: "E-book",
    image: "/assets/TabletCBC.webp",
    description:
      "Um guia introdutório para quem está começando a lidar com a rotina condominial. Reunimos os conceitos essenciais sobre convenção, regimento interno, taxas e direitos e deveres de síndicos e moradores, em linguagem simples e direta.",
    externalHref: "https://livraria-bonijuris.s3.us-east-2.amazonaws.com/e-book/Livreto+Coisas+basicas+do+condominio",
    seoTitle: "Coisas Básicas do Condomínio: guia para síndicos e moradores",
    metaDescription:
      "Um guia prático com os principais conceitos, regras e responsabilidades para entender o funcionamento de um condomínio residencial.",
    tags: ["Condomínio", "Síndico", "Moradores", "Regras condominiais", "Gestão básica"],
    keywords: [
      "como funciona um condomínio",
      "regras básicas de condomínio",
      "responsabilidades do síndico",
      "direitos dos moradores condomínio",
      "guia para síndicos iniciantes",
    ],
  },
  {
    slug: "leis-essenciais",
    title: "Leis Essenciais",
    format: "E-book · 2ª edição",
    image: "/assets/TabletELE2.webp",
    description:
      "Compilado atualizado da legislação mais relevante para condomínios, incluindo Código Civil, Código de Defesa do Consumidor e normas complementares, organizado para consulta rápida por síndicos e administradoras.",
    externalHref: "https://livraria-bonijuris.s3.us-east-2.amazonaws.com/e-book/leis-essenciais-2ED",
    seoTitle: "Leis Essenciais do Condomínio: legislação para síndicos",
    metaDescription:
      "Consulte as principais leis aplicadas aos condomínios, incluindo Código Civil, CDC e normas complementares organizadas para síndicos.",
    tags: ["Legislação condominial", "Código Civil", "Direito condominial", "Síndico", "Normas"],
    keywords: [
      "leis de condomínio",
      "código civil condomínio",
      "legislação para síndico",
      "direitos e deveres condomínio",
      "normas condominiais atualizadas",
    ],
  },
  {
    slug: "facilitador-do-condominio",
    title: "Facilitador do Condomínio",
    format: "E-book",
    image: "/assets/TabletFDC.webp",
    description:
      "Modelos prontos, checklists e roteiros práticos para simplificar tarefas recorrentes da administração condominial, de convocação de assembleia a prestação de contas.",
    externalHref: "https://livraria-bonijuris.s3.us-east-2.amazonaws.com/e-book/Facilitador-2ED-bordo",
    seoTitle: "Facilitador do Condomínio: modelos e checklists para síndicos",
    metaDescription:
      "Tenha acesso a modelos prontos, checklists e roteiros para facilitar a administração do condomínio, assembleias, comunicados e prestação de contas.",
    tags: [
      "Síndico",
      "Administração condominial",
      "Gestão de condomínio",
      "Modelos para condomínio",
      "Checklists condominiais",
    ],
    keywords: [
      "modelos para síndico",
      "checklist de condomínio",
      "documentos para administração condominial",
      "roteiros para assembleia de condomínio",
      "organização da gestão condominial",
    ],
  },
  {
    slug: "dinamica-do-imovel",
    title: "Dinâmica do Imóvel",
    format: "E-book",
    image: "/assets/TabletEDI2.webp",
    description:
      "Uma visão aprofundada sobre a relação entre proprietários, inquilinos e condomínio, com orientações sobre locação, transferência de unidades e responsabilidades de cada parte.",
    externalHref: "https://livraria-bonijuris.s3.us-east-2.amazonaws.com/e-book/dinamica-do-imovel",
    seoTitle: "Dinâmica do Imóvel: direitos de proprietários e inquilinos",
    metaDescription:
      "Entenda a relação entre proprietários, inquilinos e condomínio, com orientações sobre locação, responsabilidades, transferência de unidades e direitos.",
    tags: ["Direito condominial", "Proprietários", "Inquilinos", "Locação", "Responsabilidades"],
    keywords: [
      "direitos do proprietário em condomínio",
      "direitos do inquilino condomínio",
      "responsabilidade do locador condomínio",
      "regras de locação em condomínio",
      "transferência de imóvel condomínio",
    ],
  },
  {
    slug: "nao-tropece-na-redacao",
    title: "Não Tropece na Redação",
    format: "E-book",
    image: "/assets/TabletNTR.webp",
    description:
      "Dicas práticas para escrever atas, comunicados e avisos do condomínio com clareza, sem erros de português e sem gerar ruído com moradores.",
    externalHref: "https://livraria-bonijuris.s3.us-east-2.amazonaws.com/e-book/NTR_digital",
    seoTitle: "Não Tropece na Redação: comunicação correta no condomínio",
    metaDescription:
      "Aprenda como elaborar comunicados, documentos e mensagens do condomínio com clareza, segurança e profissionalismo para evitar conflitos.",
    tags: ["Comunicação condominial", "Documentos", "Síndico", "Gestão profissional", "Redação"],
    keywords: [
      "como escrever comunicado de condomínio",
      "modelo de comunicado para moradores",
      "documentos do síndico",
      "comunicação oficial condomínio",
      "erros de comunicação condominial",
    ],
  },
];

export function getEbook(slug: string) {
  return ebooks.find((ebook) => ebook.slug === slug);
}
