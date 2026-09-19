import React, { useState, useEffect } from 'react';
import { CIVIC_QUESTIONS } from '../data/questionsData';
import { KEY_DATES, OFFICIAL_SECTIONS } from '../data/referencesData';
import { Search, X, BookOpen, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle if already handled outside
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Filter questions
  const matchingQuestions = normalizedQuery ? CIVIC_QUESTIONS.filter(q =>
    q.question.toLowerCase().includes(normalizedQuery) ||
    q.explanation.toLowerCase().includes(normalizedQuery) ||
    q.options.some(opt => opt.toLowerCase().includes(normalizedQuery)) ||
    q.officialReference.toLowerCase().includes(normalizedQuery)
  ) : [];

  // Filter dates
  const matchingDates = normalizedQuery ? KEY_DATES.filter(d =>
    d.year.toLowerCase().includes(normalizedQuery) ||
    d.event.toLowerCase().includes(normalizedQuery) ||
    d.description.toLowerCase().includes(normalizedQuery)
  ) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Rechercher une notion (ex: laïcité, 1905, Simone Veil, Sénat, impôts)..."
            className="w-full bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:outline-hidden text-sm sm:text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-white border border-slate-200 rounded-lg"
          >
            Échap
          </button>
        </div>

        {/* Search Results */}
        <div className="p-4 overflow-y-auto space-y-4 divide-y divide-slate-100">
          {!query && (
            <div className="py-10 text-center space-y-2">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-medium text-slate-600">
                Tapez un mot-clé pour chercher dans le Livret du Citoyen
              </p>
              <p className="text-xs text-slate-400">
                Suggestions : « 1789 », « 1905 », « laïcité », « Marianne », « Simone Veil », « Déclaration »
              </p>
            </div>
          )}

          {query && matchingQuestions.length === 0 && matchingDates.length === 0 && (
            <div className="py-10 text-center text-slate-500 text-sm">
              Aucun résultat pour « <strong>{query}</strong> ». Essayez une autre formulation.
            </div>
          )}

          {/* Dates matches */}
          {matchingDates.length > 0 && (
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Dates historiques correspondantes ({matchingDates.length})
              </div>
              {matchingDates.map((date, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      {date.year}
                    </span>
                    <span className="font-bold text-slate-900">{date.event}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{date.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Questions matches */}
          {matchingQuestions.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Questions d’examen ({matchingQuestions.length})
              </div>
              {matchingQuestions.map(q => (
                <div key={q.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
                  <div className="font-bold text-slate-900">
                    {q.question}
                  </div>
                  <div className="text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200 font-medium">
                    ✓ <strong>Réponse officielle :</strong> {q.options[q.correctIndex]}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {q.explanation}
                  </p>
                  <div className="text-[10px] text-slate-400">
                    Réf : {q.officialReference}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
