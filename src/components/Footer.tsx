import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareHeart, ShieldCheck, BookOpen, ExternalLink, Sparkles, Scale, HeartHandshake, Compass } from 'lucide-react';
import { NavigationTab } from './Header';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/20 bg-slate-950 text-white selection:bg-rose-500 selection:text-white">
      {/* Top Luminous Tricolor Glass Ribbon */}
      <div className="h-1.5 w-full flex relative overflow-hidden">
        <div className="w-1/3 bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 shadow-sm" />
        <div className="w-1/3 bg-white relative">
          <div className="absolute inset-0 bg-linear-to-b from-white via-slate-100 to-white" />
        </div>
        <div className="w-1/3 bg-linear-to-r from-rose-500 via-red-600 to-rose-700 shadow-sm" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xs pointer-events-none" />
      </div>

      {/* Ambient Glass Reflections for the footer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute -left-20 top-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute -right-20 top-0 w-96 h-96 bg-rose-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        {/* Flag Glass Card with National Motto */}
        <div className="flag-glass-card rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl relative">
          {/* Subtle tricolor glass borders */}
          <div className="absolute top-0 inset-x-0 h-1 flex pointer-events-none">
            <div className="w-1/3 bg-blue-400/80" />
            <div className="w-1/3 bg-white/90" />
            <div className="w-1/3 bg-rose-400/80" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            {/* Left: French Flag Glass Emblem & Devise */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* French Flag Glass Emblem in 3D-effect pill */}
              <div className="relative group shrink-0">
                <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl relative overflow-hidden shadow-2xl border-2 border-white/40 backdrop-blur-xl flex">
                  {/* Blue Stripe */}
                  <div className="w-1/3 bg-linear-to-b from-blue-600 via-blue-700 to-blue-900 relative">
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/15 to-transparent" />
                  </div>
                  {/* White Stripe */}
                  <div className="w-1/3 bg-linear-to-b from-white via-slate-100 to-slate-200 relative">
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent" />
                  </div>
                  {/* Red Stripe */}
                  <div className="w-1/3 bg-linear-to-b from-rose-600 via-red-600 to-red-800 relative">
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/15 to-transparent" />
                  </div>
                  {/* Frosted Glass Overlay with RF */}
                  <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[0.5px] flex flex-col items-center justify-center pointer-events-none">
                    <span className="font-serif font-black text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-wider">
                      RF
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-white/90 font-bold mt-1 drop-shadow-md">
                      France
                    </span>
                  </div>
                  {/* Specular sheen */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Devise républicaine & Explications */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/20 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                  Devise de la République Française • Article 2 de la Constitution
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white drop-shadow-sm">
                  « Liberté • Égalité • Fraternité »
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Principes indissociables, laïques, démocratiques et sociaux au cœur du Livret du Citoyen et de l'entretien d'assimilation.
                </p>
              </div>
            </div>

            {/* Right: Quick Values Pills with Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 p-4 rounded-2xl transition-all text-center sm:text-left shadow-lg group">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/30 text-blue-300 flex items-center justify-center border border-blue-400/40">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">Liberté</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  D'opinion, de conscience, de religion et d'expression.
                </p>
              </div>

              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 p-4 rounded-2xl transition-all text-center sm:text-left shadow-lg group">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                  <div className="w-7 h-7 rounded-lg bg-white/30 text-slate-100 flex items-center justify-center border border-white/40">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">Égalité</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Devant la loi sans distinction d'origine ni de sexe.
                </p>
              </div>

              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 p-4 rounded-2xl transition-all text-center sm:text-left shadow-lg group">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-300 flex items-center justify-center border border-rose-400/40">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">Fraternité</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Solidarité nationale et cohésion sociale républicaine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Navigation & Information Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-xs">
          {/* Col 1: Platform Overview */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-6 rounded-xs overflow-hidden border border-white/40 shadow-xs shrink-0">
                <div className="w-1/3 bg-blue-600" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-rose-600" />
              </div>
              <span className="font-bold text-white text-sm">Examen Civique Français</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Plateforme indépendante et moderne de préparation intégrale au test officiel des 40 questions (seuil de réussite : 32/40) et à l'entretien de naturalisation en préfecture.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Conforme Livret du Citoyen 2026
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div className="space-y-2.5">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              Modules d'Entraînement
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('exam')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Examen Blanc Officiel (40Q)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('thematic')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Quiz par Thème (5 Domaines)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('flashcards')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Flashcards de Mémorisation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('progress')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Mon Bilan & Statistiques
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ressources & Guide */}
          <div className="space-y-2.5">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              Ressources & Guides
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('references')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  Fiches du Livret du Citoyen
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('interview')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Questions posées en Préfecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comments')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <MessageSquareHeart className="w-3.5 h-3.5 text-rose-400" />
                  Avis & Retours de Candidats
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Liens Institutionnels Utiles */}
          <div className="space-y-2.5">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              Portails Officiels de l'État
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://www.service-public.fr/particuliers/vosdroits/N111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Service-Public.fr : Naturalisation</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://administration-etrangers-en-france.interieur.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Portail ANEF (Intérieur.gouv)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.legifrance.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Légifrance : Textes et Lois</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Micro-interaction */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2026 Portail Examen Civique Français. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Pour les futurs citoyens de la République.</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('comments')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md transition-all shadow-xs cursor-pointer"
          >
            <MessageSquareHeart className="w-4 h-4 text-rose-400" />
            <span>Partager mon retour d'expérience</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
