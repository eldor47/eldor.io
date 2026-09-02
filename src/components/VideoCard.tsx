"use client";

import { useState } from "react";
import Image from "next/image";
import type { FeaturedVideo } from "~/data/siteContent";

const VideoCard = ({ video }: { video: FeaturedVideo }) => {
  const isShort = video.type === "Short";
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
  );

  return (
    <article className="overflow-hidden rounded-[24px] border border-lime-200/15 bg-[#102018]/90">
      <div
        className={`relative overflow-hidden bg-black ${isShort ? "aspect-[9/16]" : "aspect-video"}`}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0"
            aria-label={`Play ${video.title}`}
          >
            <Image
              src={thumbSrc}
              alt=""
              fill
              sizes={
                isShort
                  ? "(max-width: 1024px) 50vw, 25vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onLoad={(event) => {
                if (event.currentTarget.naturalWidth < 400) {
                  setThumbSrc(`https://i.ytimg.com/vi/${video.id}/hq720.jpg`);
                }
              }}
              onError={() =>
                setThumbSrc(`https://i.ytimg.com/vi/${video.id}/sddefault.jpg`)
              }
            />
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] transition-opacity duration-200 group-hover:opacity-100"
            >
              <path
                fill="currentColor"
                d="M8 5.14v13.72c0 .86 1.02 1.37 1.75.88l10.1-6.86c.66-.45.66-1.31 0-1.76l-10.1-6.86C9.02 3.77 8 4.28 8 5.14Z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">
          {video.type}
        </p>
        <h3 className="mt-1 text-base font-bold text-white">{video.title}</h3>
      </div>
    </article>
  );
};

export default VideoCard;
