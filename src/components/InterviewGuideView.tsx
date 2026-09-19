import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, AlertTriangle, UserCheck, Star, ShieldCheck, MessageSquare, Award } from 'lucide-react';

interface OralQuestionItem {
  id: string;
  category: string;
  question: string;
  idealAnswer: string;
  fatalMistakes: string;
  evaluatorExpectation: string;
}

const ORAL_QUESTIONS: OralQuestionItem[] = [
  {
    id: 'oq1',
    category: 'Motivation Personnelle (Indispensable)',
    question: 'Pourquoi souhaitez-vous devenir Français(e) ?',
    idealAnswer: '« Je vis et travaille en France depuis plusieurs années. C’est ici que se trouve ma vie, mes projets et mes attaches. Je partage profondément les valeurs de la République : la liberté, l’égalité et la laïcité. Devenir Français est pour moi un engagement sincère et l’aboutissement naturel de mon intégration, afin de participer pleinement à la vie démocratique du pays. »',
    fatalMistakes: '❌ « Pour voyager facilement dans le monde sans visa », « Pour avoir les allocations ou la sécurité de l’emploi », « Parce que c’est plus pratique pour les démarches administratives ».',
    evaluatorExpectation: 'L’agent vérifie une adhésion sincère aux valeurs républicaines et une volonté d’appartenance active à la communauté nationale.'
  },
  {
    id: 'oq2',
    category: 'Engagement Républicain',
    question: 'Que ferez-vous dès que vous aurez obtenu la nationalité française ?',
    idealAnswer: '« Je me rendrai en mairie pour m’inscrire sur les listes électorales afin d’exercer mon droit et devoir civique de voter lors des prochaines élections. »',
    fatalMistakes: '❌ « Rien de particulier », « Je ferai la fête », « Je demanderai un passeport pour partir en voyage ».',
    evaluatorExpectation: 'Démontrer que vous comprenez que la citoyenneté implique des droits civiques et une participation électorale.'
  },
  {
    id: 'oq3',
    category: 'Valeurs & Laïcité',
    question: 'Que représente la laïcité pour vous dans la vie de tous les jours ?',
    idealAnswer: '« La laïcité permet à chacun d’avoir ses convictions, de croire ou de ne pas croire, dans le respect de tous. Elle garantit la neutralité des services publics et des écoles de la République pour préserver l’égalité de tous les usagers sans distinction. »',
    fatalMistakes: '❌ Confondre laïcité et interdiction des religions, ou prétendre que les règles d’une religion peuvent supplanter les lois de la République.',
    evaluatorExpectation: 'Maîtrise de la séparation entre sphère privée (liberté de culte totale) et espace public/institutions (stricte neutralité).'
  },
  {
    id: 'oq4',
    category: 'Vie Sociale & Intégration',
    question: 'Faites-vous partie d’une association ? Comment participez-vous à la vie de votre commune ?',
    idealAnswer: '« Oui, je suis bénévole dans une association (sportive, culturelle, d’aide aux devoirs ou de quartier) / Je participe aux fêtes de mon quartier et aux activités de l’école de mes enfants. »',
    fatalMistakes: '❌ Déclarer que vous ne parlez à personne, que vous ne fréquentez que des personnes de votre communauté d’origine, ou que la vie de votre ville ne vous intéresse pas.',
    evaluatorExpectation: 'Prouver une intégration sociale réelle et un ancrage concret dans la société française.'
  },
  {
    id: 'oq5',
    category: 'Égalité Femmes-Hommes',
    question: 'Que pensez-vous de l’égalité entre les femmes et les hommes ? Qui décide dans votre foyer ?',
    idealAnswer: '« L’égalité est un principe fondamental et non négociable de la République française. Dans notre foyer, toutes les décisions importantes sont prises d’un commun accord et à égalité parfaite entre conjoints. »',
    fatalMistakes: '❌ Sous-entendre que l’homme a l’autorité finale sur la femme ou sur ses sorties et vêtements.',
    evaluatorExpectation: 'L’égalité stricte des genres est vérifiée avec une grande fermeté par les services de l’État.'
  },
  {
    id: 'oq6',
    category: 'Actualité & Connaissance Locale',
    question: 'Qui est le maire de votre commune ? Quel fleuve ou rivière traverse votre région ?',
    idealAnswer: 'Renseignez-vous AVANT l’entretien sur le nom exact de votre Maire, le nom de votre Président de Conseil Régional, le numéro de votre département et le fleuve ou cours d’eau local.',
    fatalMistakes: '❌ Ignorer totalement qui dirige la commune où vous habitez depuis des années.',
    evaluatorExpectation: 'Montrer un intérêt élémentaire pour votre environnement géographique et administratif immédiat.'
  }
];

export const InterviewGuideView: React.FC = () => {
  const [openItem, setOpenItem] = useState<string>('oq1');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
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
            <span>Guide de l'Entretien Préfectoral</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-xs">
            L'Entretien d'Assimilation en Préfecture
          </h2>
          <p className="mt-2 text-slate-200 text-sm sm:text-base leading-relaxed">
            L’entretien individuel avec l’agent préfectoral dure généralement entre 20 et 45 minutes. Il vérifie votre niveau de langue française (B1/B2), votre culture républicaine et la sincérité de votre intégration.
          </p>
        </div>

        {/* Tricolor glass bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none">
          <div className="w-1/3 bg-blue-500/80 shadow-xs" />
          <div className="w-1/3 bg-white/90 shadow-xs" />
          <div className="w-1/3 bg-rose-500/80 shadow-xs" />
        </div>
      </div>

      {/* Checklist Avant le Rendez-vous */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          Les 5 Règles d'Or pour le Jour J
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1. Tenue soignée et ponctualité
            </span>
            <p className="text-slate-600">
              Arrivez 15 minutes en avance. Portez une tenue propre, professionnelle et soignée (comme pour un entretien d’embauche).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2. Écoute et calme
            </span>
            <p className="text-slate-600">
              Écoutez la question jusqu’au bout sans interrompre l’agent. Si vous n’avez pas compris, demandez poliment : « Pourriez-vous reformuler s’il vous plaît ? ».
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3. Réviser l'actualité politique
            </span>
            <p className="text-slate-600">
              Connaissez par cœur le nom du Président de la République, du Premier ministre, du ministre de l’Intérieur et du Maire de votre ville.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 4. Pas d'arguments financiers
            </span>
            <p className="text-slate-600">
              Ne parlez jamais d’avantages fiscaux, sociaux ou de facilités de visa. La nationalité est un choix républicain et civique.
            </p>
          </div>
        </div>
      </div>

      {/* Questions Fréquentes & Réponses Types */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Questions Types Posées par l’Agent Préfectoral
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Cliquez sur une question pour afficher la réponse modèle et les erreurs éliminatoires.
          </p>
        </div>

        <div className="space-y-3">
          {ORAL_QUESTIONS.map(item => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenItem(isOpen ? '' : item.id)}
                  className="w-full text-left p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.question}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-slate-400 shrink-0">
                    {isOpen ? '▲ Fermer' : '▼ Découvrir'}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-200 space-y-4 text-xs sm:text-sm animate-in fade-in duration-200">
                    <div>
                      <div className="font-bold text-emerald-800 flex items-center gap-1.5 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Réponse idéale recommandée :
                      </div>
                      <p className="text-slate-800 bg-emerald-50/50 p-3.5 rounded-lg border border-emerald-200 leading-relaxed font-serif italic">
                        {item.idealAnswer}
                      </p>
                    </div>

                    <div>
                      <div className="font-bold text-rose-800 flex items-center gap-1.5 mb-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600" /> Piège à éviter absolument :
                      </div>
                      <p className="text-rose-950 bg-rose-50 p-3 rounded-lg border border-rose-200 leading-relaxed">
                        {item.fatalMistakes}
                      </p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg text-slate-600 text-xs border border-slate-200">
                      <strong>Ce que teste l’agent :</strong> {item.evaluatorExpectation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
