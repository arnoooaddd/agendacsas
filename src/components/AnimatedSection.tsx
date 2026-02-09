import { ReactNode } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
}

const directionClass: Record<string, string> = {
  up: "translate-y-[40px]",
  down: "-translate-y-[40px]",
  left: "-translate-x-[40px]",
  right: "translate-x-[40px]",
  scale: "scale-95",
  fade: "",
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${directionClass[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
