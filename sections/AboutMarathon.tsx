
export interface IPhase {
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
}

export interface Props {
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
  phases?: IPhase[];
}

export default function AboutMarathon({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  phases = [
    {
      title: "Click here to tweak this text however you want.",
      description: "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
    },
    {
      title: "Click here to tweak this text however you want.",
      description: "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
    }
  ]
}: Props) {
  return (
    <nav class="lg:container lg:mx-auto mx-4">
      <div class="flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 lg:py-36 gap-12 md:gap-20 items-center`}
        >
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4`}
          >
            <div
              class="inline-block lg:text-[80px] text-4xl leading-none font-medium"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <div 
              class="text-lg md:text-md leading-[150%]" 
              dangerouslySetInnerHTML={{
                __html: description,
            }}>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
