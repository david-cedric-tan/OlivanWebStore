import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          Olivan
        </Link>
        <div className="flex gap-4">
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
