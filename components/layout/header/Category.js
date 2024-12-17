import Link from "next/link";
import menus from "../../../data/menus";

export default function menu(handleToggle, isToggled) {
  return (
    <div className="main-menu-area mt-20 d-none d-xl-block">
      <div className="for-megamenu p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3">
              <div className="cat-menu__category p-relative">
                <a
                  className="tp-cat-toggle"
                  onClick={handleToggle}
                  role="button"
                >
                  <i className="fal fa-bars" />
                  Ангилал
                </a>
                <div
                  className="category-menu category-menu-off"
                  style={{ display: `${isToggled ? "block" : "none"}` }}
                >
                  <ul className="cat-menu__list">
                    {menus.menus.map((e) => {
                      return displayMenu(e);
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link href="/">Нүүр</Link>
                    </li>
                    <li>
                      <Link href="/about">Бидний тухай</Link>
                    </li>
                    <li>
                      <Link href="/contact">Холбоо барих</Link>
                    </li>
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
    </div>
  );
}

function displayMenu(menu) {
  if (menu.children) {
    return (
      <li key={menu.id} className="menu-item-has-children">
        <Link href="/shop">
          <i className="fal fa-flower-tulip" /> {menu.name}
        </Link>
        <ul className="submenu">
          {menu.children.map((child, i) => (
            <li key={i}>
              <Link key={i} href={child.href}>{child.name}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li key={menu.id}>
        <Link href={menu.href}>
          <i className="fal fa-user" /> {menu.name}
        </Link>
      </li>
    );
  }
}
