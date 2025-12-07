// src/pages/MainPage/MainPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/details");  
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">

      <h1 className="text-2xl font-bold mb-6">메인 페이지</h1>

      <button
        onClick={goToDetails}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        상세 페이지로 이동하기
      </button>

    </div>
  );
}
