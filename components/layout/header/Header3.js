"use client";
import CartShow from "@/components/elements/CartShow";
import WishListShow from "@/components/elements/WishListShow";
import Link from "next/link";
import { useState } from "react";
import HeaderMobSticky from "../HeaderMobSticky";
import HeaderSticky from "../HeaderSticky";
import HeaderTabSticky from "../HeaderTabSticky";
import Category from "./Category";

export default function Header3({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isCartSidebar,
  handleCartSidebar,
}) {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <>
      <header>
        <div className="logo-area green-logo-area mt-30 d-none d-xl-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9">
                <div className="header-meta-info d-flex align-items-center justify-content-between">
                  <div className="header-meta header-brand d-flex align-items-center">
                    <div className="header-meta__lang">
                      <ul>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/icon/mn-flag.png"
                              alt="flag"
                            />
                            Mongolia
                            <span>
                              <i className="fal fa-angle-down" />
                            </span>
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

        {Category(handleToggle, isToggled)}
      </header>

      <HeaderSticky
        scroll={scroll}
        isCartSidebar={isCartSidebar}
        handleCartSidebar={handleCartSidebar}
      />
      <HeaderTabSticky
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        isCartSidebar={isCartSidebar}
        handleCartSidebar={handleCartSidebar}
      />
      <HeaderMobSticky
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        isCartSidebar={isCartSidebar}
        handleCartSidebar={handleCartSidebar}
      />
    </>
  );
}
