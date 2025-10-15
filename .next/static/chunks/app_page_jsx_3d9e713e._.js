(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    const defaultZoom = 12;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapPage.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken) {
                console.error("Mapbox token missing");
                return;
            }
            if (map.current) return;
            map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: defaultCenter,
                zoom: defaultZoom,
                minZoom: 5,
                maxZoom: 20
            });
            map.current.on("load", {
                "MapPage.useEffect": async ()=>{
                    // Controls
                    map.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl(), "top-right");
                    const geocoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                        accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken,
                        mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        marker: false
                    });
                    map.current.addControl(geocoder, "top-left");
                    // Style toggle buttons
                    const styleToggle = document.createElement("div");
                    styleToggle.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
                    styleToggle.style.display = "flex";
                    styleToggle.style.flexDirection = "row";
                    styleToggle.style.gap = "5px";
                    styleToggle.style.margin = "10px";
                    const styles = [
                        {
                            label: "Streets",
                            uri: "mapbox://styles/mapbox/streets-v12"
                        },
                        {
                            label: "Dark",
                            uri: "mapbox://styles/mapbox/dark-v11"
                        },
                        {
                            label: "Satellite",
                            uri: "mapbox://styles/mapbox/satellite-streets-v12"
                        },
                        {
                            label: "Reset View",
                            uri: ""
                        }
                    ];
                    styles.forEach({
                        "MapPage.useEffect": (s)=>{
                            const btn = document.createElement("button");
                            btn.textContent = s.label;
                            btn.onclick = ({
                                "MapPage.useEffect": ()=>{
                                    if (s.uri) {
                                        map.current.setStyle(s.uri);
                                    } else {
                                        map.current.flyTo({
                                            center: defaultCenter,
                                            zoom: defaultZoom
                                        });
                                    }
                                }
                            })["MapPage.useEffect"];
                            styleToggle.appendChild(btn);
                        }
                    }["MapPage.useEffect"]);
                    map.current.addControl({
                        onAdd: {
                            "MapPage.useEffect": ()=>styleToggle
                        }["MapPage.useEffect"],
                        onRemove: {
                            "MapPage.useEffect": ()=>styleToggle.remove()
                        }["MapPage.useEffect"]
                    }, "bottom-right");
                    // Load zoning overlay
                    try {
                        const res = await fetch("/data/tempe_zoning.geojson");
                        if (!res.ok) throw new Error("Failed to load zoning GeoJSON");
                        const zoningData = await res.json();
                        map.current.addSource("zoning", {
                            type: "geojson",
                            data: zoningData
                        });
                        map.current.addLayer({
                            id: "zoning-fill",
                            type: "fill",
                            source: "zoning",
                            paint: {
                                "fill-color": [
                                    "match",
                                    [
                                        "get",
                                        "DISTRICT"
                                    ],
                                    "R1",
                                    "#fbb03b",
                                    "R2",
                                    "#223b53",
                                    "C-2",
                                    "#e55e5e",
                                    "#888888"
                                ],
                                "fill-opacity": 0.4
                            }
                        });
                        map.current.addLayer({
                            id: "zoning-outline",
                            type: "line",
                            source: "zoning",
                            paint: {
                                "line-color": "#000000",
                                "line-width": 1
                            }
                        });
                        map.current.on("click", "zoning-fill", {
                            "MapPage.useEffect": (e)=>{
                                const props = e.features[0].properties;
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup().setLngLat(e.lngLat).setHTML("<strong>Zoning:</strong> ".concat(props.ZoningCode || "Unknown")).addTo(map.current);
                            }
                        }["MapPage.useEffect"]);
                        map.current.on("mouseenter", "zoning-fill", {
                            "MapPage.useEffect": ()=>map.current.getCanvas().style.cursor = "pointer"
                        }["MapPage.useEffect"]);
                        map.current.on("mouseleave", "zoning-fill", {
                            "MapPage.useEffect": ()=>map.current.getCanvas().style.cursor = ""
                        }["MapPage.useEffect"]);
                    } catch (err) {
                        console.error(err);
                    }
                }
            }["MapPage.useEffect"]);
        }
    }["MapPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainer,
        style: {
            height: "100vh",
            width: "100vw"
        }
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 139,
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

//# sourceMappingURL=app_page_jsx_3d9e713e._.js.map