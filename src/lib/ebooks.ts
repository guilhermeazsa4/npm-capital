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
    slug: "revista-direito-e-condominio",
    title: "Revista Direito e Condomínio",
    format: "Periódico #46",
    image: "/assets/TabletRDC.png",
    description:
      "A edição mais recente do periódico especializado em direito condominial, com artigos assinados por especialistas, análises de jurisprudência e orientações práticas para o dia a dia da gestão condominial.",
    externalHref: "https://www.editorabonijuris.com.br/periodicos/revista-direito-e-condominio/",
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
];

export function getEbook(slug: string) {
  return ebooks.find((ebook) => ebook.slug === slug);
}
