import Image from "next/image";
import type { ProjectMedia } from "@/content/project-media";

export function ProjectGallery({ media, limit }: { media: ProjectMedia; limit?: number }) {
  const landscape = media.layout === "landscape";
  const images = limit ? media.images.slice(0, limit) : media.images;
  return (
    <div className="min-w-0">
      <div
        className={`grid justify-items-center gap-6 ${landscape ? "grid-cols-1" : images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}
      >
        {images.map((image) => (
          <figure
            key={image.caption}
            className={`w-full min-w-0 ${landscape ? "max-w-[960px]" : "max-w-[300px]"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              sizes={
                landscape
                  ? "(max-width: 767px) 100vw, (max-width: 1079px) 80vw, 960px"
                  : limit
                    ? "(max-width: 639px) 300px, (max-width: 1079px) 40vw, 280px"
                    : "(max-width: 639px) 300px, (max-width: 1279px) 28vw, 300px"
              }
              className="h-auto w-full rounded-xl border border-ink/15"
            />
            <figcaption className="mt-3 text-sm text-ink/75">
              {image.caption}
              {image.credit ? (
                <a
                  className="mt-1 flex min-h-11 items-center text-xs underline underline-offset-4"
                  href={image.credit.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Image: {image.credit.label}
                </a>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-5 text-xs leading-relaxed text-ink/65">
        {media.attribution ?? "Store marketing images"} ·{" "}
        <a
          href={media.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center underline underline-offset-4"
        >
          {media.sourceLabel}
        </a>
      </p>
    </div>
  );
}
