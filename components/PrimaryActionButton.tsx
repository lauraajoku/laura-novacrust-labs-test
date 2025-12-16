import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryActionButtonProps {
  ctaLabel: string;
  ctaHref?: string;
  className?: string
}

const PrimaryActionButton: React.FC<PrimaryActionButtonProps> = ({
  ctaLabel,
  ctaHref,
  className
}) => {
  return (
    <div>
      <Button className={cn(`w-full h-fit px-10 py-5 rounded-full bg-[#013941] font-instrument-sans font-bold text-base leading-tight text-[#E6FBF2] hover:bg-[#013941]`, className)}>
        <Link href={ctaHref ?? ""}>{ctaLabel}</Link>
      </Button>
    </div>
  );
};

export default PrimaryActionButton;
