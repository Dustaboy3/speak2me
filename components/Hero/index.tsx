import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">

        <div className="flex justify-center items-center">
          <Link
            href="/ai"
            className="m-8 bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
          >
            AI</Link>
        </div>

      </section>
    </>
  );
}

export default Hero;
