"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
  trustRow,
  compact = false,
  size = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  trustRow?: React.ReactNode;
  compact?: boolean;
  size?: "default" | "lg";
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-b border-border">
      {image ? (
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.06, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      ) : null}
      <div
        className={cn(
          "absolute inset-0",
          image
            ? "bg-linear-to-r from-black/92 via-black/70 to-black/30"
            : "bg-card"
        )}
      />
      {image && (
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/60" />
      )}
      <div
        className={cn(
          "relative mx-auto max-w-6xl px-4 md:px-6",
          size === "lg"
            ? "py-28 md:py-44"
            : compact
              ? "py-16 md:py-20"
              : "py-20 md:py-28"
        )}
      >
        {eyebrow ? (
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
            {children}
          </Reveal>
        ) : null}
        {trustRow ? (
          <Reveal delay={0.32} className="mt-10">
            {trustRow}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
