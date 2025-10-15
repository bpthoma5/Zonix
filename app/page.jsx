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
  const defaultZoom = 12;

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      console.error("Mapbox token missing");
      return;
    }
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: defaultCenter,
      zoom: defaultZoom,
      minZoom: 5,
      maxZoom: 20,
    });

    map.current.on("load", async () => {
      try {
        // Controls
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl,
          marker: false,
        });
        map.current.addControl(geocoder, "top-left");

        // Style toggle
        const styleToggle = document.createElement("div");
        styleToggle.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
        styleToggle.style.display = "flex";
        styleToggle.style.flexDirection = "row";
        styleToggle.style.gap = "5px";
        styleToggle.style.margin = "10px";

        const styles = [
          { label: "Streets", uri: "mapbox://styles/mapbox/streets-v12" },
          { label: "Dark", uri: "mapbox://styles/mapbox/dark-v11" },
          { label: "Satellite", uri: "mapbox://styles/mapbox/satellite-streets-v12" },
          { label: "Reset View", uri: "" },
        ];

        styles.forEach((s) => {
          const btn = document.createElement("div");
          btn.style.cursor = "pointer";
          btn.textContent = s.label;
          btn.onclick = () => {
            if (s.uri) {
              map.current.setStyle(s.uri);
            } else {
              map.current.flyTo({ center: defaultCenter, zoom: defaultZoom });
            }
          };
          styleToggle.appendChild(btn);
        });

        map.current.addControl(
          {
            onAdd: () => styleToggle,
            onRemove: () => styleToggle.remove(),
          },
          "bottom-right"
        );

     map.current.on("load", async () => {
  try {
    // Controls, geocoder, style toggle… (keep your existing code here)

    // --- ZONING SOURCE AND LAYERS ---
    if (!map.current.getSource("zoning")) {
      map.current.addSource("zoning", {
        type: "geojson",
        data: "/data/Zoning_District.geojson",
      });
    }

    if (!map.current.getLayer("zoning-fill")) {
      map.current.addLayer({
        id: "zoning-fill",
        type: "fill",
        source: "zoning",
        paint: {
          "fill-color": [
            "match",
            ["get", "ZoningCode"], // property in your GeoJSON
            "GID", "#1f77b4",
            "R-4", "#ff7f0e",
            "AG", "#2ca02c",
            "R1-6", "#d62728",
            "R1-7", "#9467bd",
            "CSS", "#8c564b",
            "R-3", "#27c5bd",
            "MU-ED", "#fff700",
            "R1-15", "#bcbd22",
            "PCC-1", "#17becf",
            "PCC-2", "#a83333",

            "#cccccc", // fallback
          ],
          "fill-opacity": 0.6,
          "fill-outline-color": "#000000",
        },
      });
    }

    if (!map.current.getLayer("zoning-outline")) {
      map.current.addLayer({
        id: "zoning-outline",
        type: "line",
        source: "zoning",
        paint: {
          "line-color": "#040303",
          "line-width": 1,
        },
      });
    }

    // --- POPUP AND CURSOR EVENTS ---
    map.current.on("click", "zoning-fill", (e) => {
      const zoningCode = e.features[0].properties.ZoningCode;
      const zoningDesc = e.features[0].properties.ZoningDescription;

      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
          `<strong>Zoning Code:</strong> ${zoningCode}<br/><strong>Description:</strong> ${zoningDesc}`
        )
        .addTo(map.current);
    });

    map.current.on("mouseenter", "zoning-fill", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });
    map.current.on("mouseleave", "zoning-fill", () => {
      map.current.getCanvas().style.cursor = "";
    });

  } catch (err) {
    console.error(err);
  }
});

      } catch (err) {
        console.error(err);
      }
    });
      return <div ref={mapContainer} style={{ height: "100vh", width: "100vw" }} />;
    }, []);
  
  }
