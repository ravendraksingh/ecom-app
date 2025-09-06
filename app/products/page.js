"use client";

import { SingleProduct } from "@/components/Product/SingleProduct";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useContext, useEffect, useState } from "react";
import ProductListSkeleton from "@/components/Product/ProductListSkeleton";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCategories() {
    const response = await fetch("http://localhost:8100/api/v1/categories");
    if (response.status == 200) {
      const data = await response.json();
      setCategories(data);
    }
  }

  async function fetchProducts_dummyJson() {
    setLoading(true);
    try {
      const res = await fetch("/api/dummyjson/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products);
      } else {
        console.error("Failed to fetch products", res.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchProducts() {
    const response = await fetch("http://localhost:8100/api/v1/products");
    if (response.status == 200) {
      const data = await response.json();
      setProducts(data);
    }
  }
  useEffect(() => {
    // fetchProducts();
    //fetchCategories();
    fetchProducts_dummyJson();
  }, []);

  return (
    <div className="container mx-auto">
      {/* Filters */}
      {/* <div className="">
        <p className="font-bold text-lg">Filters</p>
        <p className="mb-3">Categories</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((category) => (
              <SelectItem value={category?.id} key={category?.id}>
                {category?.description}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="my-3">Sort By Price</p>
        <RadioGroup defaultValue="ascending">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="ascending" id="sortAsc" />
            <Label htmlFor="sortAsc" className="text-muted-foreground">
              Ascending
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="descending" id="sortDesc" />
            <Label htmlFor="sortDesc" className="text-muted-foreground">
              Descending
            </Label>
          </div>
        </RadioGroup>
      </div> */}
      {/* Products */}
      <div className="flex flex-col md:flex-wrap md:flex-row gap-4 p-4">
        {loading && (
          <p className="text-5xl text-muted-foreground h-[50vh]">Loading...</p>
        )}
        {/* {loading && <ProductListSkeleton />} */}
        {products?.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
