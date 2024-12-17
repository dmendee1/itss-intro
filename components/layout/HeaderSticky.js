import Link from "next/link"

export default function HeaderSticky({ scroll, isCartSidebar, handleCartSidebar }) {
    return (
        <>
            <div id="header-sticky" className={`logo-area tp-sticky-one mainmenu-5 ${scroll ? "header-sticky" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3">
                            <div className="logo">
                                <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="main-menu">
                                <nav>
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
        </>
    )
}
