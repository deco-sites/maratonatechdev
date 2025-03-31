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
  founders?: {
    logo?: ImageWidget;
    text?: string;
  }[];
}

export default function Section(
  {
    title = "Quem faz a Maratona Tech",
    founders = [
      {
        logo:
          "https://assets.decocache.com/maratonatechdev/da31e2e2-b2d6-491a-9a11-a2fd61c7f04d/logo-cactus.png",
        text:
          "Uma ONG que busca, através da educação e da criação de uma cultura de protagonismo, transformar a vida dos jovens nos contextos mais agrestes, garantindo educação de qualidade e gerando equidade no sistema de ensino público.",
      },
      {
        logo:
          "https://assets.decocache.com/maratonatechdev/857b906d-8d4e-4dc8-bda8-499e3448884f/logo-movtech.png",
        text:
          "Coalizão de organizações comprometidas com o futuro da tecnologia no Brasil, por meio da inclusão produtiva, que mobiliza o ecossistema, alavanca projetos, e dissemina conhecimento para melhores práticas no setor.",
      },
    ],
  }: Props,
) {
  return (
    <div class="lg:w-8/12 mx-auto">
      <div class="py-20 px-8 lg:px-0">
        <h1 class="text-3xl text-center font-sora font-bold text-purple-800">
          {title}
        </h1>
        <div class="grid lg:grid-cols-2 items-center gap-10 my-5">
          {founders?.map((founder) => (
            <div class="rounded-2xl bg-gradient-to-b from-blue-500 to-purple-500 p-px relative">
              <div class="text-center bg-white p-10 rounded-2xl h-full">
                <img
                  src={founder.logo}
                  alt=""
                  class="mx-auto mb-5"
                />
                <p>
                  {founder.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
