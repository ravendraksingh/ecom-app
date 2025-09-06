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
  const { addItem } = useCart();

  function notify() {
    toast("Item added to cart!");
  }

  return (
    <Card className="min-w-[300px]">
      <CardContent className="md:max-w-[320px] lg:max-w-[380px]">
        <Link href={`/products/${product?.id}`}>
          <div className="mb-3">
            <div className="flex justify-center">
              <Image
                // src={product.image_url}
                src={product?.images[0]}
                alt={product?.title}
                width={180}
                height={180}
                className="mb-3"
              />
            </div>
            <p className="text-xl font-bold mb-3">{product?.title}</p>
            <CardDescription>
              <p>{product?.description}</p>
            </CardDescription>
          </div>
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
          <div className="mb-3">
            <span className="text-3xl font-bold">
              <span className="text-sm">$</span>
              {`${product?.price}`}{" "}
            </span>
            <span className="text-muted-foreground">{`(${product?.discountPercentage}% off)`}</span>
          </div>
          <CardFooter className="p-0">
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
              position="top-center"
              toastOptions={{
                style: {
                  boxShadow: "0 1px 2px rgba(255,255,255,0.1)",
                  color: "blue",
                  // boxShadow: "0",
                },
              }}
            />
          </CardFooter>
        </Link>
      </CardContent>
    </Card>
  );
};
