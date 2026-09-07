import { footer } from "@/content/site";
import { siteConfig } from "@/lib/site-config";

const linkClass =
  "inline-flex min-h-11 items-center text-[15px] font-semibold text-white/78 hover:text-white";

export function Footer() {
  const links: Array<{ label: string; href: string; external?: boolean }> = [];
  if (siteConfig.contactEmail) {
    links.push({ label: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` });
  }
  if (siteConfig.linkedinUrl) {
    links.push({ label: "LinkedIn", href: siteConfig.linkedinUrl, external: true });
  }
  if (siteConfig.githubUrl) {
    links.push({ label: "GitHub", href: siteConfig.githubUrl, external: true });
  }
  links.push({ label: footer.resumeLabel, href: siteConfig.resumePath });

  return (
    <footer className="relative z-[2] flex flex-col gap-[22px] border-t border-white/10 px-5 pt-8 pb-10 md:flex-row md:items-center md:justify-between md:gap-6 md:px-20 md:pt-10 md:pb-12">
      <div className="flex items-center gap-3">
        <span className="glass flex size-9 items-center justify-center rounded-[11px] font-display text-lg font-bold">
          R
        </span>
        <span className="font-display text-[17px] font-semibold">{siteConfig.name}</span>
      </div>
      <nav aria-label="Footer" className="flex flex-col gap-1 md:flex-row md:items-center md:gap-7">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={linkClass}
            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <span className="text-sm leading-normal text-white/50">{footer.copyright}</span>
    </footer>
  );
}
