/**
 * Contact details come from Vercel environment variables, never from source.
 * NEXT_PUBLIC_* values are inlined into the client bundle because they are shown on the page.
 */
export const siteConfig = {
  name: "RGD Solutions",
  url: "https://rgd-solutions.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  resumePath: "/ricardo-dalessandro-resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
