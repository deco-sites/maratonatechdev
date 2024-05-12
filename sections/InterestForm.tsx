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
  
  export default function Section({ title = "Fique por dentro de tudo que acontece com a Maratona Tech 2024.", description = "green", formInputs, submitButton = "Quero receber as novidades" }: Props) {
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
            {formInputs?.map((input) =>
                <input
                type="text"
                placeholder="Seu nome*"
                class="border border-neutral-300 w-full rounded-2xl px-3 py-2"
                />
                )}
            <a
              href=""
              class="bg-green-500 text-white font-bold text-center flex w-full rounded-2xl p-2 text-center justify-center items-center"
            >
              {submitButton}
            </a>
          </div>
        </div>
      </section>
    );
  }
  