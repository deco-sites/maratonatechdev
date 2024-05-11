import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Card {
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
  /** @format color-input */
  color?: string;
}

export interface Props {
  desktopBackgroundImage?: ImageWidget;
  mobileBackgroundImage?: ImageWidget;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  title?: string;
  cards?: Card[];
}

export default function MediaAndAwards({
  desktopBackgroundImage = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/e6f55904-0276-4040-8f57-c3b635e10ae9',
  mobileBackgroundImage = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9084/14fae646-3035-4432-a351-6024ac2f9faa',
  title = 'Quem pode se inscrever?',
  cards = [
    {
      title: 'Professores',
      description: 'de Escolas Públicas e Privadas',
      color: '#ec4899'
    },
    {
      title: 'Nível 01',
      description: '6º e 7º Ano',
      color: '#eab308'
    },
    {
      title: 'Nível 02',
      description: '8º e 9º Ano',
      color: '#3b82f6'
    },
    {
      title: 'Nível 03',
      description: 'Ensino Médio',
      color: '#a855f7'
    },
  ]
}: Props) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .quem-pode{
            background-color: rgb(2,6,23);
            background: linear-gradient(90deg, rgba(2,6,23,0) 0%, rgba(2,6,23,1) 60%),url('${desktopBackgroundImage}');
            background-size: cover;
            background-position: top center;
          }
          /* MOBILE */
          @media only screen and (max-width: 600px) {
            .quem-pode{
              background-color: rgb(1,17,43)!important;
              background: linear-gradient(0deg, rgba(1,17,43,0) 100%, rgba(1,17,43,1) 0%),url('${mobileBackgroundImage}');
              background-size: contain;
              background-position: bottom center;
              background-repeat: no-repeat;
            } 
          }  
        `,
      }} />
      <div 
        class="quem-pode bg-slate-950 py-20 space-y-10 px-10 lg:px-0 text-white -mt-10 min-h-[1200px] lg:min-h-[450px] flex lg:items-center justify-end -skew-y-2"
      >
        <div class="lg:w-10/12 mx-auto flex justify-end skew-y-2">
          <div class="lg:w-6/12">
            <h1 class="text-3xl font-sora font-bold text-center" dangerouslySetInnerHTML={{
              __html: title
            }} />
            <div class="grid lg:grid-cols-2 gap-3 my-8">
              {
                cards.map(card => (
                  <div style={{
                    borderColor: card.color
                  }} class="text-center lg:text-left rounded-2xl p-8 border">
                    <h1 style={{
                      color: card.color
                    }} class="text-2xl font-bold font-sora">{card.title}</h1>
                    <p>{card.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
