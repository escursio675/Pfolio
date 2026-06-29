"use client";

import { useEffect, useRef } from "react";
import { Map, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";


export default function Glance() {

    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new Map({
        container: mapContainer.current,
        style: `https://maps.geoapify.com/v1/styles/positron-blue/style.json?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
        center: [94.2037, 26.7509], // Jorhat
        zoom: 10,
        });

        map.addControl(new NavigationControl());

        return () => map.remove();
    }, []);

    return(
        <div className="mt-2">
            <h1 className="text-[2.5rem]">At a Glance</h1>

            <div className="flex xl:flex-row flex-col xl:gap-[1vw] gap-[3vw] justify-between
            mt-2 mb-2">

                <div className="border-2 border-[#689bec] rounded-lg w-full
                xl:h-[30vh] h-[25vh] p-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Languages</h3>

                        <ul className="space-y-2">
                            <li className="flex justify-between items-center">
                            <span>English</span>
                            <span className="text-sm text-gray-500">Native</span>
                            </li>

                            <li className="flex justify-between items-center">
                            <span>Hindi</span>
                            <span className="text-sm text-gray-500">Fluent</span>
                            </li>

                            <li className="flex justify-between items-center">
                            <span>Assamese</span>
                            <span className="text-sm text-gray-500">Native</span>
                            </li>

                            <li className="flex justify-between items-center">
                            <span>Japanese</span>
                            <span className="text-sm text-gray-500">Beginner</span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="border-2 border-[#689bec] rounded-lg w-full
                xl:h-[30vh] h-[25vh]">
                    Click Me
                </div>


                <div className="border-2 border-[#689bec] rounded-lg w-full
                xl:h-[30vh] h-[25vh]">
                    <div ref={mapContainer} className='w-full h-full'>

                    </div>
                </div>


            </div>
        </div>
    )
}