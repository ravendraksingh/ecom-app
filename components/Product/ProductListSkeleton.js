import React from "react";
import ProductSkeleton from "./ProductSkeleton";

const ProductListSkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-wrap md:flex-row gap-4 p-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductListSkeleton;
