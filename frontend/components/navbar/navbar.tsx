import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-1 h-20">
        <Link href="/" className="flex items-center">
          <div className="h-16 flex items-center">
            <Image
              src="/olivan2.png"
              alt="Logo"
              width={200}
              height={200}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        <div className="flex gap-3">
          <Link href="/brands">Brands</Link>
          <Link href="/products">Products</Link>
          <Link href="/stores">Stores</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/account/login">Login</Link>
          </Button>
          <Button asChild>
            {/* <Link href="/account/register">Sign Up</Link> */}
          </Button>
        </div>
      </div>
    </nav>
  );
}
