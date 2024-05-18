interface Props {
  /**
   * @description Form title.
   */
  title?: string;
  /**
   * @description Form description.
   */
  description?: string;
  /**
   * @description Form inputs placeholders.
   */
  formInputs?: string[];
  /**
   * @description Form submitButton name.
   */
  submitButton?: string;
}

export default function Section(
  {
    title = "Fique por dentro de tudo que acontece com a Maratona Tech 2024.",
    description = "Faça seu cadastro e receba tudo em primeira mão.",
    formInputs = [
      'Seu nome*',
      'Seu email*',
      'Sua mensagem*'
  ],
    submitButton = "Quero receber as novidades",
  }: Props,
) {
  return (
    <section class="bg-purple-950 py-20 space-y-10 text-white px-8 lg:px-0">
      <div class="lg:w-6/12 mx-auto relative">
        <img
          src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/icones/code.webp"
          alt=""
          class="absolute w-[100px] -top-[150px] -left-[30px] lg:-left-[300px] lg:top-[0px] lg:w-[300px] z-30"
        />
        <img
          src="https://homologacao.gestaodetrafegonext.com.br/maratona-tech/public/images/maratona-tech/icones/fone.webp"
          alt=""
          class="absolute w-[100px] -top-[130px] right-[0px] lg:-top-[200px] lg:w-[300px] lg:-right-[300px] z-30"
        />
        <h1 class="text-3xl text-center font-sora font-bold text-yellow-500">
          {title}
        </h1>
        <p class="text-center pt-2">
          {description}
        </p>
        <div class="my-5 space-y-3 lg:w-10/12 mx-auto">
        <div role="main" id="2024-feep-2024-inscricao-duplicado-43575b3362a625a16be4"></div>
        <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script><script dangerouslySetInnerHTML={{
            __html: `new RDStationForms('2024-feep-2024-inscricao-duplicado-43575b3362a625a16be4', 'null').createForm();`}}/>
        </div>
      </div>
    </section>
  );
}
