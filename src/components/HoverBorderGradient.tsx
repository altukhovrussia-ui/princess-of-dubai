"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

/* ─── Brand-adapted radial gradients using Gold (#d4af37) ─── */
const movingMap: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, #d4af37 0%, rgba(212, 175, 55, 0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #d4af37 0%, rgba(212, 175, 55, 0) 100%)",
  BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #d4af37 0%, rgba(212, 175, 55, 0) 100%)",
  RIGHT: "radial-gradient(16.2% 41.1% at 100% 50%, #d4af37 0%, rgba(212, 175, 55, 0) 100%)",
};

const highlight =
  "radial-gradient(75% 181.15942028985506% at 50% 50%, #d4af37 0%, rgba(248, 245, 240, 0) 100%)";

export const HoverBorderGradient = ({
  children,
  as: Element = "button",
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (currentDirection: Direction): Direction => {
      const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    },
    [clockwise]
  );

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  return (
    <Element
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex h-min w-fit flex-col flex-nowrap items-center justify-center overflow-visible rounded-full px-4 py-2 text-ivory decoration-clone transition duration-500 ${containerClassName || ""}`}
      {...props}
    >
      <div
        className={`z-10 w-auto px-4 py-2 text-ivory text-[10px] font-bold uppercase tracking-[0.2em] ${className || ""}`}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="absolute inset-[0.5px] z-[1] flex-none rounded-[inherit] backdrop-blur-2xl bg-deep-grey/50 border border-ivory/15" />
    </Element>
  );
};
