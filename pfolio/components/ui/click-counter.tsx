"use client";

import { useState, useEffect } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function ClickCounter() {
  const [thisSessionClicks, setThisSessionClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const API_KEY: string | undefined = process.env.NEXT_PUBLIC_COUNTER_API_KEY;

  const getClicksValue = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_COUNTER_API_BASE}/api/counters/${process.env.NEXT_PUBLIC_COUNTER_NAME}`,
      { headers: { "x-api-key": API_KEY as string } }
    );
    if (!response.ok) throw new Error("Failed to fetch count");
    const data = await response.json();
    return data.value;
  };

  const handleIncrement = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_COUNTER_API_BASE}/api/counters/${process.env.NEXT_PUBLIC_COUNTER_NAME}/increment`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY as string,
        },
        body: JSON.stringify({ by: 1 }),
      }
    );
    if (!response.ok) throw new Error("Failed to increment count");
    const data = await response.json();
    return data.value;
  };

  useEffect(() => {
    if (!API_KEY) {
      setError(true);
      return;
    }

    const loadClicks = async () => {
      try {
        const value = await getClicksValue();
        setTotalClicks(value);
      } catch {
        setError(true);
      }
    };

    loadClicks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async () => {
    setThisSessionClicks((v) => v + 1);
    setTotalClicks((v) => (v ?? 0) + 1);
    try {
      await handleIncrement();
    } catch {
      // optimistic update already applied; silently ignore network hiccup
    }
  };

  return (
    <div className="w-full h-full text-black text-center flex flex-col justify-center items-center gap-2 relative">
      <HoverCard openDelay={70} closeDelay={70}>
        <HoverCardTrigger asChild>
          <button className="text-white text-sm absolute top-2 right-2 h-6 w-6 hover:bg-[#cdd6f4] hover:text-black transition-all rounded-full">
            i
          </button>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="max-w-xs">
          This click counter utilizes the CounterAPI made to keep track of various counts across my multiple websites. Simple, yet essential. Check out more details in the Projects section.
        </HoverCardContent>
      </HoverCard>

      <p className="text-[1.2rem] text-[#cdd6f4]">
        Total Clicks: {error ? "Unavailable" : totalClicks === null ? "Loading" : totalClicks}
      </p>

      <button
        onClick={handleClick}
        disabled={error}
        className="rounded-md bg-[#689bec] p-[0.3rem] text-[1.2rem] transition-transform duration-150 ease-out hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        Click Me
      </button>

      <p className="text-[0.9rem] text-[#cdd6f4]">You clicked: {thisSessionClicks} times</p>
    </div>
  );
}