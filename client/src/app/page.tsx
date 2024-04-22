import * as authClient from "@/services/api/auth";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark">
      <form action={authClient.signIn}>
        <Button type="submit" variant="faded">
          SignIn with Google
        </Button>
      </form>
    </main>
  );
}
