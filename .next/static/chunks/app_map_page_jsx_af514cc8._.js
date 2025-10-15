(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/map/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MapPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYnJ5cGF0dGhvbWFzIiwiYSI6ImNtZWtqMGcxaDA2aWYyaW9hczhqOXF0cHIifQ.BDkKk1nSCJXsm7p6DL65Hw");
function MapPage() {
    _s();
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const defaultCenter = [
        -111.94,
        33.4255
    ]; // Tempe
    const defaultZoom = 11;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapPage.useEffect": ()=>{
            if (map.current || !mapContainer.current) return; // make sure container exists
            // Initialize map
            map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: defaultCenter,
                zoom: defaultZoom
            });
            map.current.on("load", {
                "MapPage.useEffect": async ()=>{
                    // Navigation controls
                    map.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl(), "top-right");
                    // Geocoder
                    const geocoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                        accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken,
                        mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        marker: false
                    });
                    map.current.addControl(geocoder, "top-left");
                    // Random color generator
                    const randomColor = {
                        "MapPage.useEffect.randomColor": ()=>"hsl(".concat(Math.random() * 360, ", 60%, 60%)")
                    }["MapPage.useEffect.randomColor"];
                    // Function to add zoning layers
                    async function addZoningLayer(city, filename, codeField) {
                        let descField = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                        const response = await fetch("/data/".concat(filename));
                        const geojson = await response.json();
                        // Unique zoning codes
                        const zonings = [
                            ...new Set(geojson.features.map({
                                "MapPage.useEffect.addZoningLayer": (f)=>f.properties[codeField]
                            }["MapPage.useEffect.addZoningLayer"]).filter(Boolean))
                        ];
                        // Assign colors
                        const colorMap = {};
                        zonings.forEach({
                            "MapPage.useEffect.addZoningLayer": (z)=>colorMap[z] = randomColor()
                        }["MapPage.useEffect.addZoningLayer"]);
                        // Add source
                        map.current.addSource("".concat(city, "-zoning"), {
                            type: "geojson",
                            data: geojson
                        });
                        // Fill layer
                        map.current.addLayer({
                            id: "".concat(city, "-zoning-fill"),
                            type: "fill",
                            source: "".concat(city, "-zoning"),
                            paint: {
                                "fill-color": [
                                    "match",
                                    [
                                        "get",
                                        codeField
                                    ],
                                    ...zonings.flatMap({
                                        "MapPage.useEffect.addZoningLayer": (z)=>[
                                                z,
                                                colorMap[z]
                                            ]
                                    }["MapPage.useEffect.addZoningLayer"]),
                                    "#cccccc"
                                ],
                                "fill-opacity": 0.6
                            }
                        });
                        // Outline layer
                        map.current.addLayer({
                            id: "".concat(city, "-zoning-outline"),
                            type: "line",
                            source: "".concat(city, "-zoning"),
                            paint: {
                                "line-color": "#000",
                                "line-width": 0.5
                            }
                        });
                        // Popup on click
                        map.current.on("click", "".concat(city, "-zoning-fill"), {
                            "MapPage.useEffect.addZoningLayer": (e)=>{
                                const props = e.features[0].properties;
                                const code = props[codeField];
                                const desc = descField ? props[descField] : "No description listed";
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup().setLngLat(e.lngLat).setHTML("<strong>".concat(city.toUpperCase(), " Zoning Code:</strong> ").concat(code, "<br/><strong>Description:</strong> ").concat(desc)).addTo(map.current);
                            }
                        }["MapPage.useEffect.addZoningLayer"]);
                        // Cursor on hover
                        map.current.on("mouseenter", "".concat(city, "-zoning-fill"), {
                            "MapPage.useEffect.addZoningLayer": ()=>{
                                map.current.getCanvas().style.cursor = "pointer";
                            }
                        }["MapPage.useEffect.addZoningLayer"]);
                        map.current.on("mouseleave", "".concat(city, "-zoning-fill"), {
                            "MapPage.useEffect.addZoningLayer": ()=>{
                                map.current.getCanvas().style.cursor = "";
                            }
                        }["MapPage.useEffect.addZoningLayer"]);
                    }
                    // Toggle feature (Mapbox control style)
                    const toggleContainer = document.createElement("div");
                    toggleContainer.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
                    toggleContainer.style.display = "flex";
                    toggleContainer.style.flexDirection = "row";
                    toggleContainer.style.margin = "10px";
                    toggleContainer.style.gap = "30px";
                    [
                        "Tempe",
                        "Phoenix",
                        "Scottsdale",
                        "Mesa",
                        "Gilbert",
                        "Chandler"
                    ].forEach({
                        "MapPage.useEffect": (city)=>{
                            const btn = document.createElement("button");
                            btn.textContent = city;
                            btn.style.cursor = "pointer";
                            btn.onclick = ({
                                "MapPage.useEffect": ()=>{
                                    const fillLayer = map.current.getLayer("".concat(city, "-zoning-fill"));
                                    const outlineLayer = map.current.getLayer("".concat(city, "-zoning-outline"));
                                    if (!fillLayer || !outlineLayer) return;
                                    const visibility = map.current.getLayoutProperty("".concat(city, "-zoning-fill"), "visibility");
                                    const newVisibility = visibility === "none" ? "visible" : "none";
                                    map.current.setLayoutProperty("".concat(city, "-zoning-fill"), "visibility", newVisibility);
                                    map.current.setLayoutProperty("".concat(city, "-zoning-outline"), "visibility", newVisibility);
                                }
                            })["MapPage.useEffect"];
                            toggleContainer.appendChild(btn);
                        }
                    }["MapPage.useEffect"]);
                    map.current.addControl({
                        onAdd: {
                            "MapPage.useEffect": ()=>toggleContainer
                        }["MapPage.useEffect"],
                        onRemove: {
                            "MapPage.useEffect": ()=>toggleContainer.remove()
                        }["MapPage.useEffect"]
                    }, "top-left");
                    // Add zoning layers for all cities
                    await addZoningLayer("Tempe", "Zoning_District.geojson", "ZoningCode", "ZoningDescription");
                    await addZoningLayer("Phoenix", "Phoenix_Zoning.geojson", "ZONING", "GEN_ZONE");
                    await addZoningLayer("Scottsdale", "Scottsdale_Zoning.geojson", "full_zoning");
                    await addZoningLayer("Mesa", "mesa_zoning.geojson", "Zoning", "Description");
                    await addZoningLayer("Gilbert", "gilbert_zoning.geojson", "ZCODE", "Description");
                    await addZoningLayer("Chandler", "chandler_zoning.geojson", "ZONE_CODE");
                }
            }["MapPage.useEffect"]);
        }
    }["MapPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainer,
        style: {
            width: "100vw",
            height: "100vh"
        }
    }, void 0, false, {
        fileName: "[project]/app/map/page.jsx",
        lineNumber: 159,
        columnNumber: 10
    }, this);
}
_s(MapPage, "Lk3Flgv7n4ByEejhurS8fIb2FSQ=");
_c = MapPage;
var _c;
__turbopack_context__.k.register(_c, "MapPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_map_page_jsx_af514cc8._.js.map