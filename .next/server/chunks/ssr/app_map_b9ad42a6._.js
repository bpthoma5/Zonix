module.exports = {

"[project]/app/map/data/zoning.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{\"zone\":\"R1 - Single Family\"},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[-111.95,33.42],[-111.94,33.42],[-111.94,33.43],[-111.95,33.43],[-111.95,33.42]]]}},{\"type\":\"Feature\",\"properties\":{\"zone\":\"R3 - Multifamily\"},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[-111.93,33.42],[-111.92,33.42],[-111.92,33.43],[-111.93,33.43],[-111.93,33.42]]]}}]}"));}),
"[project]/app/map/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>MapPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$map$2f$data$2f$zoning$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/map/data/zoning.json (json)"); // 🔹 sample zoning data
"use client";
;
;
;
;
function MapPage() {
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYnJ5cGF0dGhvbWFzIiwiYSI6ImNtZHhkdDVwcDJjbnIybXEzdWczb3c0cTYifQ.PszU1jMgc57V1JbvLkdeIA");
        const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [
                -111.93,
                33.42
            ],
            zoom: 12
        });
        // Navigation & fullscreen controls
        map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].NavigationControl(), "top-right");
        map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].FullscreenControl(), "top-right");
        map.on("load", ()=>{
            // 1️⃣ Add zoning polygons as a GeoJSON source
            map.addSource("zoning", {
                type: "geojson",
                data: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$map$2f$data$2f$zoning$2e$json__$28$json$29$__["default"]
            });
            // 2️⃣ Fill layer (colors for each zoning type)
            map.addLayer({
                id: "zoning-fill",
                type: "fill",
                source: "zoning",
                paint: {
                    "fill-color": [
                        "match",
                        [
                            "get",
                            "zone"
                        ],
                        "R1 - Single Family",
                        "#1f77b4",
                        "R3 - Multifamily",
                        "#ff7f0e",
                        "#ccc" // fallback grey
                    ],
                    "fill-opacity": 0.4
                }
            });
            // 3️⃣ Outline for polygons
            map.addLayer({
                id: "zoning-outline",
                type: "line",
                source: "zoning",
                paint: {
                    "line-color": "#000",
                    "line-width": 2
                }
            });
            // 4️⃣ Popup on click
            map.on("click", "zoning-fill", (e)=>{
                const zone = e.features[0].properties.zone;
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup().setLngLat(e.lngLat).setHTML(`<strong>Zoning:</strong> ${zone}`).addTo(map);
            });
            // Change cursor on hover
            map.on("mouseenter", "zoning-fill", ()=>{
                map.getCanvas().style.cursor = "pointer";
            });
            map.on("mouseleave", "zoning-fill", ()=>{
                map.getCanvas().style.cursor = "";
            });
        });
        return ()=>map.remove();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            width: "100vw",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "white",
                    textAlign: "center",
                    padding: "8px",
                    zIndex: 1
                },
                children: "Zonix | Tempe Zoning Map"
            }, void 0, false, {
                fileName: "[project]/app/map/page.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapContainer,
                style: {
                    height: "100%",
                    width: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/app/map/page.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/map/page.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=app_map_b9ad42a6._.js.map