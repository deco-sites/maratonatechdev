import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

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
}

export default function Section(
  {
    title = "Quem faz a Maratona Tech",
    highlight =
      "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/ifood-43-1.png",
    sponsorsGroup = [
      {
        sponsors: [
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/g10.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr_.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Logo_Preferencial.POS_.RGB_.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/mercado-livre-1536x391.png",
            alt: "Mercado Livre",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr-1.png",
            alt: "accenture",
          },
        ],
      },
      {
        sponsors: [
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/LogoRD.png",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Finep.jpg",
            alt: "Finep",
          },
        ],
      },
      {
        sponsors: [
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Copastur.jpeg",
            alt: "accenture",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr4_.png",
            alt: "Finep",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Logotipo.GrupoBoticario.CMYK_.Preferencial.Policromatico.Horizontal.Positivo-1536x425.png",
            alt: "Finep",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Ada-1-1536x1114.png",
            alt: "Finep",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr-1.png",
            alt: "Finep",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/LOGO_WATCH_PRINCIPAL_FULL-1536x677.png",
            alt: "Finep",
          },
          {
            logo:
              "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/ci-t-logo-ED038B1C6B-seeklogo.com_.png",
            alt: "Finep",
          },
        ],
      },
    ],
  }: Props,
) {
  return (
    <div class="lg:w-8/12 mx-auto">
      <div class="pt-10 pb-20 px-8 lg:px-0">
        <h3 class="text-2xl text-center font-sora font-bold text-purple-800 mb-10">
          {title}
        </h3>
        <img
          src={highlight}
          alt=""
          class="mx-auto lg:w-2/12/"
        />
        {sponsorsGroup?.map((groups) => (
          <ul class="my-10 flex flex-wrap justify-center items-center gap-8">
            {groups.sponsors?.map((sponsors) => (
              <li class="w-[150px] p-3">
                <img
                  src={sponsors.logo}
                  alt={sponsors.alt}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
