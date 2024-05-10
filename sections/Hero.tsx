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
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format rich-text
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
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
  title = "<h1 class='text-4xl lg:text-5xl font-bold text-center lg:text-left mb-3 font-sora'>A maior<span class='underline decoration-wavy decoration-pink-500'>competição de tecnologia entre escolas</span> do Brasil.</h1>",
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
    <section class="bg-slate-950 pt-28" style="background: linear-gradient(0deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0) 60%),url(https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/bg-hero.jpg);background-size: cover;">
    <nav class="lg:container mx-8 lg:mx-auto">
      <div class="flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 justify-end ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          <div
            class={`lg:w-full space-y-4 gap-4 text-white ${
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
            <div class="flex flex-col gap-3 lg:w-10/12 py-4">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`btn btn-primary border-0 w-full text-sm lg:text-base p-3 bg-green-600 font-extrabold uppercase flex uppercase text-center justify-center bg-gradient-to-r from-blue-600 to-pink-600 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
              <div class="text-sm text-center lg:text-left"
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
