import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@/components/ui/separator";

export default async function ProductDetailsPage({ params }) {
  const { productId } = params;
  console.log("productId", productId);

  //   const response = await fetch(`/api/dummyjson/products/${productId}`);
  const response = await fetch(`https://dummyjson.com/products/${productId}`);

  const product = await response.json();

  return <ProductDetails product={product} />;
}

function ProductDetails({ product }) {
  return (
    <div className="container mx-auto p-3 ms-3">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="flex flex-col w-full lg:w-[70%]">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:me-3">
              <Image
                src={product.images[0]}
                width={500}
                height={500}
                //   fill="true"
                alt={`${product.name} Image`}
                className="rounded-xl"
              ></Image>
            </div>
            <div className="lg:w-[50%]">
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-3">{product?.title}</h2>
                <h3 className="text-muted-foreground mb-3">
                  {product?.description}
                </h3>
                {product?.rating && (
                  <div className="flex flex-row items-center">
                    <span className="me-2">{product?.rating}</span>
                    {[...Array(Math.floor(product?.rating ?? 1))].map(
                      (x, index) => (
                        <Star
                          fill="#ff9529"
                          strokeWidth={0}
                          size={18}
                          color=""
                          key={"star" + index}
                        />
                      )
                    )}
                  </div>
                )}
              </div>
              <hr className="mb-5" />
              <div className="flex flex-col mb-3">
                <p className="text-xl">
                  Your Price:{" "}
                  <span className="text-2xl">{`$${product?.price}`}</span>
                </p>
                {/* <p className="text-muted-foreground line-through">
                  M.R.P.: {product?.price_info?.mrp}
                </p> */}
                <p className="text-xl mb-3">
                  Your Save:{" "}
                  {product?.discountPercentage > 0
                    ? `${product?.discountPercentage}%`
                    : 0}
                </p>
              </div>
              <hr />
            </div>
          </div>
          {/* <div>
            <ScrollArea className="h-36 w-48 rounded-md border">
              <div className="p4">
                {product?.reviews &&
                  product.reviews.map((review, index) => (
                    <div key={`${review.comment}_${index}`}>
                      <p>{review.rating}</p>
                      <p>{review.comment}</p>
                      <p>{review.reviewerName}</p>
                      <p>{review.reviewerEmail}</p>
                      <Separator className="my-2" />
                    </div>
                  ))}
              </div>
            </ScrollArea>
          </div> */}
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-xl">Seller</p>
          <p>{product?.shipping_info?.seller_name}</p>
          <Button
            variant="outline"
            className="w-[150px] bg-yellow-200 hover:bg-yellow-300"
          >
            <ShoppingCart />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="w-[150px] bg-blue-600 hover:bg-blue-700 text-white hover:text-white"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
