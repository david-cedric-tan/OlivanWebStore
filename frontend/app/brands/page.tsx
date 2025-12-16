import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import ProductGrid from "@/components/product-grid";
export default function Brands() {
  return (
    <div>
      <Navbar />
      <p>Welcome to the brands page</p>
      <p>Here you can find all the brands we offer</p>
      <ProductGrid />
    </div>
  );
}
