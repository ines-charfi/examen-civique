import { Question } from '../types';

export const CIVIC_QUESTIONS: Question[] = [
  // THEME 1: PRINCIPES, VALEURS & SYMBOLES
  {
    id: 'q1',
    category: 'principes-symboles',
    question: 'Quelle est la devise officielle de la République française ?',
    options: [
      'Travail, Famille, Patrie',
      'Liberté, Égalité, Fraternité',
      'Unité, Indivisibilité, Justice',
      'Honneur et Patrie'
    ],
    correctIndex: 1,
    explanation: '« Liberté, Égalité, Fraternité » est la devise de la République française, héritée de la Révolution et inscrite à l’article 2 de la Constitution de 1958. Elle figure sur les façades des mairies et des écoles.',
    officialReference: 'Livret du Citoyen - Chapitre 1 (Constitution de 1958, art. 2)',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q2',
    category: 'principes-symboles',
    question: 'Que symbolisent les trois couleurs du drapeau français ?',
    options: [
      'Le blanc représente la royauté, le bleu et le rouge représentent la ville de Paris',
      'Le bleu représente le ciel, le blanc la paix, le rouge le sang des héros',
      'Le bleu l’Atlantique, le blanc les Alpes, le rouge la Méditerranée',
      'La Liberté, l’Égalité et la Fraternité'
    ],
    correctIndex: 0,
    explanation: 'Né sous la Révolution française en 1789, le drapeau associe les couleurs traditionnelles de la ville de Paris (bleu et rouge) à la couleur historique de la monarchie française (le blanc).',
    officialReference: 'Livret du Citoyen - Symboles de la République',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q3',
    category: 'principes-symboles',
    question: 'Quel est l’hymne national de la France et qui l’a composé ?',
    options: [
      'Le Chant du départ, composé par Méhul',
      'La Marseillaise, composée par Rouget de Lisle en 1792',
      'L’Ode à la joie, composée par Beethoven',
      'Le Temps des cerises, composé par Jean-Baptiste Clément'
    ],
    correctIndex: 1,
    explanation: 'La Marseillaise a été écrite et composée à Strasbourg en 1792 par Claude Joseph Rouget de Lisle, capitaine du génie, sous le titre de « Chant de guerre pour l’armée du Rhin ». Elle est devenue hymne national en 1795 puis confirmée en 1879.',
    officialReference: 'Livret du Citoyen - Emblèmes et symboles',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q4',
    category: 'principes-symboles',
    question: 'Que représente Marianne et quel est son couvre-chef distinctif ?',
    options: [
      'Une reine de France portant une couronne de lauriers',
      'L’allégorie de la République et de la Liberté, coiffée du bonnet phrygien',
      'La sainte patronne de Paris portant un voile blanc',
      'La justice portant un bandeau sur les yeux'
    ],
    correctIndex: 1,
    explanation: 'Marianne incarne la République française et les valeurs de Liberté et de Raison. Elle porte le bonnet phrygien, symbole porté par les esclaves affranchis dans l’Antiquité et repris par les sans-culottes pendant la Révolution.',
    officialReference: 'Livret du Citoyen - Figures et allégories',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q5',
    category: 'principes-symboles',
    question: 'En France, le principe de laïcité implique que :',
    options: [
      'Toutes les religions sont interdites dans l’espace public',
      'L’État est neutre envers toutes les religions et garantit la liberté de conscience',
      'L’État choisit la religion officielle du pays',
      'Seule la religion majoritaire peut construire des édifices'
    ],
    correctIndex: 1,
    explanation: 'La laïcité garantit la liberté de conscience : chacun est libre de croire ou de ne pas croire, et de changer de religion. L’État et ses services publics sont strictement neutres et ne subventionnent aucun culte (Loi de 1905).',
    officialReference: 'Livret du Citoyen - Laïcité & Loi de 1905',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q6',
    category: 'principes-symboles',
    question: 'Quelle est la date de la fête nationale française et que commémore-t-elle ?',
    options: [
      'Le 8 mai, la capitulation de l’Allemagne en 1945',
      'Le 14 juillet, la prise de la Bastille (1789) et la fête de la Fédération (1790)',
      'Le 11 novembre, l’Armistice de 1918',
      'Le 21 septembre, la proclamation de la République en 1792'
    ],
    correctIndex: 1,
    explanation: 'Le 14 juillet a été institué fête nationale en 1880. Il commémore la prise de la Bastille le 14 juillet 1789 (symbole de la fin de l’absolutisme) et la Fête de la Fédération du 14 juillet 1790 (symbole de l’union nationale).',
    officialReference: 'Livret du Citoyen - Les grandes commémorations',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q7',
    category: 'principes-symboles',
    question: 'Quel oiseau est traditionnellement associé comme symbole populaire de la France ?',
    options: [
      'L’aigle royal',
      'Le coq gaulois',
      'Le pigeon voyageur',
      'Le cygne blanc'
    ],
    correctIndex: 1,
    explanation: 'Le coq gaulois est un symbole populaire né d’un jeu de mots en latin où « gallus » désignait à la fois le coq et l’habitant de la Gaule. On le retrouve souvent sur les monuments aux morts et les maillots sportifs nationaux.',
    officialReference: 'Livret du Citoyen - Symboles officieux et populaires',
    difficulty: 'facile'
  },
  {
    id: 'q8',
    category: 'principes-symboles',
    question: 'Dans une école publique en France, le port de signes religieux ostensibles par les élèves est :',
    options: [
      'Totalement libre sans aucune limite',
      'Interdit par la loi du 15 mars 2004 pour préserver la neutralité et la sérénité scolaire',
      'Autorisé seulement le vendredi et le dimanche',
      'Obligatoire lors des cours d’histoire'
    ],
    correctIndex: 1,
    explanation: 'La loi du 15 mars 2004 interdit le port de signes ou tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse dans les écoles, collèges et lycées publics afin de garantir la neutralité de l’espace scolaire.',
    officialReference: 'Loi du 15 mars 2004 sur la laïcité à l’école',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q9',
    category: 'principes-symboles',
    question: 'Quelle est la langue officielle de la République française selon la Constitution ?',
    options: [
      'Le français uniquement',
      'Le français et l’anglais',
      'Le français et les langues régionales à égalité',
      'Aucune langue n’est définie dans la Constitution'
    ],
    correctIndex: 0,
    explanation: 'L’article 2 de la Constitution de 1958 stipule formellement : « La langue de la République est le français. » Les langues régionales appartiennent quant à elles au patrimoine de la France (art. 75-1).',
    officialReference: 'Constitution du 4 octobre 1958, Art. 2',
    difficulty: 'facile'
  },

  // THEME 2: HISTOIRE DE FRANCE & GRANDES FIGURES
  {
    id: 'q10',
    category: 'histoire-figures',
    question: 'En quelle année a débuté la Révolution française ?',
    options: [
      '1492',
      '1789',
      '1804',
      '1914'
    ],
    correctIndex: 1,
    explanation: 'L’année 1789 marque le début de la Révolution française avec la convocation des États généraux, le serment du Jeu de Paume, la prise de la Bastille le 14 juillet et l’adoption de la Déclaration des Droits de l’Homme et du Citoyen en août.',
    officialReference: 'Livret du Citoyen - Repères historiques',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q11',
    category: 'histoire-figures',
    question: 'Quel est l’article premier de la Déclaration des Droits de l’Homme et du Citoyen du 26 août 1789 ?',
    options: [
      '« Le roi est sacré et inviolable »',
      '« Les hommes naissent et demeurent libres et égaux en droits »',
      '« Toute souveraineté réside essentiellement dans l’Assemblée »',
      '« La propriété est un vol envers la communauté »'
    ],
    correctIndex: 1,
    explanation: 'L’article 1er proclame : « Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l’utilité commune. » Ce texte est un fondement de notre démocratie.',
    officialReference: 'Déclaration des Droits de l’Homme et du Citoyen de 1789',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q12',
    category: 'histoire-figures',
    question: 'En quelle année la loi de séparation des Églises et de l’État a-t-elle été votée ?',
    options: [
      '1789',
      '1848',
      '1905',
      '1958'
    ],
    correctIndex: 2,
    explanation: 'La loi du 9 décembre 1905, portée notamment par Aristide Briand, établit la séparation des Églises et de l’État : la République assure la liberté de conscience mais ne reconnaît, ne salarie ni ne subventionne aucun culte.',
    officialReference: 'Livret du Citoyen - Les grandes lois républicaines',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q13',
    category: 'histoire-figures',
    question: 'Quand les femmes françaises ont-elles obtenu le droit de vote ?',
    options: [
      'En 1789 avec la Révolution',
      'En 1918 après la Première Guerre mondiale',
      'En 1944 (ordonnance du CFLN signée par de Gaulle)',
      'En 1968'
    ],
    correctIndex: 2,
    explanation: 'Le droit de vote a été accordé aux femmes le 21 avril 1944 par une ordonnance signée à Alger par le Général de Gaulle. Elles ont voté pour la toute première fois lors des élections municipales du 29 avril 1945.',
    officialReference: 'Livret du Citoyen - Droits civiques et égalité',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q14',
    category: 'histoire-figures',
    question: 'Qui a lancé le célèbre « Appel du 18 juin 1940 » invitant les Français à résister ?',
    options: [
      'Jean Moulin',
      'Le Maréchal Pétain',
      'Le Général Charles de Gaulle',
      'Georges Clemenceau'
    ],
    correctIndex: 2,
    explanation: 'Depuis la radio BBC à Londres, le Général Charles de Gaulle a appelé tous les officiers et soldats français à refuser l’armistice et à continuer le combat, créant ainsi la France Libre.',
    officialReference: 'Livret du Citoyen - Seconde Guerre mondiale',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q15',
    category: 'histoire-figures',
    question: 'Quel rôle héroïque a joué Jean Moulin pendant la Seconde Guerre mondiale ?',
    options: [
      'Il a dirigé les armées françaises lors du débarquement en Normandie',
      'Il a unifié les mouvements de Résistance intérieure au sein du CNR sous l’autorité de de Gaulle',
      'Il était le Premier ministre de la France Libre à Londres',
      'Il a négocié l’armistice avec les forces alliées'
    ],
    correctIndex: 1,
    explanation: 'Haut fonctionnaire et préfet, Jean Moulin a été parachuté en France pour unifier les réseaux de Résistance. Il a présidé la première réunion du Conseil National de la Résistance (CNR) le 27 mai 1943. Arrêté et torturé par la Gestapo, il est mort sans parler.',
    officialReference: 'Livret du Citoyen - Les figures héroïques de la République',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q16',
    category: 'histoire-figures',
    question: 'En quelle année la peine de mort a-t-elle été abolie en France et par qui a-t-elle été portée ?',
    options: [
      'En 1968 par Georges Pompidou',
      'En 1981 par Robert Badinter sous la présidence de François Mitterrand',
      'En 1944 par Charles de Gaulle',
      'En 1995 par Jacques Chirac'
    ],
    correctIndex: 1,
    explanation: 'La loi d’abolition de la peine de mort a été votée en septembre 1981, défendue avec éloquence à la tribune par le garde des Sceaux Robert Badinter, sous le premier septennat de François Mitterrand.',
    officialReference: 'Livret du Citoyen - Grandes conquêtes des droits humains',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q17',
    category: 'histoire-figures',
    question: 'Qui était Simone Veil ?',
    options: [
      'Une célèbre cantatrice de l’Opéra de Paris',
      'Une rescapée de la Shoah, ministre de la Santé (loi sur l’IVG en 1975) et 1re présidente du Parlement européen élue',
      'La première femme présidente de la République française',
      'Une navigatrice ayant traversé l’Atlantique en solitaire'
    ],
    correctIndex: 1,
    explanation: 'Simone Veil (1927-2017) est une figure majeure de la République : magistrate rescapée des camps d’Auschwitz, elle a fait voter la loi dépénalisant l’IVG en 1975 et est devenue la première présidente du Parlement européen élu au suffrage universel. Elle repose au Panthéon.',
    officialReference: 'Livret du Citoyen - Figures emblématiques de la France',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q18',
    category: 'histoire-figures',
    question: 'Qui est l’auteur du chef-d’œuvre littéraire « Les Misérables » et grand défenseur de la République ?',
    options: [
      'Émile Zola',
      'Victor Hugo',
      'Albert Camus',
      'Jean de La Fontaine'
    ],
    correctIndex: 1,
    explanation: 'Victor Hugo (1802-1885) est l’un des plus grands écrivains et poètes français. Député et sénateur engagé, il a défendu l’école publique, combattu la misère et réclamé l’abolition de la peine de mort.',
    officialReference: 'Livret du Citoyen - Le patrimoine littéraire',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q19',
    category: 'histoire-figures',
    question: 'Qui a fait voter l’abolition définitive de l’esclavage dans les colonies françaises en 1848 ?',
    options: [
      'Victor Schœlcher',
      'Napoléon Bonaparte',
      'Robespierre',
      'Lafayette'
    ],
    correctIndex: 0,
    explanation: 'Victor Schœlcher, sous-secrétaire d’État aux Colonies sous la IIe République, a rédigé et fait adopter le décret du 27 avril 1848 qui a aboli définitivement l’esclavage sur tous les territoires français.',
    officialReference: 'Livret du Citoyen - Droits de l’Homme et abolition de l’esclavage',
    difficulty: 'moyen'
  },
  {
    id: 'q20',
    category: 'histoire-figures',
    question: 'Qu’est-ce que le Panthéon à Paris ?',
    options: [
      'Le palais où siège le Conseil Constitutionnel',
      'Un monument dédié à la mémoire des grands personnages qui ont marqué l’Histoire de France (« Aux grands hommes la patrie reconnaissante »)',
      'L’ancienne résidence des rois de France avant Versailles',
      'Le musée consacré exclusivement à Napoléon'
    ],
    correctIndex: 1,
    explanation: 'Situé sur la montagne Sainte-Geneviève à Paris, le Panthéon abrite les sépultures des personnalités ayant honoré la Nation (Voltaire, Rousseau, Victor Hugo, Émile Zola, Jean Moulin, Marie Curie, Simone Veil, Missak Manouchian, etc.).',
    officialReference: 'Livret du Citoyen - Lieux de mémoire de la République',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },

  // THEME 3: INSTITUTIONS & SYSTÈME POLITIQUE
  {
    id: 'q21',
    category: 'institutions-politique',
    question: 'Quelle est la République actuelle en France et quand est-elle née ?',
    options: [
      'La IVe République, née en 1946',
      'La Ve République, née le 4 octobre 1958 avec l’adoption de sa Constitution',
      'La IIIe République, née en 1870',
      'La VIe République, née en 2002'
    ],
    correctIndex: 1,
    explanation: 'La France vit sous le régime de la Ve République, fondé par la Constitution promulguée le 4 octobre 1958 sous l’impulsion du Général Charles de Gaulle.',
    officialReference: 'Constitution du 4 octobre 1958',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q22',
    category: 'institutions-politique',
    question: 'Pour combien d’années le Président de la République française est-il élu ?',
    options: [
      '4 ans',
      '5 ans (quinquennat)',
      '6 ans',
      '7 ans (septennat)'
    ],
    correctIndex: 1,
    explanation: 'Depuis la réforme constitutionnelle de l’an 2000 entrée en vigueur en 2002, le Président de la République est élu pour 5 ans au suffrage universel direct. Il ne peut exercer plus de deux mandats consécutifs.',
    officialReference: 'Livret du Citoyen - Le pouvoir exécutif',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q23',
    category: 'institutions-politique',
    question: 'Où réside et travaille le Président de la République française ?',
    options: [
      'À l’Hôtel de Matignon',
      'Au Palais de l’Élysée',
      'Au Palais Bourbon',
      'Au Palais du Luxembourg'
    ],
    correctIndex: 1,
    explanation: 'Le Palais de l’Élysée, situé rue du Faubourg Saint-Honoré à Paris, est la résidence officielle et le lieu de travail du chef de l’État français depuis 1848.',
    officialReference: 'Livret du Citoyen - Les hauts lieux du pouvoir',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q24',
    category: 'institutions-politique',
    question: 'Qui nomme le Premier ministre en France ?',
    options: [
      'Les citoyens lors d’un vote direct',
      'Le Président de la République',
      'Le Président du Sénat',
      'Le Conseil Constitutionnel'
    ],
    correctIndex: 1,
    explanation: 'Selon l’article 8 de la Constitution : « Le Président de la République nomme le Premier ministre. » Il met fin à ses fonctions sur la présentation par celui-ci de la démission du gouvernement.',
    officialReference: 'Constitution de 1958, Art. 8',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q25',
    category: 'institutions-politique',
    question: 'Quelles sont les deux assemblées composant le Parlement français ?',
    options: [
      'La Chambre des pairs et la Chambre des représentants',
      'L’Assemblée nationale et le Sénat',
      'Le Conseil économique et le Conseil d’État',
      'La Cour des comptes et le Conseil constitutionnel'
    ],
    correctIndex: 1,
    explanation: 'Le Parlement français est bicaméral : il comprend l’Assemblée nationale (577 députés siégeant au Palais Bourbon) et le Sénat (348 sénateurs siégeant au Palais du Luxembourg). Ensemble, ils débattent et votent les lois.',
    officialReference: 'Livret du Citoyen - Le pouvoir législatif',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q26',
    category: 'institutions-politique',
    question: 'En cas de désaccord persistant sur un texte de loi entre l’Assemblée nationale et le Sénat, qui a le dernier mot ?',
    options: [
      'Le Sénat',
      'L’Assemblée nationale',
      'Le Conseil d’État',
      'Le Président de la République seul'
    ],
    correctIndex: 1,
    explanation: 'Si la commission mixte paritaire ne parvient pas à un accord, le gouvernement peut demander à l’Assemblée nationale de statuer définitivement. C’est l’Assemblée nationale qui a le dernier mot car ses députés sont élus au suffrage universel direct.',
    officialReference: 'Constitution de 1958, Art. 45',
    difficulty: 'moyen'
  },
  {
    id: 'q27',
    category: 'institutions-politique',
    question: 'Qui assure l’intérim de la présidence de la République en cas de vacance du pouvoir ou de décès ?',
    options: [
      'Le Premier ministre',
      'Le Président du Sénat',
      'Le Président de l’Assemblée nationale',
      'Le ministre de l’Intérieur'
    ],
    correctIndex: 1,
    explanation: 'L’article 7 de la Constitution prévoit qu’en cas de vacance de la Présidence de la République (ou d’empêchement constaté par le Conseil constitutionnel), les fonctions sont provisoirement exercées par le Président du Sénat.',
    officialReference: 'Constitution de 1958, Art. 7',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q28',
    category: 'institutions-politique',
    question: 'Quel est le rôle principal du Conseil constitutionnel ?',
    options: [
      'Rédiger les traités internationaux',
      'Vérifier que les lois votées sont bien conformes à la Constitution et veiller à la régularité des élections nationales',
      'Fixer le taux des impôts',
      'Juger les crimes commis par les ministres'
    ],
    correctIndex: 1,
    explanation: 'Composé de 9 membres nommés pour 9 ans (plus les anciens présidents de la République membres de droit), le Conseil constitutionnel contrôle la conformité des lois à la Constitution et veille à la régularité de l’élection présidentielle et des référendums.',
    officialReference: 'Livret du Citoyen - Le Conseil constitutionnel',
    difficulty: 'moyen'
  },
  {
    id: 'q29',
    category: 'institutions-politique',
    question: 'Quels sont les trois grands échelons de collectivités territoriales en France métropolitaine ?',
    options: [
      'Le Canton, l’Arrondissement, la Préfecture',
      'La Commune, le Département, la Région',
      'Le Village, la Métropole, la Province',
      'La Paroisse, le Bailliage, le Comté'
    ],
    correctIndex: 1,
    explanation: 'Les trois niveaux principaux de collectivités territoriales administrées par des conseils élus sont la Commune (gérée par le maire et les conseillers municipaux), le Département et la Région.',
    officialReference: 'Livret du Citoyen - Les collectivités territoriales',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q30',
    category: 'institutions-politique',
    question: 'Qui représente l’État et l’ensemble des ministères au niveau du département ?',
    options: [
      'Le Député',
      'Le Préfet de département',
      'Le Maire de la commune chef-lieu',
      'Le Juge d’instance'
    ],
    correctIndex: 1,
    explanation: 'Le Préfet est le haut fonctionnaire nommé par le Président de la République en Conseil des ministres. Il est le représentant direct de l’État et du gouvernement dans le département, responsable de la sécurité publique et de l’application des lois.',
    officialReference: 'Livret du Citoyen - L’administration déconcentrée de l’État',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },

  // THEME 4: DROITS & DEVOIRS DU CITOYEN
  {
    id: 'q31',
    category: 'droits-devoirs',
    question: 'Parmi les propositions suivantes, laquelle constitue un devoir fondamental du citoyen en France ?',
    options: [
      'Posséder un véhicule personnel',
      'Respecter les lois de la République et contribuer aux charges publiques (impôts)',
      'Adhérer obligatoirement à un parti politique',
      'Participer obligatoirement aux manifestations syndicales'
    ],
    correctIndex: 1,
    explanation: 'Chaque citoyen a le devoir absolu de respecter les lois républicaines et de contribuer financièrement, selon ses ressources, aux dépenses publiques (impôts) qui financent les services publics indispensables (hôpitaux, école, sécurité).',
    officialReference: 'Charte des droits et devoirs du citoyen français',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q32',
    category: 'droits-devoirs',
    question: 'Jusqu’à quel âge l’instruction est-elle obligatoire pour les enfants en France ?',
    options: [
      'De 6 ans à 14 ans',
      'De 3 ans à 16 ans révolus',
      'De 5 ans à 18 ans',
      'L’école n’est pas obligatoire, seulement recommandée'
    ],
    correctIndex: 1,
    explanation: 'Depuis la rentrée 2019, l’instruction est obligatoire dès l’âge de 3 ans (école maternelle) et jusqu’à l’âge de 16 ans révolus. Elle peut être dispensée dans un établissement public gratuit et laïque, un établissement privé ou sous strict contrôle en famille.',
    officialReference: 'Code de l’éducation & Livret du Citoyen',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q33',
    category: 'droits-devoirs',
    question: 'En France, la polygamie est-elle autorisée ?',
    options: [
      'Oui, si elle est conforme aux traditions du pays d’origine',
      'Non, elle est strictement interdite par le Code civil et pénalement sanctionnée',
      'Oui, avec l’accord écrit du maire',
      'Uniquement dans les départements d’outre-mer'
    ],
    correctIndex: 1,
    explanation: 'Le mariage en France est strictement monogamique. L’article 147 du Code civil stipule qu’on ne peut contracter un second mariage avant la dissolution du premier. La polygamie est une cause d’annulation du mariage et un motif formel de rejet de la naturalisation.',
    officialReference: 'Code civil, Art. 147',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q34',
    category: 'droits-devoirs',
    question: 'Quelle est la position de la loi française sur les mariages forcés ?',
    options: [
      'Ils sont tolérés si les parents ont donné leur consentement',
      'Ils sont rigoureusement interdits : le consentement libre et éclairé de chacun des deux époux est indispensable',
      'Ils sont autorisés à partir de 25 ans',
      'Ils sont réglés par les coutumes familiales'
    ],
    correctIndex: 1,
    explanation: 'La loi française exige le consentement personnel, libre et plein de chacun des futurs époux. Le mariage forcé est un délit grave puni par la loi. La République protège l’émancipation et la liberté de choix de chaque individu.',
    officialReference: 'Code civil, Art. 146',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q35',
    category: 'droits-devoirs',
    question: 'Si un citoyen est tiré au sort pour être juré d’une cour d’assises, peut-il refuser ?',
    options: [
      'Oui, le rôle de juré est purement bénévole et facultatif',
      'Non, c’est un devoir citoyen civique obligatoire, sauf motif légitime ou dispense accordée par la commission',
      'Oui, en payant une taxe forfaitaire',
      'Seuls les avocats peuvent être jurés'
    ],
    correctIndex: 1,
    explanation: 'Être juré d’assises est un devoir civique. Tout citoyen tiré au sort sur les listes électorales est tenu de siéger pour juger les crimes, sauf excuse médicale grave ou motif impérieux validé par la justice. Un refus injustifié est sanctionné d’une amende.',
    officialReference: 'Code de procédure pénale & Droits et devoirs civiques',
    difficulty: 'moyen'
  },
  {
    id: 'q36',
    category: 'droits-devoirs',
    question: 'À partir de quel âge un citoyen français a-t-il le droit de vote ?',
    options: [
      '16 ans',
      '18 ans',
      '21 ans',
      '25 ans'
    ],
    correctIndex: 1,
    explanation: 'La majorité civile et politique est fixée à 18 ans en France (abaissée de 21 à 18 ans en 1974 par le président Valéry Giscard d’Estaing). À 18 ans, tout citoyen français jouit du droit de vote sous réserve d’être inscrit sur les listes électorales.',
    officialReference: 'Livret du Citoyen - La citoyenneté politique',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q37',
    category: 'droits-devoirs',
    question: 'Que garantit le principe constitutionnel d’égalité entre les femmes et les hommes ?',
    options: [
      'Les hommes ont la priorité pour les postes de direction',
      'Les femmes et les hommes ont les mêmes droits dans tous les domaines (professionnel, politique, civil, familial et salarial)',
      'L’égalité ne s’applique que pour le droit de vote',
      'Chaque famille décide de son propre modèle d’autorité'
    ],
    correctIndex: 1,
    explanation: 'Le préambule de la Constitution de 1946 et l’article 1er de la Constitution de 1958 garantissent à la femme des droits égaux à ceux de l’homme dans tous les domaines. Les violences conjugales ou discriminations sont sévèrement réprimées.',
    officialReference: 'Constitution de 1958, Art. 1er & Préambule de 1946',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },

  // THEME 5: GÉOGRAPHIE, CULTURE & UNION EUROPÉENNE
  {
    id: 'q38',
    category: 'geographie-culture',
    question: 'Quel est le plus long fleuve entièrement ou principalement situé en France métropolitaine ?',
    options: [
      'La Seine',
      'La Loire (1 006 km)',
      'La Garonne',
      'Le Rhône'
    ],
    correctIndex: 1,
    explanation: 'La Loire est le plus long fleuve de France avec une longueur de 1 006 km, prenant sa source au mont Gerbier-de-Jonc en Ardèche et se jetant dans l’océan Atlantique à Saint-Nazaire.',
    officialReference: 'Livret du Citoyen - Géographie de la France',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q39',
    category: 'geographie-culture',
    question: 'Quel est le sommet le plus haut de France et d’Europe occidentale ?',
    options: [
      'Le pic du Midi',
      'Le Mont Blanc (4 808 m)',
      'Le mont Ventoux',
      'Le puy de Dôme'
    ],
    correctIndex: 1,
    explanation: 'Le Mont Blanc culmine à environ 4 808 mètres d’altitude dans les Alpes, à la frontière entre la France et l’Italie. C’est le toit de l’Europe occidentale.',
    officialReference: 'Livret du Citoyen - Reliefs et massifs montagneux',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q40',
    category: 'geographie-culture',
    question: 'Parmi ces pays, lequel NE partage PAS de frontière terrestre avec la France métropolitaine ?',
    options: [
      'La Belgique',
      'L’Espagne',
      'Les Pays-Bas',
      'L’Italie'
    ],
    correctIndex: 2,
    explanation: 'Les Pays-Bas ne partagent pas de frontière terrestre avec la métropole (la Belgique est située entre les deux). Note culturelle : la France partage en revanche une frontière terrestre avec les Pays-Bas sur l’île de Saint-Martin aux Antilles !',
    officialReference: 'Livret du Citoyen - Frontières et voisins de la France',
    difficulty: 'moyen'
  },
  {
    id: 'q41',
    category: 'geographie-culture',
    question: 'Combien y a-t-il de pays membres dans l’Union Européenne actuellement ?',
    options: [
      '15 pays',
      '27 pays',
      '32 pays',
      '50 pays'
    ],
    correctIndex: 1,
    explanation: 'L’Union Européenne compte 27 États membres depuis le retrait du Royaume-Uni (Brexit) le 31 janvier 2020. La France en est un membre fondateur historique depuis le traité de Rome de 1957.',
    officialReference: 'Livret du Citoyen - La France et la construction européenne',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q42',
    category: 'geographie-culture',
    question: 'Dans quelle ville française siège officiellement le Parlement européen ?',
    options: [
      'Paris',
      'Lyon',
      'Strasbourg',
      'Marseille'
    ],
    correctIndex: 2,
    explanation: 'Strasbourg est le siège officiel du Parlement européen, symbole de la réconciliation franco-allemande et de la paix en Europe après les deux guerres mondiales.',
    officialReference: 'Livret du Citoyen - Les institutions européennes',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q43',
    category: 'geographie-culture',
    question: 'Qui était Marie Curie ?',
    options: [
      'La première femme présidente de l’Assemblée nationale',
      'Une illustre physicienne et chimiste d’origine polonaise naturalisée française, deux fois lauréate du prix Nobel',
      'La fondatrice de la Croix-Rouge française',
      'Une célèbre peintre impressionniste'
    ],
    correctIndex: 1,
    explanation: 'Marie Curie (1867-1934) est l’une des plus grandes scientifiques de l’Histoire. Première femme à recevoir le prix Nobel (physique 1903), et seule personne à avoir reçu deux Nobel dans deux disciplines scientifiques distinctes (chimie 1911 pour ses travaux sur le polonium et le radium). Elle repose au Panthéon.',
    officialReference: 'Livret du Citoyen - Grandes figures scientifiques',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q44',
    category: 'geographie-culture',
    question: 'Lequel de ces départements se situe en Outre-mer (DROM) ?',
    options: [
      'La Corrèze',
      'La Réunion',
      'Le Morbihan',
      'La Lozère'
    ],
    correctIndex: 1,
    explanation: 'La Réunion est une île de l’océan Indien et un département et région d’outre-mer (code 974). Les autres DROM sont la Guadeloupe (971), la Martinique (972), la Guyane (973) et Mayotte (976).',
    officialReference: 'Livret du Citoyen - La France d’Outre-mer',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q45',
    category: 'geographie-culture',
    question: 'Quelle est la devise de l’Union Européenne ?',
    options: [
      'Liberté, Sécurité, Prospérité',
      'Unis dans la diversité',
      'Pour une Europe sans frontières',
      'Fraternité et Progrès'
    ],
    correctIndex: 1,
    explanation: 'La devise de l’Union Européenne est « Unis dans la diversité ». Elle symbolise la manière dont les Européens se sont rassemblés pour promouvoir la paix tout en s’enrichissant de la diversité des cultures et des traditions.',
    officialReference: 'Livret du Citoyen - Symboles européens',
    difficulty: 'moyen'
  },

  // THEME 6: QUESTIONS SPÉCIFIQUES DE L'ENTRETIEN D'ASSIMILATION (QUESTIONS DE L'AGENT)
  {
    id: 'q46',
    category: 'entretien-oral',
    question: 'L’agent en préfecture vous demande : « Pourquoi souhaitez-vous devenir citoyen(ne) français(e) ? ». Quelle réponse reflète le mieux l’esprit républicain ?',
    options: [
      '« Pour obtenir un passeport puissant afin de voyager sans visa. »',
      '« Parce que je vis, travaille et construis mon avenir en France, et que je partage profondément ses valeurs de liberté, d’égalité et de laïcité que je souhaite porter activement. »',
      '« Parce que j’aurai accès à de meilleures aides sociales. »',
      '« Parce que mon employeur m’y oblige pour garder mon poste. »'
    ],
    correctIndex: 1,
    explanation: 'L’agent vérifie votre assimilation civique, affective et culturelle. La naturalisation est un acte solennel d’adhésion aux valeurs républicaines et de participation active à la vie de la Nation, non une simple démarche utilitaire.',
    officialReference: 'Guide de l’entretien d’assimilation - Préfecture & Code civil',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q47',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Que comptez-vous faire dès l’obtention de votre nationalité française ? »',
    options: [
      '« Prendre des vacances prolongées hors de France »',
      '« M’inscrire immédiatement sur les listes électorales de ma mairie pour voter aux prochaines élections »',
      '« Demander une dispense d’impôts »',
      '« Rien de particulier, cela ne change pas grand chose »'
    ],
    correctIndex: 1,
    explanation: 'L’inscription sur les listes électorales pour accomplir son devoir citoyen de vote est la réponse clé qui prouve votre volonté d’engagement démocratique dans la cité.',
    officialReference: 'Guide de l’entretien d’assimilation - Démocratie participative',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q48',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Citez trois monuments célèbres en France ». Que pouvez-vous citer ?',
    options: [
      'Big Ben, la Porte de Brandebourg, le Colisée',
      'La Tour Eiffel, le Musée du Louvre, le Château de Versailles',
      'La Statue de la Liberté de New York, le Parthénon, le Kremlin',
      'La Sagrada Familia, la tour de Pise, Buckingham Palace'
    ],
    correctIndex: 1,
    explanation: 'La Tour Eiffel, le Musée du Louvre, le Château de Versailles, la Cathédrale Notre-Dame de Paris, l’Arc de Triomphe ou encore le Mont Saint-Michel sont d’excellentes réponses démontrant une bonne culture du patrimoine national.',
    officialReference: 'Livret du Citoyen - Patrimoine culturel national',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q49',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Qui est le premier personnage dans l’ordre protocolaire de l’État français ? »',
    options: [
      'Le Premier ministre',
      'Le Président de la République',
      'Le Président du Sénat',
      'Le Président de l’Assemblée nationale'
    ],
    correctIndex: 1,
    explanation: 'Le Président de la République est le premier personnage de l’État et le chef des armées. Il est suivi dans l’ordre protocolaire par le Premier ministre, puis le Président du Sénat et la Présidente de l’Assemblée nationale.',
    officialReference: 'Protocole officiel de la République',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q50',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Citez trois écrivains ou dramaturges français majeurs ». Quelle réponse est exacte ?',
    options: [
      'William Shakespeare, Miguel de Cervantès, Dante Alighieri',
      'Molière, Victor Hugo, Voltaire (ou Émile Zola, Marcel Proust)',
      'Ernest Hemingway, Gabriel García Márquez, Léon Tolstoï',
      'Johann Wolfgang von Goethe, Franz Kafka, Friedrich Nietzsche'
    ],
    correctIndex: 1,
    explanation: 'Molière (Le Médecin malgré lui, Tartuffe), Victor Hugo (Les Misérables), Voltaire (Candide), Jean de La Fontaine (Les Fables) ou Émile Zola (Germinal) sont des figures indispensables de la littérature française.',
    officialReference: 'Livret du Citoyen - Les grands auteurs de la littérature',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },

  // QUESTIONS SUPPLÉMENTAIRES (POUR EXAMEN COMPLET 40 QUESTIONS)
  {
    id: 'q51',
    category: 'histoire-figures',
    question: 'Quel événement historique a eu lieu le 14 juillet 1789 ?',
    options: [
      'Le sacre de Napoléon Ier',
      'La prise de la forteresse de la Bastille par le peuple parisien',
      'La signature du traité de Versailles',
      'La proclamation de la République'
    ],
    correctIndex: 1,
    explanation: 'La prise de la Bastille le 14 juillet 1789 est l’événement fondateur marquant le début de la fin de l’absolutisme royal et le soulèvement populaire pour la liberté.',
    officialReference: 'Livret du Citoyen - La Révolution française',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q52',
    category: 'histoire-figures',
    question: 'Que commémore le jour férié du 8 mai en France ?',
    options: [
      'La fête du travail',
      'La victoire des Alliés et la capitulation de l’Allemagne nazie en 1945',
      'La prise de la Bastille',
      'L’armistice de 1918'
    ],
    correctIndex: 1,
    explanation: 'Le 8 mai commémore la fin de la Seconde Guerre mondiale en Europe en 1945, suite à la capitulation sans condition de l’Allemagne nazie face aux forces alliées.',
    officialReference: 'Livret du Citoyen - Commémorations nationales',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q53',
    category: 'histoire-figures',
    question: 'Que commémore le jour férié du 11 novembre en France ?',
    options: [
      'La signature de l’Armistice de 1918 mettant fin aux combats de la Première Guerre mondiale',
      'Le débarquement de Normandie en 1944',
      'La proclamation de la Ve République en 1958',
      'La création de la sécurité sociale'
    ],
    correctIndex: 0,
    explanation: 'Le 11 novembre célèbre l’Armistice de 1918 signé dans la clairière de Rethondes, mettant fin aux combats de la Grande Guerre, et rend hommage à tous les morts pour la France.',
    officialReference: 'Livret du Citoyen - Les grandes guerres mondiales',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q54',
    category: 'histoire-figures',
    question: 'Quel monument parisien abrite sous son arche la tombe du Soldat inconnu et sa flamme du souvenir ?',
    options: [
      'Le Panthéon',
      'L’Arc de Triomphe',
      'Les Invalides',
      'L’Obélisque de la Concorde'
    ],
    correctIndex: 1,
    explanation: 'La tombe du Soldat inconnu repose sous l’Arc de Triomphe à Paris depuis 1920, en hommage aux soldats anonymes morts pour la patrie lors de la Première Guerre mondiale. Sa flamme est ravivée chaque soir.',
    officialReference: 'Livret du Citoyen - Lieux de mémoire de la République',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q55',
    category: 'histoire-figures',
    question: 'Qui était Jeanne d’Arc ?',
    options: [
      'Une reine de France au Moyen Âge',
      'Une héroïne de l’histoire de France qui a conduit les armées royales pour libérer Orléans au XVe siècle',
      'Une révolutionnaire de 1789',
      'L’autrice de la Déclaration des droits de la femme'
    ],
    correctIndex: 1,
    explanation: 'Jeanne d’Arc (1412-1431) est une figure historique majeure qui a aidé le roi Charles VII à libérer la France de l’occupation anglaise pendant la guerre de Cent Ans.',
    officialReference: 'Livret du Citoyen - Histoire médiévale de France',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q56',
    category: 'histoire-figures',
    question: 'Qui a rédigé la célèbre lettre ouverte « J’accuse… ! » pour défendre le capitaine Alfred Dreyfus victime d’antisémitisme ?',
    options: [
      'Victor Hugo',
      'Émile Zola',
      'Jean Jaurès',
      'Albert Camus'
    ],
    correctIndex: 1,
    explanation: 'Émile Zola a publié « J’accuse… ! » dans le journal L’Aurore en 1898 pour dénoncer l’erreur judiciaire et l’antisémitisme ayant frappé le capitaine Dreyfus, affirmant le triomphe de la vérité et de la justice républicaine.',
    officialReference: 'Livret du Citoyen - L’affaire Dreyfus et la République',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q57',
    category: 'institutions-politique',
    question: 'Pour combien d’années sont élus les députés à l’Assemblée nationale ?',
    options: [
      '3 ans',
      '4 ans',
      '5 ans (sauf en cas de dissolution par le Président)',
      '6 ans'
    ],
    correctIndex: 2,
    explanation: 'Les 577 députés sont élus au suffrage universel direct pour un mandat de 5 ans. Le Président de la République peut toutefois dissoudre l’Assemblée nationale avant le terme de ce mandat.',
    officialReference: 'Constitution de 1958 - Le Parlement',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q58',
    category: 'institutions-politique',
    question: 'Pour combien d’années sont élus les maires et leurs conseillers municipaux en France ?',
    options: [
      '4 ans',
      '5 ans',
      '6 ans',
      '7 ans'
    ],
    correctIndex: 2,
    explanation: 'Les conseillers municipaux, qui élisent ensuite le maire lors de leur première séance, sont élus pour un mandat de 6 ans au suffrage universel direct.',
    officialReference: 'Livret du Citoyen - La démocratie locale et la commune',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q59',
    category: 'institutions-politique',
    question: 'Qui détient le pouvoir de promulguer les lois en France ?',
    options: [
      'Le Président du Sénat',
      'Le Président de la République',
      'Le Président de l’Assemblée nationale',
      'Le Conseil d’État'
    ],
    correctIndex: 1,
    explanation: 'C’est le Président de la République qui promulgue les lois dans les 15 jours qui suivent leur transmission au gouvernement après leur adoption par le Parlement.',
    officialReference: 'Constitution de 1958, Art. 10',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q60',
    category: 'institutions-politique',
    question: 'Quels sont les trois pouvoirs distincts théorisés par Montesquieu et appliqués dans la démocratie française ?',
    options: [
      'Le pouvoir royal, le pouvoir papal et le pouvoir militaire',
      'Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire',
      'Le pouvoir économique, le pouvoir médiatique et le pouvoir civil',
      'Le pouvoir patronal, le pouvoir syndical et le pouvoir politique'
    ],
    correctIndex: 1,
    explanation: 'La séparation des pouvoirs (exécutif pour appliquer les lois, législatif pour les voter, judiciaire pour sanctionner leur non-respect) est la condition indispensable de tout État démocratique pour éviter la tyrannie.',
    officialReference: 'Livret du Citoyen - Principes démocratiques',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q61',
    category: 'institutions-politique',
    question: 'Quel est le rôle du Conseil d’État en France ?',
    options: [
      'Fixer le budget des armées',
      'Conseiller le gouvernement sur les projets de loi et être la plus haute juridiction administrative',
      'Élire le Président de la République',
      'Contrôler les comptes des mairies'
    ],
    correctIndex: 1,
    explanation: 'Le Conseil d’État, qui siège au Palais-Royal à Paris, a une double mission : il conseille le gouvernement sur les projets de textes juridiques et constitue le juge suprême de l’administration publique.',
    officialReference: 'Livret du Citoyen - Les grandes institutions administratives',
    difficulty: 'moyen'
  },
  {
    id: 'q62',
    category: 'institutions-politique',
    question: 'Quelle juridiction est chargée de juger les litiges individuels entre un salarié et son employeur ?',
    options: [
      'Le Tribunal de commerce',
      'Le Conseil de prud’hommes',
      'La Cour d’assises',
      'Le Conseil constitutionnel'
    ],
    correctIndex: 1,
    explanation: 'Le Conseil de prud’hommes est une juridiction paritaire composée à parts égales de juges employeurs et de juges salariés qui tranche les litiges nés d’un contrat de travail.',
    officialReference: 'Livret du Citoyen - La Justice en France',
    difficulty: 'moyen'
  },
  {
    id: 'q63',
    category: 'droits-devoirs',
    question: 'La France autorise-t-elle la double nationalité ?',
    options: [
      'Non, il faut obligatoirement renoncer à sa nationalité d’origine pour devenir français',
      'Oui, la loi française autorise parfaitement la double ou multiple nationalité',
      'Uniquement pour les citoyens de l’Union Européenne',
      'Seulement pour les personnes nées en France'
    ],
    correctIndex: 1,
    explanation: 'La France n’exige aucunement qu’un étranger naturalisé renonce à sa nationalité d’origine. La double nationalité est pleinement reconnue en droit français.',
    officialReference: 'Code civil & Ministère de l’Intérieur',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q64',
    category: 'droits-devoirs',
    question: 'Quelle est la position de la loi républicaine lorsqu’une croyance religieuse entre en contradiction avec la loi française ?',
    options: [
      'La religion prime toujours sur la loi civile',
      'La loi de la République s’impose strictement à tous et prime sur toute règle religieuse ou coutumière',
      'Chaque citoyen choisit selon sa conscience quelle règle respecter',
      'Le maire tranche au cas par cas'
    ],
    correctIndex: 1,
    explanation: 'Dans l’ordre républicain, la loi votée par les représentants du peuple souverain est supérieure à toute règle religieuse ou traditionnelle. Nul ne peut se prévaloir de ses croyances pour s’affranchir de la loi commune.',
    officialReference: 'Charte des droits et devoirs du citoyen & Loi de 1905',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q65',
    category: 'droits-devoirs',
    question: 'Qu’est-ce que la Journée Défense et Citoyenneté (JDC) ?',
    options: [
      'Un examen militaire payant',
      'Une journée civique obligatoire pour tous les jeunes Français afin de découvrir les enjeux de la défense et les droits et devoirs du citoyen',
      'Une journée de service d’ordre pendant le 14 juillet',
      'Un entraînement sportif réservé aux fonctionnaires'
    ],
    correctIndex: 1,
    explanation: 'La JDC (qui a succédé au service militaire obligatoire) est une étape du parcours de citoyenneté obligatoire pour tous les jeunes citoyens français, sanctionnée par une attestation nécessaire pour passer le permis ou les examens d’État.',
    officialReference: 'Livret du Citoyen - La défense nationale',
    difficulty: 'facile'
  },
  {
    id: 'q66',
    category: 'droits-devoirs',
    question: 'En France, une femme a-t-elle besoin de l’autorisation de son conjoint pour ouvrir un compte bancaire ou travailler ?',
    options: [
      'Oui, le mari est le chef de famille légal',
      'Non, les femmes disposent d’une autonomie financière et juridique totale garantie par la loi (loi de 1965)',
      'Oui, uniquement pour les emplois de nuit',
      'Seulement si le mariage a été célébré sous le régime de la communauté'
    ],
    correctIndex: 1,
    explanation: 'Depuis la loi du 13 juillet 1965, la femme mariée peut exercer une profession et ouvrir un compte bancaire en son nom propre sans l’autorisation de son mari. L’égalité est pleine et entière.',
    officialReference: 'Loi du 13 juillet 1965 & Droits des femmes',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q67',
    category: 'geographie-culture',
    question: 'Quel fleuve français traverse la ville de Paris ?',
    options: [
      'Le Rhône',
      'La Seine',
      'La Garonne',
      'La Meuse'
    ],
    correctIndex: 1,
    explanation: 'La Seine prend sa source sur le plateau de Langres en Bourgogne, traverse Troyes, Paris et Rouen, avant de se jeter dans la Manche au Havre.',
    officialReference: 'Livret du Citoyen - Géographie de la France',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q68',
    category: 'geographie-culture',
    question: 'Quelle chaîne de montagnes sépare naturellement la France de l’Espagne ?',
    options: [
      'Les Alpes',
      'Les Pyrénées',
      'Le Massif central',
      'Le Jura'
    ],
    correctIndex: 1,
    explanation: 'La chaîne des Pyrénées forme une frontière naturelle de 430 kilomètres entre le sud-ouest de la France et l’Espagne, de l’océan Atlantique à la mer Méditerranée.',
    officialReference: 'Livret du Citoyen - Reliefs et frontières',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q69',
    category: 'geographie-culture',
    question: 'Quelle est la plus grande île française de la mer Méditerranée ?',
    options: [
      'L’île d’Oléron',
      'La Corse',
      'Belle-Île-en-Mer',
      'L’île de Ré'
    ],
    correctIndex: 1,
    explanation: 'La Corse, surnommée « l’île de Beauté », est une collectivité territoriale à statut particulier située dans la mer Méditerranée.',
    officialReference: 'Livret du Citoyen - Géographie insulaire',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q70',
    category: 'geographie-culture',
    question: 'Parmi ces territoires français, lequel est situé sur le continent sud-américain et frontalier du Brésil ?',
    options: [
      'La Guadeloupe',
      'La Guyane',
      'La Martinique',
      'Mayotte'
    ],
    correctIndex: 1,
    explanation: 'La Guyane française est le plus vaste département et région d’outre-mer, situé au nord de l’Amérique du Sud. Elle abrite notamment le centre spatial européen de Kourou.',
    officialReference: 'Livret du Citoyen - La France d’Outre-mer',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q71',
    category: 'geographie-culture',
    question: 'Quel est l’hymne officiel de l’Union Européenne ?',
    options: [
      'Le Chant des partisans',
      'L’Ode à la joie (composé par Ludwig van Beethoven sur un poème de Schiller)',
      'Le Boléro de Ravel',
      'Les Quatre Saisons de Vivaldi'
    ],
    correctIndex: 1,
    explanation: 'L’Ode à la joie, extrait du prélude de la 9e symphonie de Beethoven, a été adoptée en 1972 par le Conseil de l’Europe puis en 1985 par l’Union Européenne comme hymne officiel.',
    officialReference: 'Livret du Citoyen - Les symboles européens',
    difficulty: 'moyen'
  },
  {
    id: 'q72',
    category: 'geographie-culture',
    question: 'Qui a peint le tableau emblématique « La Liberté guidant le peuple » inspiré de la révolution de 1830 ?',
    options: [
      'Claude Monet',
      'Eugène Delacroix',
      'Paul Cézanne',
      'Auguste Renoir'
    ],
    correctIndex: 1,
    explanation: 'Eugène Delacroix a peint ce chef-d’œuvre en 1830, montrant une femme le torse nu portant le drapeau tricolore et le bonnet phrygien guidant le peuple sur les barricades.',
    officialReference: 'Livret du Citoyen - Patrimoine artistique',
    difficulty: 'moyen',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q73',
    category: 'geographie-culture',
    question: 'Qui a fondé le célèbre Institut de recherche médicale et mis au point le vaccin contre la rage en 1885 ?',
    options: [
      'Louis Pasteur',
      'Antoine Lavoisier',
      'René Laennec',
      'Claude Bernard'
    ],
    correctIndex: 0,
    explanation: 'Louis Pasteur (1822-1895) est le père de la microbiologie moderne. Sa découverte du vaccin contre la rage en 1885 a sauvé d’innombrables vies et illustre l’excellence scientifique française.',
    officialReference: 'Livret du Citoyen - Les grands scientifiques français',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q74',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Quelles sont les valeurs de la République ? ». Que répondez-vous ?',
    options: [
      '« L’obéissance, la discrétion et le travail »',
      '« La liberté, l’égalité, la fraternité, la laïcité et la solidarité »',
      '« Le libéralisme économique et le commerce »',
      '« Les coutumes régionales et la tradition religieuse »'
    ],
    correctIndex: 1,
    explanation: 'Citez en priorité la devise républicaine (Liberté, Égalité, Fraternité) à laquelle vous ajoutez immédiatement le principe fondamental de Laïcité et l’indivisibilité de la République.',
    officialReference: 'Entretien d’assimilation - Les valeurs fondamentales',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q75',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Qui est le chef des armées en France ? »',
    options: [
      'Le ministre de la Défense',
      'Le Président de la République',
      'Le chef d’état-major des armées',
      'Le Premier ministre'
    ],
    correctIndex: 1,
    explanation: 'Selon l’article 15 de la Constitution de 1958 : « Le Président de la République est le chef des armées. Il préside les conseils et comités supérieurs de la Défense nationale. »',
    officialReference: 'Constitution de 1958, Art. 15',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q76',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Citez deux personnages féminins qui ont marqué l’histoire de France ». Qui pouvez-vous citer ?',
    options: [
      'Jeanne d’Arc, Marie Curie ou Simone Veil',
      'Cléopâtre et Élisabeth Ire d’Angleterre',
      'Marilyn Monroe et Frida Kahlo',
      'Angela Merkel et Marie-Thérèse d’Autriche'
    ],
    correctIndex: 0,
    explanation: 'Simone Veil (loi sur l’IVG et rescapée de la Shoah), Marie Curie (deux prix Nobel) et Jeanne d’Arc sont des figures historiques françaises majeures, dont deux reposent au Panthéon.',
    officialReference: 'Livret du Citoyen - Figures féminines de la République',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q77',
    category: 'entretien-oral',
    question: 'L’agent vous demande : « Qu’est-ce qui caractérise la République selon l’article 1er de la Constitution ? »',
    options: [
      'Elle est monarchique, fédérale et religieuse',
      'Elle est indivisible, laïque, démocratique et sociale',
      'Elle est unitaire, autoritaire et libérale',
      'Elle est corporatiste et protectrice'
    ],
    correctIndex: 1,
    explanation: 'La formule clé de l’article 1er est : « La France est une République indivisible, laïque, démocratique et sociale. » Connaître cette formule par cœur fait une excellente impression lors de l’entretien.',
    officialReference: 'Constitution de 1958, Art. 1er',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q78',
    category: 'principes-symboles',
    question: 'Où se situe le siège officiel de la Présidence de la République française ?',
    options: [
      'Au Palais du Luxembourg',
      'Au Palais de l’Élysée',
      'À l’Hôtel de Matignon',
      'Au Palais-Royal'
    ],
    correctIndex: 1,
    explanation: 'Le Palais de l’Élysée à Paris est la résidence officielle et le siège de la Présidence de la République.',
    officialReference: 'Livret du Citoyen - Lieux du pouvoir',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q79',
    category: 'principes-symboles',
    question: 'Où se situe la résidence officielle et le lieu de travail du Premier ministre français ?',
    options: [
      'Au Palais de l’Élysée',
      'À l’Hôtel de Matignon',
      'Au Palais Bourbon',
      'Au Quai d’Orsay'
    ],
    correctIndex: 1,
    explanation: 'L’Hôtel de Matignon, situé rue de Varenne à Paris, est la résidence officielle et le lieu de travail du Premier ministre (chef du gouvernement).',
    officialReference: 'Livret du Citoyen - Lieux du pouvoir',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  },
  {
    id: 'q80',
    category: 'institutions-politique',
    question: 'Quel texte fondamental définit l’organisation des pouvoirs et les libertés publiques en France ?',
    options: [
      'Le Code de la route',
      'La Constitution de la Ve République (4 octobre 1958)',
      'Le traité de Rome',
      'Le Journal Officiel'
    ],
    correctIndex: 1,
    explanation: 'La Constitution est la loi fondamentale et suprême du pays. Toutes les autres lois et règlements doivent impérativement respecter la Constitution.',
    officialReference: 'Constitution de 1958',
    difficulty: 'facile',
    isCommonInterviewQuestion: true
  }
];

export const FLASHCARDS_DATA = [
  {
    id: 'fc1',
    category: 'principes-symboles' as const,
    front: 'Quelle est la devise de la République française ?',
    back: '« Liberté, Égalité, Fraternité »',
    details: 'Inscrite à l’article 2 de la Constitution de 1958, issue des idéaux de la Révolution de 1789.'
  },
  {
    id: 'fc2',
    category: 'principes-symboles' as const,
    front: 'Que commémore le 14 juillet ?',
    back: 'La prise de la Bastille (1789) et la fête de la Fédération (1790)',
    details: 'Instauré comme fête nationale en 1880, il célèbre à la fois la fin de l’arbitraire royal et l’union des Français.'
  },
  {
    id: 'fc3',
    category: 'principes-symboles' as const,
    front: 'Qu’est-ce que le principe de laïcité ?',
    back: 'Neutralité de l’État et liberté absolue de conscience',
    details: 'Loi de 1905 : l’État ne reconnaît ni ne salarie aucun culte. Liberté de croire ou de ne pas croire.'
  },
  {
    id: 'fc4',
    category: 'histoire-figures' as const,
    front: 'Quelle est la date de la Déclaration des Droits de l’Homme et du Citoyen ?',
    back: '26 août 1789',
    details: '« Les hommes naissent et demeurent libres et égaux en droits » (Article 1er).'
  },
  {
    id: 'fc5',
    category: 'histoire-figures' as const,
    front: 'En quelle année les femmes ont-elles obtenu le droit de vote ?',
    back: '1944 (premier vote en 1945)',
    details: 'Par ordonnance du Général de Gaulle le 21 avril 1944 à Alger.'
  },
  {
    id: 'fc6',
    category: 'histoire-figures' as const,
    front: 'Qui était Jean Moulin ?',
    back: 'Le héros et unificateur de la Résistance française (CNR)',
    details: 'Mort sous la torture en 1943 sans parler. Ses cendres sont au Panthéon.'
  },
  {
    id: 'fc7',
    category: 'institutions-politique' as const,
    front: 'Quelle est la durée du mandat du Président de la République ?',
    back: '5 ans (le quinquennat)',
    details: 'Élu au suffrage universel direct. Maximum deux mandats consécutifs.'
  },
  {
    id: 'fc8',
    category: 'institutions-politique' as const,
    front: 'Quelles sont les deux chambres du Parlement ?',
    back: 'L’Assemblée nationale et le Sénat',
    details: 'L’Assemblée nationale siège au Palais Bourbon, le Sénat au Palais du Luxembourg.'
  },
  {
    id: 'fc9',
    category: 'institutions-politique' as const,
    front: 'Qui nomme le Premier ministre ?',
    back: 'Le Président de la République',
    details: 'Le Premier ministre réside et travaille à l’Hôtel de Matignon.'
  },
  {
    id: 'fc10',
    category: 'droits-devoirs' as const,
    front: 'Quels sont les deux principaux devoirs d’un citoyen ?',
    back: 'Respecter les lois républicaines & payer ses impôts',
    details: 'S’y ajoutent la scolarisation des enfants (3-16 ans) et le devoir de défense / être juré d’assises.'
  },
  {
    id: 'fc11',
    category: 'droits-devoirs' as const,
    front: 'Quelle est la règle sur l’égalité hommes-femmes en France ?',
    back: 'Égalité totale et absolue garantie par la Constitution',
    details: 'Mêmes droits civils, politiques et salariaux. Mariages forcés et polygamie strictement interdits.'
  },
  {
    id: 'fc12',
    category: 'geographie-culture' as const,
    front: 'Quel est le plus long fleuve de France ?',
    back: 'La Loire (1 006 km)',
    details: 'Prend sa source au mont Gerbier-de-Jonc et se jette dans l’Atlantique.'
  },
  {
    id: 'fc13',
    category: 'geographie-culture' as const,
    front: 'Combien d’États membres compte l’Union Européenne ?',
    back: '27 pays membres',
    details: 'La monnaie unique est l’Euro (€). Le siège du Parlement européen est à Strasbourg.'
  },
  {
    id: 'fc14',
    category: 'entretien-oral' as const,
    front: 'Question préfecture : « Pourquoi voulez-vous devenir Français ? »',
    back: 'Pour partager ses valeurs (liberté, égalité, laïcité) et participer à la vie civique',
    details: 'Évitez les réponses d’intérêt matériel (passeport, voyages). Montrez votre ancrage durable en France.'
  }
];
