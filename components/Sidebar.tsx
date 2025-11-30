// components/Sidebar.tsx
"use client";

import { useState } from "react";
import {
  Home,
  User2,
  FolderGit2,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "About", icon: User2 },
  { label: "Projects", icon: FolderGit2 },
  { label: "Guestbook", icon: MessageSquare },
  { label: "Dashboard", icon: LayoutDashboard },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col gap-4">
      {/* Logo + profile mini */}
      <div className="anime-card p-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-anime-pink to-anime-cyan flex items-center justify-center text-xl font-bold">
          B
        </div>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Hi, I&apos;m
          </span>
          <span className="font-semibold text-sm">Bagas Agung Wiyono</span>
          <span className="text-[10px] text-slate-500">
            a Freelance Dev • Anime enjoyer
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="anime-card p-3 flex-1">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;
            return (
              <li key={item.label}>
                <button
                  onClick={() => setActive(item.label)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition
                    ${
                      isActive
                        ? "bg-gradient-to-r from-anime-purple/80 to-anime-pink/80 text-white"
                        : "hover:bg-slate-800/80 text-slate-300"
                    }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* “Now playing / status” card */}
      <div className="anime-card p-3 flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-slate-800 overflow-hidden flex items-center justify-center text-xs">
          <span>🌀</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold">Currently watching</span>
          <span className="text-xs text-slate-400">
            Random anime playlist on loop
          </span>
          <span className="text-[10px] text-anime-cyan mt-1">
            「今、チル中」 chill mode on
          </span>
        </div>
      </div>
    </aside>
  );
}
