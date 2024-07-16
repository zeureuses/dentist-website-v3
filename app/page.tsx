import Image from "next/image";
import { loadJsonData } from "../utils";
import backgroundGradient from "@/public/images/Gradient.png";
import ButtonHover from "@/components/custom/ButtonWithArrow";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceCarousel } from "@/components/custom/ServiceCarousel";

export default function Home() {
  const jsonData = loadJsonData();

  return (
    <>
      <main className="relative mt-[-90px] h-[87vh] w-full">
        <Image
          src={backgroundGradient}
          width={500}
          height={500}
          priority
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex w-full items-center justify-between space-x-5 px-[10%]">
          <div className="w-[40%] space-y-7">
            <h1 className="w-[80%] text-[55px] font-[400] leading-[1.1em] text-[#393939]">
              Welcome To Your Home Of Dentistry
            </h1>
            <p className="text-base text-[#393939]">
              At Atelier Dental, we’re firm believers that a healthy smile is a
              happy smile. Our dental experts are dedicated to ensuring your
              dental journey is nothing short of exceptional, providing you with
              an inviting atmosphere where your comfort and well-being always
              come first.
            </p>
            <div className="space-x-5">
              <ButtonHover className="text-md transform rounded-full bg-[#2C3F33] py-[10px] pl-[25px] pr-[35px] text-center text-white transition-transform hover:scale-105">
                Book an Appointment
              </ButtonHover>
              <Button
                className="text-md padding-0 transform border-b-[1px] border-black px-[25px] py-[10px] transition-transform hover:scale-105 hover:bg-transparent"
                variant="ghost"
              >
                Or Contact Us
              </Button>
            </div>
          </div>
          <div className="relative flex w-[60%] items-end justify-end">
            <Image
              src={
                "https://atelierdental.com.au/wp-content/uploads/2024/04/062A9944.jpg"
              }
              alt="img1"
              width={490}
              height={380}
              className="absolute left-20 top-1/2 z-10 -translate-y-1/2 transform object-cover"
            />
            <Image
              src={
                "https://atelierdental.com.au/wp-content/uploads/2024/04/062A7576-scaled.jpg"
              }
              alt="img2"
              width={334}
              height={430}
              className="z-0 object-contain"
            />
          </div>
        </div>
      </main>

      {/* second section */}
      <div className="w-full space-y-10 px-[10%] py-24">
        <div className="flex w-full items-center">
          <div className="w-[5%] border-t border-[#393939]"></div>
          <span className="mx-4 text-2xl text-[#393939]">Dental Service</span>
          <div className="flex-grow border-t border-[#393939]"></div>
        </div>
        <ServiceCarousel />
      </div>

      {/* third section */}

      <div className="space-y-24 bg-[#EEF0EC] px-[10%] py-24">
        <div className="flex justify-between">
          <div className="h-[450px] w-[40%]">
            <Image
              src={
                "https://atelierdental.com.au/wp-content/uploads/2024/04/062A7528.jpg"
              }
              height={500}
              width={500}
              className="h-full w-full object-cover"
              alt="third_section_img_1"
            />
          </div>
          <div className="flex w-[50%] flex-col justify-center space-y-5">
            <h3 className="text-2xl text-[#393939]">About Atelier</h3>
            <Link href="#" className="text-[#884434] hover:scale-105">
              <span className="border-b-[1px] border-[#884434] hover:scale-105">
                {" "}
                Learn More
              </span>
            </Link>
            <p className="flex w-[80%] flex-col space-y-3 whitespace-pre-line text-[#2C3F33]">
              <span>
                Based on the beautiful Sunshine Coast, Atelier Dental are a
                family-owned dental practice driven by a passion for providing
                outstanding care and a personalised dental experience uniquely
                tailored to you.
              </span>
              <span>
                We believe that a healthy smile holds the potential to shape
                your appearance and has a profound impact on your
                self-confidence. From the youngest to the oldest family members,
                we cater to the dental needs of each and every member of your
                family.
              </span>
              <span>
                Experience the transformative power of a confident smile with
                Atelier Dental, your trusted family-friendly Sunshine Coast
                dentists.
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex w-[50%] flex-col justify-center space-y-5">
            <h3 className="text-2xl text-[#393939]">Our Mission</h3>

            <p className="flex w-[80%] flex-col space-y-3 whitespace-pre-line text-[#2C3F33]">
              <span>
                From the moment you step through our doors, our goal is to make
                your dental visit as comfortable and successful as possible! We
                take the time to listen to your concerns, answer your questions,
                and personalise your treatment plan to meet your unique needs.
              </span>

              <span>
                No matter what your dental needs may be, whether it’s a simple
                check-up or a complex procedure, our friendly dental team is
                dedicated to helping you achieve the best possible oral health
                outcomes.
              </span>
            </p>
            <Link href="#" className="text-[#884434] hover:scale-105">
              <span className="border-b-[1px] border-[#884434] hover:scale-105">
                {" "}
                Learn More
              </span>
            </Link>
          </div>
          <div className="h-[450px] w-[40%]">
            <Image
              src={
                "https://atelierdental.com.au/wp-content/uploads/2024/04/062A7570.jpg"
              }
              height={500}
              width={500}
              className="h-full w-full object-cover"
              alt="third_section_img_2"
            />
          </div>
        </div>
      </div>

      {/* fourth section */}

      <div className="px-[10%] py-[15%]">
        <div className="flex flex-col items-center justify-center space-y-5 bg-[#2C3F33] pb-10">
          <div className="flex space-x-10">
            <div className="">
              <Image
                src={
                  "https://atelierdental.com.au/wp-content/uploads/2024/04/062A7630-768x1152.jpg"
                }
                width={160}
                height={210}
                className="mt-[-70px] object-cover"
                alt="fourth_section_img_1"
              />
            </div>

            <Image
              src={
                "https://atelierdental.com.au/wp-content/uploads/2024/04/062A7358.jpg"
              }
              width={266}
              height={350}
              className="mt-[-120px] object-cover"
              alt="fourth_section_img_2"
            />

            <div className="h-200">
              <Image
                src={
                  "https://atelierdental.com.au/wp-content/uploads/2024/04/062A7674-1024x683.jpg"
                }
                width={160}
                height={200}
                className="mt-[-100px] h-full object-cover"
                alt="fourth_section_img_3"
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5 text-white">
            <h1 className="text-3xl tracking-tighter">
              Transform Your Smile With Cosmetic Dentistry
            </h1>
            <p className="w-[40%] text-center">
              Discover our selection of natural-looking cosmetic solutions
              designed just for you. Your journey to the smile you’ve always
              dreamed of begins here!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <Button
                className="w-[30%] rounded-none border-[1px] border-white bg-transparent px-4 py-3"
                variant="outline"
              >
                Teeth Whitening
              </Button>
              <Button
                className="w-[30%] rounded-none border-[1px] border-white bg-transparent px-4 py-3"
                variant="outline"
              >
                Dental Crowns
              </Button>
              <Button
                className="w-[30%] rounded-none border-[1px] border-white bg-transparent px-4 py-3"
                variant="outline"
              >
                Porcelain Veeners
              </Button>
              <Button
                className="w-[30%] rounded-none border-[1px] border-white bg-transparent px-4 py-3"
                variant="outline"
              >
                Feelings And Bonding
              </Button>
              <Button
                className="w-[30%] rounded-none border-[1px] border-white bg-transparent px-4 py-3"
                variant="outline"
              >
                Dental Implants
              </Button>
            </div>
            <ButtonHover className="text-md transform rounded-full border-[1px] border-solid border-[#2C3F33] bg-[#a8b3a0] py-[10px] pl-[25px] pr-[30px] text-[#2C3F33] transition-transform hover:scale-105 hover:border-[#2C3F33] hover:text-white">
              Schedule An Appointment
            </ButtonHover>
            <Link href="#" className="text-[white] hover:scale-105">
              <span className="border-b-[1px] border-[white] hover:scale-105">
                {" "}
                Or Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* fifth section */}

      <div className="relative mt-20 flex items-center justify-center px-[10%]">
        <div className="absolute left-0 h-[700px] w-[800px] px-[7%]">
          <Image
            src={
              "https://atelierdental.com.au/wp-content/uploads/2023/07/Atelier-5.jpg"
            }
            height={500}
            width={500}
            className="h-full w-full object-cover"
            alt="fifth_img"
          />
        </div>
        <div className="z-20 w-[80%] space-y-5 bg-[#DCE1D9] p-16">
          <h1 className="text-3xl tracking-tighter">
            Interest-free Dental Payment Plans
          </h1>
          <p className="">
            At Atelier Dental, we are committed to ensuring that your dental
            health is both accessible and affordable. Our interest-free payment
            plans are thoughtfully designed to alleviate the financial burden
            associated with dental care, allowing you to receive the treatments
            you need and achieve the healthy, beautiful smile you deserve!
          </p>
          <div className="flex items-center space-x-5">
            <ButtonHover className="text-md transform rounded-full border-[1px] border-solid border-[#2C3F33] bg-[#a8b3a0] py-[10px] pl-[25px] pr-[30px] text-[#2C3F33] transition-transform hover:scale-105 hover:border-[#2C3F33] hover:text-white">
              Schedule An Appointment
            </ButtonHover>
            <Link href="#" className="text-[#2C3F33] hover:scale-105">
              <span className="border-b-[1px] border-[#2C3F33] hover:scale-105">
                Or Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
