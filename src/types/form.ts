export interface BriefingFormData {
  // Section 1: Definindo a Persona
  persona: {
    ageRange: string;
    gender: string;
    officeName: string; // Added field for Office Name
    incomeLevel: string;
    occupation: string;
    maritalStatus: string;
    lifeMoment: string;
    urgency: string;
    searchTerms: string;
    differentiator: string;
    decisionTime: string;
    financialBarrier: string;
    myths: string;
    classicNo: string;
    languageStyle: string;
    contentPreferences: string;
    additionalInfo: string;
  };

  // Section 2: Operacional e Estratégia
  operational: {
    campaignFocus: string;
    negativeTargeting: string;
    geolocation: string;
    attendance: string;
    competitors: string;
  };

  // Section 3: Objetivos e Investimento
  objectives: {
    mainObjective: string;
    budget: string;
    history: string;
    cpl: string;
    expectations: string;
  };
}
