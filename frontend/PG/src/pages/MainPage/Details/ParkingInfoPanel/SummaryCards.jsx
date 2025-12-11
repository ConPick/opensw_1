// src/pages/MainPage/Details/ParkingInfoPanel/SummaryCards.jsx
import React from "react";

function SummaryCards({ totalSpaces, availablePrediction, saturation }) {
  return (
    <div className="space-y-3">
      {/* 총 주차 대수 */}
      <div
        className="
          rounded-2xl border border-white/15
          bg-white/12 backdrop-blur-xl
          shadow-[0_16px_40px_rgba(15,23,42,0.75)]
          p-4 flex items-center justify-between
        "
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/30 flex items-center justify-center text-xl text-slate-50">
            🚗
          </div>
          <div>
            <p className="text-xs text-slate-300">총 주차 대수</p>
            <p className="text-lg font-semibold text-slate-50">
              {totalSpaces.toLocaleString()}
              <span className="text-xs font-normal text-slate-300 ml-1">대</span>
            </p>
          </div>
        </div>
        <span
          className="
            text-[11px] px-3 py-1 rounded-full
            bg-gradient-to-r from-indigo-400/30 to-cyan-400/30
            text-cyan-100 border border-cyan-300/40
          "
        >
          전체 구역 기준
        </span>
      </div>

      {/* 주차 가능 예측 */}
      <div
        className="
          rounded-2xl border border-white/15
          bg-white/12 backdrop-blur-xl
          shadow-[0_16px_40px_rgba(15,23,42,0.75)]
          p-4 flex items-center justify-between
        "
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/30 flex items-center justify-center text-xl text-slate-50">
            🅿️
          </div>
          <div>
            <p className="text-xs text-slate-300">주차 가능 예측</p>
            <p className="text-lg font-semibold text-slate-50">
              {availablePrediction.toLocaleString()}
              <span className="text-xs font-normal text-slate-300 ml-1">대</span>
            </p>
          </div>
        </div>
        <span
          className="
            text-[11px] px-3 py-1 rounded-full
            bg-emerald-400/25 text-emerald-50
            border border-emerald-300/50
          "
        >
          실시간 추정
        </span>
      </div>

      {/* 포화도 */}
      <div
        className="
          rounded-2xl border border-white/15
          bg-white/12 backdrop-blur-xl
          shadow-[0_16px_40px_rgba(15,23,42,0.75)]
          p-4 flex items-center justify-between
        "
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-rose-500/35 flex items-center justify-center text-xl text-slate-50">
            📊
          </div>
          <div>
            <p className="text-xs text-slate-300">포화도</p>
            <p className="text-lg font-semibold text-slate-50">
              {saturation}
              <span className="text-sm text-slate-300 ml-0.5">%</span>
            </p>
          </div>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500 text-white text-[11px] font-semibold shadow-[0_0_16px_rgba(244,63,94,0.8)]">
          혼잡
        </span>
      </div>
    </div>
  );
}

export default SummaryCards;


// // src/pages/MainPage/Details/ParkingInfoPanel/SummaryCards.jsx
// import React from "react";

// function SummaryCards({ totalSpaces, availablePrediction, saturation }) {
//   return (
//     <div className="space-y-3">
//       {/* 총 주차 대수 */}
//       <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-xl">
//             🚗
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">총 주차 대수</p>
//             <p className="text-lg font-semibold text-gray-900">
//               {totalSpaces.toLocaleString()}
//               <span className="text-xs font-normal text-gray-500 ml-1">대</span>
//             </p>
//           </div>
//         </div>
//         <span className="text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
//           전체 구역 기준
//         </span>
//       </div>

//       {/* 주차 가능 예측 */}
//       <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl">
//             🅿️
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">주차 가능 예측</p>
//             <p className="text-lg font-semibold text-gray-900">
//               {availablePrediction.toLocaleString()}
//               <span className="text-xs font-normal text-gray-500 ml-1">대</span>
//             </p>
//           </div>
//         </div>
//         <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
//           실시간 추정
//         </span>
//       </div>

//       {/* 포화도 */}
//       <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-xl">
//             📊
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">포화도</p>
//             <p className="text-lg font-semibold text-gray-900">
//               {saturation}
//               <span className="text-sm text-gray-500 ml-0.5">%</span>
//             </p>
//           </div>
//         </div>
//         <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-semibold">
//           혼잡
//         </span>
//       </div>
//     </div>
//   );
// }

// export default SummaryCards;
