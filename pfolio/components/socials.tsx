"use client";

import { useState } from "react";

import { GitHubIcon, LinkedInIcon, GmailIcon, InstagramIcon, XIcon } from "@/icons/socials-icons";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Socials() {
  const [mailModal, setMailModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "abhisaikia675@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — fail silently, user can still select text manually
    }
  };

  const socialLinks = [
    { href: "https://github.com/escursio675", label: "GitHub", Icon: GitHubIcon, mt: "mt-[1rem]" },
    { href: "https://www.linkedin.com/in/saikia-abhimanyu/", label: "LinkedIn", Icon: LinkedInIcon, mt: "mt-[1.1rem]" },
    { href: "https://www.instagram.com/escursio675/", label: "Instagram", Icon: InstagramIcon, mt: "mt-[1.1rem]" },
    { href: "https://x.com/_yukinik", label: "Twitter", Icon: XIcon, mt: "mt-[1.2rem]" },
  ];

  return (
    <>
      <div className="flex flex-col gap-2 mt-2">
        {mailModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setMailModal(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Email contact"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2a2f45] border border-[#689bec]/20 p-6 rounded-lg w-[90%] max-w-md 
              flex flex-col items-center justify-center gap-3
              animate-[fadeIn_0.25s_ease-out]"
            >
              <div className="w-12 h-12 rounded-full bg-[#689bec]/10 border border-[#689bec]/30 flex items-center justify-center">
                <GmailIcon className="text-[#689bec] w-6 h-6" />
              </div>

              <h2 className="text-lg">Shoot me an email at</h2>

              <div className="flex items-center gap-2 bg-[#1e1e2e] rounded-md px-3 py-2 w-full justify-center">
                <p className="text-sm text-[#cdd6f4]">{email}</p>
                <button
                  onClick={handleCopy}
                  className="text-xs px-2 py-1 rounded-md bg-[#689bec]/15 text-[#689bec] hover:bg-[#689bec]/25 transition-colors duration-150"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <button
                onClick={() => setMailModal(false)}
                className="mt-2 px-3 py-1 bg-[#1e1e2e] rounded-md
                transition-all duration-200 ease-in-out 
                hover:bg-[#cdd6f4] hover:text-[#1e1e2e]"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-4">
          {socialLinks.map(({ href, label, Icon, mt }) => (
            <HoverCard key={label} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon
                    className={`text-[#c3c9d5] ${mt} hover:text-[#689bec] hover:-translate-y-0.5 transition-all duration-150 ease-in`}
                  />
                </a>
              </HoverCardTrigger>
              <HoverCardContent>{label}</HoverCardContent>
            </HoverCard>
          ))}

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <button onClick={() => setMailModal(true)} aria-label="Email">
                <GmailIcon className="text-[#c3c9d5] mt-[1.1rem] hover:text-[#689bec] hover:-translate-y-0.5 transition-all duration-150 ease-in" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent>Email</HoverCardContent>
          </HoverCard>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-[#cdd6f4] text-black w-fit
          transition-all duration-200 ease-in-out hover:bg-[#689bec] hover:shadow-[0_4px_20px_rgba(104,155,236,0.35)]
          xl:rounded-lg rounded-md xl:px-3 xl:py-1.5 px-3 py-1.5 xl:mt-2 mt-2
          focus:outline-none focus:ring-2 focus:ring-[#cdd6f4]"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download my Resume!
        </a>
      </div>
    </>
  );
}