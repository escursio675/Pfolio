"use client";

import { useEffect, useRef, useState } from "react";

import { Map, NavigationControl } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

export default function Location() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new Map({
      container: mapContainer.current,
      style: `https://maps.geoapify.com/v1/styles/positron-blue/style.json?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
      center: [94.212, 26.7549], // Jorhat
      zoom: 10.99,
    });

    map.addControl(new NavigationControl());
    map.on("load", () => setLoaded(true));

    return () => map.remove();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="text-md font-semibold mb-3">Currently Based In:</div>
      <div className="relative">
        <div
          ref={mapContainer}
          className="xl:w-full xl:h-[20em] w-[19em] h-[12em] rounded-lg border border-[#689bec]/20"
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1e1e2e] rounded-lg text-[#c3c9d5] text-sm animate-pulse">
            Loading map…
          </div>
        )}
      </div>
    </div>
  );
}