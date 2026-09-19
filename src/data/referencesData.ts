import { OfficialSection, KeyDate } from '../types';

export const OFFICIAL_SECTIONS: OfficialSection[] = [
  {
    id: 'principes-symboles',
    title: '1. Principes, Valeurs et Symboles',
    subtitle: 'La devise, les emblèmes et la laïcité républicaine',
    iconName: 'Flag',
    summary: 'La France est une République indivisible, laïque, démocratique et sociale (Article 1er de la Constitution). Elle assure l’égalité devant la loi de tous les citoyens sans distinction d’origine, de race ou de religion.',
    keyPoints: [
      'Devise : « Liberté, Égalité, Fraternité » (inscrite au fronton des mairies et édifices publics).',
      'Emblème national : Le drapeau tricolore Bleu, Blanc, Rouge (le blanc pour la monarchie, le bleu et le rouge couleurs de Paris).',
      'Hymne national : « La Marseillaise », composée par Rouget de Lisle en 1792.',
      'Allégorie : Marianne, coiffée du bonnet phrygien (symbole de la liberté et de l’affranchissement des esclaves).',
      'Fête nationale : Le 14 juillet (commémore à la fois la prise de la Bastille en 1789 et la Fête de la Fédération du 14 juillet 1790).',
      'Langue de la République : Le français (art. 2 de la Constitution).',
      'Principe de Laïcité : Neutralité absolue de l’État et des agents du service public. Liberté de conscience totale pour chaque individu (droit de croire, de changer de religion ou de ne pas croire).'
    ],
    officialQuote: '« La France est une République indivisible, laïque, démocratique et sociale. Elle assure l\'égalité devant la loi de tous les citoyens sans distinction d\'origine, de race ou de religion. Elle respecte toutes les croyances. » — Constitution de 1958, Art. 1er',
    commonQuestions: [
      {
        q: 'Que signifie la laïcité ?',
        a: 'La laïcité garantit la liberté de conscience (liberté de croire ou de ne pas croire) et la séparation des religions et de l’État. L’État est neutre et ne finance aucun culte.',
        tip: 'Insistez sur la liberté garantie à tous et la neutralité de l’espace public et de l’école.'
      },
      {
        q: 'Où trouve-t-on le buste de Marianne ?',
        a: 'Dans toutes les mairies de France, ainsi que sur les timbres-poste et les pièces de monnaie.',
        tip: 'Elle incarne la République et les valeurs de liberté.'
      },
      {
        q: 'Quel événement commémore le 14 juillet ?',
        a: 'La prise de la Bastille (1789) et la fête de la Fédération (1790), symbole de l’unité de la Nation.',
        tip: 'Mentionnez les deux pour montrer une parfaite maîtrise.'
      }
    ]
  },
  {
    id: 'histoire-figures',
    title: '2. L’Histoire de France et Grandes Figures',
    subtitle: 'Les grandes étapes de la construction de la Nation française',
    iconName: 'BookOpen',
    summary: 'De la Révolution française à nos jours, l’histoire de France a forgé les valeurs démocratiques, les libertés publiques et le modèle républicain.',
    keyPoints: [
      '1789 : Début de la Révolution française, fin de la monarchie absolue et des privilèges.',
      '26 août 1789 : Déclaration des Droits de l’Homme et du Citoyen (« Les hommes naissent et demeurent libres et égaux en droits »).',
      '1848 : IIe République, abolition définitive de l’esclavage par Victor Schœlcher et suffrage universel masculin.',
      '1905 : Loi de séparation des Églises et de l’État (fondement de la laïcité moderne).',
      '1914-1918 : Première Guerre mondiale (Armistice signé le 11 novembre 1918).',
      '1939-1945 : Seconde Guerre mondiale. Appel du 18 juin 1940 du Général de Gaulle, Résistance menée notamment par Jean Moulin. Fin de la guerre le 8 mai 1945.',
      '1944 : Droit de vote accordé aux femmes (premier vote en 1945).',
      '1958 : Naissance de la Ve République portée par Charles de Gaulle.',
      '1981 : Abolition de la peine de mort en France (sous la présidence de François Mitterrand, portée par Robert Badinter).'
    ],
    officialQuote: '« Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l\'utilité commune. » — Déclaration de 1789, Art. 1er',
    commonQuestions: [
      {
        q: 'Quand les femmes ont-elles obtenu le droit de vote en France ?',
        a: 'En 1944, par une ordonnance du Comité français de libération nationale présidé par Charles de Gaulle.',
        tip: 'Elles ont voté pour la première fois aux élections municipales de 1945.'
      },
      {
        q: 'Qui était Jean Moulin ?',
        a: 'Le héros de la Résistance qui a unifié les mouvements clandestins français sous l’autorité du Général de Gaulle (Conseil National de la Résistance). Mort sous la torture en 1943.',
        tip: 'Ses cendres reposent au Panthéon.'
      },
      {
        q: 'Qui a défendu l’abolition de la peine de mort en 1981 ?',
        a: 'Robert Badinter, garde des Sceaux sous le président François Mitterrand.',
        tip: 'Question très appréciée lors de l’entretien.'
      }
    ]
  },
  {
    id: 'institutions-politique',
    title: '3. Les Institutions et la Démocratie',
    subtitle: 'La Ve République, la séparation des pouvoirs et les collectivités',
    iconName: 'Building2',
    summary: 'La France est une démocratie représentative régie par la Constitution du 4 octobre 1958 (Ve République). Le pouvoir est partagé entre l’exécutif, le législatif et le judiciaire.',
    keyPoints: [
      'Pouvoir exécutif : Le Président de la République (chef de l’État, élu pour 5 ans au suffrage universel direct, réside au Palais de l’Élysée) et le Premier ministre (chef du gouvernement, nommé par le Président, réside à l’Hôtel de Matignon).',
      'Pouvoir législatif : Le Parlement, composé de 2 chambres : l’Assemblée nationale (Palais Bourbon, 577 députés élus pour 5 ans) et le Sénat (Palais du Luxembourg, 348 sénateurs élus au suffrage indirect pour 6 ans).',
      'Le vote de la loi : Le Parlement vote les lois et contrôle l’action du gouvernement. En cas de désaccord persistant, l’Assemblée nationale a le dernier mot.',
      'Conseil constitutionnel : Veille à la conformité des lois avec la Constitution.',
      'Les 3 niveaux de collectivités territoriales : La Commune (gérée par le Maire et le conseil municipal), le Département (conseil départemental), la Région (conseil régional).',
      'Le Préfet : Représentant direct de l’État et du gouvernement dans le département et la région.'
    ],
    officialQuote: '« Le principe de la République est : gouvernement du peuple, par le peuple et pour le peuple. » — Constitution de 1958, Art. 2',
    commonQuestions: [
      {
        q: 'Pour combien de temps le Président de la République est-il élu ?',
        a: 'Il est élu pour 5 ans (le quinquennat) au suffrage universel direct.',
        tip: 'Le mandat était de 7 ans (septennat) jusqu’au référendum de l’an 2000.'
      },
      {
        q: 'Quelles sont les deux chambres du Parlement français ?',
        a: 'L’Assemblée nationale et le Sénat.',
        tip: 'Retenez également où elles siègent : Palais Bourbon pour l’Assemblée, Palais du Luxembourg pour le Sénat.'
      },
      {
        q: 'Qui promulgue les lois en France ?',
        a: 'Le Président de la République, après leur vote par le Parlement.',
        tip: 'Il dispose d’un délai de 15 jours pour les promulguer.'
      }
    ]
  },
  {
    id: 'droits-devoirs',
    title: '4. Droits et Devoirs du Citoyen',
    subtitle: 'Ce que confère la nationalité et ce que la République exige',
    iconName: 'Scale',
    summary: 'Devenir citoyen français confère des droits fondamentaux mais implique également des devoirs indispensables à la vie collective et à la cohésion nationale.',
    keyPoints: [
      'Droits fondamentaux : Droit de vote et d’éligibilité, liberté d’opinion et d’expression, liberté d’association, égalité absolue entre les femmes et les hommes, droit à la protection sociale et à l’éducation.',
      'Égalité femmes-hommes : Principe constitutionnel intangible. Mêmes droits civils, professionnels, familiaux et salariaux. Refus absolu des mariages forcés ou de la polygamie.',
      'Devoir d’obéir aux lois : Nul n’est censé ignorer la loi. Tout citoyen doit respecter l’ordre public et les règles communes.',
      'Devoir de contribution fiscale : Payer ses impôts selon ses facultés pour financer les services publics, les hôpitaux, les routes et l’école.',
      'Devoir d’éducation : L’instruction est obligatoire pour tous les enfants de 3 à 16 ans (dans une école publique laïque, privée ou en famille sous contrôle strict).',
      'Participation à la défense : Journée Défense et Citoyenneté (JDC) et participation éventuelle comme juré d’assises si l’on est tiré au sort.'
    ],
    officialQuote: '« La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l\'homme. » — Préambule de la Constitution de 1946',
    commonQuestions: [
      {
        q: 'Quels sont les principaux devoirs d’un citoyen français ?',
        a: 'Respecter les lois de la République, payer ses impôts et cotisations, scolariser ses enfants de 3 à 16 ans, et participer à la défense nationale si nécessaire (ou être juré d’assises).',
        tip: 'Citez au moins le respect des lois et l’impôt.'
      },
      {
        q: 'Quelle est la règle en France concernant l’égalité entre femmes et hommes ?',
        a: 'L’égalité est totale et garantie par la Constitution. La loi interdit toute discrimination et condamne fermement les violences.',
        tip: 'Précisez que la polygamie et le mariage forcé sont strictement interdits par la loi.'
      },
      {
        q: 'Jusqu’à quel âge l’école est-elle obligatoire en France ?',
        a: 'L’instruction est obligatoire de 3 ans à 16 ans révolus.',
        tip: 'L’école publique est gratuite et laïque.'
      }
    ]
  },
  {
    id: 'geographie-culture',
    title: '5. Géographie, Culture & Union Européenne',
    subtitle: 'Le territoire national, l’Europe et le rayonnement culturel',
    iconName: 'Globe',
    summary: 'La France s’étend sur l’Hexagone et dans les territoires d’Outre-mer. Membre fondateur de l’Union Européenne, elle possède un patrimoine culturel et naturel exceptionnel.',
    keyPoints: [
      'L’Hexagone et l’Outre-mer : Métropole bordée par l’Océan Atlantique, la Manche, la Mer du Nord et la Mer Méditerranée. Territoires d’Outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, etc.).',
      'Les 5 grands fleuves français : La Seine, la Loire (le plus long, 1006 km), la Garonne, le Rhône et le Rhin.',
      'Les massifs montagneux : Les Alpes (avec le Mont-Blanc, point culminant à 4808 m), les Pyrénées, le Massif central, le Jura et les Vosges.',
      'Pays frontaliers de la France : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne, Andorre (et Brésil / Suriname pour la Guyane).',
      'L’Union Européenne : La France est un membre fondateur (Traité de Rome 1957). Le siège du Parlement européen est à Strasbourg. La monnaie unique est l’Euro (€).',
      'Grands auteurs et artistes : Victor Hugo (Les Misérables), Molière, Voltaire, Émile Zola, Marcel Proust, Jean de La Fontaine, Claude Monet, Auguste Rodin.',
      'Grandes figures scientifiques : Marie Curie (deux prix Nobel de physique et chimie), Louis Pasteur (inventeur du vaccin contre la rage).'
    ],
    officialQuote: '« Unis dans la diversité » — Devise de l\'Union Européenne',
    commonQuestions: [
      {
        q: 'Quel est le plus long fleuve de France ?',
        a: 'La Loire (environ 1 006 kilomètres).',
        tip: 'Attention au piège : le Rhin est plus long en Europe, mais la Loire est le plus long sur le territoire français.'
      },
      {
        q: 'Quel est le point culminant de France et d’Europe occidentale ?',
        a: 'Le Mont Blanc (4 808 mètres), situé dans les Alpes.',
        tip: 'Souvent posé lors des entretiens en préfecture.'
      },
      {
        q: 'Quelle ville française accueille le siège officiel du Parlement Européen ?',
        a: 'Strasbourg (en Alsace).',
        tip: 'Bruxelles accueille la Commission européenne et le Conseil, mais le siège du Parlement est à Strasbourg.'
      }
    ]
  },
  {
    id: 'entretien-oral',
    title: '6. Spécial Entretien Préfectoral (Questions Clés)',
    subtitle: 'Les questions personnelles et pièges posées par l’agent préfectoral',
    iconName: 'UserCheck',
    summary: 'L’entretien individuel en préfecture évalue votre assimilation à la communauté française, votre connaissance de la société et votre adhésion sincère aux valeurs républicaines.',
    keyPoints: [
      'Question n°1 : « Pourquoi souhaitez-vous devenir Français(e) ? » — Préparez une réponse sincère : votre attachement aux valeurs républicaines (liberté, égalité, laïcité), votre vie quotidienne, votre travail, votre avenir et vos projets en France.',
      'Question sur l’égalité : « Que pensez-vous du port des signes religieux ? De l’égalité hommes-femmes ? » — Réponse claire : respect de la laïcité dans le service public et à l’école, égalité absolue en droit et en fait.',
      'Vie citoyenne : « Faites-vous partie d’une association ? Comment participez-vous à la vie locale ? »',
      'Actualité : Ayez lu les grands titres des journaux de la semaine (nom du Président actuel, Premier ministre, ministres importants).',
      'Attitude : Soyez ponctuel, courtois, habillé de manière soignée, exprimez-vous en français avec calme et assurance.'
    ],
    officialQuote: '« Nul ne peut être naturalisé s\'il ne justifie de son assimilation à la communauté française, notamment par une connaissance suffisante de la langue, de l\'histoire, de la culture et de la société françaises. » — Code civil, Art. 21-24',
    commonQuestions: [
      {
        q: 'Pourquoi voulez-vous la nationalité française ?',
        a: '« Je vis et travaille en France, je partage profondément ses valeurs républicaines de liberté, d’égalité et de laïcité. Je veux participer pleinement à la vie démocratique de ce pays qui est désormais le mien. »',
        tip: 'Ne répondez JAMAIS « pour voyager plus facilement avec le passeport » ou « pour des avantages sociaux ». L’agent cherche une adhésion morale et civique.'
      },
      {
        q: 'Que ferez-vous dès que vous aurez la nationalité française ?',
        a: '« Je m’inscrirai immédiatement sur les listes électorales de ma mairie pour exercer mon droit et devoir de citoyen en votant aux prochaines élections. »',
        tip: 'C’est la réponse attendue qui montre que vous comprenez la citoyenneté active.'
      },
      {
        q: 'Parlez-vous français chez vous ? Quels médias suivez-vous ?',
        a: 'Montrez que vous êtes immergé dans la société française, que vous lisez la presse ou regardez les informations françaises.',
        tip: 'Mentionnez par exemple des journaux (Le Monde, Le Figaro, etc.) ou la radio/télévision publique.'
      }
    ]
  }
];

export const KEY_DATES: KeyDate[] = [
  {
    year: '1789',
    event: 'Révolution Française & Prise de la Bastille',
    description: 'Fin de la monarchie absolue et vote de la Déclaration des Droits de l’Homme et du Citoyen.',
    category: 'revolution'
  },
  {
    year: '1792',
    event: 'Proclamation de la Ire République',
    description: 'La royauté est abolie en France suite à la Révolution.',
    category: 'republique'
  },
  {
    year: '1848',
    event: 'Abolition de l’esclavage & Suffrage universel masculin',
    description: 'Victor Schœlcher fait voter l’abolition définitive de l’esclavage dans les colonies françaises.',
    category: 'droits'
  },
  {
    year: '1881-1882',
    event: 'Lois Jules Ferry sur l’école',
    description: 'L’école primaire devient gratuite, laïque et obligatoire.',
    category: 'droits'
  },
  {
    year: '1905',
    event: 'Loi de séparation des Églises et de l’État',
    description: 'Pilier fondamental de la laïcité : la République garantit la liberté de culte mais n’en reconnaît ni ne subventionne aucun.',
    category: 'droits'
  },
  {
    year: '1914 - 1918',
    event: 'Première Guerre mondiale',
    description: 'Conflit mondial dévastateur. Armistice signé le 11 novembre 1918 dans la clairière de Rethondes.',
    category: 'guerre'
  },
  {
    year: '1939 - 1945',
    event: 'Seconde Guerre mondiale',
    description: 'Appel du 18 juin 1940 du Général de Gaulle, Résistance de Jean Moulin, libération et victoire alliée le 8 mai 1945.',
    category: 'guerre'
  },
  {
    year: '1944',
    event: 'Droit de vote accordé aux femmes',
    description: 'Ordonnance signée à Alger par le Général de Gaulle. Premier vote effectif en 1945.',
    category: 'droits'
  },
  {
    year: '1957',
    event: 'Traité de Rome',
    description: 'Création de la Communauté économique européenne (CEE), ancêtre de l’Union Européenne, avec la France parmi les 6 membres fondateurs.',
    category: 'moderne'
  },
  {
    year: '1958',
    event: 'Création de la Ve République',
    description: 'Adoption par référendum de la Constitution actuelle, voulue par le Général de Gaulle pour stabiliser l’exécutif.',
    category: 'republique'
  },
  {
    year: '1975',
    event: 'Loi Veil sur l’IVG',
    description: 'Dépénalisation de l’interruption volontaire de grossesse, portée courageusement par Simone Veil.',
    category: 'droits'
  },
  {
    year: '1981',
    event: 'Abolition de la peine de mort',
    description: 'Portée par le ministre de la Justice Robert Badinter sous la présidence de François Mitterrand.',
    category: 'droits'
  },
  {
    year: '1992',
    event: 'Traité de Maastricht',
    description: 'Création officielle de l’Union Européenne et décision de créer la monnaie unique, l’Euro (mis en circulation en 2002).',
    category: 'moderne'
  },
  {
    year: '2024',
    event: 'Inscription de l’IVG dans la Constitution',
    description: 'La France devient le premier pays au monde à inscrire explicitement la liberté garantie de recourir à l’IVG dans sa loi fondamentale.',
    category: 'droits'
  }
];
