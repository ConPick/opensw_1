import React, { useEffect, useRef } from "react";

export default function UnityViewer() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const loaderUrl = "/unity/Build/Builded.loader.js";

        const config = {
        dataUrl: "/unity/Build/Builded.data",
        frameworkUrl: "/unity/Build/Builded.framework.js",
        codeUrl: "/unity/Build/Builded.wasm",
        streamingAssetsUrl: "/unity/StreamingAssets",
        companyName: "Hallym",
        productName: "ParkingSim",
        productVersion: "1.0",
        };

        const script = document.createElement("script");
        script.src = loaderUrl;
        script.async = true;

        script.onload = () => {
        // ✅ 로더가 로드된 뒤에, 전역(window)에 함수가 생김
        if (window.createUnityInstance && canvasRef.current) {
            window
            .createUnityInstance(canvasRef.current, config)
            .then((instance) => {
                window.unityInstance = instance; // 나중에 SendMessage용
                console.log("Unity loaded");
            })
            .catch((err) => {
                console.error("Unity load error:", err);
            });
        } else {
            console.error("createUnityInstance not found on window");
        }
        };

        script.onerror = () => {
        console.error("Failed to load Unity loader script:", loaderUrl);
        };

        document.body.appendChild(script);

        return () => {
        document.body.removeChild(script);
        };
    }, []);

    return (
        <canvas
        ref={canvasRef}
        id="unity-canvas"
        className="w-full h-full"
        style={{ background: "black" }}
        />
    );
}
