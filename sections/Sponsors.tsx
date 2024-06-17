import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */
interface Sponsors {
  logo?: ImageWidget;
  alt?: string;
  maxWidth?: number;
  maxHeight?: number;
}

interface Props {
  /**
   * @description Section Title.
   */
  title?: string;
  /**
   * @description Major Sponsor.
   */
  highlightSponsor?: {
    label: string;
    logo: ImageWidget;
    maxWidth?: number;
    maxHeight?: number;
  };

  /**
   * @description Display Sponsors Logos.
   */
  sponsorsGroup?: {
    label?: string;
    sponsors?: Sponsors[];
  }[];
  anchorId?: string;
}

export default function Section(
  {
    anchorId = "",
    title = "Patrocinadores",
    highlightSponsor = {
      label: "Cota Ouro",
      logo:
        "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/ifood-43-1.png",
    },
    sponsorsGroup = [
      {
        sponsors: [
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/apoio/ARCO%20INSTITUTO.png",
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
      <div class="pt-10 pb-10 px-8 lg:px-0">
        <h3 class="text-2xl text-center font-sora font-bold text-purple-800 mb-10">
          {title}
        </h3>
        <div>
          <h4 class="text-xl text-center font-sora font-bold text-purple-800 mb-3">{highlightSponsor.label}</h4>
          <img
            src={highlightSponsor.logo}
            alt=""
            style={{
              maxHeight: highlightSponsor?.maxHeight ? `${highlightSponsor.maxHeight}px` : 'none',
              maxWidth: highlightSponsor?.maxWidth ? `${highlightSponsor.maxWidth}px` : 'none',
            }}
            className="mx-auto max-h-[100px] max-w-[100px]"
          />
        </div>
        {sponsorsGroup?.map((groups) => (
          <ul class="mt-16 flex flex-col flex-wrap justify-center items-center">
              <h4 class="text-xl text-center font-sora font-bold text-purple-800 mb-3">{groups.label}</h4>
              <div class="flex flex-wrap items-center gap-8 justify-center my-5">
            {groups.sponsors?.map((sponsors) => (
              <li class="p-3">
                <img
                  src={sponsors.logo}
                  alt={sponsors.alt}
                  style={{
                    maxHeight: sponsors?.maxHeight ? `${sponsors.maxHeight}px` : 'none',
                    maxWidth: sponsors?.maxWidth ? `${sponsors.maxWidth}px` : 'none',
                  }}
                  className="max-h-[100px] max-w-[100px]"
                />
              </li>
            ))}
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
