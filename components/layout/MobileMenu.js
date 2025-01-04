'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu mean-container">
                <div className="mean-bar">
                    <Link href="#" className="meanmenu-reveal">
                        <span><span><span /></span></span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li className="has-dropdown">
                                <Link href="/">Ангилал</Link>
                                <ul className="submenu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li><Link href="/">Wooden  Home</Link></li>
                                    <li><Link href="/index-2">Fashion Home</Link></li>
                                    <li><Link href="/index-3">Furniture Home</Link></li>
                                    <li><Link href="/index-4">Cosmetics Home</Link></li>
                                    <li><Link href="/index-5">Food Grocery</Link></li>
                                </ul>
                                <Link className="mean-expand" onClick={() => handleClick(1)} href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></Link>
                            </li>
                            <li>
                                <Link href="/shop">Shop</Link>
                                {/* <ul className="submenu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/shop-2">Shop 2</Link></li>
                                    <li><Link href="/shop-details">Shop Details </Link></li>
                                    <li><Link href="/shop-details-2">Shop Details 2</Link></li>
                                    <li><Link href="/shop-location">Shop Location</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/sign-in">Sign In</Link></li>
                                    <li><Link href="/checkout">Checkout</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/track">Product Track</Link></li>
                                </ul>
                                <Link className="mean-expand" onClick={() => handleClick(2)} href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></Link> */}
                            </li>
                            <li><Link href="/contact">Холбоо барих</Link></li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
