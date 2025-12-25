"use client";
import { useRouter } from "next/navigation";
import Dashboard from "@/app/Dashboard/page";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen dark:bg-background-100">
        This is the library of unsent letters.
        <button
          className="cursor-pointer text-white bg-gray-700 dark:text-black dark:bg-white  px-4 py-0.5 mt-2 rounded hover:bg-gray-800 dark:hover:bg-gray-300 hover:shadow-lg transition-all"
          onClick={() => router.push("/Dashboard")}>
          Start
        </button>
      </div>
    </>
  );
}
