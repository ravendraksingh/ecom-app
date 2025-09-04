import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

const ProductDetailsPage = async ({ params }) => {
  const productid = params.productid;
  console.log("productid", productid);

  const data = await fetch(
    `http://localhost:8100/api/v1/products/${productid}`
  );
  const product = await data.json();
  console.log("product", product);

  return (
    <div className="container mx-auto p-3 ms-3">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="flex flex-col w-full lg:w-[70%]">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:me-3">
              <Image
                src={product.image_url}
                width={500}
                height={500}
                //   fill="true"
                alt={`${product.name} Image`}
                className="rounded-xl"
              ></Image>
            </div>
            <div className="lg:w-[50%]">
              <div className="mb-4">
                <h2 className="text-3xl">{product.name}</h2>
                <h3 className="text-muted-foreground">{product.description}</h3>
                {product?.rating && (
                  <div className="flex flex-row">
                    {[...Array(Math.floor(product?.rating ?? 1))].map((x, index) => (
                      <Star
                        fill="#ff9529"
                        strokeWidth={0}
                        size={18}
                        color=""
                        key={"star" + index}
                      />
                    ))}
                  </div>
                )}
              </div>
              <hr className="mb-5" />
              <div className="flex flex-col mb-3">
                <p className="text-xl">
                  Your Price:{" "}
                  <span className="text-2xl">
                    {product?.price_info?.retail}
                  </span>
                </p>
                <p className="text-muted-foreground line-through">
                  M.R.P.: {product?.price_info?.mrp}
                </p>
                <p className="text-xl mb-3">
                  Your Save: {product?.price_info?.discount ?? 0}
                </p>
              </div>
              <hr />
              {product?.product_spec && (
                <div className="mt-3">
                  <p className="font-bold text-xl">Product Specification</p>
                  <table>
                    <tbody>
                      {Object.entries(product?.product_spec).map(
                        ([key, value]) => (
                          <tr className="mb-1" key={key}>
                            <td className="text-start font-bold">{key}</td>
                            <td className="text-end">{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                  <hr className="my-5" />
                </div>
              )}
            </div>
          </div>
          <div>
            {product?.product_info_list && (
              <div>
                <p className="font-bold text-xl">About this item</p>
                <ul className="list-disc">
                  {product?.product_info_list?.map((info) => (
                    <li className="mb-2" key={info}>
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
};

export default ProductDetailsPage;
