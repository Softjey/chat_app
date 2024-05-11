import { Button } from "@nextui-org/react";
import { signIn } from "../../api/auth/_actions";
import googleIcon from "../../../../public/icons/google-icon.svg";
import Image from "next/image";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <main className="grow flex flex-col gap-20 items-center justify-center">
      <h1 className="text-center text-9xl select-none">PulseChat</h1>

      <form action={signIn}>
        <Button
          type="submit"
          size="lg"
          variant="bordered"
          startContent={<Image src={googleIcon} alt="Google" width={24} height={24} />}
        >
          Sign in with Google
        </Button>
      </form>
    </main>
  );
}
