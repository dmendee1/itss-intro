'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header>
                <div className="logo-area green-logo-area mt-30 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="logo">
                                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="header-meta-info d-flex align-items-center justify-content-between">
                                    <div className="header-search-bar">
                                        <form action="#">
                                            <div className="search-info p-relative">
                                                <button className="header-search-icon"><i className="fal fa-search" /></button>
                                                <input type="text" placeholder="Search products..." />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-meta header-brand d-flex align-items-center">
                                        <div className="header-meta__lang">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/img/icon/mn-flag.png" alt="flag" />Mongolia
                                                        <span><i className="fal fa-angle-down" /></span>
                                                    </Link>
                                                    <ul className="header-meta__lang-submenu">
                                                        <li>
                                                            <Link href="#">Mongolia</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">English</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-area tertiary-main-menu mt-25 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="cat-menu__category p-relative">
                                    <a onClick={handleToggle} href="#"><i className="fal fa-bars" />Categories</a>
                                    <div className="category-menu" style={{ display: `${isToggled ? "block" : "none"}` }}>
                                        <ul className="cat-menu__list">
                                            <li><Link href="/shop-2"><i className="fal fa-chair" /> Furniture</Link></li>
                                            <li className="menu-item-has-children"><Link href="/shop"><i className="far fa-campfire" />
                                                Cooking </Link>
                                                <ul className="submenu">
                                                    <li><Link href="/shop-2">Chair</Link></li>
                                                    <li><Link href="/shop-2">Table</Link></li>
                                                    <li><Link href="/shop">Wooden</Link></li>
                                                    <li><Link href="/shop">furniture</Link></li>
                                                    <li><Link href="/shop">Clock</Link></li>
                                                    <li><Link href="/shop">Gifts</Link></li>
                                                    <li><Link href="/shop">Crafts</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/shop-2"><i className="fal fa-shoe-prints" />Accessories</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-tshirt" />Fashion</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-clock" />Clocks</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-light-ceiling" />Lighting</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-gift" />Toys</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-basketball-ball" />Hand Made</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-gift" />Minimalism</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-lightbulb-dollar" />Electronics</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-car-alt" />Cars</Link></li>
                                        </ul>
                                        <div className="coupon-offer d-flex align-items-center justify-content-between">
                                            <span>Coupon: <Link href="/shop">Offers50</Link></span>
                                            <Link href="#"> <i className="fal fa-copy" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li><Link href="/">Нүүр</Link></li>
                                            <li><Link href="/about">Бидний тухай</Link></li>
                                            <li><Link href="/contact">Холбоо барих</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                                <div className="menu-contact">
                                    <ul>
                                        <li>
                                            <div className="menu-contact__item">
                                                <div className="menu-contact__icon">
                                                    <i className="fal fa-phone" />
                                                </div>
                                                <div className="menu-contact__info">
                                                    <Link href="tel:+976-98110059">+976-98110059</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
