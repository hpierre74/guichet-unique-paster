export type CreateDraftResponse = {
  id: number;
  companyName: null;
  siren: null;
  content: any[];
  rneContent: null;
  referenceMandataire: null;
  nomDossier: null;
  typeFormalite: string;
  typePersonne: string;
  typeLiasse: null;
  numeroLiasseFormaliteAnterieur: null;
  mandataireId: number;
  codeAPE: null;
  diffusionINSEE: null;
  diffusionCommerciale: null;
  observationSignature: null;
  registreOrigine: null;
  hasRnippBeenCalled: boolean;
  formalityScope: any[];
  created: string;
  updated: string;
  regularisation: boolean;
};

export type CreateDraftBody = {
  typeFormalite: string;
  typePersonne: string;
  content: {
    succursaleOuFiliale: string;
    natureCreation: {
      formeJuridique: string;
      eirl: boolean;
      microEntreprise: boolean;
      etablieEnFrance: boolean;
      societeEtrangere: boolean;
      indicateurEtablissementFictif: boolean;
      salarieEnFrance: boolean;
      entrepriseAgricole: boolean;
    };
    personnePhysique: {
      identite: {
        entrepreneur: {
          voletSocial: {
            activiteNonSalariee: boolean;
          };
          regimeMicroSocial: {
            optionMicroSocial: boolean;
          };
        };
      };
      optionsFiscales: {
        regimeImpositionBenefices: string;
        regimeImpositionTVA: string;
      };
    };
  };
};
