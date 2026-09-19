/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header, NavigationTab } from './components/Header';
import { ExamSimulator } from './components/ExamSimulator';
import { ThematicQuiz } from './components/ThematicQuiz';
import { OfficialReferencesView } from './components/OfficialReferencesView';
import { FlashcardsView } from './components/FlashcardsView';
import { InterviewGuideView } from './components/InterviewGuideView';
import { ProgressView } from './components/ProgressView';
import { CommentsView } from './components/CommentsView';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { ExamResult } from './types';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('exam');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [examHistory, setExamHistory] = useState<ExamResult[]>(() => {
    try {
      const saved = localStorage.getItem('civic_exam_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save history on change
  useEffect(() => {
    try {
      localStorage.setItem('civic_exam_history', JSON.stringify(examHistory));
    } catch {
      // Ignore storage errors
    }
  }, [examHistory]);

  // Global keyboard shortcut for search (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSaveResult = (result: ExamResult) => {
    setExamHistory(prev => [result, ...prev]);
  };

  const handleClearHistory = () => {
    setExamHistory([]);
    try {
      localStorage.removeItem('civic_exam_history');
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950/2 font-sans text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Ambient French Flag Glass Lights Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* French Royal Blue Glass Glow (Left) */}
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] bg-blue-500/12 rounded-full blur-[120px]" />
        {/* Crystalline White Glass Glow (Center) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/40 rounded-full blur-[100px]" />
        {/* French Carmine Red Glass Glow (Right) */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] bg-rose-500/12 rounded-full blur-[120px]" />
        {/* Secondary subtle bottom tricolor bounce */}
        <div className="absolute -bottom-48 left-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[130px]" />
        <div className="absolute -bottom-48 right-1/4 w-[400px] h-[400px] bg-rose-600/8 rounded-full blur-[130px]" />
      </div>

      {/* App Header with Animated Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedExamsCount={examHistory.length}
      />

      {/* Main Content Area with Smooth Page Transitions */}
      <main className="grow">
        <AnimatePresence mode="wait">
          {activeTab === 'exam' && (
            <motion.div
              key="exam"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ExamSimulator onSaveResult={handleSaveResult} />
            </motion.div>
          )}

          {activeTab === 'thematic' && (
            <motion.div
              key="thematic"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ThematicQuiz />
            </motion.div>
          )}

          {activeTab === 'references' && (
            <motion.div
              key="references"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <OfficialReferencesView />
            </motion.div>
          )}

          {activeTab === 'flashcards' && (
            <motion.div
              key="flashcards"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <FlashcardsView />
            </motion.div>
          )}

          {activeTab === 'interview' && (
            <motion.div
              key="interview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <InterviewGuideView />
            </motion.div>
          )}

          {activeTab === 'progress' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProgressView
                examHistory={examHistory}
                onClearHistory={handleClearHistory}
                onStartExam={() => setActiveTab('exam')}
              />
            </motion.div>
          )}

          {activeTab === 'comments' && (
            <motion.div
              key="comments"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <CommentsView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Stylized Modern French Civic Glass Footer with Flag & Motto */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />
    </div>
  );
}
