import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

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
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/insper-women-in-tech_branco.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/arco.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/chat.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/programa.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/Inteli-Logo.png",
            alt: "Mercado Livre",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/cyber.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/programaria.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/rocketseat.webp",
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
              <li class="w-[200px] p-3">
                <img
                  src={supporter.logo}
                  alt={supporter.alt}
                />
              </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
