import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */
interface Support {
  logo?: ImageWidget;
  alt?: string;
}

interface Props {
  /**
   * @description Section Title.
   */
  title?: string;
  /**
   * @description Display Supporters Logos.
   * @title {{{alt}}}
   */
  supporters?: Support[];
}

export default function Section(
  {
    title = "Apoio",
    supporters = [
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/CHATCLASS.png",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/CYBER-GENIOS.png",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/FUNDACAO-BEHRING.png",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/PROGRAMADORES%20DO%20AMANHA.png",
        alt: "Mercado Livre",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/PROGRAMARIA.svg",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/ROCKETSEAT.svg",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/ALURA.webp",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/INTELI.webp",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/ME%20SALVA.webp",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/marca-nav.svg",
        alt: "accenture",
      },
    ],
  }: Props,
) {
  return (
    <div class="lg:w-8/12 mx-auto">
      <div class="pt-10 pb-20 px-8 lg:px-0">
        <h3 class="text-2xl text-center font-sora font-bold text-purple-800 mb-5">
          {title}
        </h3>
        <ul class="my-10 flex flex-wrap justify-center items-center gap-8">
          {supporters?.map((supporter) => (
            <li class="p-3">
              <img
                src={supporter.logo}
                alt={supporter.alt}
                class="w-full max-h-[100px] max-w-[100px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
