"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { companyIntro, companySub1, companySub2,companySub3, sincerelly, major, owner } from "@/data/about"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 25,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function About() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Бидний тухай">
        <div>
          <section className="about-area pt-80  pb-40">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="tpabout__inner-title-area mt-25 mb-45">
                    <h4 className="tpabout__inner-title">Компаний танилцуулга</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="tpabout__inner-story mb-40">
                    <p style={{textAlign:"justify"}}>
                      {companyIntro}
                    </p>
                    <p className="mt-3" style={{textAlign:"justify"}}>
                      {companySub1}
                    </p>
                    <p className="mt-3"  style={{textAlign:"justify"}}>
                      {companySub2}
                    </p>
                    <p className="mt-3"  style={{textAlign:"justify"}}>
                      {companySub3}
                    </p>
                    <br></br>
                    <p className="mt-5"  style={{textAlign:"justify"}}>
                      {sincerelly}
                    </p>
                    <p className="mt-3" style={{textAlign:"justify"}}>
                      {major}
                    </p>
                    <p className="tpsection__title" style={{textAlign:"justify"}}>
                      {owner}
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                  <div className="tpabout__inner-list mb-40">
                    <ul>
                      <li>
                        {" "}
                        <Link href="#">
                          <i className="fal fa-check" /> Orders go right to your
                          restaurant point of sale, KDS, and kitchen
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link href="#">
                          <i className="fal fa-check" /> Provide in-person
                          pickup, delivery by professional couriers
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fal fa-check" /> Offer in-person diners
                          self-serve, contactless ordering via QR codes.
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}
          {/* team-area-start */}
          <section className="team-area grey-bg-3 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="tpabout__inner-title-area mt-65 mb-45 text-center">
                    <h4 className="tpabout__inner-sub-title">Team</h4>
                    <h4 className="tpabout__inner-title">Meet With Team</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-container tp-team-active">
                <Swiper {...swiperOptions}>
                  <SwiperSlide>
                    <div className="tpteam__item p-relative mb-40">
                      <div className="tpteam__thumb">
                        <img src="/assets/img/testimonial/team-1.jpg" alt="" />
                      </div>
                      <div className="tpteam__content">
                        <h4 className="tpteam__position">Founder</h4>
                        <h5 className="tpteam__title">Rosalina D. Willson</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tpteam__item p-relative mb-40">
                      <div className="tpteam__thumb">
                        <img src="/assets/img/testimonial/team-2.jpg" alt="" />
                      </div>
                      <div className="tpteam__content">
                        <h4 className="tpteam__position">CEO</h4>
                        <h5 className="tpteam__title">Ukolilix X. Xilanorix</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tpteam__item p-relative mb-40">
                      <div className="tpteam__thumb">
                        <img src="/assets/img/testimonial/team-3.jpg" alt="" />
                      </div>
                      <div className="tpteam__content">
                        <h4 className="tpteam__position">Designer</h4>
                        <h5 className="tpteam__title">Alonso M. Miklonax</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tpteam__item p-relative mb-40">
                      <div className="tpteam__thumb">
                        <img src="/assets/img/testimonial/team-4.jpg" alt="" />
                      </div>
                      <div className="tpteam__content">
                        <h4 className="tpteam__position">Developer</h4>
                        <h5 className="tpteam__title">Miranda H. Halim</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tpteam__item p-relative mb-40">
                      <div className="tpteam__thumb">
                        <img src="/assets/img/testimonial/team-1.jpg" alt="" />
                      </div>
                      <div className="tpteam__content">
                        <h4 className="tpteam__position">Founder</h4>
                        <h5 className="tpteam__title">Rosalina D. Willson</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tpteam__item p-relative mb-40">
                      <div className="tpteam__thumb">
                        <img src="/assets/img/testimonial/team-2.jpg" alt="" />
                      </div>
                      <div className="tpteam__content">
                        <h4 className="tpteam__position">CEO</h4>
                        <h5 className="tpteam__title">Ukolilix X. Xilanorix</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
          {/* team-area-end */}
          {/* feature-area-start */}
          <section className="feature-area pt-70 pb-10">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="tpfeature__inner-thumb mb-70">
                    <img src="/assets/img/banner/about-banner-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="tpabout__inner-title-area about-inner-content ml-50 mr-50 mb-70">
                    <h4 className="tpabout__inner-sub-title mb-5">
                      Features #01
                    </h4>
                    <h4 className="tpabout__inner-title mb-25">
                      Solutions that work together
                    </h4>
                    <p>
                      Publish your eCommerce site quickly with our easy-to-use
                      store builder— no coding required. Migrate your items from
                      your point of sale system or turn your Instagram feed into
                      a shopping site and start selling fast. Square Online
                      works for all kinds of businesses—retail, restaurants,
                      services.
                    </p>
                    <Link className="tpteam__btn" href="/contact">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="tpabout__inner-title-area about-inner-content mr-100 mb-70">
                    <h4 className="tpabout__inner-sub-title mb-5">
                      Features #02
                    </h4>
                    <h4 className="tpabout__inner-title mb-25">
                      All kinds of payments securely
                    </h4>
                    <p>
                      Publish your eCommerce site quickly with our easy-to-use
                      store builder— no coding required. Migrate your items from
                      your point of sale system or turn your Instagram feed into
                      a shopping site and start selling fast. Square Online
                      works for all kinds of businesses—retail, restaurants,
                      services.
                    </p>
                    <Link className="tpteam__btn" href="/contact">
                      Contact With Us
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="tpfeature__inner-thumb mb-70">
                    <img src="/assets/img/banner/about-banner-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
