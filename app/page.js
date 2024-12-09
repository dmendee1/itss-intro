
import Layout from "@/components/layout/Layout"
import Blog4 from "@/components/sections/Blog4"
import DealProduct4 from "@/components/sections/DealProduct4"
import Product4 from "@/components/sections/Product4"
import SelectedProduct from "@/components/sections/SelectedProduct"
import Slider from "@/components/sections/Slider3"
import Testimonial2 from "@/components/sections/Testimonial2"

export const metadata = {
  title: "My Page",
  description: "This is a description for my page",
};

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={2}>
      <Slider />
      <Product4 />
      <DealProduct4 />
      <SelectedProduct />
      <Testimonial2 />
      <Blog4 />
    </Layout>
  );
}
