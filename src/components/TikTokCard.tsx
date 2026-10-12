import type { FeaturedTikTok } from "~/data/siteContent";

const TikTokCard = ({ video }: { video: FeaturedTikTok }) => {
  return (
    <article className="overflow-hidden rounded-[24px] border border-lime-200/15 bg-[#102018]/90">
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <iframe
          src={`https://www.tiktok.com/player/v1/${video.id}?music_info=0&description=0&autoplay=0`}
          title={video.title}
          allow="encrypted-media; fullscreen; accelerometer; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">
          TikTok
        </p>
        <h3 className="mt-1 text-base font-bold text-white">{video.title}</h3>
      </div>
    </article>
  );
};

export default TikTokCard;
