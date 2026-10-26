/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Search, Download, Menu, Calendar, ChevronDown, Check } from 'lucide-react';
import { Customer } from '../types';

export interface TopNavProps {
  onSearchSelect?: (customerId: string) => void;
  onExportReport?: () => void;
  onToggleSidebar?: () => void;
  customers?: Customer[];
  selectedDate?: string;
  onDateChange?: (date: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onSearchSelect,
  onExportReport,
  onToggleSidebar,
  customers = [],
  selectedDate = 'Oct 26, 2026',
  onDateChange,
}) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [activeDate, setActiveDate] = useState(selectedDate || 'Oct 26, 2026');
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const dateContainerRef = useRef<HTMLDivElement>(null);

  const availableDates = [
    'Oct 26, 2026',
    'Oct 25, 2026',
    'Oct 20, 2026',
    'Sep 30, 2026',
    'Aug 31, 2026',
  ];

  useEffect(() => {
    if (selectedDate) setActiveDate(selectedDate);
  }, [selectedDate]);

  const handleSelectDate = (date: string) => {
    setActiveDate(date);
    if (onDateChange) onDateChange(date);
    setShowDatePicker(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setShowResults(false);
      }
      if (
        dateContainerRef.current &&
        !dateContainerRef.current.contains(e.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = query.trim()
    ? customers
        .filter(
          (c) =>
            c.fullName.toLowerCase().includes(query.toLowerCase()) ||
            c.id.toLowerCase().includes(query.toLowerCase()) ||
            c.email.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 6)
    : [];

  const handleSelectCustomer = (id: string) => {
    if (onSearchSelect) onSearchSelect(id);
    setQuery('');
    setShowResults(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EBE6DC] px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Mobile Sidebar Hamburger Button */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden p-2 text-[#78716C] hover:text-[#1A1816] rounded-lg hover:bg-[#F2ECE4] transition-colors cursor-pointer"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Global Customer Search Bar */}
      <div ref={searchContainerRef} className="relative flex-1 max-w-xl">
        <div className="flex items-center w-full px-3.5 py-2 bg-[#FBF9F5] border border-[#E5DFD4] rounded-lg text-xs transition-all focus-within:bg-white focus-within:border-[#BA5641] focus-within:ring-1 focus-within:ring-[#BA5641]/20">
          <Search className="w-4 h-4 text-[#9C958D] mr-2.5 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            placeholder="Search customers by ID, name or email..."
            className="w-full bg-transparent text-[#1A1816] placeholder-[#9C958D] text-xs outline-none"
          />
        </div>

        {/* Search Results Dropdown */}
        {showResults && query.trim().length > 0 && (
          <div className="absolute top-full mt-1.5 left-0 right-0 bg-white border border-[#E5DFD4] rounded-xl shadow-lg overflow-hidden py-1.5 z-50">
            <div className="px-3.5 py-1 text-[10px] uppercase font-mono tracking-wider text-[#9C958D] border-b border-[#F0EBE1]">
              Search Matches ({filtered.length})
            </div>
            {filtered.length > 0 ? (
              filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCustomer(c.id)}
                  className="w-full text-left px-3.5 py-2.5 hover:bg-[#FBF9F5] flex items-center justify-between transition-colors border-b border-[#F5F2EA] last:border-none cursor-pointer"
                >
                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#1A1816]">
                        {c.id}
                      </span>
                      <span className="text-xs text-[#1A1816] font-medium truncate">
                        {c.fullName}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#78716C] truncate mt-0.5">
                      {c.email}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        c.riskTier === 'High'
                          ? 'bg-[#FCECE7] text-[#BA472A]'
                          : c.riskTier === 'Medium'
                          ? 'bg-[#FCF4E6] text-[#B4690E]'
                          : 'bg-[#EAF3ED] text-[#2E7D4C]'
                      }`}
                    >
                      {c.riskTier || 'Normal'}
                    </span>
                    <div className="font-mono text-[10px] text-[#78716C] mt-0.5">
                      Prob: {(c.calibratedProbability ?? 0.14).toFixed(2)}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3.5 py-4 text-xs text-[#78716C] text-center">
                No matching customer records found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Controls: Date Picker & Export Report CTA */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Date Selector Dropdown */}
        <div ref={dateContainerRef} className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center gap-2 px-3 py-2 bg-[#FBF9F5] hover:bg-white border border-[#E5DFD4] rounded-lg text-xs font-medium text-[#1A1816] transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#78716C]" />
            <span className="whitespace-nowrap">{activeDate}</span>
            <ChevronDown className="w-3 h-3 text-[#78716C]" />
          </button>

          {showDatePicker && (
            <div className="absolute right-0 top-full mt-1.5 w-48 bg-white border border-[#E5DFD4] rounded-xl shadow-lg py-1.5 z-50">
              <div className="px-3 py-1 text-[10px] uppercase font-mono tracking-wider text-[#9C958D]">
                Select Snapshot Date
              </div>
              {availableDates.map((date) => (
                <button
                  key={date}
                  onClick={() => handleSelectDate(date)}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#FAF7F2] transition-colors cursor-pointer ${
                    activeDate === date ? 'font-semibold text-[#BA5641]' : 'text-[#1A1816]'
                  }`}
                >
                  <span>{date}</span>
                  {activeDate === date && <Check className="w-3.5 h-3.5 text-[#BA5641]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Primary CTA: Export Report */}
        <button
          onClick={onExportReport}
          className="flex items-center gap-2 px-4 py-2 bg-[#BA5641] hover:bg-[#A54935] text-white rounded-lg text-xs font-medium transition-colors cursor-pointer shadow-xs whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Report</span>
        </button>

        {/* User Profile in Top Nav: Saanvi Gothe */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-[#E5DFD4]">
          <div
            className="w-8 h-8 rounded-full bg-[#EED2C5] flex items-center justify-center text-[#943825] font-semibold text-xs shrink-0 select-none border border-[#E0BCAC]"
            title="Saanvi Gothe (saanvigothe@gmail.com)"
          >
            SG
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-semibold text-[#1A1816] leading-tight">
              Saanvi Gothe
            </span>
            <span className="text-[10px] text-[#78716C] leading-none mt-0.5">
              Data Science Intern
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
