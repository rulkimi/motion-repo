"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Textarea() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[90dvh] flex justify-center items-center">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            key="feedback"
            className="relative cursor-pointer"
            onClick={() => setOpen(true)}
          >
            {/* Background that morphs */}
            <motion.div
              layoutId="expandBox"
              className="absolute inset-0 bg-white rounded-lg shadow-sm"
            />

            {/* Content fixed on top — NOT scaled */}
            <span className="relative z-10 block px-3 py-2">
              Feedback
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="textareaWrapper"
            layoutId="expandBox"
            className="relative bg-white px-3 py-2 rounded-lg shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <textarea
              className="w-72 outline-none"
              rows={8}
              autoFocus
              placeholder="Feedback"
            />
            <div
              className="px-3 py-1 rounded-lg text-sm absolute right-2 bottom-2 bg-linear-to-tr from-blue-600 to-blue-500 text-white"
              onClick={() => setOpen(false)}
            >
              Close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
