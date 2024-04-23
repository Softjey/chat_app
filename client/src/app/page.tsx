import { auth } from "@/configs/auth";
import AuthorizedHomePage from "./_pages/AuthorizedHomePage copy";
import PublicHomePage from "./_pages/PublicHomePage";

export default async function Home() {
  const session = await auth();

  return session ? <AuthorizedHomePage /> : <PublicHomePage />;
}
