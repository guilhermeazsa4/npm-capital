export interface Ebook {
  slug: string;
  title: string;
  format: string;
  image: string;
  description: string;
  externalHref: string;
}

export const ebooks: Ebook[] = [
  {
    slug: "coisas-basicas-do-condominio",
    title: "Coisas Básicas do Condomínio",
    format: "E-book",
    image: "/assets/TabletCBC.png",
    description:
      "Um guia introdutório para quem está começando a lidar com a rotina condominial. Reunimos os conceitos essenciais sobre convenção, regimento interno, taxas e direitos e deveres de síndicos e moradores, em linguagem simples e direta.",
    externalHref: "https://conteudo.editorabonijuris.com.br/e-book-coisas-basicas-do-condominio-condoninho",
  },
  {
    slug: "leis-essenciais",
    title: "Leis Essenciais",
    format: "E-book · 2ª edição",
    image: "/assets/TabletELE2.png",
    description:
      "Compilado atualizado da legislação mais relevante para condomínios, incluindo Código Civil, Código de Defesa do Consumidor e normas complementares, organizado para consulta rápida por síndicos e administradoras.",
    externalHref: "https://conteudo.editorabonijuris.com.br/ebook-leis-essenciais-2ed",
  },
  {
    slug: "facilitador-do-condominio",
    title: "Facilitador do Condomínio",
    format: "E-book",
    image: "/assets/TabletFDC.png",
    description:
      "Modelos prontos, checklists e roteiros práticos para simplificar tarefas recorrentes da administração condominial, de convocação de assembleia a prestação de contas.",
    externalHref: "https://conteudo.editorabonijuris.com.br/facilitador-do-condominio",
  },
  {
    slug: "dinamica-do-imovel",
    title: "Dinâmica do Imóvel",
    format: "E-book",
    image: "/assets/TabletEDI2.png",
    description:
      "Uma visão aprofundada sobre a relação entre proprietários, inquilinos e condomínio, com orientações sobre locação, transferência de unidades e responsabilidades de cada parte.",
    externalHref: "https://conteudo.editorabonijuris.com.br/e-book-dinamica-do-imovel",
  },
  {
    slug: "nao-tropece-na-redacao",
    title: "Não Tropece na Redação",
    format: "E-book",
    image: "/assets/TabletNTR.png",
    description:
      "Dicas práticas para escrever atas, comunicados e avisos do condomínio com clareza, sem erros de português e sem gerar ruído com moradores.",
    externalHref: "#",
  },
  {
    slug: "financas-em-foco",
    title: "Finanças em Foco",
    format: "E-book · Haus",
    image: "/assets/TabletFCF.png",
    description:
      "Um panorama simples sobre organização financeira do condomínio: onde o dinheiro está indo, como montar previsão orçamentária e evitar surpresas no caixa.",
    externalHref: "#",
  },
];

export function getEbook(slug: string) {
  return ebooks.find((ebook) => ebook.slug === slug);
}
