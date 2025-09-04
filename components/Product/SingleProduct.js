import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export const SingleProduct = ({ product }) => {
  console.log({ product });

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <Link href={`/products/${product.productid}`}>
          <Image
            src={product.image_url}
            alt={product.name}
            width={180}
            height={180}
            className="mb-3"
          />
          <CardTitle className="mb-3">{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </Link>
      </CardHeader>
    </Card>
  );
};
