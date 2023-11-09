import Navbar from "@/components/navbar";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-8">
      <Navbar />

      <div className="relative flex grid flex-grow place-items-center">
        <div className="place-items-center text-center">
          <div>
            <h1
              className="mb-20 text-5xl font-bold lg:text-8xl"
              style={{ color: "#EBBAB9" }}
            >
              ¯\_(ツ)_/¯
            </h1>
          </div>
          <a
            className="mt-25 text-xl font-bold text-pink-300"
            style={{ color: "#FF9997" }}
          >
            SleepySwords
          </a>
          <div className="mb-32 mt-10 grid grid-cols-3 place-items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-center">
            <Link
              href="https://github.com/sleepySwords/"
              className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors hover:text-gray-100`}
            >
              <FaGithub />
            </Link>
            <h2
              className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors  hover:text-gray-100`}
            >
              <BsDiscord />
            </h2>
            <h2
              className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors  hover:text-gray-100`}
            >
              <BsTwitter />
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
