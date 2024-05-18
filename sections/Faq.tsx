import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Question {
  title: string;
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  answer: string;
}

export interface Props {
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  questions?: Question[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title =
    "<h1 class='text-2xl lg:text-3xl font-bold text-center font-sora text-purple-800'>Ficou com alguma <span class='underline decoration-pink-600 decoration-wavy'>dúvida?</span></h1>",
  questions = [
    {
      title: "Qual o objetivo da Maratona Tech?",
      answer:
        "A Maratona Tech é uma jornada de aprendizagem cujo objetivo é despertar o interesse de jovens para o mundo da tecnologia por meio de desafios de pensamento computacional e lógica, além de desenvolver o protagonismo juvenil.",
    },
    {
      title: "Como vai funcionar a Maratona Tech?",
      answer:
        "Ela ocorrerá em duas fases. Na primeira, haverá uma formação para professores representantes de cada escola para eles aplicarem um desafio relacionado a projeto de vida e carreiras em tecnologia. Já na segunda fase, os estudantes deverão responder a quizes via WhatsApp, além de receberem conteúdos relacionados a pensamento computacional e lógica.",
    },
    {
      title: "Qual é o cronograma da Maratona Tech?",
      answer:
        "Período de inscrição - 20/maio a 04/ago | Fase 1 - 12/ago até 15/set | Fase 2 - 30/set até 13/out | Cerimônia de Premiação - 27/nov",
    },
    {
      title: "Preciso pagar alguma coisa?",
      answer:
        "Não, todas as formações e acesso às plataformas será gratuito e direcionada para o público de cada fase.",
    },
    {
      title: "O que é preciso para participar?",
      answer:
        "É necessário que se tenha acesso a um dispositivo com WhatsApp para a realização das atividades. Caso não o tenha, o(a) participante poderá utilizar o aparelho de outra pessoa (familiar, amigo) que não esteja inscrito na Maratona Tech, uma vez que cada número de WhatsApp só pode estar associado a um único participante.",
    },
    {
      title: "Qual é o papel do(a) professor(a) durante a Maratona?",
      answer:
        "Na fase 1, o(a) professor(a) aplicará o desafio com as suas turmas e selecionará os representantes para a fase 2. Já na fase seguinte, ele(a) terá o papel de apoiar o engajamento e desenvolvimento dos estudantes.",
    },
    {
      title:
        "Não tenho conhecimento nenhum sobre tecnologia, posso participar?",
      answer:
        "Sim. O programa visa apresentar o mundo da tecnologia e despertar nos jovens o desejo de ingressar na carreira tech, não sendo necessário conhecimento prévio sobre o tema.",
    },
  ],
}: Props) {
  return (
    <div class="lg:w-8/12 pb-20 mx-auto px-5 lg:px-0">
      <div class="flex flex-col gap-8 justify-between">
        <div
          class="text-center"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <div class="flex flex-col gap-2">
          {questions?.map((question) => (
            <details class="w-full p-5 border border-purple-800 col-span-2 sm:col-span-1 rounded-lg bg-white/[.05] group">
              <summary class="flex items-center text-[1rem] leading-normal cursor-pointer flex">
                <span class="flex-auto group-open:text-[#22C55E]">
                  {question.title}
                </span>
                <span class="flex-none transition group-open:rotate-180">
                  <svg
                    width="27"
                    height="28"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17674 12.5577L8.17676 12.5577L8.5303 12.2041C8.53031 12.2041 8.53031 12.2041 8.53032 12.2041C8.62794 12.1065 8.78621 12.1065 8.88385 12.2041C8.88385 12.2041 8.88385 12.2041 8.88385 12.2041L15.6464 18.9667L16 19.3202L16.3535 18.9667L23.1161 12.2041C23.2138 12.1064 23.372 12.1064 23.4696 12.2041L23.8232 12.5577C23.9208 12.6553 23.9208 12.8135 23.8232 12.9112L16.1767 20.5577C16.0791 20.6553 15.9209 20.6553 15.8232 20.5577L8.17674 12.9112C8.17674 12.9112 8.17674 12.9112 8.17674 12.9112C8.07911 12.8135 8.07911 12.6553 8.17674 12.5577Z"
                      fill="#18181B"
                      stroke="#18181B"
                    />
                  </svg>
                </span>
              </summary>
              <p
                class="leading-relaxed mt-3 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </p>
            </details>
          ))}
        </div>
        <div>
          <h2 class="text-2xl font-bold text-center mb-1 font-sora text-purple-800">
            Ainda restam dúvidas?
          </h2>
          <p class="text-center">
            Entre em contato conosco pelo e-mail <b>maratona@movtech.org</b>
          </p>
        </div>
      </div>
    </div>
  );
}
