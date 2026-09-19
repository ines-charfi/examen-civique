import React, { useState } from 'react';
import { OFFICIAL_SECTIONS, KEY_DATES } from '../data/referencesData';
import { BookOpen, Calendar, Check, ExternalLink, FileText, Flag, Landmark, Shield, Sparkles, UserCheck } from 'lucide-react';

export const OfficialReferencesView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'livret' | 'dates' | 'charte'>('livret');
  const [activeSectionId, setActiveSectionId] = useState<string>(OFFICIAL_SECTIONS[0].id);
  const [dateFilter, setDateFilter] = useState<string>('all');

  const currentSection = OFFICIAL_SECTIONS.find(s => s.id === activeSectionId) || OFFICIAL_SECTIONS[0];

  const filteredDates = KEY_DATES.filter(d => {
    if (dateFilter === 'all') return true;
    return d.category === dateFilter;
  });

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* French Flag Glass Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl flag-glass-card text-white p-6 sm:p-10 shadow-2xl">
        {/* French Flag Ambient Glass Glows */}
        <div className="absolute -left-12 -top-12 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-72 h-72 bg-white/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-rose-600/25 rounded-full blur-3xl pointer-events-none" />

        {/* Tricolor glass top accent bar */}
        <div className="absolute top-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/25 backdrop-blur-md mb-4 shadow-inner">
            <span className="flex h-3.5 w-5 rounded-xs overflow-hidden border border-white/40 shadow-xs">
              <span className="w-1/3 bg-blue-600" />
              <span className="w-1/3 bg-white" />
              <span className="w-1/3 bg-rose-600" />
            </span>
            <span>Références Officielles de la République</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-xs">
            Le Livret du Citoyen & Textes Fondateurs
          </h2>
          <p className="mt-2 text-slate-200 text-sm sm:text-base leading-relaxed">
            Consultez les synthèses officielles du Ministère de l’Intérieur et de la Direction générale des étrangers en France (DGEF). Ce sont les sources exactes sur lesquelles portent l’examen civique et l’entretien d’assimilation.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <button
              id="subtab-livret"
              onClick={() => setActiveSubTab('livret')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeSubTab === 'livret'
                  ? 'bg-linear-to-r from-blue-700 to-rose-700 text-white shadow-md border-white/40'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/10 backdrop-blur-sm'
              }`}
            >
              Fiches du Livret du Citoyen
            </button>
            <button
              id="subtab-dates"
              onClick={() => setActiveSubTab('dates')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeSubTab === 'dates'
                  ? 'bg-linear-to-r from-blue-700 to-rose-700 text-white shadow-md border-white/40'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/10 backdrop-blur-sm'
              }`}
            >
              Chronologie des Dates Clés
            </button>
            <button
              id="subtab-charte"
              onClick={() => setActiveSubTab('charte')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeSubTab === 'charte'
                  ? 'bg-linear-to-r from-blue-700 to-rose-700 text-white shadow-md border-white/40'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/10 backdrop-blur-sm'
              }`}
            >
              Charte des Droits et Devoirs
            </button>
          </div>
        </div>

        {/* Tricolor glass bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>
      </div>

      {/* SUBTAB: LIVRET DU CITOYEN FICHES */}
      {activeSubTab === 'livret' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Side Navigation of sections */}
          <div className="space-y-1.5 lg:col-span-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Les 6 Piliers Officiels
            </div>
            {OFFICIAL_SECTIONS.map(section => {
              const isSelected = activeSectionId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all text-xs sm:text-sm ${
                    isSelected
                      ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-2xs'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="leading-snug">{section.title}</div>
                </button>
              );
            })}
          </div>

          {/* Section details */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="border-b border-slate-200 pb-5 mb-6">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                  Fiche de révision certifiée
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {currentSection.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {currentSection.subtitle}
                </p>
              </div>

              {/* Official quote callout */}
              {currentSection.officialQuote && (
                <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl text-slate-800 text-xs sm:text-sm italic mb-6 font-serif">
                  {currentSection.officialQuote}
                </div>
              )}

              {/* Summary */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Synthèse Essentielle
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {currentSection.summary}
                </p>
              </div>

              {/* Key points to know */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Points indispensables à mémoriser
                </h4>
                <div className="space-y-2.5">
                  {currentSection.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="leading-relaxed">{point}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical oral questions & answers */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Questions récurrentes à l’entretien & Réponses types
                </h4>
                <div className="space-y-3">
                  {currentSection.commonQuestions.map((cq, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-blue-100 bg-blue-50/40 text-xs sm:text-sm space-y-2">
                      <div className="font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-blue-700 font-bold">Q :</span> {cq.q}
                      </div>
                      <div className="text-slate-700 leading-relaxed pl-5 border-l-2 border-blue-300">
                        <strong className="text-slate-900">Réponse attendue :</strong> {cq.a}
                      </div>
                      {cq.tip && (
                        <div className="text-[11px] font-medium text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200/60">
                          💡 <strong>Conseil de l’examinateur :</strong> {cq.tip}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB: CHRONOLOGIE DES DATES CLÉS */}
      {activeSubTab === 'dates' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Les Dates Historiques Incontournables
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Les repères chronologiques les plus fréquemment demandés en préfecture.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5 text-xs">
              <button
                onClick={() => setDateFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  dateFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Toutes ({KEY_DATES.length})
              </button>
              <button
                onClick={() => setDateFilter('revolution')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  dateFilter === 'revolution' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Révolution
              </button>
              <button
                onClick={() => setDateFilter('droits')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  dateFilter === 'droits' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Conquêtes & Droits
              </button>
              <button
                onClick={() => setDateFilter('guerre')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  dateFilter === 'guerre' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Guerres mondiales
              </button>
              <button
                onClick={() => setDateFilter('moderne')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  dateFilter === 'moderne' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Europe & Ve Rép.
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDates.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-400 hover:shadow-xs transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-extrabold text-blue-700 bg-blue-100 px-3 py-1 rounded-lg">
                    {item.year}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-900 transition-colors">
                  {item.event}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB: CHARTE DES DROITS ET DEVOIRS */}
      {activeSubTab === 'charte' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
              Document officiel remis à tout nouveau citoyen
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Charte des Droits et Devoirs du Citoyen Français
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Approuvée par décret en Conseil d’État, cette charte rappelle les principes et les devoirs essentiels inhérents à l’acquisition de la nationalité française.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
              <h4 className="font-bold text-blue-900 text-base flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-700" />
                Les Droits Fondamentaux
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Libertés publiques :</strong> Liberté d'aller et venir, liberté de pensée, d’opinion, d’expression et de culte.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Citoyenneté politique :</strong> Droit de vote et d’éligibilité à toutes les élections démocratiques.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Égalité absolue :</strong> Égalité de tous devant la loi sans distinction d'origine, de race ou de religion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Égalité femmes-hommes :</strong> Mêmes droits dans le mariage, au travail, et dans la vie publique.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Solidarité nationale :</strong> Droit à la protection sociale et à l’instruction gratuite.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/40 space-y-3">
              <h4 className="font-bold text-rose-950 text-base flex items-center gap-2">
                <Landmark className="w-5 h-5 text-rose-700" />
                Les Devoirs Indispensables
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Respect des lois :</strong> Nul n’est au-dessus des lois républicaines. Les croyances religieuses ne sauraient primer sur la loi commune.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Contribution fiscale (impôt) :</strong> Devoir de payer ses impôts et cotisations pour financer les services publics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Instruction obligatoire :</strong> Scolariser ses enfants de 3 à 16 ans dans le respect des valeurs républicaines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Défense de la Nation :</strong> Participer à la défense de la patrie si l’intégrité du territoire l’exige.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Respect de la laïcité :</strong> Neutralité dans les services publics et respect de la liberté d’autrui.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
