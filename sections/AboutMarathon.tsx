export interface Phase {
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  title: string;
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  description: string;
}

export interface Props {
  anchorId?: string;
  title?: string;
  titleGradient?: string;
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  description?: string;
  phases?: Phase[];
}

export default function AboutMarathon({
  title = "Sobre a ",
  titleGradient = "Maratona Tech",
  description =
    "A Maratona Tech é a maior competição de tecnologia entre escolas do Brasil, idealizada pelo Movimento Tech e realizada pela Associação Cactus. Seu objetivo principal despertar o interesse de estudantes pela tecnologia, independentemente de seu conhecimento prévio ou recursos escolares. Além disso, conecta jovens da educação básica com oportunidades e possibilidades em tecnologia. Ela acontece em 2 fases:",
  phases = [
    {
      title: "12 de agosto a 15 de setembro de 2023",
      description:
        "Professores recebem uma formação exclusiva e um desafio para aplicar em sala de aula, relacionado a carreiras e usos práticos da tecnologia na comunidade dos estudantes. Os alunos realizam o estudo, apresentam os trabalhos e” por “pesquisam, em grupo, sobre tecnologia e carreiras. Os alunos destaque se classificam para a Fase 2, a fase final da competição.",
    },
    {
      title: "30 de setembro a 13 de outubro de 2023",
      description:
        "A fase final da competição inclui ciclos de aprendizagem sobre pensamento computacional, auxiliados …” por “Estudantes recebem, individualmente pelo Zeca, nosso chatbot do WhatsApp, 8 ciclos de conteúdo de pensamento computacional e lógica. Ao final de cada ciclo, eles respondem um quiz de 6 a 8 questões. A partir do desempenho nos quizzes, os alunos são premiados, recebendo medalhas, bolsas de estudo em cursos de tecnologia, certificados e convite para o Conexão Futuro.",
    },
  ],
  anchorId = "",
}: Props) {
  return (
    <nav
      id={anchorId}
      class="bg-slate-950 pt-20 pb-36 space-y-10 text-white px-8 lg:px-0"
    >
      <div class="lg:w-8/12 mx-auto">
        <h1 class="text-xl lg:text-4xl text-center font-sora">
          <span
            class={`text-xl lg:text-4xl text-center font-sora`}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          >
          </span>
          <span
            class="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold"
            dangerouslySetInnerHTML={{
              __html: titleGradient,
            }}
          >
          </span>
        </h1>
        <div
          class="space-y-3 my-5 text-center"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        >
        </div>
        <div class="grid lg:grid-cols-1 gap-5 mt-20 mb-8">
          {phases.map((phase, index) => (
            <div
              class={`rounded-2xl bg-gradient-to-b ${
                index % 2 == 0
                  ? "from-blue-500 to-purple-500"
                  : "from-purple-500 to-blue-500"
              } p-px relative`}
            >
              <div class="bg-slate-950 h-full rounded-2xl px-10 pt-8 pb-3">
                <h2
                  class={`text-3xl font-light font-sora ${
                    index % 2 == 0 ? "bg-blue-500" : "bg-purple-500"
                  } text-blue-950 absolute rounded-xl p-2 mx-auto right-0 left-0 w-4/12 -top-8 text-center`}
                >
                  Fase {index + 1}
                </h2>
                <h3
                  class="font-bold text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html: phase.title,
                  }}
                >
                </h3>
                <div
                  class="my-5 text-center"
                  dangerouslySetInnerHTML={{
                    __html: phase.description,
                  }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
