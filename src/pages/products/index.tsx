import Product_Template from "@templates/products";
import { LayoutDashboardDefault } from "src/layout/default";

export default function Products() {
  return <Product_Template />;
}

Products.layout = LayoutDashboardDefault;
