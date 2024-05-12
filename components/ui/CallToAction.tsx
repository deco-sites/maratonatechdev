import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Partners {
  logo?: ImageWidget;
  alt?: string;
}

export interface Props {
  /**
   * @description Section Title.
   */
  title?: string;
  /**
   * @description CTA button.
   */
  button?: {
    label?: string;
    href?: string;
  };
}

export default function Section(
  {
    title = "A sua empresa também quer patrocinar a Maratona Tech 2024?",
    button = {
      label:
        "Fale com um consultor clicando aqui",
      href: "/",
    },
  }: Props,
) {
  return (
    <div class="lg:w-8/12 mx-auto">
      <div class="pt-10 pb-20 px-8 lg:px-0">
        <div class="text-center lg:w-6/12 mx-auto">
          <h3 class="text-2xl text-center font-sora font-bold text-purple-800 mb-3">
            {title}
          </h3>
          <a
            href={button.href}
            class="text-sm lg:text-base p-3 bg-green-600 font-extrabold uppercase flex uppercase text-center justify-center bg-gradient-to-r from-green-500 to-lime-500 p-3 rounded-2xl text-white uppercase font-extrabold flex items-center justify-center"
          >
            {button.label}
          </a>
        </div>
      </div>
    </div>
  );
}
