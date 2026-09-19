import React, { useState } from 'react';
import { CategoryId, Question } from '../types';
import { CIVIC_QUESTIONS } from '../data/questionsData';
import { CheckCircle2, XCircle, BookOpen, ChevronRight, ChevronLeft, RotateCcw, Filter, AlertTriangle, Layers } from 'lucide-react';

interface CategoryMeta {
  id: CategoryId;
  name: string;
  count: number;
  description: string;
}

const CATEGORIES: CategoryMeta[] = [
  {
    id: 'principes-symboles',
    name: 'Principes & Symboles',
    count: CIVIC_QUESTIONS.filter(q => q.category === 'principes-symboles').length,
    description: 'Devise, drapeau, Marianne, laïcité, 14 juillet, valeurs'
  },
  {
    id: 'histoire-figures',
    name: 'Histoire & Grandes Figures',
    count: CIVIC_QUESTIONS.filter(q => q.category === 'histoire-figures').length,
    description: '1789, 1905, 1944, De Gaulle, Jean Moulin, Simone Veil'
  },
  {
    id: 'institutions-politique',
    name: 'Institutions & Ve République',
    count: CIVIC_QUESTIONS.filter(q => q.category === 'institutions-politique').length,
    description: 'Président, Premier ministre, Parlement, lois, mairies'
  },
  {
    id: 'droits-devoirs',
    name: 'Droits & Devoirs du Citoyen',
    count: CIVIC_QUESTIONS.filter(q => q.category === 'droits-devoirs').length,
    description: 'Vote, impôts, école obligatoire, égalité femmes-hommes'
  },
  {
    id: 'geographie-culture',
    name: 'Géographie & Union Européenne',
    count: CIVIC_QUESTIONS.filter(q => q.category === 'geographie-culture').length,
    description: 'Fleuves, montagnes, Outre-mer, 27 pays membres, Strasbourg'
  },
  {
    id: 'entretien-oral',
    name: 'Entretien en Préfecture',
    count: CIVIC_QUESTIONS.filter(q => q.category === 'entretien-oral').length,
    description: 'Questions personnelles posées par l’agent préfectoral'
  }
];

export const ThematicQuiz: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('principes-symboles');
  const [onlyTricky, setOnlyTricky] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  // Filter questions according to selection
  const filteredQuestions = CIVIC_QUESTIONS.filter(q => {
    const matchCat = q.category === selectedCategory;
    if (onlyTricky) {
      return matchCat && (q.difficulty === 'piege' || q.difficulty === 'moyen' || q.isCommonInterviewQuestion);
    }
    return matchCat;
  });

  const currentQ: Question | undefined = filteredQuestions[currentIndex];
  const isAnswered = currentQ ? userAnswers[currentQ.id] !== undefined : false;
  const selectedOption = currentQ ? userAnswers[currentQ.id] : undefined;

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (userAnswers[qId] !== undefined) return; // Prevent changing once answered
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optIdx
    }));
  };

  const handleSwitchCategory = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
  };

  const resetCategoryQuiz = () => {
    setUserAnswers(prev => {
      const next = { ...prev };
      filteredQuestions.forEach(q => delete next[q.id]);
      return next;
    });
    setCurrentIndex(0);
  };

  // Score in this category
  let categoryScore = 0;
  let categoryAnsweredCount = 0;
  filteredQuestions.forEach(q => {
    if (userAnswers[q.id] !== undefined) {
      categoryAnsweredCount += 1;
      if (userAnswers[q.id] === q.correctIndex) {
        categoryScore += 1;
      }
    }
  });

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8">
      {/* Top Banner with French Flag Glass */}
      <div className="relative overflow-hidden rounded-3xl flag-glass-card text-white p-6 sm:p-8 shadow-xl">
        <div className="absolute -left-10 -top-10 w-72 h-72 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-60 h-60 bg-white/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-rose-600/25 rounded-full blur-3xl pointer-events-none" />
        
        {/* Tricolor glass top accent bar */}
        <div className="absolute top-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-md mb-2 shadow-inner">
              <span className="flex h-3 w-4.5 rounded-xs overflow-hidden border border-white/40 shadow-xs">
                <span className="w-1/3 bg-blue-600" />
                <span className="w-1/3 bg-white" />
                <span className="w-1/3 bg-rose-600" />
              </span>
              <span>Modules d'Apprentissage Par Thème</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight drop-shadow-xs">
              Entraînement Thématique Ciblé
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-1">
              Approfondissez chacun des piliers républicains et préparez-vous aux questions spécifiques.
            </p>
          </div>
          <div className="text-xs bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl text-white shrink-0 shadow-xs">
            Progression : <strong className="text-sm font-black">{categoryScore} / {categoryAnsweredCount}</strong> bonnes réponses
          </div>
        </div>

        {/* Tricolor glass bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>
      </div>

      {/* Category selector pills */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            Sélectionnez une catégorie officielle :
          </h3>
          <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={onlyTricky}
              onChange={e => {
                setOnlyTricky(e.target.checked);
                setCurrentIndex(0);
              }}
              className="w-4 h-4 rounded text-blue-600 border-slate-300"
            />
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Prioriser questions pièges & entretien
          </label>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSwitchCategory(cat.id)}
                className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold ring-2 ring-blue-500/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div>
                  <div className="text-xs font-bold leading-tight mb-1">{cat.name}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                    {cat.description}
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-bold text-slate-400">
                  {cat.count} questions
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main question module */}
      {filteredQuestions.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500">Aucune question ne correspond à ce filtre.</p>
          <button
            onClick={() => setOnlyTricky(false)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
          >
            Réinitialiser le filtre
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Header of Question */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">
                Question {currentIndex + 1} / {filteredQuestions.length}
              </span>
              {currentQ.isCommonInterviewQuestion && (
                <span className="text-xs font-semibold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md">
                  ★ Essentiel Entretien
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-600 font-medium">
                Score du thème : <strong>{categoryScore} / {categoryAnsweredCount}</strong>
              </span>
              <button
                onClick={resetCategoryQuiz}
                className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors"
                title="Recommencer cette série"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Réinitialiser
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>

            {/* Choices */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = currentQ.correctIndex === idx;

                let style = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800';

                if (isAnswered) {
                  if (isCorrect) {
                    style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-2 ring-emerald-500/20';
                  } else if (isSelected && !isCorrect) {
                    style = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20';
                  } else {
                    style = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(currentQ.id, idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-sm sm:text-base flex items-center justify-between gap-4 ${style}`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 border ${
                        isAnswered && isCorrect
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : isAnswered && isSelected
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-white text-slate-600 border-slate-300'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {isAnswered && (
              <div className="p-4 sm:p-5 rounded-xl bg-blue-50 border border-blue-200 space-y-2 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-blue-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-700" />
                  Référence : {currentQ.officialReference}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Nav buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédente
              </button>

              <div className="text-xs text-slate-500 font-medium">
                {currentIndex + 1} sur {filteredQuestions.length}
              </div>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
              >
                Suivante
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
