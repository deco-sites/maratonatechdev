import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  anchorId?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
  image?: ImageWidget;
}

export default function Schedule({
  anchorId = "",
  title = "Cronograma",
  description = "Entenda as etapas da Maratona Tech 2024",
  image =
    "https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/cronograma.svg",
}: Props) {
  return (
    <div id={anchorId} class="bg-white py-10 space-y-20 px-8 lg:px-0">
      <div class="lg:w-8/12 mx-auto">
        <h1
          class="text-4xl lg:text-5xl text-center font-sora font-bold text-blue-800"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <div
          class="text-center text-lg lg:text-2xl"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div class="my-5">
          <Image
            width={1500}
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
