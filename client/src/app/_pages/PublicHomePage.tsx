import { Button } from "@nextui-org/react";
import { signIn } from "../api/auth/_actions";
import googleIcon from "../../../public/icons/google-icon.svg";
import Image from "next/image";

export default function PublicHomePage() {
  return (
    <div className="flex flex-col gap-20 items-center select-none">
      <h1 className="text-center text-9xl ">PulseChat</h1>

      <form action={signIn}>
        <Button
          type="submit"
          size="lg"
          variant="bordered"
          startContent={
            <Image src={googleIcon} alt="Google" width={24} height={24} />
          }
        >
          Sign in with Google
        </Button>
      </form>
    </div>
  );
}
