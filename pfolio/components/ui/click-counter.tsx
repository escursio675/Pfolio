"use client";

import { useState, useEffect } from "react";

export default function ClickCounter(){

    const [thisSessionClicks, setThisSessionsClicks] = useState(0);
    const [totalClicks, setTotalClicks] = useState<number>(0);

    const API_KEY: string | undefined = process.env.NEXT_PUBLIC_COUNTER_API_KEY;

    if(!API_KEY){
        throw new Error("NEXT_PUBLIC_API_KEY is not set");
    }

    const getClicksValue = async() => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_COUNTER_API_BASE}/api/counters/${process.env.NEXT_PUBLIC_COUNTER_NAME}`, {
                headers: { 'x-api-key': API_KEY}
            });

            const data = await response.json();
            return data.value;
        };

    const handleIncrement = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_COUNTER_API_BASE}/api/counters/${process.env.NEXT_PUBLIC_COUNTER_NAME}/increment`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
        },
        body: JSON.stringify({ by: 1 }),
        });

        const data = await response.json();

        return data.value;
    };

    useEffect(() =>{
        const loadClicks = async() =>{
            const value = await getClicksValue();
            setTotalClicks(value);
        };

        loadClicks();
    }, []);

    return(
        <div className="w-full h-full text-black text-center
        flex flex-col justify-center items-center gap-2">

            <p className="text-[1.2rem] text-[#cdd6f4]">Total Clicks: {(totalClicks === 0)? "Loading": totalClicks}</p>

            <button onClick={() => {
                setThisSessionsClicks(v => v + 1);
                handleIncrement();
                setTotalClicks(v => v + 1);
            }}
            className="rounded-md bg-[#689bec] p-[0.3rem] text-[1.2rem]
            hover:p-2 transition-all ">
                Click Me
            </button>

            <p className="text-[0.9rem] text-[#cdd6f4]">You clicked: {thisSessionClicks} times</p>
        </div>
    )
};