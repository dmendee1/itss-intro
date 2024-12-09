"use client";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
};

export default function Slider5() {
  const [isToggled, setToggled] = useState(true);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <>
      <section
        className="slider-area slider-bg-overlay pb-30 pt-60 "
        data-background="assets/img/banner/banner-bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-xl-end">
            <div className="col-xl-9 col-lg-12 align-items-center mr-auto">
              <div className="tp-slider-area p-relative">
                <div className="swiper-container slider-active">
                  <Swiper {...swiperOptions}>
                    <SwiperSlide>
                      <div className="tp-slide-item tpslider-item-5">
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Quality Fresh Products
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Fresh Grocery <br /> Products.
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop-2"
                          >
                            Shop Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img
                            src="assets/img/slider/slider-05-bg-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="tp-slide-item tpslider-item-4">
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Quality Fresh Products
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Fresh Grocery <br /> Products.
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop-2"
                          >
                            Shop Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img
                            src="assets/img/slider/slider-05-bg-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="tp-slide-item tpslider-item-5">
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Quality Fresh Products
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Fresh Grocery <br /> Products.
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop-2"
                          >
                            Shop Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img
                            src="assets/img/slider/slider-05-bg-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="tp-slide-item tpslider-item-5">
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Quality Fresh Products
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Fresh Grocery <br /> Products.
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop-2"
                          >
                            Shop Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img
                            src="assets/img/slider/slider-05-bg-4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="slider-pagination" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
