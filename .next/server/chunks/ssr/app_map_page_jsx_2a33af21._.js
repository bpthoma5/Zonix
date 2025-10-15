module.exports = {

"[project]/app/map/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>MapPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYnJ5cGF0dGhvbWFzIiwiYSI6ImNtZWtqMGcxaDA2aWYyaW9hczhqOXF0cHIifQ.BDkKk1nSCJXsm7p6DL65Hw");
function MapPage() {
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (map.current) return; // initialize only once
        map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: [
                -111.94,
                33.4255
            ],
            zoom: 12
        });
        map.current.on("load", async ()=>{
            // ---- 1. Load GeoJSON ----
            const response = await fetch("/data/Tempe_Zoning.geojson");
            const geojson = await response.json();
            // ---- 2. Add Source ----
            map.current.addSource("tempe-zoning", {
                type: "geojson",
                data: geojson
            });
            // ---- 3. Extract Unique Zoning Codes ----
            const zonings = [
                ...new Set(geojson.features.map((f)=>f.properties.ZONING))
            ];
            // ---- 4. Generate HSL Colors ----
            const colors = zonings.map((_, i)=>`hsl(${i * 360 / zonings.length}, 70%, 60%)`);
            // ---- 5. Build Match Expression ----
            const matchExpression = [
                "match",
                [
                    "get",
                    "ZONING"
                ]
            ];
            zonings.forEach((z, i)=>{
                matchExpression.push(z, colors[i]);
            });
            matchExpression.push("#ccc"); // fallback color
            // ---- 6. Add Layer ----
            map.current.addLayer({
                id: "tempe-zoning-fill",
                type: "fill",
                source: "tempe-zoning",
                paint: {
                    "fill-color": matchExpression,
                    "fill-opacity": 0.6
                }
            });
            // ---- 7. Add Popup ----
            map.current.on("click", "tempe-zoning-fill", (e)=>{
                const props = e.features[0].properties;
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup().setLngLat(e.lngLat).setHTML(`<strong>${props.ZONING}</strong><br>${props.DESCRIPTION || "No description available"}`).addTo(map.current);
            });
            // ---- 8. Cursor on Hover ----
            map.current.on("mouseenter", "tempe-zoning-fill", ()=>{
                map.current.getCanvas().style.cursor = "pointer";
            });
            map.current.on("mouseleave", "tempe-zoning-fill", ()=>{
                map.current.getCanvas().style.cursor = "";
            });
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainer,
        style: {
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0
        }
    }, void 0, false, {
        fileName: "[project]/app/map/page.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=app_map_page_jsx_2a33af21._.js.map