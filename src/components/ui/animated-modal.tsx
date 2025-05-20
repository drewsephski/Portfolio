"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";


import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogPortal } from "./dialog";
import { ScrollArea } from "./scroll-area";

export function AnimatedModal({ children }: { children: React.ReactNode }) {
  return <Dialog>{children}</Dialog>;
}

export { DialogTrigger as AnimatedModalTrigger };

export const AnimatedModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const modalRef = useRef(null);

  return (
    <DialogPortal>
      <DialogOverlay asChild>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
        />
      </DialogOverlay>
      <DialogContent
        ref={modalRef}
        className={cn(
          "fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-50",
          className
        )}
        asChild
      >
        <motion.div
          className={cn(
            "min-h-[50%] max-h-[90%] md:max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden"
          )}
          initial={{
            opacity: 0,
            scale: 0.5,
            rotateX: 40,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            rotateX: 10,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
          }}
        >
          <ScrollArea className="h-[80dvh] w-full rounded-md border">
            {children}
          </ScrollArea>
        </motion.div>
      </DialogContent>
    </DialogPortal>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1 p-3 md:p-10", className)}>
      {children}
    </div>
  );
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-100 dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};

// Re-exporting Radix Dialog components for convenience and consistency
export {
  DialogPortal as AnimatedModalPortal,
  DialogClose as AnimatedModalClose,
} from "./dialog";
