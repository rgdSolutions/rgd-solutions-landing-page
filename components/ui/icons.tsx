import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 18, strokeWidth = 2, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </Svg>
  );
}

export function AiIcon(props: IconProps) {
  return (
    <Svg size={24} strokeWidth={1.8} {...props}>
      <path d="M12 3a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1a3 3 0 0 0 0-6v-1a3 3 0 0 0-3-3V6a3 3 0 0 0-3-3Z" />
      <path d="M12 3v18" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </Svg>
  );
}

export function DevicesIcon(props: IconProps) {
  return (
    <Svg size={24} strokeWidth={1.8} {...props}>
      <rect x="3" y="4" width="13" height="16" rx="2" />
      <rect x="14" y="8" width="7" height="12" rx="2" />
      <path d="M7 20h5" />
    </Svg>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <Svg size={24} strokeWidth={1.8} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 15.5a5 5 0 0 1 5.5 4.5" />
    </Svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <Svg size={32} strokeWidth={1.8} {...props}>
      <path d="M4 12a5 5 0 0 1 5-5v0a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4H5a1 1 0 0 1-1-1v-5Z" />
      <path d="M14 12a5 5 0 0 1 5-5v0a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1v-5Z" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg size={22} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg size={22} {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg size={20} strokeWidth={2.2} {...props}>
      <path d="m5 12 5 5L20 7" />
    </Svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Svg size={18} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </Svg>
  );
}
