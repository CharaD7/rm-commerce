import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Homepage | RM Commerce" },
    { name: "description", content: "Welcome to your number 1 online shop!" },
  ];
};

export default function Index() {
  return (
    <>
      <section className="flex flex-col justify-between gap-6 sm:gap-16 lg:flex-row mt-12">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-cyan-600 md:mb-6 md:text-lg xl:text-xl">
            Welcome to your number 1 online shop!
          </p>
          <h1 className="text-black mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Focus on tech that matters
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            Welcome to TechConnext, your ultimate destination for all things
            tech! Step into a world of innovation and discovery as we bring you
            the latest and greatest gadgets, electronics, and accessories.
          </p>
        </div>
      </section>
    </>
  );
}
