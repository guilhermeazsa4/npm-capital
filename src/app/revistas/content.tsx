"use client";

import { BookOpen, Calendar, CircleCheck } from "lucide-react";
import Link from "next/link";
import { FloatingActions, MotionBlock } from "@/components/ui";

const revistas = [
  {
    edition: "Edição 12",
    date: "Junho 2026",
    title: "Inadimplência condominial: o que mudou na lei",
    summary:
      "As alterações recentes no Código Civil e na jurisprudência do STJ mudaram prazos e ferramentas de cobrança para condomínios. Nesta edição, mostramos o que muda na prática para síndicos e administradoras.",
    topics: [
      "Novo prazo de purgação da mora antes do protesto",
      "Como o protesto em cartório acelera a recuperação",
      "Jurisprudência recente sobre penhora de imóvel do devedor",
    ],
  },
  {
    edition: "Edição 11",
    date: "Abril 2026",
    title: "Como aprovar o orçamento anual sem desgaste em assembleia",
    summary:
      "Levar um orçamento claro e bem justificado reduz discussões e acelera a aprovação. Reunimos um roteiro prático usado por síndicos profissionais para conduzir essa pauta com transparência.",
    topics: [
      "Como apresentar reajustes sem parecer arbitrário",
      "Modelo de comparativo ano a ano para a assembleia",
      "Perguntas mais frequentes dos condôminos e como responder",
    ],
  },
  {
    edition: "Edição 10",
    date: "Fevereiro 2026",
    title: "Fundo de reserva: quanto guardar e quando usar",
    summary:
      "Fundo de reserva não é para tapar buraco de inadimplência — é para emergência real. Explicamos como calcular o percentual ideal e critérios objetivos para autorizar o uso.",
    topics: [
      "Percentual recomendado por porte de condomínio",
      "Critérios para diferenciar emergência de manutenção de rotina",
      "Como reconstituir o fundo depois de um uso emergencial",
    ],
  },
  {
    edition: "Edição 9",
    date: "Dezembro 2025",
    title: "Troca de administradora sem prejudicar o caixa",
    summary:
      "A transição entre administradoras é o momento de maior risco para o fluxo de caixa do condomínio. Veja um checklist para não perder o controle da arrecadação nesse período.",
    topics: [
      "Documentos que precisam ser transferidos formalmente",
      "Como evitar duplicidade ou atraso na cobrança de boletos",
      "Prazo recomendado para prestação de contas da gestão anterior",
    ],
  },
  {
    edition: "Edição 8",
    date: "Outubro 2025",
    title: "Cobrança judicial: quando vale a pena acionar a Justiça",
    summary:
      "Nem toda inadimplência precisa virar processo. Mostramos os critérios que administradoras usam para decidir entre negociação, protesto e ação judicial.",
    topics: [
      "Custo médio de uma ação de cobrança condominial",
      "Alternativas à Justiça que resolvem a maior parte dos casos",
      "Como a garantia de receita elimina essa decisão para o síndico",
    ],
  },
  {
    edition: "Edição 7",
    date: "Agosto 2025",
    title: "Reforma e obras: como planejar sem comprometer o caixa",
    summary:
      "Obras de grande porte exigem planejamento financeiro que vai além do orçamento mensal. Explicamos como estruturar uma captação segura para reformas estruturais.",
    topics: [
      "Rateio extra x uso de fundo de obras: prós e contras",
      "Como negociar prazos com fornecedores sem parar a obra",
      "Antecipação de recebíveis como alternativa ao rateio extra",
    ],
  },
];

export function RevistasContent() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="relative z-10 mx-auto max-w-[1220px] text-center">
          <MotionBlock>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
              Conteúdo
            </p>
            <h1 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight text-[#14344E] sm:text-4xl md:text-5xl lg:text-6xl">
              Revistas NPG
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#14344E]/70 md:mt-6 md:text-lg md:leading-8">
              Edições completas com análises de mercado, jurídico condominial e boas práticas de gestão para síndicos e administradoras — o conteúdo inteiro, direto aqui na página.
            </p>
          </MotionBlock>
        </div>
      </section>

      <section className="section-grid bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col gap-8 lg:gap-10">
            {revistas.map((r, i) => (
              <MotionBlock key={r.edition} delay={i * 0.05}>
                <article className="grid gap-6 overflow-hidden rounded-[8px] border border-[#14344E]/10 bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.06)] lg:grid-cols-[220px_1fr] lg:gap-10 lg:p-8">
                  <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:justify-center lg:gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[8px] bg-[#14344E] lg:h-full lg:w-full lg:min-h-[160px]">
                      <BookOpen className="h-9 w-9 text-[#F1C75B] lg:h-14 lg:w-14" />
                    </div>
                    <div>
                      <p className="text-base font-black text-[#F1C75B] lg:text-lg">{r.edition}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#14344E]/55">
                        <Calendar aria-hidden="true" className="h-4 w-4" />
                        {r.date}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-black leading-snug text-[#14344E] lg:text-2xl">
                      {r.title}
                    </h2>
                    <p className="mt-3 text-base leading-8 text-[#14344E]/72">{r.summary}</p>

                    <ul className="mt-5 flex flex-col gap-2.5">
                      {r.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-base leading-7 text-[#14344E]/85">
                          <CircleCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#1FAF67]" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionBlock>
            ))}
          </div>

          <MotionBlock delay={0.2} className="mt-14 rounded-[8px] border border-[#14344E]/10 bg-[#14344E] p-8 text-center text-white lg:p-10">
            <h2 className="text-2xl font-black lg:text-3xl">Quer receber a próxima edição em primeira mão?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-white/75">
              Fale com nosso time e entre para a lista de distribuição gratuita da Revista NPG para síndicos e administradoras.
            </p>
            <Link
              href="/contato#formularios"
              className="group relative mt-6 inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-[16px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 text-base font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92"
            >
              Quero receber as próximas edições
            </Link>
          </MotionBlock>
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
