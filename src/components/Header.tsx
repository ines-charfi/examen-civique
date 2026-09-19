import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  Clock, 
  HelpCircle, 
  Layers, 
  Search, 
  Sparkles, 
  MessageSquareHeart,
  ShieldCheck,
  Scale,
  Compass,
  HeartHandshake
} from 'lucide-react';

export type NavigationTab = 
  | 'exam' 
  | 'thematic' 
  | 'references' 
  | 'flashcards' 
  | 'interview' 
  | 'progress' 
  | 'comments';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenSearch: () => void;
  savedExamsCount: number;
  commentsCount?: number;
}

interface TabConfig {
  id: NavigationTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  count?: number;
  highlight?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  savedExamsCount
}) => {
  const tabs: TabConfig[] = [
    { id: 'exam', label: 'Examen Blanc (40Q)', icon: Clock, badge: 'Officiel' },
    { id: 'thematic', label: 'Quiz par Thème', icon: Layers },
    { id: 'references', label: 'Fiches & Livret', icon: BookOpen },
    { id: 'flashcards', label: 'Flashcards', icon: Sparkles },
    { id: 'interview', label: 'Entretien Oral', icon: HelpCircle },
    { 
      id: 'progress', 
      label: 'Mon Bilan', 
      icon: Award, 
      count: savedExamsCount > 0 ? savedExamsCount : undefined 
    },
    { 
      id: 'comments', 
      label: 'Avis & Témoignages', 
      icon: MessageSquareHeart, 
      badge: 'Nouveau',
      highlight: true 
    }
  ];

  return (
    <header className="sticky top-0 z-40 transition-all">
      {/* Top Banner: Luminous Tricolor French Glass Ribbon with animated gleam */}
      <div className="h-1.5 w-full flex relative overflow-hidden shadow-xs">
        <div className="w-1/3 bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 shadow-sm" />
        <div className="w-1/3 bg-white relative">
          <div className="absolute inset-0 bg-linear-to-b from-white via-slate-100 to-white opacity-90" />
        </div>
        <div className="w-1/3 bg-linear-to-r from-rose-500 via-red-600 to-rose-700 shadow-sm" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs pointer-events-none" />
      </div>

      {/* Top Micro-Bar: Motto & Official State Protocol with French Flag & Devise */}
      <div className="bg-slate-950/92 text-slate-300 backdrop-blur-xl border-b border-white/10 px-4 py-1.5 text-[11px] hidden sm:block selection:bg-rose-500 selection:text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* French National Motto with Flag & Republic Label */}
          <div className="flex items-center gap-2.5 font-medium tracking-wide">
            {/* French Flag badge */}
            <span className="flex h-3 w-4.5 rounded-xs overflow-hidden border border-white/30 shadow-xs">
              <span className="w-1/3 bg-blue-600" />
              <span className="w-1/3 bg-white" />
              <span className="w-1/3 bg-rose-600" />
            </span>
            <span className="text-white font-black tracking-wider text-[11px]">RÉPUBLIQUE FRANÇAISE</span>
            <span className="text-slate-600 font-bold">•</span>
            {/* Stylized Devise with individual mini icons */}
            <div className="flex items-center gap-3 text-slate-200">
              <span className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <Compass className="w-3 h-3 text-blue-400" />
                <strong className="font-serif italic font-semibold text-xs">Liberté</strong>
              </span>
              <span className="text-slate-600 font-bold">•</span>
              <span className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <Scale className="w-3 h-3 text-slate-100" />
                <strong className="font-serif italic font-semibold text-xs">Égalité</strong>
              </span>
              <span className="text-slate-600 font-bold">•</span>
              <span className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <HeartHandshake className="w-3 h-3 text-rose-400" />
                <strong className="font-serif italic font-semibold text-xs">Fraternité</strong>
              </span>
            </div>
          </div>

          {/* Right: Livret du Citoyen reference badge & score */}
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Conforme Livret du Citoyen 2026
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">Seuil de réussite officiel : <strong className="text-white">32/40 (80%)</strong></span>
          </div>
        </div>
      </div>

      {/* Main Glass Header Container */}
      <div className="bg-white/85 backdrop-blur-2xl border-b border-white/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Brand Identity with 3D French Flag Glass Shield */}
            <motion.div 
              whileHover={{ scale: 1.015 }}
              className="flex items-center gap-3.5 cursor-pointer select-none"
              onClick={() => setActiveTab('exam')}
            >
              {/* French Flag Glass Shield Emblem */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl relative overflow-hidden shadow-xl border-2 border-white/80 backdrop-blur-xl group shrink-0 transition-transform duration-300">
                {/* Flag 3 vertical glass stripes */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/3 bg-linear-to-b from-blue-600 via-blue-700 to-blue-900" />
                  <div className="w-1/3 bg-linear-to-b from-white via-slate-100 to-slate-200" />
                  <div className="w-1/3 bg-linear-to-b from-rose-500 via-red-600 to-rose-800" />
                </div>
                {/* Frosted glass overlay with RF monogram */}
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[0.5px] flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] tracking-tight">
                    RF
                  </span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/90 drop-shadow-sm -mt-0.5">
                    France
                  </span>
                </div>
                {/* Specular glass sheen */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/35 via-transparent to-white/10 pointer-events-none" />
                {/* Tricolor inner micro-ring */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40 pointer-events-none" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-xl font-black text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                    <span>Examen Civique Français</span>
                  </h1>
                  {/* French Flag Glass Pill Badge */}
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-linear-to-r from-blue-50 via-white to-rose-50 text-slate-800 border border-slate-200/80 shadow-2xs">
                    <span className="flex h-2 w-3 rounded-2xs overflow-hidden border border-slate-300">
                      <span className="w-1/3 bg-blue-600" />
                      <span className="w-1/3 bg-white" />
                      <span className="w-1/3 bg-rose-600" />
                    </span>
                    40 Questions
                  </span>
                </div>

                {/* Subtitle with Republican Motto accent */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
                  <span className="font-medium text-slate-600">Préparation officielle naturalisation</span>
                  <span className="hidden md:inline text-slate-300">•</span>
                  <span className="hidden md:inline font-serif italic text-blue-900 font-semibold">
                    Liberté • Égalité • Fraternité
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Search Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                id="header-search-btn"
                onClick={onOpenSearch}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white/90 hover:bg-white backdrop-blur-md rounded-xl transition-all border border-slate-200/80 cursor-pointer shadow-xs hover:shadow-sm"
                title="Rechercher une notion, une date ou une question (⌘K)"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span className="hidden md:inline">Rechercher...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 rounded-md shadow-2xs">
                  ⌘K
                </kbd>
              </motion.button>

              {/* Ultra-Stylish French Flag Glass CTA Button */}
              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                id="header-exam-cta"
                onClick={() => setActiveTab('exam')}
                className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-white/40 group"
              >
                {/* French Flag Gradient Glass backdrop with Tricolor depth */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-700 via-slate-900 to-rose-700 group-hover:from-blue-600 group-hover:to-rose-600 transition-colors" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" />
                
                {/* Tricolor glass bottom glow */}
                <div className="absolute bottom-0 inset-x-0 h-0.5 flex">
                  <div className="w-1/3 bg-blue-400" />
                  <div className="w-1/3 bg-white" />
                  <div className="w-1/3 bg-rose-400" />
                </div>

                <div className="relative z-10 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">Lancer l'</span>Examen Blanc
                </div>
              </motion.button>
            </div>
          </div>

          {/* Navigation Tabs with French Flag Glass Highlight Layout */}
          <nav className="flex space-x-1 sm:space-x-1.5 overflow-x-auto py-2.5 scrollbar-none border-t border-slate-200/60 text-xs sm:text-sm font-medium">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as NavigationTab)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap font-semibold transition-colors cursor-pointer select-none ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 rounded-xl overflow-hidden shadow-md border border-white/40"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    >
                      {/* French Flag Glass Active Tab Gradient */}
                      <div className="absolute inset-0 bg-linear-to-r from-blue-700/95 via-slate-900/90 to-rose-700/95 backdrop-blur-xl" />
                      <div className="absolute inset-0 bg-white/10" />
                      {/* Tricolor glass bottom accent */}
                      <div className="absolute bottom-0 inset-x-0 h-0.5 flex">
                        <div className="w-1/3 bg-blue-400" />
                        <div className="w-1/3 bg-white" />
                        <div className="w-1/3 bg-rose-400" />
                      </div>
                    </motion.div>
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>

                    {tab.badge && (
                      <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : tab.highlight 
                            ? 'bg-rose-100/90 text-rose-700 border border-rose-200' 
                            : 'bg-blue-100/90 text-blue-700 border border-blue-200'
                      }`}>
                        {tab.badge}
                      </span>
                    )}

                    {tab.count !== undefined && (
                      <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
