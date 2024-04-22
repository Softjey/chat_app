import { auth } from "@/configs/auth";
import NonAuthorizedHomePage from "./_home-pages/NonAuthorizedHomePage";
import AuthorizedHomePage from "./_home-pages/AuthorizedHomePage";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return <NonAuthorizedHomePage />;
  }

  return <AuthorizedHomePage />;
}
