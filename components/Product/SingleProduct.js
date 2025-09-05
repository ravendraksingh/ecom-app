import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast, Toaster } from "sonner";

export const SingleProduct = ({ product }) => {
  console.log({ product });
  const { addItem } = useCart();

  function notify() {
    toast("Item added to cart!");
  }

  return (
    <Card className="min-w-[300px]">
      <CardHeader>
        <Link href={`/products/${product.productid}`}>
          <Image
            // src={product.image_url}
            src={product?.images[0]}
            alt={product?.title}
            width={180}
            height={180}
            className="mb-3"
          />
          <CardTitle className="mb-3">{product?.title}</CardTitle>
          <CardDescription>
            <p>{product?.description}</p>
          </CardDescription>
        </Link>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-row items-center">
          <li className="me-2">{`${product.rating} `} </li>
          {Array.from({ length: Math.floor(`${product.rating}`) }).map(
            (_, index) => (
              <li key={index}>
                <Star size={14} color="#ff9529" fill="#ff9529"></Star>
              </li>
            )
          )}
        </ul>

        <div>
          <span className="text-3xl font-bold">
            <span className="text-sm">$</span>
            {`${product?.price}`}{" "}
          </span>
          <span className="text-muted-foreground">{`(${product?.discountPercentage}% off)`}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-yellow-400 text-black hover:bg-yellow-400 hover:text-black"
          onClick={() => {
            addItem(product);
            notify();
          }}
        >
          <ShoppingCart />
          <span>Add to Cart</span>
        </Button>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              boxShadow: "0 1px 2px rgba(255,255,255,0.1)",
              color: "blue"
            // boxShadow: "0",
            },
          }}
        />
      </CardFooter>
    </Card>
  );
};
