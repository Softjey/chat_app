import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <p className="text-inherit font-medium select-none">PulseChat</p>
    </Link>
  );
}
