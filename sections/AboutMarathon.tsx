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

export type icons =
  | "person-add-outline"
  | "rocket-outline"
  | "desktop-outline"
  | "trophy-outline"
  | "book-outline"
  | "airplane-outline"
  | "laptop-outline"
  | "layers-outline"
  | "terminal-outline"
  | "medal-outline"
  | "newspaper-outline"
  | "earth-outline";

export interface Info {
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  description: string;
  icon: icons;
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
  infos?: Info[];
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
  infos = [
    {
      description: "Inscrição gratuita para escolas de todo o Brasil",
      icon: "person-add-outline",
    },
    {
      description: "Conteúdo formativo com muita diversão",
      icon: "rocket-outline",
    },
    {
      description:
        "Não precisa ter conhecimento prévio, nem laboratório de informática",
      icon: "desktop-outline",
    },
    {
      description: "Premiação para estudantes, professores e escolas",
      icon: "trophy-outline",
    },
    {
      description: "Conteúdos alinhados à BNCC",
      icon: "book-outline",
    },
  ],
}: Props) {
  return (
    <nav
      id={anchorId}
      class="bg-slate-950 pt-20 pb-36 space-y-10 text-white px-8 lg:px-0"
    >
      <div class="text-white -mt-[120px] mb-8 px-8 lg:px-0">
        <div class="lg:w-10/12 mx-auto rounded-2xl bg-purple-900/[.70] backdrop-blur-xl p-8 shadow-lg border-4 border-yellow-500">
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {infos.map((info, index) => (
              <div
                class={`${
                  infos.length - 1 == index
                    ? "col-span-2 lg:col-span-1 flex flex-col justify-center text-center"
                    : "flex flex-col justify-center text-center"
                }`}
              >
                <span class="flex text-yellow-500 text-5xl justify-center items-center">
                  {/*// @ts-ignore*/}
                  <ion-icon name={info.icon}></ion-icon>
                </span>
                <div
                  class="text-sm mt-3"
                  dangerouslySetInnerHTML={{
                    __html: info.description,
                  }}
                >
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
                  } text-blue-950 absolute whitespace-nowrap rounded-xl p-2 mx-auto right-0 left-0 w-4/12 -top-8 text-center`}
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
