"use client";
import LoadingSpinner from "@/components/shared/loading";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
// import "./globals.css";

export async function generateMetadata({
  params,
}: {
  params: {
    domain: string;
  };
}): Promise<Metadata> {
  return {
    title: "Community info not found | LLAMA",
    description: `Create your community on LLAMA`,
    openGraph: {
      title: "Community info not found | LLAMA",
      description: `Create your community on LLAMA`,
    },
  };
}
export default function NotFound() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <h1 className="font-bold text-gray-900 text-8xl dark:text-gray-50">
          404
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Oops! The page you're looking for could not be found.
        </p>
        <Button
          asChild
          onClick={handleClick}
          className="bg-blue-700 hover:blue-800"
        >
          <div>
            {isLoading && (
              // <Spinner className="slow-spinner" color="white" />

              <LoadingSpinner />
            )}
            <Link href="/" className="text-white">
              Go back home
            </Link>
          </div>
        </Button>
      </div>
    </div>
  );
}
