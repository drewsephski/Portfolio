// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import "@splidejs/react-splide/css";

import {
  AnimatedModal,
  AnimatedModalContent,
  AnimatedModalTrigger,
} from "@/components/ui/animated-modal";
// import { Button } from "./ui/button"; // Unused
import { DialogDescription, DialogHeader } from "./ui/dialog";

const SlideShow = ({ images }: { images: string[] }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Splide
      options={{
        autoplay: "true",
        perPage: 1,
        start: 0,
        rewind: true,
        padding: {left:'3rem',right:'3rem'},
        gap: "1rem",
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
            <AnimatedModal>
              <AnimatedModalTrigger
                className="relative"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <Image
                  src={image}
                  alt={`Screenshot: ${image.split("/").pop()}`}
                  width={800}
                  height={800}
                  className="w-full rounded-lg h-auto"
                />
                <AnimatePresence>
                  {hovering && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Click to zoom
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimatedModalTrigger>
              <AnimatedModalContent className="min-w-[90vw] h-[90vh] bg-transparent outline-none border-none p-0 m-0">
                <DialogHeader className="w-full">
                  {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                  <DialogDescription>
                    {image.split("/").pop()}
                  </DialogDescription>
                </DialogHeader>
                <Image
                  src={image}
                  alt={`Screenshot: ${image.split("/").pop()}`}
                  width={800}
                  height={800}
                  className="w-full"
                  style={{ objectFit: "contain", width: "100vw" }}
                />
              </AnimatedModalContent>
            </AnimatedModal>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};
export default SlideShow;
