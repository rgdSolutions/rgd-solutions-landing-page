import { footer } from "@/content/site";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const linkClass =
  "inline-flex min-h-11 items-center text-[15px] font-semibold text-ink/78 hover:text-ink";

export function Footer({ home = true }: { home?: boolean }) {
  const links: Array<{ label: string; href: string; external?: boolean }> = [];
  if (siteConfig.contactEmail) {
    links.push({ label: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` });
  }
  if (siteConfig.linkedinUrl) {
    links.push({ label: "Ricardo on LinkedIn", href: siteConfig.linkedinUrl, external: true });
  }
  if (siteConfig.githubUrl) {
    links.push({ label: "Ricardo on GitHub", href: siteConfig.githubUrl, external: true });
  }
  links.push({ label: footer.resumeLabel, href: siteConfig.resumePath });

  return (
    <footer className="relative z-[2] border-t border-ink/10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-[22px] px-5 pt-8 pb-10 wide:flex-row wide:items-center wide:justify-between md:gap-6 md:px-20 md:pt-10 md:pb-12">
        <div className="flex items-center gap-4">
          <Logo href={home ? "#top" : "/#top"} />
          {/* On phones the switch lives in the header menu instead. */}
          <ThemeToggle className="hidden md:flex" />
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-col gap-1 md:flex-row md:items-center md:gap-7"
        >
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
        <span className="text-sm leading-normal text-ink/65">{footer.copyright}</span>
      </div>
    </footer>
  );
}
