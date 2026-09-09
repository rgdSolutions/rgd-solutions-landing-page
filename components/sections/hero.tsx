"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";
import { homepageProjectMedia, projectMedia } from "@/content/project-media";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import styles from "./hero.module.css";

function Copy() {
  return (
    <div className={styles.copy}>
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1>
        Your next engineers.
        <br />
        <span>Part of your team.</span>
      </h1>
      <p className={styles.subhead}>{hero.subhead}</p>
      <div className={styles.actions}>
        <ButtonLink href={hero.primaryCta.href}>
          {hero.primaryCta.label}
          <ArrowRightIcon />
        </ButtonLink>
        <ButtonLink variant="ghost" href={hero.secondaryCta.href}>
          {hero.secondaryCta.label}
        </ButtonLink>
      </div>
    </div>
  );
}

function ProjectStage() {
  return (
    <div className={styles.projectStage}>
      {[
        {
          slug: "launchdarkly",
          label: "LaunchDarkly · Experimentation",
          image: projectMedia.launchdarkly!.images[0],
          className: styles.browser,
        },
        {
          slug: "cnn",
          label: "CNN+ · Connected TV",
          image: projectMedia.cnn!.images[0],
          className: styles.television,
        },
        {
          slug: "d-id",
          label: "D-ID · Mobile Studio",
          image: homepageProjectMedia["d-id"]!.images[0],
          className: styles.phones,
        },
      ].map(({ slug, label, image, className }) => (
        <Link key={slug} href={`/work/${slug}`} className={`${styles.projectCard} ${className}`}>
          <span className={styles.cardBar}>
            <i aria-hidden="true">● ● ●</i>
            {label}
            <span aria-hidden="true">↗</span>
          </span>
          <Image src={image.src} alt={image.alt} sizes="(max-width: 767px) 80vw, 500px" />
        </Link>
      ))}
      <p className={styles.stageCaption}>Selected engineering experience by Ricardo</p>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} id="top" className={styles.hero} data-running={visible && !paused}>
      <div className="hero-aurora" aria-hidden="true">
        <div className="hero-aurora-teal" />
        <div className="hero-aurora-rose" />
        <span className="hero-edge-grid">
          <span className="hero-grid-pulses">
            <span className="hero-grid-pulse hero-grid-pulse-left" />
            <span className="hero-grid-pulse hero-grid-pulse-low" />
            <span className="hero-grid-node hero-grid-node-upper" />
            <span className="hero-grid-node hero-grid-node-lower" />
          </span>
        </span>
      </div>
      <div className={styles.layout}>
        <Copy />
        <ProjectStage />
      </div>
      <button
        type="button"
        className={styles.pause}
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
        aria-label={`${paused ? "Resume" : "Pause"} hero animation`}
      >
        {paused ? "▶ Resume" : "Ⅱ Pause"}
      </button>
    </section>
  );
}
