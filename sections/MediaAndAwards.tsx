import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { icons } from "./ImpactAndTestimonials.tsx";

export interface Card {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  image?: ImageWidget;
  cta?: {
    href?: string;
    text?: string;
  };
}

export interface Media {
  title?: string;
  titleGradient?: string;
  cards?: Card[];
}

export interface Pin {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
  icon?: icons;
  /** @format color-input */
  color?: string;
}

export interface Awards {
  title?: string;
  titleGradient?: string;
  pins?: Pin[];
  cta?: {
    href?: string;
    text?: string;
  };
}

export interface Props {
  anchorId?: string;
  topFloatingImage?: ImageWidget;
  rightMiddleFloatingImage?: ImageWidget;
  bottomFloatingImage?: ImageWidget;
  media?: Media;
  awards?: Awards;
}

export default function MediaAndAwards({
  anchorId = "",
  topFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/52483561-be2e-4090-bdf0-377a15259c4c",
  rightMiddleFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/0be49edf-03fc-4887-8a70-64a907b4362b",
  bottomFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/95935472-e0ce-4598-bb4f-03ebea2ef4b5",
  media = {
    title: "Na ",
    titleGradient: "Mídia",
    cards: [
      {
        title:
          "Com mais de 600 mil alunos, Maratona Tech tem seis vezes mais inscritos",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/3e458f36-5529-4667-b9b2-8fb923ca377e",
        cta: {
          text: "LEIA MAIS",
          href: "#",
        },
      },
      {
        title:
          "Escolas públicas e privadas podem participar de maratona de tecnologia",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/ad8e7ab4-ff94-4740-b0b7-e1c2a2dc980a",
        cta: {
          text: "LEIA MAIS",
          href: "#",
        },
      },
      {
        title: "Estudantes da Maratona Tech se formam em Salvador",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/739f367f-0c9f-4ffb-bf07-e351376151b5",
        cta: {
          text: "LEIA MAIS",
          href: "#",
        },
      },
    ],
  },
  awards = {
    title: "Veja o que estudantes e professores podem ganhar na",
    titleGradient: "Maratona Tech:",
    pins: [
      {
        description: "Viagens",
        icon: "airplane-outline",
        color: "#a855f7",
      },
      {
        description: "Notebooks",
        icon: "laptop-outline",
        color: "#eab308",
      },
      {
        description: "Cursos Tecnológicos",
        icon: "layers-outline",
        color: "#ec4899",
      },
      {
        description: "Imersões Tech em grandes empresas Brasileiras",
        icon: "terminal-outline",
        color: "#3b82f6",
      },
      {
        description: "Medalhas",
        icon: "medal-outline",
        color: "#a855f7",
      },
      {
        description: "Certificados",
        icon: "newspaper-outline",
        color: "#eab308",
      },
      {
        description: "Reconhecimento Nacional",
        icon: "earth-outline",
        color: "#ec4899",
      },
    ],
    cta: {
      text: "Faça sua inscrição",
      href: "#",
    },
  },
}: Props) {
  return (
    <div
      id={anchorId}
      class="bg-slate-950 pt-20 pb-36 space-y-20 text-white px-8 lg:px-0 -mt-10 relative"
    >
      <Image
        width={400}
        class="absolute w-[150px] -bottom-[50px] -left-[50px] lg:left-0 lg:-bottom-[80px] lg:w-[300px]"
        src={bottomFloatingImage}
        alt={bottomFloatingImage}
        decoding="async"
        loading="lazy"
      />
      <Image
        width={400}
        class="absolute w-[200px] -top-[140px] right-0 lg:top-[800px] lg:w-[300px] lg:right-0 z-10"
        src={rightMiddleFloatingImage}
        alt={rightMiddleFloatingImage}
        decoding="async"
        loading="lazy"
      />
      <Image
        width={400}
        class="absolute w-[200px] top-[1300px] -left-[90px] lg:left-0 lg:-top-[150px] lg:w-[300px] z-10"
        src={topFloatingImage}
        alt={topFloatingImage}
        decoding="async"
        loading="lazy"
      />
      <div class="lg:w-10/12 mx-auto">
        <h1 class="text-3xl lg:text-4xl text-center font-sora">
          {media.title}
          <span class="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
            {media.titleGradient}
          </span>
        </h1>
        <div class="grid lg:grid-cols-3 gap-5 my-5">
          {media.cards.map((card) => (
            <div class="rounded-2xl bg-gradient-to-b from-blue-500 to-purple-500 p-px relative">
              <div class="bg-slate-950 h-full rounded-2xl p-6 flex flex-col justify-between">
                <h3 class="font-bold text-xl">{card.title}</h3>
                <Image
                  width={400}
                  class="rounded-xl my-3"
                  src={card.image}
                  alt={card.image}
                  decoding="async"
                  loading="lazy"
                />
                <a
                  href={card.cta.href}
                  class={`bg-gradient-to-r from-green-500 to-lime-500 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center`}
                  target={card.cta.href.includes("http") ? "_blank" : "_self"}
                >
                  {card.cta.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="lg:w-8/12 mx-auto">
        <h1 class="text-xl lg:text-4xl text-center font-sora">
          {awards.title}
          <span class="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
            {awards.titleGradient}
          </span>
        </h1>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 my-8 justify-center items-start">
          {awards.pins.map((pin, index) => (
            <div
              class={awards.pins.length - 1 == index
                ? "col-span-2 lg:col-span-3 text-center text-white flex flex-col justify-center items-center"
                : "text-center text-white flex flex-col justify-center items-center"}
            >
              <span
                class="text-purple-500 text-7xl mb-3 flex"
                style={{
                  color: pin.color,
                }}
              >
                {/*// @ts-ignore*/}
                <ion-icon name={pin.icon}></ion-icon>
              </span>
              <h2>{pin.description}</h2>
            </div>
          ))}
        </div>
      </div>
      <div class="lg:w-4/12 mx-auto">
        <a
          href={awards.cta.href}
          class={`text-sm lg:text-base p-3 bg-green-600 font-extrabold uppercase flex uppercase text-center justify-center bg-gradient-to-r from-green-500 to-lime-500 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center`}
          target={awards.cta.href.includes("http") ? "_blank" : "_self"}
        >
          {awards.cta.text}
        </a>
      </div>
    </div>
  );
}
