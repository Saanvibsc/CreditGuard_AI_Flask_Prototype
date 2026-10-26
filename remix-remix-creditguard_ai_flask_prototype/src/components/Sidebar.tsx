/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Home,
  Users,
  BarChart2,
  PieChart,
  Bell,
  FileText,
  Settings,
  X,
} from 'lucide-react';
import { NavPage } from '../types';

export type { NavPage };

export interface SidebarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  activeAlertCount?: number;
  isOpenMobile?: boolean;
  onToggleMobile?: () => void;
  onOpenSettings?: () => void;
}

interface NavItemConfig {
  id: NavPage;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  activeAlertCount = 12,
  isOpenMobile = false,
  onToggleMobile,
  onOpenSettings,
}) => {
  const navItems: NavItemConfig[] = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'risk-analysis', label: 'Risk Analysis', icon: BarChart2 },
    { id: 'segments', label: 'Segments', icon: PieChart },
    { id: 'alerts', label: 'Alerts', icon: Bell, badgeCount: activeAlertCount },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  // Helper to map aliases
  const isItemActive = (id: NavPage): boolean => {
    if (currentPage === id) return true;
    if (id === 'dashboard' && (currentPage === 'customer-dashboard' || !currentPage)) return true;
    if (id === 'customers' && currentPage === 'search') return true;
    if (id === 'risk-analysis' && (currentPage === 'prediction' || currentPage === 'assessment')) return true;
    if (id === 'segments' && (currentPage === 'segment-dashboard' || currentPage === 'segmentation')) return true;
    if (id === 'reports' && currentPage === 'upload-report') return true;
    return false;
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-stone-900/40 z-40 lg:hidden backdrop-blur-xs"
          onClick={onToggleMobile}
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-60 bg-[#FAF7F2] border-r border-[#EBE6DC] flex flex-col justify-between transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top: Logo & Nav List */}
        <div className="flex flex-col">
          {/* Logo Area */}
          <div className="px-5 pt-6 pb-5 flex items-center justify-between">
            <button
              onClick={() => {
                onNavigate('dashboard');
                if (isOpenMobile && onToggleMobile) onToggleMobile();
              }}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-serif-heading text-2xl font-semibold tracking-tight text-[#1A1816]">
                  CreditGuard
                </span>
                <span className="text-xl font-bold text-[#BA5641]">AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#BA5641] inline-block -ml-0.5 mb-1" />
              </div>
              <p className="text-[11px] text-[#767069] font-normal tracking-wide mt-0.5">
                Smarter Credit Decisions
              </p>
            </button>

            {onToggleMobile && (
              <button
                onClick={onToggleMobile}
                className="lg:hidden p-1 text-[#767069] hover:text-[#1A1816] rounded-md transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="px-3 py-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    if (isOpenMobile && onToggleMobile) onToggleMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer text-left ${
                    active
                      ? 'bg-[#EED2C5] text-[#943825] font-semibold'
                      : 'text-[#57534E] hover:bg-[#F2ECE4] hover:text-[#1A1816] font-normal'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        active ? 'text-[#943825]' : 'text-[#78716C]'
                      }`}
                    />
                    <span className="truncate text-[13px]">{item.label}</span>
                  </div>

                  {item.badgeCount !== undefined && item.badgeCount > 0 && (
                    <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#E7C6BB] text-[#8A3A28] tabular-nums">
                      {item.badgeCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Settings */}
        <div className="p-3 border-t border-[#EBE6DC]">
          <button
            onClick={() => {
              if (onOpenSettings) onOpenSettings();
              else onNavigate('settings');
              if (isOpenMobile && onToggleMobile) onToggleMobile();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs text-[#57534E] hover:bg-[#F2ECE4] hover:text-[#1A1816] transition-colors cursor-pointer text-left ${
              currentPage === 'settings' ? 'bg-[#EED2C5] text-[#943825] font-semibold' : ''
            }`}
          >
            <Settings className="w-4 h-4 text-[#78716C] shrink-0" />
            <span className="text-[13px]">Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
};
