"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function MapPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const defaultCenter = [-111.94, 33.4255]; // Tempe
  const defaultZoom = 11;

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // make sure container exists

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: defaultCenter,
      zoom: defaultZoom,
    });

    map.current.on("load", async () => {
      // Navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Geocoder
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl,
        marker: false,
      });
      map.current.addControl(geocoder, "top-left");

      // Random color generator
      const randomColor = () => `hsl(${Math.random() * 360}, 60%, 60%)`;

      // Function to add zoning layers
      async function addZoningLayer(city, filename, codeField, descField = null) {
        const response = await fetch(`/data/${filename}`);
        const geojson = await response.json();

        // Unique zoning codes
        const zonings = [
          ...new Set(
            geojson.features
              .map(f => f.properties[codeField])
              .filter(Boolean)
          ),
        ];

        // Assign colors
        const colorMap = {};
        zonings.forEach(z => (colorMap[z] = randomColor()));

        // Add source
        map.current.addSource(`${city}-zoning`, {
          type: "geojson",
          data: geojson,
        });

        // Fill layer
        map.current.addLayer({
          id: `${city}-zoning-fill`,
          type: "fill",
          source: `${city}-zoning`,
          paint: {
            "fill-color": [
              "match",
              ["get", codeField],
              ...zonings.flatMap(z => [z, colorMap[z]]),
              "#cccccc",
            ],
            "fill-opacity": 0.6,
          },
        });

        // Outline layer
        map.current.addLayer({
          id: `${city}-zoning-outline`,
          type: "line",
          source: `${city}-zoning`,
          paint: {
            "line-color": "#000",
            "line-width": 0.5,
          },
        });

        // Popup on click
        map.current.on("click", `${city}-zoning-fill`, (e) => {
          const props = e.features[0].properties;
          const code = props[codeField];
          const desc = descField ? props[descField] : "No description listed";

          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
              `<strong>${city.toUpperCase()} Zoning Code:</strong> ${code}<br/><strong>Description:</strong> ${desc}`
            )
            .addTo(map.current);
        });

        // Cursor on hover
        map.current.on("mouseenter", `${city}-zoning-fill`, () => {
          map.current.getCanvas().style.cursor = "pointer";
        });
        map.current.on("mouseleave", `${city}-zoning-fill`, () => {
          map.current.getCanvas().style.cursor = "";
        });
      }

      // Toggle feature (Mapbox control style)
      const toggleContainer = document.createElement("div");
      toggleContainer.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
      toggleContainer.style.display = "flex";
      toggleContainer.style.flexDirection = "row";
      toggleContainer.style.margin = "10px";
      toggleContainer.style.gap = "30px";

      ["Tempe", "Phoenix", "Scottsdale", "Mesa", "Gilbert", "Chandler"].forEach((city) => {
        const btn = document.createElement("button");
        btn.textContent = city;
        btn.style.cursor = "pointer";

        btn.onclick = () => {
          const fillLayer = map.current.getLayer(`${city}-zoning-fill`);
          const outlineLayer = map.current.getLayer(`${city}-zoning-outline`);
          if (!fillLayer || !outlineLayer) return;

          const visibility = map.current.getLayoutProperty(`${city}-zoning-fill`, "visibility");
          const newVisibility = visibility === "none" ? "visible" : "none";
          map.current.setLayoutProperty(`${city}-zoning-fill`, "visibility", newVisibility);
          map.current.setLayoutProperty(`${city}-zoning-outline`, "visibility", newVisibility);
        };

        toggleContainer.appendChild(btn);
      });

      map.current.addControl(
        { onAdd: () => toggleContainer, onRemove: () => toggleContainer.remove() },
        "top-left"
      );
     // Add zoning layers for all cities
      await addZoningLayer("Tempe", "Zoning_District.geojson", "ZoningCode", "ZoningDescription");
      await addZoningLayer("Phoenix", "Phoenix_Zoning.geojson", "ZONING", "GEN_ZONE");
      await addZoningLayer("Scottsdale", "Scottsdale_Zoning.geojson", "full_zoning");
      await addZoningLayer("Mesa", "mesa_zoning.geojson", "Zoning", "Description");
      await addZoningLayer("Gilbert", "gilbert_zoning.geojson", "ZCODE", "Description");
      await addZoningLayer("Chandler", "chandler_zoning.geojson", "ZONE_CODE");
    });

  }, []);
  return <div ref={mapContainer} style={{ width: "100vw", height: "100vh" }} />;
}
