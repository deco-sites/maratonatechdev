import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Photos {
  images?: ImageWidget[];
  cta?: {
    label?: string;
    href?: string;
  };
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
  leftFloatingImage?: ImageWidget;
  rightFloatingImage?: ImageWidget;
  photoShoot?: Photos;
}

export default function PhotoBook({
  title =
    "Imersão <span class='bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold'>Tech</span>",
  description =
    "A Imersão Tech é parte da premiação dos estudantes ouro da Maratona Tech. A primeira edição ocorreu em São Paulo em dezembro de 2023, com 32 estudantes, incluindo representantes do Paraná, Tocantins, Salvador/BA e Heliópolis/BA. Eles foram acompanhados por gestores e professores e viveram uma super experiência, , explorando laboratórios e realizando atividades tecnológicas nos espaços do INSPER, Inteli e iFood.",
  leftFloatingImage =
    "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/icones/code.webp",
  rightFloatingImage =
    "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/icones/fone.webp",
  photoShoot = {
    images: [],
    cta: {
        label: "Veja a galeria completa",
        href: '/',
    }
  },
}: Props) {
  return (
    <nav
      class="bg-slate-950 pt-20 pb-36 space-y-10 text-white px-8 lg:px-0"
    >
      <Image
        width={400}
        class="absolute w-[200px] -top-[150px] -left-[90px] lg:left-0 lg:-top-[20px] lg:w-[200px] z-20"
        src={leftFloatingImage ?? ""}
        alt={leftFloatingImage ?? ""}
        decoding="async"
        loading="lazy"
      />
      <Image
        width={400}
        class="absolute w-[160px] -top-[200px] right-[0px] lg:-top-[30px] lg:w-[300px] lg:right-0 z-20 "
        src={rightFloatingImage ?? ""}
        alt={rightFloatingImage ?? ""}
        decoding="async"
        loading="lazy"
      />
      <div class="lg:w-8/12 mx-auto">
        <h1
          class="text-xl lg:text-4xl text-center font-sora"
          dangerouslySetInnerHTML={{
            __html: title ?? '',
          }}
        />
        <div
          class="text-center my-3"
          dangerouslySetInnerHTML={{
            __html: description ?? '',
          }}
        >
        </div>
        <div class="flex flex-col gap-8">
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {photoShoot.images?.map((img, index) => (
              <Image
                width={333}
                class="rounded-2xl shadow-lg"
                src={img}
                alt={img}
                decoding="async"
                loading="lazy"
              />
            ))}
          </div>
          <a
            href={photoShoot.cta?.href}
            class={`bg-gradient-to-r from-green-500 to-lime-500 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center lg:w-6/12 mx-auto`}
            target={photoShoot.cta?.href?.includes("http") ? "_blank" : "_self"}
          >
            {photoShoot.cta?.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
