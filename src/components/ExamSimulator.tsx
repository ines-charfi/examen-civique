import React, { useState, useEffect } from 'react';
import { Question, ExamResult } from '../types';
import { CIVIC_QUESTIONS } from '../data/questionsData';
import { Clock, CheckCircle2, XCircle, AlertCircle, RotateCcw, Award, ChevronRight, ChevronLeft, Bookmark, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExamSimulatorProps {
  onSaveResult: (result: ExamResult) => void;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({ onSaveResult }) => {
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [timedMode, setTimedMode] = useState<boolean>(true);
  const [showInstantExplanation, setShowInstantExplanation] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(40); // 40 questions by default
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState<number>(40 * 60); // 40 minutes for 40 questions
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [filterResult, setFilterResult] = useState<'all' | 'errors' | 'correct'>('all');

  // Launch a new exam with 40 randomized questions
  const startExam = () => {
    const count = questionCount;
    // Shuffle and pick 40 questions (or chosen count)
    const shuffled = [...CIVIC_QUESTIONS].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    setQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setTimeLeft(count * 60);
    setIsFinished(false);
    setExamStarted(true);
  };

  // Timer effect
  useEffect(() => {
    if (!examStarted || isFinished || !timedMode) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, isFinished, timedMode]);

  const handleSelectOption = (optionIndex: number) => {
    if (isFinished) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const toggleFlag = (index: number) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const finishExam = () => {
    setIsFinished(true);

    // Calculate score
    let score = 0;
    const answerRecords = questions.map((q, idx) => {
      const selected = userAnswers[idx];
      const isCorrect = selected === q.correctIndex;
      if (isCorrect) score += 1;
      return {
        questionId: q.id,
        selectedOption: selected !== undefined ? selected : -1,
        isCorrect
      };
    });

    const percentage = Math.round((score / questions.length) * 100);
    // User requirement: 32 correct questions out of 40 (80%)
    const passThreshold = questions.length === 40 ? 32 : Math.ceil(questions.length * 0.8);
    const passed = score >= passThreshold;
    const timeSpent = (questionCount * 60) - timeLeft;

    const result: ExamResult = {
      date: new Date().toISOString(),
      score,
      total: questions.length,
      percentage,
      passed,
      timeSpentSeconds: timeSpent,
      answers: answerRecords
    };

    onSaveResult(result);

    if (passed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Pre-start screen
  if (!examStarted) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl overflow-hidden">
          {/* French Flag Glass Hero Banner */}
          <div className="flag-glass-card px-6 sm:px-10 py-10 text-white relative overflow-hidden shadow-2xl">
            {/* French Flag Ambient Glass Glows */}
            <div className="absolute -left-10 -top-10 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-72 h-72 bg-white/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-rose-600/30 rounded-full blur-3xl pointer-events-none" />

            {/* Tricolor glass top accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 flex pointer-events-none">
              <div className="w-1/3 bg-blue-500/80 shadow-xs" />
              <div className="w-1/3 bg-white/90 shadow-xs" />
              <div className="w-1/3 bg-rose-500/80 shadow-xs" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/25 backdrop-blur-md mb-4 shadow-inner">
                <span className="flex h-3.5 w-5 rounded-xs overflow-hidden border border-white/40 shadow-xs">
                  <span className="w-1/3 bg-blue-600" />
                  <span className="w-1/3 bg-white" />
                  <span className="w-1/3 bg-rose-600" />
                </span>
                <span>Simulation Officielle de l'Examen Civique</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-xs">
                Examen Blanc : {questionCount} Questions Réelles
              </h2>
              <p className="mt-2 text-slate-200 max-w-2xl text-sm sm:text-base leading-relaxed">
                Testez-vous dans les conditions réelles avec une série complète de <strong>{questionCount} questions</strong> couvrant les 5 thèmes officiels du <strong>Livret du Citoyen</strong> et les questions pièges posées en préfecture.
              </p>
            </div>

            {/* Tricolor glass bottom accent bar */}
            <div className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none">
              <div className="w-1/3 bg-blue-500/80 shadow-xs" />
              <div className="w-1/3 bg-white/90 shadow-xs" />
              <div className="w-1/3 bg-rose-500/80 shadow-xs" />
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Question count selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Format de l'Examen Blanc :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setQuestionCount(40)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    questionCount === 40
                      ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-600/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">Format Complet 40 Questions</span>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                        Recommandé
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      40 questions • 40 minutes • Seuil de validation : 32/40 (80%)
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    questionCount === 40 ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                  }`}>
                    {questionCount === 40 && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setQuestionCount(20)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    questionCount === 20
                      ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-600/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">Format Court 20 Questions</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      20 questions • 20 minutes • Seuil de validation : 16/20 (80%)
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    questionCount === 20 ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                  }`}>
                    {questionCount === 20 && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-blue-700 font-bold text-lg mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> {questionCount} Questions
                </div>
                <p className="text-xs text-slate-600">
                  Tirées aléatoirement parmi la base officielle de 80+ questions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-blue-700 font-bold text-lg mb-1 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> {questionCount} Minutes
                </div>
                <p className="text-xs text-slate-600">
                  Temps officiel alloué (1 minute en moyenne par question).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-emerald-700 font-bold text-lg mb-1 flex items-center gap-2">
                  <Award className="w-5 h-5" /> Seuil : {questionCount === 40 ? 32 : 16} / {questionCount}
                </div>
                <p className="text-xs text-slate-600">
                  80% de réponses justes requis (32/40) pour valider l'examen civique.
                </p>
              </div>
            </div>

            {/* Options */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Options de l’examen blanc :</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={timedMode}
                    onChange={(e) => setTimedMode(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-700">
                    Activer le chronomètre officiel ({questionCount} minutes)
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={showInstantExplanation}
                    onChange={(e) => setShowInstantExplanation(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-700">
                    Mode d'apprentissage : afficher l'explication immédiatement après avoir cliqué
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                id="btn-start-exam"
                onClick={startExam}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-linear-to-r from-blue-700 via-slate-900 to-rose-700 hover:from-blue-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-base border border-white/20 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                Commencer l'Examen ({questionCount} Questions)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active Question or Results view
  const currentQ = questions[currentIndex];
  const isAnswered = userAnswers[currentIndex] !== undefined;
  const selectedAnswer = userAnswers[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;

  // Results Screen
  if (isFinished) {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) score += 1;
    });
    const percentage = Math.round((score / questions.length) * 100);
    const passThreshold = questions.length === 40 ? 32 : Math.ceil(questions.length * 0.8);
    const passed = score >= passThreshold;

    const filteredIndices = questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q, idx }) => {
        const isRight = userAnswers[idx] === q.correctIndex;
        if (filterResult === 'errors') return !isRight;
        if (filterResult === 'correct') return isRight;
        return true;
      });

    return (
      <div className="max-w-4xl mx-auto py-8 px-4 space-y-6">
        {/* Score Banner */}
        <div className={`p-8 rounded-2xl border ${
          passed ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
        } shadow-xs`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 bg-white/80 border">
                {passed ? 'Résultat : Favorable' : 'Résultat : À perfectionner'}
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                {passed ? 'Félicitations ! Vous avez réussi !' : 'Score insuffisant pour valider'}
              </h2>
              <p className="mt-2 text-sm leading-relaxed max-w-xl text-slate-700">
                {passed
                  ? `Votre score atteint ou dépasse le seuil requis de ${passThreshold}/${questions.length} (80% - 32 bonnes réponses sur 40) pour valider l'examen civique. Vous maîtrisez les principes républicains et les repères essentiels du Livret du Citoyen.`
                  : `Le seuil de réussite est fixé à ${passThreshold} bonnes réponses sur ${questions.length} (80% - 32 questions correctes requises sur 40). Examinez les explications détaillées ci-dessous et révisez les fiches officielles avant de retenter votre chance.`}
              </p>
            </div>

            <div className="text-center sm:text-right bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs min-w-[180px]">
              <div className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Votre Note</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-1">
                {score} <span className="text-2xl text-slate-400 font-normal">/ {questions.length}</span>
              </div>
              <div className={`mt-2 text-xs font-bold px-2.5 py-1 rounded-full inline-block ${
                passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}>
                {percentage}% de réussite
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              Temps écoulé : <strong>{formatTime((questionCount * 60) - timeLeft)}</strong> • Questions répondues : <strong>{answeredCount}/{questions.length}</strong>
            </div>

            <div className="flex gap-2">
              <button
                id="btn-restart-exam"
                onClick={startExam}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-700 via-slate-900 to-rose-700 hover:from-blue-600 hover:to-rose-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all border border-white/20 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Refaire un Examen Blanc
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Correction */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Correction Détaillée & Références Officielles
            </h3>

            {/* Filter buttons */}
            <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setFilterResult('all')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filterResult === 'all' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Toutes ({questions.length})
              </button>
              <button
                onClick={() => setFilterResult('errors')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filterResult === 'errors' ? 'bg-white text-rose-700 shadow-2xs font-semibold' : 'text-slate-600 hover:text-rose-700'
                }`}
              >
                Erreurs ({questions.length - score})
              </button>
              <button
                onClick={() => setFilterResult('correct')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filterResult === 'correct' ? 'bg-white text-emerald-700 shadow-2xs font-semibold' : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                Réussies ({score})
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredIndices.map(({ q, idx }) => {
              const selected = userAnswers[idx];
              const isCorrect = selected === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-xl border ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/30' : 'border-rose-200 bg-rose-50/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-200 text-slate-800">
                        Q{idx + 1}
                      </span>
                      <span className="text-xs text-slate-500 font-medium capitalize">
                        {q.category.replace('-', ' ')}
                      </span>
                    </div>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full">
                        <XCircle className="w-3.5 h-3.5" /> Erreur
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-slate-900 mb-3">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctIndex;
                      const isOptionSelected = optIdx === selected;

                      let itemStyle = 'border-slate-200 bg-white text-slate-700';
                      if (isOptionCorrect) {
                        itemStyle = 'border-emerald-500 bg-emerald-100 text-emerald-900 font-semibold';
                      } else if (isOptionSelected && !isCorrect) {
                        itemStyle = 'border-rose-400 bg-rose-100 text-rose-900 line-through';
                      }

                      return (
                        <div key={optIdx} className={`p-2.5 rounded-lg border ${itemStyle}`}>
                          {opt} {isOptionCorrect && '✓ (Bonne réponse)'}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5 text-blue-800">
                      <BookOpen className="w-3.5 h-3.5" /> Référence officielle : {q.officialReference}
                    </div>
                    <p className="leading-relaxed text-slate-600">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active In-Exam Interface
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-4">
      {/* Top Bar: Timer, Progress & Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-900">
            Question {currentIndex + 1} <span className="text-slate-400 font-normal">/ {questions.length}</span>
          </span>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
            • {answeredCount} répondue(s)
          </span>
        </div>

        {/* Timer */}
        {timedMode && (
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold font-mono ${
            timeLeft < 180 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-100 text-slate-700'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)} restant</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFlag(currentIndex)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
              flaggedQuestions.has(currentIndex)
                ? 'bg-amber-100 text-amber-800 border-amber-300'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Marquer pour réviser plus tard"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Marquer</span>
          </button>

          <button
            onClick={finishExam}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Terminer l'examen
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 uppercase tracking-wide">
            Thème : {currentQ.category.replace('-', ' ')}
          </span>
          {currentQ.isCommonInterviewQuestion && (
            <span className="text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              ★ Question fréquente à l’entretien
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
          {currentQ.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = currentQ.correctIndex === idx;

            let btnStyle = 'border-slate-200 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-300 text-slate-800';

            if (isSelected) {
              btnStyle = 'border-blue-600 bg-blue-50 text-blue-900 font-semibold ring-2 ring-blue-500/20';
            }

            if (showInstantExplanation && isAnswered) {
              if (isCorrect) {
                btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-2 ring-emerald-500/20';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all text-sm sm:text-base flex items-center gap-4 ${btnStyle}`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-600 border-slate-300'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="grow">{option}</span>
                {showInstantExplanation && isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {showInstantExplanation && isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Instant explanation card if active */}
        {showInstantExplanation && isAnswered && (
          <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-800 space-y-1">
            <div className="font-bold text-blue-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Référence : {currentQ.officialReference}
            </div>
            <p className="text-slate-700 leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Navigation bottom */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Précédente
          </button>

          <span className="text-xs text-slate-500">
            {answeredCount} sur {questions.length} répondues
          </span>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-xs"
            >
              Suivante
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={finishExam}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-xs"
            >
              Valider & Voir mes résultats
            </button>
          )}
        </div>
      </div>

      {/* Questions quick jumper strip */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
        <div className="text-xs font-semibold text-slate-600 mb-2">Grille des questions :</div>
        <div className="flex flex-wrap gap-1.5">
          {questions.map((_, idx) => {
            const answered = userAnswers[idx] !== undefined;
            const flagged = flaggedQuestions.has(idx);
            const isCurrent = currentIndex === idx;

            let badgeStyle = 'bg-slate-100 text-slate-600 hover:bg-slate-200';
            if (isCurrent) {
              badgeStyle = 'bg-blue-600 text-white font-bold ring-2 ring-blue-500/30';
            } else if (flagged) {
              badgeStyle = 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold';
            } else if (answered) {
              badgeStyle = 'bg-slate-800 text-white font-medium';
            }

            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition-all ${badgeStyle}`}
                title={`Question ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
