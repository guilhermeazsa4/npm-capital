export interface Revista {
  number: number;
  date: string;
  theme: string;
  description: string;
  image: string;
}

export const revistas: Revista[] = [
  {
    number: 46,
    date: "Jul/Out 2026",
    theme: "Proteção! Síndicos devem agir em casos de violência doméstica?",
    description:
      "O papel do síndico diante de situações de violência doméstica identificadas no condomínio, e até onde vai a responsabilidade da gestão nesses casos.",
    image: "/assets/revistas/46.jpg",
  },
  {
    number: 45,
    date: "Fev/Abr 2026",
    theme: "Animais de estimação em condomínio",
    description:
      "O que a convenção pode e não pode restringir sobre a presença de animais de estimação nas unidades e áreas comuns.",
    image: "/assets/revistas/45.jpg",
  },
  {
    number: 44,
    date: "Nov/Jan 2026",
    theme: "WhatsApp do condomínio: canal de comunicação eficiente, mas com limites",
    description:
      "Como usar grupos de WhatsApp para a comunicação condominial sem gerar conflitos ou expor moradores indevidamente.",
    image: "/assets/revistas/44.png",
  },
  {
    number: 43,
    date: "Ago/Out 2025",
    theme: "Acesso de entregadores em condomínio",
    description:
      "Regras e boas práticas para organizar a entrada de entregadores no condomínio sem comprometer a segurança dos moradores.",
    image: "/assets/revistas/43.png",
  },
  {
    number: 42,
    date: "Maio/Julho 2025",
    theme: "Instalação de carregador para carro elétrico em condomínio",
    description:
      "Como lidar com pedidos de instalação de carregadores elétricos nas garagens, da autorização em assembleia à divisão de custos.",
    image: "/assets/revistas/42.png",
  },
  {
    number: 41,
    date: "Fev/Abr 2025",
    theme: "Reformas em condomínio",
    description:
      "O que avaliar antes de autorizar reformas nas unidades e nas áreas comuns, evitando conflitos e problemas estruturais futuros.",
    image: "/assets/revistas/41.png",
  },
  {
    number: 40,
    date: "Nov/Jan 2025",
    theme: "Orientação para o síndico eficaz",
    description:
      "Práticas e atitudes que ajudam o síndico a conduzir a gestão do condomínio com mais organização e eficiência.",
    image: "/assets/revistas/40.jpg",
  },
  {
    number: 39,
    date: "Ago/Out 2024",
    theme: "Direito básico dos condôminos",
    description:
      "Um panorama dos direitos e deveres fundamentais de quem mora em condomínio, direto ao ponto e sem juridiquês.",
    image: "/assets/revistas/39.jpg",
  },
  {
    number: 38,
    date: "Maio/Julho 2024",
    theme: "Poda de árvores em condomínio",
    description:
      "Orientações sobre poda e manutenção de árvores nas áreas comuns, incluindo responsabilidades e cuidados legais envolvidos.",
    image: "/assets/revistas/38.jpg",
  },
  {
    number: 37,
    date: "Fev/Abr 2024",
    theme: "Prestação de contas",
    description:
      "Como organizar e apresentar as contas do condomínio com transparência, reduzindo questionamentos em assembleia.",
    image: "/assets/revistas/37.jpg",
  },
];

export function getRevista(number: number) {
  return revistas.find((revista) => revista.number === number);
}
