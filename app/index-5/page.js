
import Layout from "@/components/layout/Layout"
import Blog4 from "@/components/sections/Blog4"
import DealProduct4 from "@/components/sections/DealProduct4"
import Product4 from "@/components/sections/Product4"
import SelectedProduct from "@/components/sections/SelectedProduct"
import Slider from "@/components/sections/Slider"
import Testimonial2 from "@/components/sections/Testimonial2"
import Link from "next/link"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider />
                <Product4 />
                <DealProduct4 />
                <SelectedProduct />
                <Testimonial2 />
                <Blog4 />
            </Layout>
        </>
    )
}