/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage({ params }: any) {
  const router = useRouter();

  useEffect(() => {
    console.log("ContactPage mounted");
  }, []);

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => router.push(`/${params.lang}/home`)}>
        Go to Home
      </button>
    </div>
  );
}
