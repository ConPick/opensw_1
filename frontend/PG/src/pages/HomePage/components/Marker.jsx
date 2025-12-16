// src/components/Marker.jsx (경로는 프로젝트 구조에 맞게)
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Marker({ type = "green", top, left, label, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // 1) 상위에서 onClick을 넘겨준 경우 우선 실행
    if (onClick) {
      onClick();
      return;
    }

    // 2) fallback 로직: 마커 라벨로 분기
    if (label === "공대 주차장") {
      // 공학관 마커 → GongHak
      navigate("/details?scene=GongHak");
      return;
    }

    if (label === "일송 주차장") {
      // 일송 마커 → IlSong (대소문자는 ParkingLayout에서 처리)
      navigate("/details?scene=IlSong");
      return;
    }

    if (label === "도헌 주차장" || label === "CLC 주차장") {
      alert("시스템 업데이트중입니다.");
      return;
    }

    alert(`${label || type} 마커 클릭!`);
  };

  const bgColor = type === "green" ? "bg-green-500" : "bg-red-400";

  return (
    <button
      className={`absolute z-[9999] w-10 h-10 rounded-full border-4 border-white flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 hover:-translate-y-1.5 ${bgColor}`}
      style={{
        top: top,
        left: left,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.6)",
      }}
      onClick={handleClick}
    >
      <span className="text-lg">🚗</span>
    </button>
  );
}
