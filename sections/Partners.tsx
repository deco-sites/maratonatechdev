import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */
interface Partners {
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
   * @description Display Partners Logos.
   */
  partners?: Partners[];
}

export default function Section(
  {
    title = "Parceiros Públicos",
    partners = [
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/gov/SEDUC%20RS.jpg",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/gov/SEDUC%20TO.jpg",
        alt: "accenture",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/gov/SEDUC%20PR.png",
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
          {partners?.map((partner) => (
            <li class="p-3">
              <img
                src={partner.logo}
                alt={partner.alt}
                style={{
                  maxHeight: partner?.maxHeight ? `${partner.maxHeight}px` : 'none',
                  maxWidth: partner?.maxWidth ? `${partner.maxWidth}px` : 'none',
                }}
                className="mx-auto max-h-[100px] max-w-[100px]"
              />
            </li>
          ))}
          <li class="p-3">
              <img src='https://cdnsemit.salvador.ba.gov.br/secretarias/pms/logo_prefeitura.png'
                className="mx-auto max-h-[100px] max-w-[100px] invert"
              />
            </li>
        </ul>
      </div>
    </div>
  );
}
