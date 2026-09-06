"use client";

import { useState, useEffect } from "react";

export default function NameReveal() {
  const [mobileReveal, setMobileReveal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className="inline-block mb-3 px-3 py-1 rounded-full bg-[#689bec]/10 border border-[#689bec]/30 text-xs text-[#689bec]"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0px)" : "translateY(12px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        Fullstack Developer / Embedded Systems
      </div>

      <h1
        className="group inline-flex flex-wrap items-center text-[2.5rem]"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0px)" : "translateY(12px)",
          transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
        }}
      >
        <span className="inline-flex items-center">
          <span aria-hidden="true">
            Hello!&nbsp;
            <span className="text-[#689bec] inline-flex flex-wrap">
              Abhiman
              <button
                onClick={() => setMobileReveal((v) => !v)}
                aria-label="Reveal nickname"
                className="xl:hidden inline underline decoration-dashed decoration-accent/30 text-[#5983c7] ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#689bec] focus-visible:ring-offset-2 rounded-sm"
              >
                YU
              </button>
            </span>
          </span>

          <span className="hidden xl:inline underline decoration-dashed decoration-accent/30 opacity-85 text-[#689bec]">
            YU
          </span>

          {/* Desktop reveal */}
          <span
            className="hidden xl:inline ml-1 overflow-hidden max-w-0 opacity-0 
            xl:group-hover:max-w-[10rem] xl:group-hover:opacity-100 
            transition-all duration-500 ease-in-out text-[#689bec]"
          >
            'yu'
          </span>
        </span>

        <span className="w-full xl:w-auto xl:ml-2">
          <span className="text-[#689bec] inline-flex items-baseline whitespace-nowrap">
            <span
              className={`inline-block overflow-hidden whitespace-nowrap
              transition-all duration-500 ease-in-out
              ${mobileReveal ? "max-w-[8rem] opacity-100 mr-5" : "max-w-0 opacity-0"}
              xl:hidden`}
            >
              'yu'
            </span>
            Saikia
          </span>
          &nbsp;here!
        </span>
      </h1>
    </>
  );
}