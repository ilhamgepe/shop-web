import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { auth, signOut } from "../../../auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="border-b p-2 flex items-center justify-between">
      <div className="">
        <Link href={"/"} className={cn("font-bold tracking-wide")}>
          Shops <span className="text-primary">Hub</span>
        </Link>
      </div>
      <div className="">
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/67534909?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <div>
                    <p className="font-semibold">Username</p>
                    <p className="">user@mail.com</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/auth/login" });
                    }}
                  >
                    <Button type="submit" variant={"destructive"}>
                      Sign out
                    </Button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={"/auth/login"} className={cn(buttonVariants({}))}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
