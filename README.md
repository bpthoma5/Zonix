## How to use GiT
git add . 
git commit -m "Describe the commit"

/*
  // 4️⃣ Fetch & add zoning polygons
  map.current.on("load", async () => {
    try {
      const res = await fetch("/data/tempe_zoning.geojson"); // ⬅️ fetch line
      if (!res.ok) {
        console.error("Failed to load zoning data");
        return;
      }
      const zoningData = await res.json();

      map.current.addSource("zoning", {
        type: "geojson",
        data: zoningData,
      });

      // Fill polygons
      map.current.addLayer({
        id: "zoning-fill",
        type: "fill",
        source: "zoning",
        paint: {
          "fill-color": "#1f78b4",
          "fill-opacity": 0.3,
        },
      });

      // Polygon outlines
      map.current.addLayer({
        id: "zoning-outline",
        type: "line",
        source: "zoning",
        paint: {
          "line-color": "#000",
          "line-width": 1,
        },
      });
    } catch (err) {
      console.error("Error loading zoning data:", err);
    }
  });
  */