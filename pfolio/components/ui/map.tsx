"use client";

import { useEffect, useRef } from "react";

import { Map, NavigationControl } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";


export default function Location() {
    const mapContainer = useRef<HTMLDivElement>(null);

useEffect(() => {

if (!mapContainer.current) return;

    const map = new Map({
    container: mapContainer.current,
    style: `https://maps.geoapify.com/v1/styles/positron-blue/style.json?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
    center: [94.2120, 26.7549], // Jorhat
    zoom: 10.99,
    });

    map.addControl(new NavigationControl());
    return () => map.remove();
    }, []);

    return(
        <div className="w-full h-full">
            <div>Currently Based In:</div>
            <div ref={mapContainer} className='xl:w-full xl:h-[20em] w-[19em] h-[12em] 
            rounded-lg'></div>
        </div>
    )
}