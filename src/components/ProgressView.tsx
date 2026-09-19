import React from 'react';
import { ExamResult, Question } from '../types';
import { CIVIC_QUESTIONS } from '../data/questionsData';
import { Award, Clock, CheckCircle2, XCircle, Trash2, RotateCcw, AlertTriangle, BookOpen } from 'lucide-react';

interface ProgressViewProps {
  examHistory: ExamResult[];
  onClearHistory: () => void;
  onStartExam: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  examHistory,
  onClearHistory,
  onStartExam
}) => {
  // Statistics calculations
  const totalExams = examHistory.length;
  const passedExams = examHistory.filter(e => e.passed).length;
  const passRate = totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0;
  
  const avgPercentage = totalExams > 0
    ? Math.round(examHistory.reduce((acc, curr) => acc + curr.percentage, 0) / totalExams)
    : 0;

  // Gather missed question IDs
  const missedQuestionIds = new Set<string>();
  examHistory.forEach(exam => {
    exam.answers.forEach(ans => {
      if (!ans.isCorrect) {
        missedQuestionIds.add(ans.questionId);
      }
    });
  });

  const missedQuestions: Question[] = CIVIC_QUESTIONS.filter(q => missedQuestionIds.has(q.id));

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8">
      {/* French Flag Glass Hero Banner */}
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-md mb-2 shadow-inner">
              <span className="flex h-3 w-4.5 rounded-xs overflow-hidden border border-white/40 shadow-xs">
                <span className="w-1/3 bg-blue-600" />
                <span className="w-1/3 bg-white" />
                <span className="w-1/3 bg-rose-600" />
              </span>
              <span>Suivi & Statistiques Personnelles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-xs flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-300" />
              Mon Bilan de Préparation & Historique
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-1">
              Suivez votre progression aux examens blancs et retravaillez vos points faibles. Seuil officiel : 32/40 (80%).
            </p>
          </div>

          {totalExams > 0 && (
            <button
              onClick={onClearHistory}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs text-rose-200 hover:text-white bg-rose-500/20 hover:bg-rose-500/30 rounded-xl border border-rose-400/30 backdrop-blur-md transition-all w-fit cursor-pointer shadow-xs"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Effacer l'historique
            </button>
          )}
        </div>

        {/* Tricolor glass bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Examens Blancs</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">{totalExams}</div>
          <p className="text-xs text-slate-500 mt-1">Sessions terminées</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Score Moyen</div>
          <div className="text-3xl font-extrabold text-blue-700 mt-2">
            {avgPercentage}%
          </div>
          <p className="text-xs text-slate-500 mt-1">Seuil requis : 80% (32/40)</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Taux de Réussite</div>
          <div className="text-3xl font-extrabold text-emerald-700 mt-2">{passRate}%</div>
          <p className="text-xs text-slate-500 mt-1">{passedExams} examen(s) validé(s)</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Notions à Revoir</div>
          <div className="text-3xl font-extrabold text-amber-600 mt-2">{missedQuestions.length}</div>
          <p className="text-xs text-slate-500 mt-1">Questions ratées</p>
        </div>
      </div>

      {/* Missed questions section */}
      {missedQuestions.length > 0 && (
        <div className="bg-white rounded-2xl border border-amber-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Notions Manquées lors des Examens Blancs ({missedQuestions.length})
            </h3>
            <span className="text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full font-semibold border border-amber-200">
              Priorités de révision
            </span>
          </div>

          <div className="space-y-3">
            {missedQuestions.slice(0, 8).map(q => (
              <div key={q.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm space-y-2">
                <div className="font-semibold text-slate-900">
                  {q.question}
                </div>
                <div className="text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 font-medium">
                  ✓ <strong>Bonne réponse :</strong> {q.options[q.correctIndex]}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {q.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exams history list */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          Historique des Sessions
        </h3>

        {totalExams === 0 ? (
          <div className="text-center py-10 space-y-3">
            <p className="text-sm text-slate-500">
              Vous n'avez pas encore passé d'examen blanc. Testez vos connaissances dès maintenant !
            </p>
            <button
              onClick={onStartExam}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Lancer un premier examen blanc
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {examHistory.map((exam, idx) => {
              const formattedDate = new Date(exam.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shrink-0 ${
                      exam.passed ? 'bg-emerald-600' : 'bg-rose-600'
                    }`}>
                      {exam.score}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        {exam.passed ? 'Examen Validé (Favorable)' : 'Examen Non Validé'}
                      </div>
                      <div className="text-xs text-slate-500">
                        {formattedDate} • Durée : {Math.round(exam.timeSpentSeconds / 60)} min
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      exam.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {exam.percentage}% ({exam.score}/{exam.total || 40})
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
