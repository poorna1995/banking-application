"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideBar() {
  // { user }: SidebarProps
  const pathname = usePathname();

  return (
    <section className=" flex border-r w-[220px] m-6">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="flex flex-wrap gap-2 mb-4 cursor-pointer item-center"
        >
          <Image
            src="icons/logo.svg"
            width={34}
            height={34}
            alt="Logo"
            className="size=[24px] max-xl:size:14"
          />
          <h1 className="sidebar-logo, text-[21px] text-bold">Horizon Logo</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-blue-600": isActive })}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={32}
                height={32}
                className={cn({
                  "brightness-[100], invert-0": isActive,
                })}
              />
              <div className={cn({ "!text-white": isActive })}>
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
