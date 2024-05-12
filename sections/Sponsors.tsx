import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description Section Title.
   */
  title?: string;
  /**
   * @description Founders cards.
   */
  sponsors?: {
    logo?: ImageWidget;
    text?: string;
  }[];
}

export default function Section(
  {
    title = "Quem faz a Maratona Tech",
    sponsors = [
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/logo-cactus.png",
        text:
          "Uma ONG que busca, através da educação e da criação de uma cultura de protagonismo, transformar a vida dos jovens nos contextos mais agrestes, garantindo educação de qualidade e gerando equidade no sistema de ensino público.",
      },
      {
        logo:
          "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/logo-movtech.png",
        text:
          "Coalizão de organizações comprometidas com o futuro da tecnologia no Brasil, por meio da inclusão produtiva, que mobiliza o ecossistema, alavanca projetos, e dissemina conhecimento para melhores práticas no setor.",
      },
    ],
  }: Props,
) {
  return (
    <div class="lg:w-8/12 mx-auto">
      <div class="py-20 px-8 lg:px-0">
        <h1 class="text-2xl text-center font-sora font-bold text-purple-800 mb-3">
          Patrocinadores
        </h1>
        <img
          src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/ifood-43-1.png"
          alt=""
          class="mx-auto lg:w-2/12/"
        />
        <ul class="my-10 flex flex-wrap justify-center items-center gap-8">
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/g10.png"
              alt=""
            />
          </li>
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr_.png"
              alt=""
            />
          </li>
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Logo_Preferencial.POS_.RGB_.png"
              alt=""
            />
          </li>
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/mercado-livre-1536x391.png"
              alt=""
            />
          </li>
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr-1.png"
              alt=""
            />
          </li>
        </ul>
        <ul class="my-10 flex flex-wrap justify-center gap-8 items-center">
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/LogoRD.png"
              alt=""
            />
          </li>
          <li class="lg:w-3/6 p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Finep.jpg"
              alt=""
            />
          </li>
        </ul>
        <ul class="my-10 flex flex-wrap justify-center items-center gap-8">
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Copastur.jpeg"
              alt=""
            />
          </li>
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr4_.png"
              alt=""
            />
          </li>
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Logotipo.GrupoBoticario.CMYK_.Preferencial.Policromatico.Horizontal.Positivo-1536x425.png"
              alt=""
            />
          </li>
          <li class="w-[150px] p-10">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/Ada-1-1536x1114.png"
              alt=""
            />
          </li>
          <li class="w-[150px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/i.spr-1.png"
              alt=""
            />
          </li>
          <li class="w-[120px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/LOGO_WATCH_PRINCIPAL_FULL-1536x677.png"
              alt=""
            />
          </li>
          <li class="w-[120px] p-3">
            <img
              src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/marcas/ci-t-logo-ED038B1C6B-seeklogo.com_.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
