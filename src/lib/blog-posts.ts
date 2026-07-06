export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "inadimplencia-condominial-cresce-mesmo-em-condominios-bem-administrados",
    category: "Inadimplência",
    date: "28/06/2026",
    title: "Por que a inadimplência condominial cresce mesmo em condomínios bem administrados",
    excerpt: "Mesmo condomínios bem administrados convivem com atrasos recorrentes.",
    image: "/assets/analog-landscape-city-with-buildings.jpg",
    imageAlt: "Vista de prédios residenciais em São Paulo",
    paragraphs: [
      "É comum achar que a inadimplência é sinal de má gestão, mas a realidade é mais complexa: mesmo condomínios com administração exemplar convivem com atrasos recorrentes, porque a causa raiz costuma estar na vida financeira do condômino, não no boleto em si.",
      "O problema aparece quando esse atraso pontual se acumula: o condomínio precisa cobrir o rateio de quem não pagou usando o fundo de reserva ou atrasando fornecedores, o que gera um efeito cascata — menos manutenção, mais reclamação, e o síndico assumindo o papel de cobrador informal dos vizinhos.",
      "A garantia de receita resolve esse ciclo pela raiz: o condomínio recebe o valor previsto todo mês, e a cobrança do inadimplente passa a ser problema de quem tem estrutura jurídica e financeira para tratar disso — não do síndico.",
      "A situação se agrava quando há múltiplos inadimplentes ao mesmo tempo. Alguns condomínios chegam a perder 20% a 30% da arrecadação mensal por atrasos, o que compromete a qualidade dos serviços e gera frustrações entre os moradores que pagam em dia.",
      "Muitos síndicos tentam cobrar por conta própria, gastando horas de seu tempo pessoal em ligações, mensagens e visitas. Isso não só é ineficaz como também prejudica a relação entre vizinhos, transformando o síndico em vilão da história.",
      "Quando uma solução como a garantia de receita entra em cena, tudo muda. O condomínio deixa de depender de quem não paga e passa a ter números previsíveis para planejar o mês. É simples, mas funciona.",
    ],
  },
  {
    slug: "sinais-de-que-seu-condominio-precisa-de-mais-previsibilidade-financeira",
    category: "Gestão",
    date: "15/06/2026",
    title: "5 sinais de que seu condomínio precisa de mais previsibilidade financeira",
    excerpt: "Sinais de que falta previsibilidade financeira na arrecadação.",
    image: "/assets/brigadeiro-faria-lima-avenue-sao-paulo-brazil.jpg",
    imageAlt: "Avenida Brigadeiro Faria Lima em São Paulo",
    paragraphs: [
      "Orçamento aprovado em assembleia que não se sustenta até o meio do ano, obras adiadas por falta de caixa, fundo de reserva usado para cobrir despesa corrente — esses são sintomas de um problema mais profundo: falta de previsibilidade na arrecadação.",
      "Se o síndico não consegue afirmar com segurança quanto vai entrar de caixa no próximo trimestre, qualquer planejamento vira aposta. E decisões importantes — como uma reforma estrutural ou contratação de novo fornecedor — acabam sendo adiadas por insegurança financeira, não por falta de necessidade.",
      "Ter 100% da arrecadação garantida devolve a capacidade de planejar com números reais, e não com estimativas otimistas que dependem do comportamento de pagamento dos condôminos.",
      "O efeito dessa falta de previsibilidade vai além das contas. Ela afeta o moral do síndico, que fica ansioso mês a mês sem saber se conseguirá cobrir as despesas. Ela afeta também a confiança dos condôminos, que veem atrasos em manutenção e ficam frustrados.",
      "Algumas administradoras tentam contornar isso fazendo empréstimos para cobrir o caixa, mas isso só adia o problema e gera dívidas. Outros condomínios simplesmente deixam de fazer manutenção preventiva, o que causa problemas maiores e mais caros depois.",
      "A previsibilidade financeira não é luxo, é necessidade. Sem ela, um condomínio não consegue ser bem administrado, não importa quanto esforço o síndico faça.",
    ],
  },
  {
    slug: "o-que-muda-na-cobranca-condominial-com-decisoes-recentes-do-stj",
    category: "Jurídico",
    date: "02/06/2026",
    title: "O que muda na cobrança condominial com as decisões recentes do STJ",
    excerpt: "O que muda na cobrança condominial com as decisões do STJ.",
    image: "/assets/sao-paulo-aerial-bridge-hero-zoomed-out.webp",
    imageAlt: "Vista aérea da ponte estaiada de São Paulo",
    paragraphs: [
      "Decisões recentes do Superior Tribunal de Justiça reforçaram o entendimento de que a cota condominial tem natureza propter rem, o que amplia as possibilidades de cobrança direta sobre o imóvel, mesmo em casos de venda ou sucessão.",
      "Na prática, isso significa mais segurança jurídica para protestar dívidas e, em último caso, buscar a penhora do imóvel — mas exige que a documentação da cobrança esteja impecável desde a notificação inicial até a ata de aprovação do débito em assembleia.",
      "Administradoras que já delegam a garantia de receita para uma estrutura especializada não precisam acompanhar essas mudanças de perto: a atualização jurídica passa a ser responsabilidade de quem assume a cobrança.",
      "O aspecto propter rem é importante porque vincula a dívida ao imóvel, não apenas à pessoa. Isso significa que se um morador vender seu apartamento com dívidas condominiais em atraso, o novo proprietário herda a responsabilidade de pagar. Essa mudança jurisprudencial fortaleceu muito a posição do condomínio na cobrança.",
      "No entanto, para aproveitar essas ferramentas jurídicas, é preciso estar preparado. Documentação incompleta ou procedimentos incorretos podem anular a cobrança, mesmo com a lei do seu lado. Por isso, muitos condomínios deixam essa responsabilidade para quem é especializado nisso.",
      "Com a garantia de receita, o condomínio não precisa se preocupar com os detalhes jurídicos. A cobrança fica a cargo de quem sabe fazer, deixando o síndico livre para cuidar da gestão do prédio.",
    ],
  },
  {
    slug: "fundo-de-obras-x-rateio-extra-qual-usar-para-reformas-grandes",
    category: "Financeiro",
    date: "20/05/2026",
    title: "Fundo de obras x rateio extra: qual usar para reformas grandes",
    excerpt: "Rateio extra ou fundo de obras: qual usar em reformas grandes.",
    image: "/assets/bannerTeamWorking.jpg",
    imageAlt: "Equipe reunida planejando um projeto",
    paragraphs: [
      "Quando uma reforma estrutural aparece — troca de fachada, impermeabilização, modernização de elevadores — o síndico geralmente tem duas opções: um rateio extra pontual ou a criação de um fundo de obras ao longo de vários meses.",
      "O rateio extra resolve rápido, mas costuma gerar resistência em assembleia, principalmente em condomínios com renda mista. Já o fundo de obras exige planejamento antecipado e disciplina para não ser desviado para despesas correntes.",
      "Uma terceira via, menos discutida, é a antecipação de recebíveis: usar a arrecadação futura já garantida como lastro para iniciar a obra sem esperar o fundo se formar por completo — mantendo o caixa do dia a dia intacto.",
      "O rateio extra tem seus riscos. Alguns moradores podem não concordar com o valor e ficar em atraso, piorando a inadimplência. Outros podem simplesmente não pagar, sabendo que o condomínio precisa da obra. Isso transforma um problema estrutural em um problema de caixa ainda maior.",
      "O fundo de obras, por sua vez, requer que o síndico congele uma quantia da mensalidade todo mês. Isso é bom para planejamento, mas reduz o caixa operacional mensal e pode gerar reclamações de quem não vê necessidade na obra agora.",
      "Com a garantia de receita, a situação muda completamente. O condomínio tem arrecadação garantida 100%, o que torna viável começar a obra sabendo que o caixa virá. Não é necessário escolher entre rateio extra ou fundo de obras — é possível fazer de forma estruturada.",
    ],
  },
  {
    slug: "como-conduzir-uma-assembleia-sobre-inadimplencia-sem-virar-cobranca-pessoal",
    category: "Gestão",
    date: "08/05/2026",
    title: "Como conduzir uma assembleia sobre inadimplência sem virar cobrança pessoal",
    excerpt: "Como discutir inadimplência em assembleia sem virar cobrança pessoal.",
    image: "/assets/BannerEmpresa.jpg",
    imageAlt: "Reunião de condomínio em assembleia",
    paragraphs: [
      "Pautas sobre inadimplência são as que mais desgastam a relação entre síndico e condôminos, porque frequentemente descambam para acusações diretas a vizinhos específicos, mesmo quando a intenção é discutir o problema de forma institucional.",
      "Uma condução eficaz separa o debate em dois planos: os números agregados (percentual de inadimplência, impacto no caixa, prazo médio de atraso) e as medidas institucionais adotadas (notificação, protesto, ação judicial) — sem citar nomes ou unidades em plenário.",
      "Quando existe uma garantidora de receita envolvida, essa pauta praticamente desaparece da assembleia: o caixa já chega completo, e a cobrança segue como um processo administrado por terceiros, fora da relação de vizinhança.",
      "O síndico que tenta cobrar pessoalmente fica em uma posição difícil. Se for muito firme, é visto como vilão. Se for brando, perderá autoridade e embasamento. Outras pessoas podem questionar suas decisões, gerar conflitos pessoais, e isso afeta o clima do prédio inteiro.",
      "Quando a pauta é sobre números e medidas institucionais, o tom muda. Deixa de ser pessoal e passa a ser administrativo. Os condôminos que pagam em dia se sentem protegidos pelas medidas. Os que atrasam sabem que é uma questão institucional, não pessoal.",
      "Essa separação é saudável para o condomínio como um todo. Mantém relacionamentos em pé, reduz conflitos e deixa o síndico com moral alta para tomar outras decisões difíceis que a administração demanda.",
    ],
  },
  {
    slug: "como-escolher-uma-administradora-de-condominios-confiavel",
    category: "Gestão",
    date: "24/04/2026",
    title: "Como escolher uma administradora de condomínios confiável",
    excerpt: "Critérios objetivos para avaliar uma administradora antes de contratar.",
    image: "/assets/BannerEmpresa.jpg",
    imageAlt: "Reunião de condomínio em assembleia",
    paragraphs: [
      "Trocar de administradora é uma decisão que afeta diretamente o dia a dia financeiro do condomínio, mas boa parte dos síndicos escolhe com base apenas em preço, sem avaliar critérios que evitam dor de cabeça mais à frente.",
      "Vale checar histórico de atendimento a condomínios de porte semelhante, clareza na prestação de contas mensal, prazo médio de resposta a chamados e, principalmente, como a administradora trata a inadimplência — se ela cobra ativamente ou apenas emite o boleto.",
      "Administradoras que trabalham em conjunto com uma garantidora de receita tendem a oferecer previsibilidade maior, já que o repasse ao condomínio deixa de depender do comportamento de pagamento de cada condômino.",
      "Escolher apenas pelo preço é armadilha comum. Uma administradora muito barata pode estar oferecendo um serviço superficial: pouco contato, prestação de contas confusa, demora em resolver problemas. Isso sai caro depois.",
      "O histórico é importante. Se a administradora atua com outros condomínios similares ao seu, significa que tem experiência com os desafios que você vai enfrentar. Vale conversar com síndicos de outros condomínios da mesma administradora para ouvir a experiência deles.",
      "Uma boa administradora não apenas coleta a mensalidade, mas atua como parceira do síndico. Oferece relatórios claros, responde rápido, resolve problemas antes que virem crise. Se trabalha com garantia de receita, ainda melhor — significa que tem estrutura para cobrar e não deixa a inadimplência comprometer o caixa.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? blogPosts[index - 1] : null,
    next: index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  };
}
