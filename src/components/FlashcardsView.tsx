import React, { useState } from 'react';
import { FLASHCARDS_DATA } from '../data/questionsData';
import { CategoryId } from '../types';
import { Sparkles, RotateCw, ChevronRight, ChevronLeft, Check, RefreshCw, Shuffle, HelpCircle } from 'lucide-react';

export const FlashcardsView: React.FC = () => {
  const [cards, setCards] = useState(FLASHCARDS_DATA);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
  };

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleMarkKnown = () => {
    setKnownCards(prev => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) {
        next.delete(currentCard.id);
      } else {
        next.add(currentCard.id);
      }
      return next;
    });
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCards([...cards].sort(() => 0.5 - Math.random()));
    setCurrentIndex(0);
  };

  const isKnown = knownCards.has(currentCard.id);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-6">
      {/* French Flag Glass Header */}
      <div className="relative overflow-hidden rounded-3xl flag-glass-card text-white p-6 sm:p-8 shadow-xl text-center">
        <div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-56 h-56 bg-white/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-rose-600/25 rounded-full blur-3xl pointer-events-none" />

        {/* Tricolor glass top accent bar */}
        <div className="absolute top-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-inner">
            <span className="flex h-3 w-4.5 rounded-xs overflow-hidden border border-white/40 shadow-xs">
              <span className="w-1/3 bg-blue-600" />
              <span className="w-1/3 bg-white" />
              <span className="w-1/3 bg-rose-600" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-blue-300" /> Mémorisation Rapide
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-xs">
            Flashcards Mémo Républicaines
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto">
            Cliquez sur la carte pour la retourner et vérifier vos connaissances instantanément.
          </p>
        </div>

        {/* Tricolor glass bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>
      </div>

      {/* Progress & Controls */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2">
        <span>
          Carte <strong>{currentIndex + 1}</strong> sur {cards.length} • Maîtrisées : <strong>{knownCards.size}</strong>/{cards.length}
        </span>
        <button
          onClick={handleShuffle}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
        >
          <Shuffle className="w-3.5 h-3.5" /> Mélanger les cartes
        </button>
      </div>

      {/* Card container */}
      <div
        onClick={handleFlip}
        className="cursor-pointer min-h-[320px] sm:min-h-[360px] rounded-3xl border-2 border-slate-200 bg-white shadow-md p-8 flex flex-col justify-between transition-all duration-300 hover:border-blue-400 hover:shadow-lg relative select-none"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {currentCard.category.replace('-', ' ')}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <RotateCw className="w-3.5 h-3.5" /> Cliquer pour retourner
          </span>
        </div>

        <div className="py-8 text-center space-y-4">
          {!isFlipped ? (
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">Question</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {currentCard.front}
              </h3>
            </div>
          ) : (
            <div className="space-y-3 animate-in fade-in zoom-in-95 duration-200">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">Réponse Officielle</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950 leading-snug">
                {currentCard.back}
              </h3>
              {currentCard.details && (
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed pt-2 border-t border-slate-100">
                  {currentCard.details}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center">
          <span className="text-xs text-slate-400">
            {isFlipped ? 'Face Réponse' : 'Face Question'}
          </span>
        </div>
      </div>

      {/* Action footer */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={handlePrev}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-colors shadow-2xs"
        >
          <ChevronLeft className="w-4 h-4" />
          Précédente
        </button>

        <button
          onClick={handleMarkKnown}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            isKnown
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Check className="w-4 h-4 text-emerald-600" />
          {isKnown ? 'Notion Maîtrisée' : 'Marquer comme sue'}
        </button>

        <button
          onClick={handleNext}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
        >
          Suivante
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
