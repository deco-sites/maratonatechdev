import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Button {
  title?: string;
  buttonLabel?: string;
  href?: string;
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
  cta?: Button;
}

export default function ConexaoFuturo({
  title =
    "Conexão <span class='bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold'>Futuro</span>",
  description =
    "<p>Imagine um lugar onde jovens brilhantes se reúnem, um espaço concebido para os estudantes que se destacam em projetos educacionais por todo o país. Esse é o ambiente idealizado para os participantes da Conexão Futuro, uma plataforma que busca democratizar oportunidades e potencializar talentos.</p><p>A Conexão Futuro é um projeto conduzido pela Cactus para ser uma ponte entre o presente e um futuro promissor! Aqui, são oferecidas oportunidades únicas, como cursos de tecnologia em parceria com grandes empresas. O objetivo é criar uma ligação sólida entre o Alumni e o seu destino, uma conexão que impulsiona trajetórias, um espaço onde sonhos se tornam realidade e onde o talento encontra o seu lugar de destaque.</p>",
  leftFloatingImage =
    "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/icones/code.webp",
  rightFloatingImage =
    "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/icones/fone.webp",
  cta = {
    title: "Acesse a comunidade do Conexão Futuro no Discord",
    buttonLabel: "Clique aqui para acessar",
    href: "",
  },
}: Props) {
  return (
    <nav class="bg-slate-950 pt-20 pb-36 space-y-10 text-white px-8 lg:px-0">
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
            __html: title ?? "",
          }}
        />
        <ul
          class="lg:columns-2 my-5 space-y-3"
          dangerouslySetInnerHTML={{
            __html: description ?? "",
          }}
        />
        <div class="flex flex-col gap-6">
          <h2 class="text-xl font-bold text-center mb-3">{cta?.title}</h2>
          <a
            href={cta?.href}
            class={`bg-gradient-to-r from-purple-500 to-violet-700 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center lg:w-6/12 mx-auto space-x-3`}
            target={cta?.href?.includes("http") ? "_blank" : "_self"}
          >
            <span class="flex text-2xl">
              {/*// @ts-ignore*/}
              <ion-icon name="logo-discord" role="img" class="md hydrated"></ion-icon>
            </span>
            {cta?.buttonLabel}
          </a>
        </div>
      </div>
    </nav>
  );
}
