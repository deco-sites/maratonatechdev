import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  text?: string;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  text = "Siga-nos nas redes sociais",
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "" },
    { network: "Instagram", href: "" },
    { network: "X - Twitter", href: "" },
    { network: "Linkedin", href: "" },
    { network: "Youtube", href: "" },
  ],
}: Props) {
  return (
    <section class="bg-purple-950 py-6 text-white">
    <div class="w-10/12 mx-auto px-10 lg:px-0 text-[10px] space-y-2 text-center">
    <div class="flex flex-row justify-center items-start gap-5">
      <div>
        <h3 class="text-xl font-bold font-sora">{text}</h3>
      </div>
      <div class="flex flex-row gap-3">
        <a href="https://www.instagram.com/maratonatech/" target="_blank" class="text-yellow-500 text-2xl">
          <ion-icon name="logo-instagram" role="img" class="md hydrated"></ion-icon>
        </a>
        <a href="https://www.youtube.com/channel/UCt8_P6TgAA65FgbWgxydwBQ" target="_blank" class="text-yellow-500 text-2xl">
          <ion-icon name="logo-youtube" role="img" class="md hydrated"></ion-icon>
        </a>
        <a href="https://www.tiktok.com/maratonatech" target="_blank" class="text-yellow-500 text-2xl">
          <ion-icon name="logo-tiktok" role="img" class="md hydrated"></ion-icon>
        </a>
      </div>
    </div>
  </div>
  </section>
  );
}
