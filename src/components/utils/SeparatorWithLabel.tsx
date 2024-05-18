import { cn } from "@/lib/utils";
import React from "react";

const SeparatorWithLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative flex items-center", className)}>
      <div className="flex-grow border-t"></div>
      <span className="mx-2 flex-shrink text-muted-foreground">{label}</span>
      <div className="flex-grow border-t"></div>
    </div>
  );
};

export default SeparatorWithLabel;
