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
import { AppContext } from "@/context/AppContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  //   const data = await fetch("http://localhost:8100/api/v1/products");
  //   const products = await data.json();

  //   const _data = await fetch("http://localhost:8100/api/v1/categories");
  //   const categories = await _data.json();
  const { appData, setAppData } = useContext(AppContext);
  console.log("appData", appData);

  async function fetchProducts() {
    const response = await fetch("http://localhost:8100/api/v1/products");
    if (response.status == 200) {
      const data = await response.json();
      setProducts(data);
    }
  }

  async function fetchCategories() {
    const response = await fetch("http://localhost:8100/api/v1/categories");
    if (response.status == 200) {
      const data = await response.json();
      setCategories(data);
    }
  }

  useEffect(() => {
    fetchProducts();
    setCategories();
  }, []);

  return (
    <div className="container flex flex-col md:flex-row mx-auto p-4">
      {/* Filters */}
      <div className="">
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
      </div>
      {/* Products */}
      <div className="flex flex-col flex-wrap md:flex-row gap-4 p-4">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
