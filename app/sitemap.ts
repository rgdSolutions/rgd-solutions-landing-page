import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
