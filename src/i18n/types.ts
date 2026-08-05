export type Language = 'EN' | 'FR' | 'AR';

export interface Translations {
  nav: {
    disclaimerTag: string;
    disclaimerText: string;
    constitution: string;
    acts: string;
    regions: string;
    boards: string;
    joinInitiative: string;
    systemMenu: string;
    close: string;
    mobileDisclaimer: string;
  };
  footer: {
    peoplesInitiative: string;
    promoter: string;
    youthForum: string;
    madeIn: string;
    tunisia: string;
    discordCta: string;
    flagAlt: string;
  };
  common: {
    confidential: string;
    open: string;
    draft: string;
    directives: string;
    localMap: string;
    primaryFocus: string;
  };
home: {
  vision: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    sub: string;
    joinInitiative: string;
    theActs: string;
    stats: {
      peopleJoinedLabel: string;
      policiesChangedLabel: string;
      onlineModificationsLabel: string;
    };
  };
    people: {
      chip: string;
      titleLine1: string;
      titleLine2: string;
      manifestoBold: string;
      manifestoLight: string;
      sovereignNodes: string;
      watermark: string;
    };
    pillars: {
      title: string;
      meta: string;
      reports: Array<{ id: string; title: string }>;
    };
    debate: {
      title: string;
      description: string;
      discord: string;
      reddit: string;
    };
  };
  acts: {
    title: string;
    meta: string;
    categories: Array<{
      label: string;
      acts: Array<{ id: string; title: string }>;
    }>;
  };
  boards: {
    nationalTitle: string;
    nationalMeta: string;
    regionalTitle: string;
    regionalMeta: string;
    primaryFocusPrefix: string;
    institutions: Array<{ id: string; name: string; focus: string }>;
    regional: {
      id: string;
      name: string;
      focus: string;
      note: string;
    };
    footerBrand: string;
    footerCopy: string;
  };
}
