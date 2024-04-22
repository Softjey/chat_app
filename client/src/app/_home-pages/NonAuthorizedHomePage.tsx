import { signIn } from "@/app/api/auth/_actions";
import { Button } from "@nextui-org/react";

export default function NonAuthorizedHomePage() {
  return (
    <form action={signIn}>
      <Button type="submit" variant="faded">
        Sign in with Google
      </Button>
    </form>
  );
}
