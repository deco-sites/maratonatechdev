export interface Props {
  /**
   * @format code
   * @language html
   * @default Click here to tweak this text however you want.
   */
  content?: string;
}

export default function Regulaments({
  content =
    "Conexão <span class='bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-extrabold'>Futuro</span>",
}: Props) {
  return (
    <section class="bg-slate-950 pt-20 pb-36 space-y-10 text-white px-8 lg:px-0">
      <div
        class="lg:w-6/12 mx-auto bg-slate-900 p-10 rounded-2xl text-white"
        dangerouslySetInnerHTML={{
          __html: content ?? "",
        }}
      />
    </section>
  );
}
