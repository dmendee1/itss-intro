'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(true)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header>
                <div className="logo-area mt-30 d-none d-xl-block">
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
                <div className="main-menu-area mt-20 d-none d-xl-block">
                    <div className="for-megamenu p-relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-3">
                                    <div className="cat-menu__category p-relative">
                                        <a className="tp-cat-toggle" onClick={handleToggle} role="button"><i className="fal fa-bars" />Ангилал</a>
                                        <div className="category-menu category-menu-off" style={{ display: `${isToggled ? "block" : "none"}` }}>
                                            <ul className="cat-menu__list">
                                                <li><Link href="/shop"><i className="fal fa-user" /> Хяналтын камер</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-user" /> Нэрийн хуудас</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-user" /> Принтер</Link></li>
                                                <li className="menu-item-has-children"><Link href="/shop"><i className="fal fa-flower-tulip" /> SmartSoft</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop-2">Цаг бүртгэлийн систем</Link></li>
                                                        <li><Link href="/shop-2">Эмнэлэгийн цахим бүртгэл</Link></li>
                                                        <li><Link href="/shop">Фитнесийн гишүүнчлэл, хөнгөлөлтийн картын систем</Link></li>
                                                        <li><Link href="/shop">furniture</Link></li>
                                                        <li><Link href="/shop">Clock</Link></li>
                                                        <li><Link href="/shop">Gifts</Link></li>
                                                        <li><Link href="/shop">Crafts</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/shop"><i className="fal fa-shoe-prints" /> Цаг бүртгэл</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-smile" /> Фитнесийн систем</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-futbol" /> Эмнэлэгийн систем</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-crown" /> Онгоцны билет захиалга</Link></li>
                                            </ul>
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
