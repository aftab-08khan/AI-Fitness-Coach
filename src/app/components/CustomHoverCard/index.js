"use client";

import Link from "next/link";
import { cn } from "../../../../lib/utils";

export function CustomHoverCard({ imgSrc, title }) {
  console.log(imgSrc.src);

  return (
    <div className="max-w-xs w-full group/card">
      <Link
        className={cn(
          "cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        )}
        style={{
          backgroundImage: `url(${imgSrc.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        href={`/dashboard/equipments/${title}`}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          {/* <img
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          /> */}
          {/* <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div> */}
        </div>
        <div className="text content">
          <h1 className="font-meduim text-lg md:text-xl bg-[--green-200] px-2 py-1 rounded-lg inline capitalize relative z-10">
            {title}
          </h1>
          {/* <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p> */}
        </div>
      </Link>
    </div>
  );
}
