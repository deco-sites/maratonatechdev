import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title =
    "<h1 class='text-4xl lg:text-5xl font-bold text-center lg:text-left mb-3 font-sora'>A maior<span class='underline decoration-wavy decoration-blue-500'>competição de tecnologia entre escolas</span> do Brasil.</h1>",
  description =
    "<div class='flex flex-col lg:flex-row items-center lg:items-start jusitfy-between space-x-4 my-3'><p class='text-sm text-center lg:text-left'>De agosto a setembro de 2024 na sua escola</p><div class='flex flex-row gap-3'><a href='https://www.instagram.com/maratonatech/' target='_blank' class='text-yellow-500 text-lg'><ion-icon name='logo-instagram' role='img' class='md hydrated'></ion-icon></a><a href='https://www.youtube.com/channel/UCt8_P6TgAA65FgbWgxydwBQ' target='_blank' class='text-yellow-500 text-lg'><ion-icon name='logo-youtube' role='img' class='md hydrated'></ion-icon></a><a href='https://www.tiktok.com/maratonatech' target='_blank' class='text-yellow-500 text-lg'><ion-icon name='logo-tiktok' role='img' class='md hydrated'></ion-icon></a></div></div>",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <section
      id="hero"
      class="bg-black min-h-[930px] lg:min-h-[828px] lg:flex lg:flex-col lg:items-center text-white bg-[center_top_1rem]"
    >
      <div className="w-full bg-red-600 p-3 text-center text-white">
        <h1 className="lg:text-xl font-bold">Inscrições Encerradas</h1>
      </div>
      <nav class="lg:w-10/12 mx-auto lg:-mt-20 px-8 lg:px-0">
        <div class="flex flex-col items-center gap-8">
          <div
            class={`flex w-full xl:container xl:mx-auto mx-5 md:mx-10 z-10 justify-end ${
              image
                ? PLACEMENT[placement]
                : "flex-col items-center justify-center text-center"
            } lg:py-36 gap-12 md:gap-20 items-center`}
          >
            <div
              class={`lg:w-full pt-14 space-y-4 gap-4 text-white ${
                image
                  ? "lg:w-5/12 lg:max-w-xl"
                  : "flex flex-col items-center justify-center lg:max-w-3xl"
              }`}
            >
              {image && (
                <Image
                  width={640}
                  class="object-fit w-5/12 mx-auto lg:mx-0 mb-5"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={image}
                  alt={image}
                  decoding="async"
                  loading="lazy"
                />
              )}
              <div
                class="leading-none"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </div>
              <div class="flex flex-col gap-3 lg:w-[80%] py-4">
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href='https://jantaranualcactus.com/images/docs/Premiados%20-%20Maratona%20Tech.pdf'
                    // href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`btn btn-primary border-0 w-full text-sm lg:text-base p-3 bg-green-600 font-extrabold uppercase flex uppercase text-center justify-center bg-gradient-to-r from-blue-600 to-pink-600 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    Resultado Premiação Maratona Tech 2024
                    {/* {item?.text} */}
                  </a>
                ))}
                <div
                  class="text-sm text-center lg:text-left"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                >
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
