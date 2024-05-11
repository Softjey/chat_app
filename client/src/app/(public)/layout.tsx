import PublicNavbar from "@/components/common/PublicNavbar";

interface Props {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <PublicNavbar />
      {children}
    </>
  );
}
