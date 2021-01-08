import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Maps from "views/admin/Maps.js";
import ProductLayouts from "layouts/ProductLayouts.js";

export default function Product() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://laxmitailors.com/wp-content/uploads/2018/03/contact-us-1.jpg?id=2097')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Product.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Temukan produk - produk terbaru kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Produk Batik
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Produk ini merupakan salah satu unggulan dari kami
                  terdapat didalamnya pilihan - pilihan design terbaru dan modern
                  menggunakan bahan dasar batik.
                </p>
                <Link to="#" className="font-bold text-gray-800 mt-8">
                  Check this now!
                </Link>
              </div>
              <ProductLayouts name="Batik Tulis ATBM Baron - Twin Golben Birds" price="Rp. 5.499.000,00" image="https://laxmitailors.com/wp-content/uploads/2021/01/143-350x435.jpg" />
            </div>

            <div className="flex flex-wrap items-center mt-32">
            <ProductLayouts name="Batik Tulis ATBM Baron - Iron Birds" price="Rp. 5.499.000,00" image="https://laxmitailors.com/wp-content/uploads/2021/01/142-350x435.jpg" />
       
            <ProductLayouts name="Batik Tulis ATBM Baron - Dance of the God" price="Rp. 5.499.000,00" image="https://laxmitailors.com/wp-content/uploads/2021/01/141-350x435.jpg" />
       
            <ProductLayouts name="Batik Tulis ATBM Baron - Rooster" price="Rp. 5.499.000,00" image="https://laxmitailors.com/wp-content/uploads/2020/12/139-350x435.jpg" />

            <ProductLayouts name="Batik Tulis ATBM Baron - Sparrow head" price="Rp. 5.499.000,00" image="https://laxmitailors.com/wp-content/uploads/2020/12/140-350x435.jpg" />
       
            <ProductLayouts name="Batik Tulis ATBM Baron - The Tiger Queen" price="Rp. 5.499.000,00" image="https://laxmitailors.com/wp-content/uploads/2020/12/135-350x435.jpg" />
       
            <ProductLayouts name="Batik Tulis ATBM Baron - Golden Pharsa Bird" price="Rp. 5.499.000,00" image="https://laxmitailors.com/wp-content/uploads/2020/12/136-350x435.jpg" />
       
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <ProductLayouts name="Masker-012" image="https://laxmitailors.com/wp-content/uploads/2020/08/19A-350x435.jpg" price="Rp. 199.000,00" />
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  
              
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Produk Batik
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Produk ini merupakan salah satu unggulan dari kami
                  terdapat didalamnya pilihan - pilihan design terbaru dan modern
                  menggunakan bahan dasar batik.
                </p>
                <Link to="#" className="font-bold text-gray-800 mt-8">
                  Check this now!
                </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-32">
            <ProductLayouts name="Masker-032" image="https://laxmitailors.com/wp-content/uploads/2020/08/17A-350x435.jpg" price="Rp. 199.000,00" />
            <ProductLayouts name="Masker-019" image="https://laxmitailors.com/wp-content/uploads/2020/08/10A-350x435.jpg" price="Rp. 199.000,00" />
            <ProductLayouts name="Masker-045" image="https://laxmitailors.com/wp-content/uploads/2020/08/6A-350x435.jpg" price="Rp. 199.000,00" />
            <ProductLayouts name="Masker-332" image="https://laxmitailors.com/wp-content/uploads/2020/08/6A-350x435.jpg" price="Rp. 199.000,00" />

            <ProductLayouts name="Masker-091" image="https://laxmitailors.com/wp-content/uploads/2020/08/11A-350x435.jpg" price="Rp. 199.000,00" />
            <ProductLayouts name="Masker-073" image="https://laxmitailors.com/wp-content/uploads/2020/08/8A-350x435.jpg" price="Rp. 199.000,00" />
            </div>
          </div>
          
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap justify-center text-center mt-24 mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Temukan kami</h2>
                
                  <Maps />
                
              </div>
            </div>
        </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
