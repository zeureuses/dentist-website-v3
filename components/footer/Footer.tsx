import Image from "next/image";
import React from "react";
import Logo from "@/public/svg/logo.svg";
import { Button } from "../ui/button";
import LinkItem from "../custom/LinkItem";

const Menu = [
  "Home",
  "About",
  "Services",
  "Finances",
  "Contact",
  "Smile Gallery",
  "Blog",
];
const GeneralDentistry = [
  "Children’s Dentistry",
  "Dental Crowns",
  "Dental Bridges",
  "Dental Emergencies",
  "Dental Fillings",
  "Dental Implants",
  "Root Canal Treatment",
  "Wisdom Tooth Extraction",
];
const CosmeticDentristry = [
  "Clear Aligners",
  "Composite Bonding",
  "Porcelain Veneers",
  "Teeth Whitening",
];
const Socials = ["Facebook", "Instagram", "Email"];

const Footer = () => {
  return (
    <>
      <div className="flex space-x-5 px-[10%] py-20">
        <div className="w-[40%] space-y-5">
          <Image
            src={Logo}
            width={256}
            height={35}
            alt="logo"
            className="object-cover"
          />
          <h3>Join Our Mailing List</h3>
          <p>
            Stay updated with the latest in dental health and personalised care
            tips.
          </p>
          <Button variant="destructive">Subscribe</Button>
        </div>
        <div className="w-[15%] space-y-5">
          <h3 className="text-[20px] tracking-tighter">Menu</h3>
          <LinkItem menu={Menu} />
        </div>
        <div className="w-[15%] space-y-5">
          <h3 className="text-[20px] tracking-tighter">General Dentistry</h3>
          <LinkItem menu={GeneralDentistry} />
        </div>
        <div className="w-[15%] space-y-5">
          <h3 className="text-[20px] tracking-tighter">Cosmetic Dentistry</h3>
          <LinkItem menu={CosmeticDentristry} />
        </div>
        <div className="w-[15%] space-y-5">
          <h3 className="text-[20px] tracking-tighter">Socials</h3>
          <LinkItem menu={Socials} />
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#333333] px-[10%] py-3 text-[#A8B3A0]">
        <h1>Atelier Dental 2024 © All rights reserved.</h1>
        <h1>Website by Digital Nomads HQ</h1>
      </div>
    </>
  );
};

export default Footer;
