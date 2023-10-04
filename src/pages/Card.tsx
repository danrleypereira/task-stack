// import { api } from "~/utils/api";

import { useState } from "react";
import CardPopuded from "./CardPopuped";
import { ICardProps } from "~/utils/types";


export default function Card({ name, tags, text }: ICardProps) {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [showAbsoluteComponent, setShowAbsoluteComponent] = useState<boolean>(false);

  const handleCardClick = () => {
    setShowAbsoluteComponent(true);
  };

  const handleClose = () => {
    setShowAbsoluteComponent(false);
  };

  return (
    <>
      <div onClick={handleCardClick}  className="min-w-lg my-2 max-w-lg rounded-xl bg-slate-700 shadow-md">
        <div className="space-x-4 p-6">
          {/* <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500"> */}
          <span className="relative">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-pink-500"
              aria-hidden="true"
            ></span>
            <span className="relative font-semibold text-white">{tags[0]}</span>
          </span>
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-indigo-500">
            <span className="relative text-sm font-semibold uppercase tracking-wide">
              {tags[1]}
            </span>
          </span>
          {/* </div> */}
          <a
            href="#"
            className="mt-1 block text-lg font-semibold leading-tight text-indigo-500 hover:underline"
          >
            {name}
          </a>
          <p
            className="mt-2 text-slate-500
                    text-white first-letter:float-left first-letter:mr-3
                    first-letter:text-7xl first-letter:font-bold first-letter:text-gray-300"
          >
            {text}
          </p>
        </div>
        <div className="justify-center align-middle">
          <button
            className="rounded-full border border-purple-200 px-4 py-1 text-sm 
                  font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 
                  hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Pomodoro
          </button>{" "}
        </div>
      </div>
      {showAbsoluteComponent && <CardPopuded onClose={handleClose} />}
      {/* <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}
    </>
  );
}
