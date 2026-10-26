/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RiskTier } from '../../types';

interface PortfolioDonutChartProps {
  lowCount?: number;
  medCount?: number;
  highCount?: number;
  total?: number;
  selectedTier?: RiskTier | null;
  onSelectTier?: (tier: RiskTier | null) => void;
}

export const PortfolioDonutChart: React.FC<PortfolioDonutChartProps> = ({
  lowCount = 132,
  medCount = 40,
  highCount = 28,
  total = 200,
  selectedTier = null,
  onSelectTier,
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  const lowPct = total > 0 ? (lowCount / total) * 100 : 0;
  const medPct = total > 0 ? (medCount / total) * 100 : 0;
  const highPct = total > 0 ? (highCount / total) * 100 : 0;

  // SVG Geometry
  const size = 150;
  const strokeWidth = 22;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Stroke dashes
  const lowDash = (lowPct / 100) * circumference;
  const medDash = (medPct / 100) * circumference;
  const highDash = (highPct / 100) * circumference;

  // Offsets (starting from top, rotate -90)
  const lowOffset = 0;
  const medOffset = -lowDash;
  const highOffset = -(lowDash + medDash);

  const handleTierClick = (tier: RiskTier) => {
    if (!onSelectTier) return;
    if (selectedTier === tier) {
      onSelectTier(null); // toggle off
    } else {
      onSelectTier(tier);
    }
  };

  const activeFocus = hovered || selectedTier;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      {/* Donut Circle */}
      <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          {/* Base background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#EFECE6"
            strokeWidth={strokeWidth}
          />
          {/* Low Risk Arc (Sage Green #6DA884) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#6DA884"
            strokeWidth={activeFocus === 'Low' ? strokeWidth + 4 : strokeWidth}
            strokeDasharray={`${lowDash} ${circumference}`}
            strokeDashoffset={lowOffset}
            className="transition-all duration-200 cursor-pointer"
            onMouseEnter={() => setHovered('Low')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleTierClick('Low')}
          />
          {/* Medium Risk Arc (Golden Amber #DF9E47) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#DF9E47"
            strokeWidth={activeFocus === 'Medium' ? strokeWidth + 4 : strokeWidth}
            strokeDasharray={`${medDash} ${circumference}`}
            strokeDashoffset={medOffset}
            className="transition-all duration-200 cursor-pointer"
            onMouseEnter={() => setHovered('Medium')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleTierClick('Medium')}
          />
          {/* High Risk Arc (Terracotta #BA5641) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#BA5641"
            strokeWidth={activeFocus === 'High' ? strokeWidth + 4 : strokeWidth}
            strokeDasharray={`${highDash} ${circumference}`}
            strokeDashoffset={highOffset}
            className="transition-all duration-200 cursor-pointer"
            onMouseEnter={() => setHovered('High')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleTierClick('High')}
          />
        </svg>

        {/* Center Text (interactive) */}
        <div
          onClick={() => onSelectTier && onSelectTier(null)}
          className="absolute inset-0 flex flex-col items-center justify-center text-center cursor-pointer select-none group"
          title="Click to reset tier filter"
        >
          <span className="text-2xl font-bold font-sans text-[#1A1816] tracking-tight leading-none group-hover:text-[#BA5641] transition-colors">
            {activeFocus === 'Low'
              ? lowCount
              : activeFocus === 'Medium'
              ? medCount
              : activeFocus === 'High'
              ? highCount
              : total}
          </span>
          <span className="text-xs text-[#767069] font-normal mt-1 whitespace-nowrap">
            {activeFocus ? `${activeFocus} Risk` : 'Customers'}
          </span>
          {selectedTier && (
            <span className="text-[9px] font-mono text-[#BA5641] underline mt-0.5">
              Reset filter
            </span>
          )}
        </div>
      </div>

      {/* Legend List matching screenshot, fully clickable and robust on small widths */}
      <div className="flex-1 space-y-2 w-full min-w-0">
        {/* Low Risk */}
        <div
          onClick={() => handleTierClick('Low')}
          onMouseEnter={() => setHovered('Low')}
          onMouseLeave={() => setHovered(null)}
          className={`flex items-center justify-between text-xs px-2.5 py-2 rounded-lg border transition-all cursor-pointer ${
            selectedTier === 'Low'
              ? 'border-[#6DA884] bg-[#EAF3ED] shadow-2xs font-semibold'
              : hovered === 'Low'
              ? 'border-[#EBE6DC] bg-[#FAF7F2]'
              : 'border-transparent hover:bg-[#FAF7F2]'
          } ${selectedTier && selectedTier !== 'Low' ? 'opacity-40' : 'opacity-100'}`}
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6DA884] shrink-0" />
            <span className="text-[#1A1816] whitespace-nowrap font-medium">Low Risk</span>
          </div>
          <div className="tabular-nums font-mono text-[#1A1816] shrink-0 text-right ml-2">
            <span className="font-semibold">{lowCount}</span>{' '}
            <span className="text-[#767069] text-[11px]">({lowPct.toFixed(1)}%)</span>
          </div>
        </div>

        {/* Medium Risk */}
        <div
          onClick={() => handleTierClick('Medium')}
          onMouseEnter={() => setHovered('Medium')}
          onMouseLeave={() => setHovered(null)}
          className={`flex items-center justify-between text-xs px-2.5 py-2 rounded-lg border transition-all cursor-pointer ${
            selectedTier === 'Medium'
              ? 'border-[#DF9E47] bg-[#FCF4E6] shadow-2xs font-semibold'
              : hovered === 'Medium'
              ? 'border-[#EBE6DC] bg-[#FAF7F2]'
              : 'border-transparent hover:bg-[#FAF7F2]'
          } ${selectedTier && selectedTier !== 'Medium' ? 'opacity-40' : 'opacity-100'}`}
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DF9E47] shrink-0" />
            <span className="text-[#1A1816] whitespace-nowrap font-medium">Medium Risk</span>
          </div>
          <div className="tabular-nums font-mono text-[#1A1816] shrink-0 text-right ml-2">
            <span className="font-semibold">{medCount}</span>{' '}
            <span className="text-[#767069] text-[11px]">({medPct.toFixed(1)}%)</span>
          </div>
        </div>

        {/* High Risk */}
        <div
          onClick={() => handleTierClick('High')}
          onMouseEnter={() => setHovered('High')}
          onMouseLeave={() => setHovered(null)}
          className={`flex items-center justify-between text-xs px-2.5 py-2 rounded-lg border transition-all cursor-pointer ${
            selectedTier === 'High'
              ? 'border-[#BA5641] bg-[#FCECE7] shadow-2xs font-semibold'
              : hovered === 'High'
              ? 'border-[#EBE6DC] bg-[#FAF7F2]'
              : 'border-transparent hover:bg-[#FAF7F2]'
          } ${selectedTier && selectedTier !== 'High' ? 'opacity-40' : 'opacity-100'}`}
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BA5641] shrink-0" />
            <span className="text-[#1A1816] whitespace-nowrap font-medium">High Risk</span>
          </div>
          <div className="tabular-nums font-mono text-[#1A1816] shrink-0 text-right ml-2">
            <span className="font-semibold">{highCount}</span>{' '}
            <span className="text-[#767069] text-[11px]">({highPct.toFixed(1)}%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface AgeGroupBarChartProps {
  data?: { group: string; rate: number }[];
  selectedGroup?: string | null;
  onSelectGroup?: (group: string | null) => void;
}

// Progressive terracotta tones across the 5 age cohorts from the UI screenshot
const AGE_BAR_COLORS = ['#DEB2A8', '#D49A8D', '#CB8374', '#BF6B59', '#B3533E'];

export const AgeGroupBarChart: React.FC<AgeGroupBarChartProps> = ({
  data = [
    { group: '< 25', rate: 12 },
    { group: '25 – 35', rate: 16 },
    { group: '35 – 45', rate: 21 },
    { group: '45 – 55', rate: 26 },
    { group: '> 55', rate: 36 },
  ],
  selectedGroup = null,
  onSelectGroup,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const yTicks = [40, 30, 20, 10, 0];
  const chartHeight = 125;
  const maxVal = 40;

  const handleBarClick = (group: string) => {
    if (!onSelectGroup) return;
    if (selectedGroup === group) {
      onSelectGroup(null);
    } else {
      onSelectGroup(group);
    }
  };

  return (
    <div className="w-full flex items-end gap-3">
      {/* Y-Axis Labels */}
      <div className="flex flex-col justify-between h-[125px] mb-7 text-[10px] text-[#9C958D] font-mono tabular-nums pr-1 shrink-0 pb-0.5">
        {yTicks.map((tick) => (
          <span key={tick} className="leading-none">
            {tick}%
          </span>
        ))}
      </div>

      {/* Main Chart Area (Bars + X-Axis column-by-column aligned) */}
      <div className="flex-1 flex flex-col">
        {/* Grid Lines + Bars Container */}
        <div className="relative h-[125px] border-b border-[#E5DFD4] flex items-end justify-between px-1 sm:px-2">
          {/* Horizontal Grid lines */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between pb-0.5">
            {yTicks.map((tick) => (
              <div key={tick} className="w-full border-b border-[#F0EBE1] h-0" />
            ))}
          </div>

          {/* Vertical Bars */}
          {data.map((item, idx) => {
            const barHeightPx = (item.rate / maxVal) * chartHeight;
            const isHovered = hoveredIdx === idx;
            const isSelected = selectedGroup === item.group;
            const barColor = AGE_BAR_COLORS[idx % AGE_BAR_COLORS.length];

            return (
              <div
                key={item.group}
                onClick={() => handleBarClick(item.group)}
                className="flex-1 flex flex-col items-center justify-end h-full z-10 px-1 group cursor-pointer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Tooltip on hover or selection */}
                {(isHovered || isSelected) && (
                  <div className="text-[10px] font-mono font-semibold bg-[#1A1816] text-white px-1.5 py-0.5 rounded shadow-sm mb-1 whitespace-nowrap animate-fade-in z-20">
                    {item.rate}% default rate
                  </div>
                )}

                {/* The Bar with exact progressive chromatic terracotta tones */}
                <div
                  className={`w-full max-w-[34px] rounded-t-sm transition-all duration-200 ${
                    isSelected
                      ? 'ring-2 ring-[#BA5641] ring-offset-1 shadow-md scale-y-[1.02]'
                      : isHovered
                      ? 'brightness-95 shadow-xs scale-y-[1.01]'
                      : 'hover:brightness-95'
                  }`}
                  style={{
                    height: `${barHeightPx}px`,
                    backgroundColor: barColor,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* X-Axis Labels: strictly aligned with the exact same px-1 sm:px-2 and flex-1 columns */}
        <div className="flex items-center justify-between px-1 sm:px-2 mt-2">
          {data.map((item) => {
            const isSelected = selectedGroup === item.group;
            return (
              <button
                key={item.group}
                onClick={() => handleBarClick(item.group)}
                className={`flex-1 text-center text-[11px] font-sans transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'font-bold text-[#BA5641]'
                    : 'text-[#767069] hover:text-[#1A1816]'
                }`}
              >
                {item.group}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
