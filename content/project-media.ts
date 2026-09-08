import ldResults from "@/design/assets/launchdarkly/experiment-results.png";
import ldDesign from "@/design/assets/launchdarkly/experiment-design.png";
import ldTargeting from "@/design/assets/launchdarkly/flag-targeting.png";
import cnnDevices from "@/design/assets/cnn-plus/insider-overview.jpg";
import cnnLibrary from "@/design/assets/cnn-plus/android-overview.jpg";
import cnnLaunch from "@/design/assets/cnn-plus/overview.jpg";
import didIntro from "@/design/assets/store-marketing/d-id-01.webp";
import didAvatars from "@/design/assets/store-marketing/d-id-03.webp";
import didScript from "@/design/assets/store-marketing/d-id-04.webp";
import astroDiscover from "@/design/assets/store-marketing/astrocade-02.webp";
import astroCreate from "@/design/assets/store-marketing/astrocade-03.webp";
import astroShare from "@/design/assets/store-marketing/astrocade-04.webp";
import type { StaticImageData } from "next/image";

export type ProjectMedia = {
  layout?: "landscape";
  attribution?: string;
  sourceLabel: string;
  sourceUrl: string;
  images: readonly {
    src: StaticImageData;
    alt: string;
    caption: string;
    credit?: { label: string; url: string };
  }[];
};

export const projectMedia: Record<string, ProjectMedia | undefined> = {
  launchdarkly: {
    layout: "landscape",
    attribution: "LaunchDarkly Experimentation · Screenshots supplied by Ricardo",
    sourceLabel: "Ricardo’s project on A.Team",
    sourceUrl: "https://platform.a.team/ricardodalessandro?project=689d3559a12b6c75c3e7ea8a",
    images: [
      {
        src: ldResults,
        alt: "LaunchDarkly experiment results with a hypothesis summary, exposure chart, and variation comparison table.",
        caption: "Review experiment results and compare variations",
      },
      {
        src: ldDesign,
        alt: "LaunchDarkly funnel experiment preview showing metrics, audience targeting, and traffic allocation across three variations.",
        caption: "Define funnel metrics and allocate experiment traffic",
      },
      {
        src: ldTargeting,
        alt: "LaunchDarkly feature-flag targeting with a prerequisite holdout flag and an experiment traffic allocation rule.",
        caption: "Connect feature targeting with experiment holdouts",
      },
    ],
  },
  cnn: {
    layout: "landscape",
    attribution: "CNN+ archive · Product artwork credited to CNN",
    sourceLabel: "CNN+ coverage in Next TV",
    sourceUrl: "https://www.nexttv.com/news/cnn-plus",
    images: [
      {
        src: cnnDevices,
        alt: "CNN+ promotional artwork showing Searching for Italy on a TV, with program discovery on laptop, tablet, and phone.",
        caption: "A streaming experience across screens",
        credit: {
          label: "CNN via Business Insider",
          url: "https://www.businessinsider.com/guides/streaming/cnn-plus-streaming-service",
        },
      },
      {
        src: cnnLibrary,
        alt: "CNN+ product artwork showing Full Circle on a TV and an on-demand library on smaller devices.",
        caption: "Featured shows and on-demand discovery",
        credit: {
          label: "CNN via Android Authority",
          url: "https://www.androidauthority.com/what-is-cnn-plus-1647508/",
        },
      },
      {
        src: cnnLaunch,
        alt: "Archived CNN+ launch promotion featuring CNN presenters and the March 29 streaming launch announcement.",
        caption: "The original March 2022 launch campaign",
        credit: { label: "CNN via Next TV", url: "https://www.nexttv.com/news/cnn-plus" },
      },
    ],
  },
  "d-id": {
    sourceLabel: "D-ID on the App Store",
    sourceUrl: "https://apps.apple.com/us/app/d-id-ai-video-generator/id6463755563",
    images: [
      {
        src: didIntro,
        alt: "D-ID: Create videos of digital people, with avatar, script, and voice controls.",
        caption: "Create a digital presenter",
      },
      {
        src: didAvatars,
        alt: "D-ID: Upload an image or choose an existing avatar from the presenter library.",
        caption: "Choose your avatar",
      },
      {
        src: didScript,
        alt: "D-ID: Add text or upload audio to give your presenter a voice.",
        caption: "Add a script or recording",
      },
    ],
  },
  astrocade: {
    sourceLabel: "Astrocade on Google Play",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.astrocade.app&hl=en_US",
    images: [
      {
        src: astroDiscover,
        alt: "Astrocade: Play endless games, with a discovery gallery of community-created games.",
        caption: "Discover games to play",
      },
      {
        src: astroCreate,
        alt: "Astrocade: Create your own without coding, showing a prompt alongside a playable balloon game.",
        caption: "Turn an idea into a game",
      },
      {
        src: astroShare,
        alt: "Astrocade: Have real fun, with a game leaderboard and sharing controls.",
        caption: "Share and compete",
      },
    ],
  },
};
