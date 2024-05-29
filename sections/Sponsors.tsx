import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */
interface Sponsors {
  logo?: ImageWidget;
  alt?: string;
}

interface Props {
  /**
   * @description Section Title.
   */
  title?: string;
  /**
   * @description Major Sponsor.
   */
  highlight?: ImageWidget;
  /**
   * @description Display Sponsors Logos.
   */
  sponsorsGroup?: {
    sponsors?: Sponsors[];
  }[];
  anchorId?: string;
}

export default function Section(
  {
    anchorId = '',
    title = "Quem faz a Maratona Tech",
    highlight =
      "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/ifood-43-1.png",
    sponsorsGroup = [
      {
        sponsors: [
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/ARCO%20INSTITUTO.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/B3%20SOCIAL.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/FINEP.png",
            alt: "Mercado Livre",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/FUNDACAO-BEHRING.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/MERCADO%20LIVRE.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/INSTITUTO%20COCA-COLA.webp",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/INSTITUTO%20GOL.webp",
            alt: "accenture",
          },
        ],
      },
    ],
  }: Props,
) {
  return (
    <div id={anchorId} className="lg:w-8/12 mx-auto">
      <div class="pt-10 pb-20 px-8 lg:px-0">
        <img
          src={highlight}
          alt=""
          class="mx-auto lg:w-2/12"
        />
        {sponsorsGroup?.map((groups) => (
          <ul class="my-10 flex flex-wrap justify-center items-center gap-8">
            {groups.sponsors?.map((sponsors) => (
              <li class="p-3">
                <img
                  src={sponsors.logo}
                  alt={sponsors.alt}
                  class="max-h-[80px] max-w-[150px]"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
