import type { Translations } from '../types';

export const fr: Translations = {
  nav: {
    disclaimerTag: 'INITIATIVE CIVILE',
    disclaimerText:
      "Il s'agit d'une initiative de citoyens tunisiens. C'est une proposition privée qui ne reflète pas le gouvernement de la Tunisie ni aucun de ses organes officiels.",
    constitution: 'Constitution Fédérale',
    acts: 'Les Actes',
    regions: 'Régions',
    boards: 'Conseils',
    joinInitiative: "Rejoindre l'Initiative",
    systemMenu: 'MENU SYSTÈME',
    close: 'FERMER',
    mobileDisclaimer: 'Proposition citoyenne / Non gouvernementale',
  },
  footer: {
    peoplesInitiative: 'Initiative du Peuple',
    promoter: 'Promoteur',
    youthForum: 'Forum de Coopération des Jeunes',
    madeIn: 'Fabriqué en',
    tunisia: 'Tunisie',
    discordCta: 'Rejoignez la conversation sur Discord',
    flagAlt: 'Drapeau de la Tunisie',
  },
  common: {
    confidential: 'CONFIDENTIEL',
    open: 'OUVRIR →',
    draft: 'BROUILLON_1',
    directives: 'DIRECTIVES →',
    localMap: 'CARTE_LOCALE →',
    primaryFocus: 'FOCUS_PRINCIPAL',
  },
  home: {
    vision: {
stats: {
  peopleJoinedLabel: "Personnes ayant rejoint l'initiative",
  policiesChangedLabel: 'Changements de politiques dans le système politique',
  onlineModificationsLabel: 'Modifications en ligne des politiques de réforme',
},
      tag: 'Protocole_Central_v0.1',
      titleLine1: 'CONSTITUTION',
      titleLine2: 'FÉDÉRALE.',
      lead: 'Le Protocole Confédéral Souverain.',
      sub: "Concevoir une Tunisie décentralisée où l'autonomie régionale constitue le fondement de la souveraineté nationale.",
      joinInitiative: "Rejoindre l'Initiative",
      theActs: 'Les Actes',
    },
    people: {
      chip: 'INITIATIVE_ANTI_CORRUPTION',
      titleLine1: 'DÉCENTRALISER',
      titleLine2: 'LE POUVOIR.',
      manifestoBold: 'Démanteler un système défaillant pour autonomiser 24 nœuds souverains.',
      manifestoLight:
        "Le gouvernement central a négligé l'intérieur pendant des décennies. Ce protocole garantit que chaque région devienne l'architecte principal de son propre avenir grâce au pouvoir de son peuple.",
      sovereignNodes: 'Nœuds Souverains',
      watermark: 'DÉCENTRALISER',
    },
    pillars: {
      title: 'Les Piliers',
      meta: 'LOT_01_RAPPORTS',
      reports: [
        { id: '01', title: 'Loi E-Gov 2.0' },
        { id: '02', title: 'Loi sur la Démocratie Directe Méritocratique' },
        { id: '03', title: 'Loi sur la Libre Entreprise' },
        { id: '04', title: "Loi sur l'Indépendance Judiciaire et l'Exécution Rapide" },
      ],
    },
    debate: {
      title: 'Rejoignez le Débat.',
      description:
        'Le processus de rédaction est ouvert. Contribuez à la voix du Protocole Confédéral Souverain de la Tunisie sur votre plateforme préférée.',
      discord: 'Communauté Discord',
      reddit: 'Forum Reddit',
    },
  },
  acts: {
    title: 'Les Actes',
    meta: 'INDEX_LÉGISLATIF_2026',
    categories: [
      {
        label: 'GOUVERNANCE_&_LIBERTÉS',
        acts: [
          { id: '01', title: "Loi sur l'Initiative Populaire" },
          { id: '02', title: 'Loi sur la Démocratie Directe Méritocratique' },
          { id: '03', title: 'Loi sur la Libre Entreprise' },
          { id: '04', title: "Loi sur le Conseil d'Efficacité Gouvernementale" },
          { id: '05', title: 'Loi sur les Salaires des Hauts Fonctionnaires et Anti-Corruption' },
        ],
      },
      {
        label: 'SYSTÈMES_NUMÉRIQUES_&_FINANCE',
        acts: [
          { id: '06', title: 'Loi E-Dinar 2.0 et Paiement Souverain' },
          { id: '07', title: 'Loi E-Gov 2.0' },
          { id: '08', title: 'Startup Act 3.0' },
          { id: '09', title: 'Loi Crowdfunding 2.0' },
          { id: '10', title: 'Loi VC Souverain' },
          { id: '11', title: 'Néo-Banque et Innovation Financière' },
        ],
      },
      {
        label: 'SOUVERAINETÉ_&_JUSTICE',
        acts: [
          { id: '12', title: 'Politique Tunisie d\'Abord' },
          { id: '13', title: "Loi sur l'Indépendance Judiciaire et l'Exécution Rapide" },
          { id: '14', title: 'Loi sur la Sécurité Nationale et la Transparence' },
          { id: '15', title: 'Loi sur l\'Innovation de Défense et la Souveraineté' },
          { id: '16', title: 'Programme Système E-VISA' },
        ],
      },
      {
        label: 'RESSOURCES_&_INFRA',
        acts: [
          { id: '17', title: 'Loi sur la Libéralisation de l\'Énergie et de l\'Eau' },
          { id: '18', title: 'Loi Tunisie Verte et Beauté Urbaine' },
          { id: '19', title: 'Loi Santé Nationale' },
          { id: '20', title: 'Loi sur le Contrôle des Importations et la Souveraineté' },
          { id: '21', title: 'Loi Recherche Ouverte' },
        ],
      },
    ],
  },
  boards: {
    nationalTitle: 'Conseil Judiciaire National',
    nationalMeta: 'INSTITUTIONS_EXÉCUTIVES_2026',
    regionalTitle: 'Conseils Régionaux',
    regionalMeta: 'BUREAUX_DE_REDEVABILITÉ_LOCALE',
    primaryFocusPrefix: 'FOCUS_PRINCIPAL',
    institutions: [
      { id: 'NJB_01', name: 'Autorité de Gouvernance Numérique', focus: 'Gouvernance IA et Supervision E-Dinar' },
      { id: 'NJB_02', name: 'Conseil de Développement Économique', focus: 'VC, Startups et Libre Entreprise' },
      { id: 'NJB_03', name: "Conseil d'Efficacité Gouvernementale", focus: 'Gouvernement Lean et Audits IA' },
      { id: 'NJB_04', name: "Agence d'Exécution Judiciaire", focus: 'Application Rapide et Tribunaux Accélérés' },
      { id: 'NJB_05', name: 'Conseil Anti-Corruption', focus: 'Audits Zéro Tolérance et Récupération d\'Actifs' },
      { id: 'NJB_06', name: 'Conseil de Transition Verte', focus: 'Beauté Urbaine et Politique Énergétique' },
      { id: 'NJB_07', name: 'Conseil National de la Santé', focus: 'Infrastructure et Qualité des Soins' },
      { id: 'NJB_08', name: 'Conseil de Transition Fédérale', focus: 'Coordination des 24 Gouvernorats' },
    ],
    regional: {
      id: 'COUNCIL_MASTER',
      name: 'Conseil de Surveillance Citoyenne',
      focus: 'Audits Budgétaires Régionaux et Démocratie Directe',
      note: 'Cadre standardisé déployé dans les 24 gouvernorats.',
    },
    footerBrand: 'PROJECT_X // CONSEIL_JUDICIAIRE_NATIONAL',
    footerCopy: '© 2026 GOUV. FÉDÉRAL. SYSTEM_SYNC: OK',
  },
};
