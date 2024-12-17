import Link from "next/link"
import CartShow from "../elements/CartShow"

export default function HeaderMobSticky({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    return (
        <>
            <div id="header-mob-sticky" className={`tp-md-lg-header d-md-none pt-20 pb-20 ${scroll ? "header-sticky" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3 d-flex align-items-center">
                            <div className="header-canvas flex-auto">
                                <button className="tp-menu-toggle" onClick={handleMobileMenu}><i className="far fa-bars" /></button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="logo text-center">
                                <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
