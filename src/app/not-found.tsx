import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <h2>Not Found</h2>
        <p>Could not find the requested resource</p>
        <Link href="/" className={cn(buttonVariants({ variant: "default" }))}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
