import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

export interface subTitle {
  title: string;
  description: string;
}

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

export interface Testimonial {
  youtubeId: string;
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  description: string;
}

export interface Props {
  anchorId?: string;
  anchorIdTestimonials?: string;
  leftFloatingImage?: ImageWidget;
  rightFloatingImage?: ImageWidget;
  mainImage?: ImageWidget;
  title?: string;
  subTitles?: subTitle[];
  buttonFloatingImage?: ImageWidget;
  cta?: CTA;
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  testimonialTitle?: string;
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  testimonialDescription?: string;
  testimonials?: Testimonial[];
}

export default function ImpactAndTestimonials({
  leftFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/6a063e13-77df-45a2-837c-8162f11f6f00",
  rightFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/df4bfd1b-bbe7-4965-894b-e4e47173c300",
  mainImage =
    "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/mapa.svg",
  title = "Impactos 2023",
  subTitles = [
    {
      title: "+914 mil",
      description: "estudantes",
    },
    {
      title: "+1.000",
      description: "cidades participantes",
    },
    {
      title: "100%",
      description: "dos estados brasileiros",
    },
  ],
  buttonFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/df712c98-b498-472c-89c1-b76bb7fb7bc6",
  cta = {
    id: "",
    href: "https://portalolimpico.com.br/pagina_cadastro",
    text: "Faça sua inscrição Gratuita.",
  },
  testimonialTitle = "Depoimentos",
  testimonialDescription = "estudantes e professores",
  testimonials = [
    {
      youtubeId: "2I9osBwktcQ?si=ZlRkUrXUf1sp8PnE",
      description: "Sarah Alves - Jijoca de Jericoacara - Ceará",
    },
    {
      youtubeId: "oo9eF7U4Lkw?si=uv8fhNSAAnO5PgVr",
      description: "Amanda Pires - Nova Esperança - Paraná",
    },
    {
      youtubeId: "sw067zWTZsc?si=ewzU0NvaUT6NIulV",
      description: "Jaiane Saiara - Salvador - Bahia",
    },
  ],
  anchorId = "",
  anchorIdTestimonials = "",
}: Props) {
  return (
    <section id={anchorId} class="bg-pink-600 border-t-4 border-yellow-500 py-10 -my-8 px-8 lg:px-0 text-white -skew-y-2 relative overflow-x-clip">
      <Image
        width={400}
        class="absolute w-[200px] -top-[150px] -left-[90px] lg:left-0 lg:-top-[230px] lg:w-[200px] z-50"
        src={leftFloatingImage}
        alt={leftFloatingImage}
        decoding="async"
        loading="lazy"
      />
      <Image
        width={400}
        class="absolute w-[160px] -top-[200px] right-[0px] lg:-top-[300px] lg:w-[300px] lg:right-0 z-50"
        src={rightFloatingImage}
        alt={rightFloatingImage}
        decoding="async"
        loading="lazy"
      />
      <div class="skew-y-2 space-y-20">
        <div class="lg:w-11/12 mx-auto text-center lg:text-left relative">
          <Image
            width={300}
            class="absolute w-[150px] -bottom-[150px] -right-[80px] lg:right-0 lg:-bottom-[200px] lg:w-[250px]"
            src={buttonFloatingImage}
            alt={buttonFloatingImage}
            decoding="async"
            loading="lazy"
          />
          <div class="flex flex-col-reverse my-5 lg:grid lg:grid-cols-2 gap-5 items-center justify-center lg:justify-normal">
            <div>
              <Image
                width={600}
                class="mx-auto"
                src={mainImage}
                alt={mainImage}
                decoding="async"
                loading="lazy"
              />
            </div>
            <div class="">
              <h1
                class="text-7xl lg:text-8xl font-sora font-bold text-yellow-500 mb-8"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </h1>
              <div class="grid lg:grid-cols-2 gap-5">
                {subTitles.map((subTitle) => (
                  <div class="text-white">
                    <h1 class="text-6xl lg:text-6xl font-sora font-extrabold text-purple-950">
                      {subTitle.title}
                    </h1>
                    <p>{subTitle.description}</p>
                  </div>
                ))}
              </div>
              <div class="lg:w-8/12 mx-auto lg:mx-0 mt-10">
                <a
                  href={cta.href}
                  class="text-sm lg:text-base p-3 bg-green-600 font-extrabold uppercase flex uppercase text-center justify-center bg-gradient-to-r from-purple-800 to-purple-600 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center"
                >
                  {cta.text}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id={anchorIdTestimonials} class="lg:w-10/12 mx-auto">
          <h1
            class="text-3xl text-center font-sora font-bold text-yellow-500"
            dangerouslySetInnerHTML={{
              __html: testimonialTitle,
            }}
          >
          </h1>
          <div
            class="text-center"
            dangerouslySetInnerHTML={{
              __html: testimonialDescription,
            }}
          >
          </div>
          <div class="my-5 grid lg:grid-cols-3 gap-5">
            {testimonials.map((testimonial) => (
              <div>
                <h3
                  class="text-center mb-2"
                  dangerouslySetInnerHTML={{
                    __html: testimonial.description,
                  }}
                >
                </h3>
                <div class="rounded-2xl p-2 border border-yellow-500">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      width="966"
                      height="543"
                      src={"https://www.youtube.com/embed/" +
                        testimonial.youtubeId}
                      title="video placeholder"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowFullScreen={true}
                    >
                    </iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
