import { ThemeToggle } from "@/components/buttons/ThemeToggle";
import Layouts from "@/components/layouts/Layouts";
import Wrapper from "@/components/layouts/Wrapper";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../auth";

export default async function Home() {
  const session = await auth();
  // console.log({ session });

  return (
    <Layouts>
      <Wrapper>
        <p>Whereas disregard and contempt for human rights have resulted</p>
        <ThemeToggle />
        <p>{session?.user.user.id}</p>
        <p>{session?.user.user.email}</p>
        <p>{session?.user.user.first_name}</p>
        <p>{session?.user.user.last_name}</p>
        <p>{session?.user.user.image}</p>
        <p>{session?.user.user.role}</p>
        <p>{session?.user.user.created_at}</p>
        <p>{session?.user.user.updated_at}</p>
        {session && (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/auth/login" });
            }}
          >
            <Button type="submit">Sign out</Button>
          </form>
        )}
      </Wrapper>
    </Layouts>
  );
}
