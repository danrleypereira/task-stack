import Head from "next/head";
import { useEffect } from "react";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  useEffect(() => {
    document.body.className = "bg-charcoal-700";
  });

  return (
    <>
      <Head>
        <title>Endless Todos</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <div className="bg-charcoal-800 p-5 text-center">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Task Stack
          </h1>
        </div>
        <main className="max-w-ld space-x-2 pt-5 text-white">
          ✨ Start here ✨
          <div className="mx-auto max-w-md justify-start bg-charcoal-600 pt-32 text-white">
            <h3 className="text-xl">Stack</h3>
            <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-slate-700 shadow-md md:max-w-2xl">
              <div className="flex">
                <div className="p-8 space-x-4">
                  {/* <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500"> */}
                  <span className="relative">
                    <span className="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                    <span className="relative font-semibold text-white">DW Corp</span>
                  </span>
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
                    <span className="relative text-sm font-semibold uppercase tracking-wide">Learning</span>
                  </span>
                  {/* </div> */}
                  <a
                    href="#"
                    className="mt-1 block text-lg font-semibold leading-tight text-indigo-500 hover:underline"
                  >
                    Learning tasks of DW Corp LTDA
                  </a>
                  <p className="mt-2 text-slate-500
                    first-letter:text-7xl first-letter:font-bold first-letter:text-gray-300
                    first-letter:mr-3 first-letter:float-left text-white">
                    Looking to take your team away on a retreat to enjoy awesome
                    food and take in some sunshine? We have a list of places to
                    do just that.
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
            </div>
          </div>
          <div className="mx-auto max-w-md justify-start bg-charcoal-600 pt-32 text-white">
            <h3>Stack</h3>
            <div
              className="mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 
              shadow-lg"
            >
              <div className="space-y-2 text-center">
                <div className="space-y-0.5">
                  <p className="text-lg font-semibold text-black">
                    Erin Lindford
                  </p>
                  <p className="font-medium text-slate-500">Product Engineer</p>
                </div>
                <button
                  className="rounded-full border border-purple-200 px-4 py-1 text-sm 
                  font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 
                  hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
          {/* <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}
        </main>
      </div>
    </>
  );
}
