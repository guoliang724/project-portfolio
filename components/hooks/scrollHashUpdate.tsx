"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ScrollHashUpdater() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hash = entry.target.getAttribute("id");
            if (hash) {
              // Push hash to URL without scrolling again
              location.hash = hash;
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname, router]);

  return null;
}
