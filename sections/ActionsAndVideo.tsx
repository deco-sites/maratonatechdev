import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  href: string;
  text: string;
  /** @format color-input */
  color?: string;
}

export interface Props {
  anchorId?: string;
  leftFloatingImage?: ImageWidget;
  rightFloatingImage?: ImageWidget;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
  CTAs?: CTA[];
  youtubeVideoId?: string;
}

export default function ActionsAndVideo({
  title = "A edição da Maratona Tech 2023 foi incrível!",
  description =
    "Relembre aqui como foi a cerimônia de premiação em Salvador, veja a lista dos vencedores e a incrível imersão tecnológica em São Paulo feita pelos estudantes medalhistas de ouro.",
  rightFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/6f23911a-432b-4a13-b646-373682e3f6ab",
  leftFloatingImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/349ac22c-3e75-4751-b226-9b90e0166f07",
  CTAs = [
    {
      href: "#",
      text: "Resultado vencedores 2023",
      color: "#db2777",
    },
    {
      href: "#",
      text: "Imersão Tech São Paulo",
      color: "#a855f7",
    },
    {
      href: "#",
      text: "Fotos da Cerimônia de Premiação Salvador",
      color: "#2563eb",
    },
  ],
  anchorId = "",
  youtubeVideoId = "NpEaa2P7qZI",
}: Props) {
  return (
    <div
      id={anchorId}
      class="bg-purple-950 py-20 space-y-20 px-8 lg:px-0 text-white -skew-y-2 relative"
    >
      <Image
        width={400}
        class="absolute w-[200px] -top-[100px] -left-[90px] lg:left-0 lg:-bottom-[80px] lg:w-[300px]"
        src={leftFloatingImage}
        alt={leftFloatingImage}
        decoding="async"
        loading="lazy"
      />
      <Image
        width={400}
        class="absolute w-[200px] -top-[100px] right-0 lg:-top-[200px] lg:w-[300px] lg:right-0"
        src={rightFloatingImage}
        alt={rightFloatingImage}
        decoding="async"
        loading="lazy"
      />
      <div class="skew-y-2">
        <div class="lg:w-10/12 mx-auto">
          <div class="my-5 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 class="text-3xl font-sora font-bold text-yellow-500">
                {title}
              </h1>
              <div class="space-y-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                >
                </div>
              </div>
              <div class="grid lg:grid-cols-1 gap-3 my-5">
                {CTAs.map((cta) => (
                  <a
                    href={cta.href}
                    class={`p-3 rounded-xl text-white flex text-center justify-center items-center font-bold`}
                    target={cta.href.includes("http") ? "_blank" : "_self"}
                    style={{
                      backgroundColor: cta.color,
                    }}
                  >
                    {cta.text}
                  </a>
                ))}
              </div>
            </div>
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
                src={"https://www.youtube.com/embed/" + youtubeVideoId}
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
      </div>
    </div>
  );
}
