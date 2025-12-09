// src/pages/MainPage/Details/ParkingInfoPanel/SummaryCards.jsx
import React from "react";

function SummaryCards({ totalSpaces, availablePrediction, saturation }) {
  return (
    <div className="space-y-3">
      {/* 총 주차 대수 */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-xl">
            🚗
          </div>
          <div>
            <p className="text-xs text-gray-500">총 주차 대수</p>
            <p className="text-lg font-semibold text-gray-900">
              {totalSpaces.toLocaleString()}
              <span className="text-xs font-normal text-gray-500 ml-1">대</span>
            </p>
          </div>
        </div>
        <span className="text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
          전체 구역 기준
        </span>
      </div>

      {/* 주차 가능 예측 */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl">
            🅿️
          </div>
          <div>
            <p className="text-xs text-gray-500">주차 가능 예측</p>
            <p className="text-lg font-semibold text-gray-900">
              {availablePrediction.toLocaleString()}
              <span className="text-xs font-normal text-gray-500 ml-1">대</span>
            </p>
          </div>
        </div>
        <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
          실시간 추정
        </span>
      </div>

      {/* 포화도 */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-xl">
            📊
          </div>
          <div>
            <p className="text-xs text-gray-500">포화도</p>
            <p className="text-lg font-semibold text-gray-900">
              {saturation}
              <span className="text-sm text-gray-500 ml-0.5">%</span>
            </p>
          </div>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-semibold">
          혼잡
        </span>
      </div>
    </div>
  );
}

export default SummaryCards;
