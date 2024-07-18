import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ButtonHover from "./ButtonWithArrow";

const ServiceArray = [
  {
    title: "Check-Up And clean",
    description:
      "Keep your smile bright and healthy with our Check-Up and Clean services at Atelier Dental, where advanced technology meets expert…",
    link: "check-up-and-clean",
  },
  {
    title: "Sleep Dentistry",
    description:
      "Discover stress-free dental care with our Sleep Dentistry services at Atelier Dental, offering IV Sedation for a completely relaxed treatment…",
    link: "sleep-dentistry",
  },
  {
    title: "Dental Bridges",
    description:
      "Rediscover your dream smile with dental bridges tailored to your unique needs, ensuring that the gaps in your smile are…",
    link: "dental-bridges",
  },
  {
    title: "Dental Emergencies",
    description:
      "Urgent dental concerns deserves immediate attention. Rest assured, our compassionate team is here to provide swift relief and effective solutions…",
    link: "dental-emergencies",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Say goodbye to dental pain with our root canal treatments. Our skilled experts ensure a comfortable and effective procedure that…",
    link: "root-canal-treatment",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "When it comes to wisdom teeth extraction, your comfort is our top priority! We approach each treatment with the utmost…",
    link: "wisdom-tooth-extraction",
  },
  {
    title: "Dental Crowns",
    description:
      "Restore damaged teeth with dental crowns. Dental crowns are meticulously created to ensure your oral health while enhancing your smile’s…",
    link: "dental-crowns",
  },
  {
    title: "Dental Implants",
    description:
      "Restore both the function and aesthetics of your natural teeth with our advanced dental implant treatments. Our skilled dentists provide…",
    link: "dental-implants",
  },
  {
    title: "Composite Bonding",
    description:
      "Address dental imperfections with composite bonding. This versatile technique offers seamless repairs, blending flawlessly with your natural teeth…",
    link: "composite-bonding",
  },
  {
    title: "Porcelain Veneers",
    description:
      "Transform your smile’s with porcelain veneers from Atelier Dental. These thin shells are customised to perfection, delivering a stunning and…",
    link: "porcelain-veneers",
  },
  {
    title: "Teeth Whitening",
    description:
      "Your smile deserves to be celebrated. With our teeth whitening treatments, we bring out the natural brilliance of your smile,…",
    link: "teeth-whitening",
  },
  {
    title: "Clear Aligners",
    description:
      "Our clear aligners offer you a discreet path to a straighter smile, designed with your comfort and confidence in mind…",
    link: "clear-aligners",
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {ServiceArray.map((_, index) => (
          <CarouselItem key={index} className="basis-1 md:basis-1/2">
            <div className="space-y-3">
              <p className="text-base">{_.description}</p>
              <h1 className="text-xl font-[500]">{_.title}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="rounded-none bg-[#2C3F33] text-white" />
      <CarouselNext className="rounded-none bg-[#2C3F33] text-white" />
    </Carousel>
  );
}
