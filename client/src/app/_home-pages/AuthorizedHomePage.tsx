import { Button } from "@nextui-org/react";
import { signOut } from "../api/auth/_actions";

export default function AuthorizedHomePage() {
  return (
    <>
      <h1>Authorized Home Page</h1>

      <form action={signOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </>
  );
}
