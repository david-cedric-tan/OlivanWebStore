import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ModeToggle />
    </div>
  );
}
