import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "nakultiwari93@gmail.com",
    "NakulTiwari@LinkedIn",
    "Contact Us",
  ];
  const usefullLink = ["Home", "About Us", "My Bio"];

  return (
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex item-center justify-center font-semibold uppercase md:justify-start">
              SEVAA
            </h6>
            <p>
              Here you can create different crowd funding and get fundings on
              your various causes.Make sure you are connected to your wallet to
              create your first crowd funding
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex item-center justify-center font-semibold uppercase md:justify-start ">
              Products
            </h6>
            {productList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex item-center justify-center font-semibold uppercase md:justify-start ">
              Useful Links
            </h6>
            {usefullLink.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex item-center justify-center font-semibold uppercase md:justify-start ">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div class="backgroundMain p-6 text-center ">
        <span>© 2024 CopyRight:</span>
        <a class="font-semibold" href="">
          NAKUL TIWARI
        </a>
      </div>
    </footer>
  );
};

export default Footer;
