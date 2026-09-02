import Image from "next/image";

const stickers = [
  {
    src: "/emotes/smile.png",
    alt: "",
    className: "left-6 top-28 rotate-[-12deg] lg:left-10",
  },
  {
    src: "/emotes/wow.png",
    alt: "",
    className: "right-6 top-40 rotate-[10deg] lg:right-12",
  },
  {
    src: "/emotes/wow.png",
    alt: "",
    className: "bottom-[38%] left-[6%] rotate-[8deg]",
  },
  {
    src: "/emotes/smile.png",
    alt: "",
    className: "bottom-28 right-[8%] rotate-[-9deg]",
  },
] as const;

const EmoteStickers = () => (
  <div
    className="pointer-events-none fixed inset-0 z-10 hidden md:block"
    aria-hidden="true"
  >
    {stickers.map((sticker, index) => (
      <Image
        key={`${sticker.src}-${index}`}
        src={sticker.src}
        alt={sticker.alt}
        width={72}
        height={72}
        className={`absolute h-16 w-16 rounded-2xl border border-white/15 bg-[#0b1c12]/70 object-cover p-1 shadow-[0_12px_30px_rgba(0,0,0,0.28)] ${sticker.className}`}
      />
    ))}
  </div>
);

export default EmoteStickers;
