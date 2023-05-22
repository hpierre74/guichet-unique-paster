export type NatureCreation = {
  dateCreation: null | string;
  societeEtrangere: boolean;
  formeJuridique: string;
  microEntreprise: boolean;
  etablieEnFrance: boolean;
  salarieEnFrance: boolean;
  relieeEntrepriseAgricole: boolean;
  entrepriseAgricole: boolean;
  eirl: boolean;
  indicateurEtablissementFictif: boolean;
  typeExploitation: null | string;
  seulsBeneficiairesModifies: null;
  dateDepotCreation: null | string;
};

export type VoletSocial = {
  societeEtrangere: boolean;
  formeJuridique: string | null;
  microEntreprise: boolean;
  etablieEnFrance: boolean;
  salarieEnFrance: boolean;
  relieeEntrepriseAgricole: boolean;
  entrepriseAgricole: boolean;
  eirl: boolean;
  indicateurEtablissementFictif: boolean;
  activiteAnterieureActivite: string | null;
  activiteAnterieureDateFin: string | null;
  activiteAnterieureCodeGeo: string | null;
  activiteAnterieurePays: string | null;
  activiteAnterieureCommune: string | null;
  activiteAnterieureCodePostal: string | null;
  organismeAssuranceMaladieActuelle: string | null;
  demandeAcre: boolean;
  activiteSimultanee: boolean;
  statutExerciceActiviteSimultanee: string | null;
  autreActiviteExercee: string | null;
  affiliationPamBiologiste: boolean;
  affiliationPamPharmacien: boolean;
  activiteNonSalariee: boolean;
  indicateurActiviteAnterieure: boolean;
  natureVoletSocial: string | null;
  dateEffetVoletSocial: string | null;
  situationVisAVisMsa: string | null;
  autreOrganisme: string | null;
  jeuneAgriculteur: null;
  organismePension: null;
  nonSalarieOuConjointBeneficiaireRsaRmi: null;
  choixOrganismeAssuranceMaladie: string | null;
  departementOrganismeAssuranceMaladie: string | null;
  indicateurRegimeAssuranceMaladie: string | null;
  declarationMineur: null;
  nbMineursDeclares: null;
  ancienNumeroSiren: string | null;
  mineur: null;
};

export type PersonDescription = {
  siren: null | string;
  nicSiege: null | string;
  lieuRegistre: string | null;
  numeroSecu: string;
  nom: string;
  prenoms: string[];
  genre: string;
  dateDeNaissance: string;
  paysNaissance: string;
  lieuDeNaissance: string;
  codePostalNaissance: string;
  codeInseeGeographique: string;
  codeNationalite: string;
  situationMatrimoniale: string;
  optionRgpd: string;
  qualiteDeNonSedentarite: string | null;
  indicateurDeNonSedentarite: boolean;
  is10PTriggered: boolean;
  is15PTriggered: boolean;
  is17PTriggered: boolean;
  role: string | null;
  dateEffetRoleDeclarant: string | null;
  titre: string | null;
  nomUsage: string | null;
  pseudonyme: string | null;
  mineurEmancipe: string | null;
  nationalite: null | string;
  statutVisAVisFormalite: string | null;
  formeSociale: string | null;
  confirmRnippMismatch: string | null;
  dateEffet10P: string | null;
  dateEffet15P: string | null;
  dateEffet17P: string | null;
};

export type HomeAddress = {
  roleAdresse: string | null;
  codePays: string;
  codePostal: string;
  commune: string;
  codeInseeCommune: string;
  typeVoie: string;
  voie: string;
  numVoie: string;
  indicateurValidationBAN: boolean;
  is16PTriggered: boolean;
  pays: string | null;
  voieCodifiee: string | null;
  indiceRepetition: string | null;
  distributionSpeciale: string | null;
  communeAncienne: string | null;
  rgpd: string | null;
  datePriseEffetAdresse: string | null;
  complementLocalisation: string | null;
  communeDeRattachement: string | null;
  caracteristiques: string | null;
  indiceRepetitionAutre: string | null;
  dateEffet16P: string | null;
  empriseAeroport: string | null;
};

export type ContactInfo = {
  mail: string | null;
  telephone: string;
  phoneCode: string;
  roleDonneesContact: string | null;
  telecopie: string | null;
  optionRgpd: string | null;
  dateEffet: string | null;
};

export type Insolvency = {
  residencePrincipale: {
    residenceInsaisissable: boolean;
    adresse: {
      codePays: string;
      codePostal: string;
      commune: string;
      codeInseeCommune: string;
      typeVoie: string;
      voie: string;
      numVoie: string;
      indicateurValidationBAN: boolean;
      is16PTriggered: boolean;
    };
    publication: {
      typePublication: string;
      lieuPublication: string;
    };
    is28PTriggered: boolean;
  };
  residencesSecondaires: any[];
};

export type CorrespondenceAddress = {
  codePays: string;
  codePostal: string;
  commune: string;
  codeInseeCommune: string;
  typeVoie: string;
  voie: string;
  numVoie: string;
  indicateurValidationBAN: boolean;
  is16PTriggered: boolean;
};

export type BusinessAddress = {
  caracteristiques: {
    ambulant: boolean;
    domiciliataire: boolean;
    indicateurDomicileEntrepreneur: boolean;
    indicateurAdresseEtablissement: boolean;
  };
  adresse: {
    pays: null | string;
    roleAdresse: null;
    codePays: string;
    codePostal: string;
    commune: string;
    codeInseeCommune: string;
    typeVoie: string;
    voie: string;
    voieCodifiee: null | string;
    numVoie: string;
    indicateurValidationBAN: boolean;
    is16PTriggered: boolean;
    indiceRepetition: null | string;
    distributionSpeciale: null | string;
    communeAncienne: null | string;
    rgpd: null | string;
    datePriseEffetAdresse: null | string;
    complementLocalisation: null | string;
    communeDeRattachement: null | string;
    caracteristiques: null | string;
    indiceRepetitionAutre: null | string;
    dateEffet16P: null | string;
    empriseAeroport: null | string;
  };
  is21PTriggered: boolean;
  entrepriseDomiciliataire: null;
  dateEffet21P: null | string;
};

export type PhysicalPerson = {
  identite: {
    eirl: string | null;
    entreprise: string | null;
    entrepreneur: {
      roleConjoint: null;
      conjoint: null;
      nouveauRoleConjoint: null;
      dateEffet35M: string | null;
      capaciteJuridique: null;
      voletSocial: VoletSocial;
      descriptionPersonne: PersonDescription;
      adresseDomicile: HomeAddress;
      contact: ContactInfo;
      regimeMicroSocial: {
        optionMicroSocial: boolean;
        periodiciteVersement: string;
      };
      greffeImmatriculation: string | null;
      noUniqueIdentification: string | null;
      descriptionEntrepreneur: string | null;
      is35MTriggered: boolean;
      is29Or30PTriggered: boolean;
      is29Or30PInfoTriggered: boolean;
      compte: string | null;
      dateEffet: string | null;
    };
    contratDAppuiDeclare: boolean;
    insaisissabilite: Insolvency;
    adresseCorrespondance: CorrespondenceAddress;
    adresseEntreprise: BusinessAddress;
  };
};

export type Content = {
  succursaleOuFiliale: string;
  formeExerciceActivitePrincipale: string;
  natureCreation: NatureCreation;
  personnePhysique: PhysicalPerson;
};

export type EditDraftBody = {
  id: number;
  companyName: string;
  content: Content;
  referenceMandataire: string;
  nomDossier: string;
  typeFormalite: string;
  typePersonne: string;
  mandataireId: number;
  diffusionINSEE: string | null;
  diffusionCommerciale: string;
  hasRnippBeenCalled: boolean;
  formalityScope: any[];
  created: string;
  updated: string;
  regularisation: boolean;
  formalityDraftId: number;
};

export const EXAMPLE_BODY: EditDraftBody = {
  id: 1971636,
  companyName: 'Nathalie Durand',
  siren: null,
  content: {
    evenementCessation: null,
    natureCessation: null,
    succursaleOuFiliale: 'AVEC_ETABLISSEMENT',
    formeExerciceActivitePrincipale: 'COMMERCIALE',
    indicateurPoursuiteCessation: null,
    tvaIntraCommunautaire: null,
    natureCreation: {
      dateCreation: null,
      societeEtrangere: false,
      formeJuridique: '1000',
      typeExploitation: null,
      microEntreprise: true,
      etablieEnFrance: true,
      salarieEnFrance: true,
      relieeEntrepriseAgricole: false,
      entrepriseAgricole: false,
      eirl: false,
      indicateurEtablissementFictif: false,
      seulsBeneficiairesModifies: null,
      dateDepotCreation: null,
    },
    personnePhysique: {
      identite: {
        entreprise: null,
        entrepreneur: {
          roleConjoint: null,
          conjoint: null,
          nouveauRoleConjoint: null,
          is35MTriggered: false,
          dateEffet35M: null,
          capaciteJuridique: null,
          voletSocial: {
            salarieEnFrance: true,
            relieeEntrepriseAgricole: false,
            entrepriseAgricole: false,
            eirl: false,
            indicateurEtablissementFictif: false,
            societeEtrangere: false,
            formeJuridique: null,
            microEntreprise: true,
            etablieEnFrance: true,
            natureVoletSocial: null,
            dateEffetVoletSocial: null,
            situationVisAVisMsa: null,
            activiteAnterieureActivite: null,
            activiteAnterieureDateFin: null,
            activiteAnterieureCodeGeo: null,
            activiteAnterieurePays: null,
            activiteAnterieureCommune: null,
            activiteAnterieureCodePostal: null,
            organismeAssuranceMaladieActuelle: 'R',
            autreOrganisme: null,
            demandeAcre: false,
            activiteSimultanee: false,
            statutExerciceActiviteSimultanee: null,
            autreActiviteExercee: null,
            affiliationPamBiologiste: false,
            affiliationPamPharmacien: false,
            jeuneAgriculteur: null,
            organismePension: null,
            nonSalarieOuConjointBeneficiaireRsaRmi: null,
            choixOrganismeAssuranceMaladie: null,
            departementOrganismeAssuranceMaladie: null,
            indicateurRegimeAssuranceMaladie: null,
            declarationMineur: null,
            nbMineursDeclares: null,
            activiteNonSalariee: false,
            indicateurActiviteAnterieure: false,
            ancienNumeroSiren: null,
            mineur: null,
          },
          regimeMicroSocial: {
            optionMicroSocial: true,
            periodiciteVersement: 'T',
          },
          greffeImmatriculation: null,
          noUniqueIdentification: null,
          descriptionPersonne: {
            siren: null,
            nicSiege: null,
            lieuRegistre: null,
            role: null,
            dateEffetRoleDeclarant: null,
            numeroSecu: '269054958815780',
            nom: 'Durand',
            prenoms: ['Nathalie', 'Sophie'],
            genre: '2',
            titre: null,
            nomUsage: null,
            pseudonyme: null,
            dateDeNaissance: '1969-05-01',
            mineurEmancipe: null,
            paysNaissance: 'FRANCE',
            lieuDeNaissance: 'Angers',
            codePostalNaissance: '49100',
            codeInseeGeographique: '49007',
            nationalite: null,
            codeNationalite: 'FRA',
            situationMatrimoniale: '1',
            optionRgpd: 'N',
            qualiteDeNonSedentarite: null,
            statutVisAVisFormalite: null,
            formeSociale: null,
            indicateurDeNonSedentarite: false,
            confirmRnippMismatch: null,
            dateEffet10P: null,
            dateEffet15P: null,
            dateEffet17P: null,
            is10PTriggered: false,
            is15PTriggered: false,
            is17PTriggered: false,
          },
          descriptionEntrepreneur: null,
          adresseDomicile: {
            roleAdresse: null,
            pays: null,
            codePays: 'FRA',
            codePostal: '75003',
            commune: 'Paris',
            codeInseeCommune: '75103',
            typeVoie: 'RUE',
            voie: 'Charlot',
            voieCodifiee: null,
            numVoie: '5',
            indiceRepetition: null,
            distributionSpeciale: null,
            communeAncienne: null,
            rgpd: null,
            datePriseEffetAdresse: null,
            complementLocalisation: null,
            communeDeRattachement: null,
            caracteristiques: null,
            indicateurValidationBAN: false,
            indiceRepetitionAutre: null,
            is16PTriggered: false,
            dateEffet16P: null,
            empriseAeroport: null,
          },
          contact: {
            roleDonneesContact: null,
            mail: null,
            telephone: '0123456789',
            telecopie: null,
            optionRgpd: null,
            dateEffet: null,
            phoneCode: '+33',
          },
          compte: null,
          dateEffet: null,
          is29Or30PTriggered: false,
          is29Or30PInfoTriggered: false,
        },
        eirl: null,
        contratDAppuiDeclare: false,
        contratDAppui: null,
        insaisissabilite: {
          residencePrincipale: {
            residenceInsaisissable: true,
            nomResidence: null,
            dateEffet: null,
            statutPourLaFormalite: null,
            adresse: null,
            publication: null,
            is28PTriggered: false,
          },
          residencesSecondaires: null,
        },
        adresseCorrespondance: {
          roleAdresse: null,
          pays: null,
          codePays: 'FRA',
          codePostal: '75003',
          commune: 'Paris',
          codeInseeCommune: '75103',
          typeVoie: 'RUE',
          voie: 'Charlot',
          voieCodifiee: null,
          numVoie: '5',
          indiceRepetition: null,
          distributionSpeciale: null,
          communeAncienne: null,
          rgpd: null,
          datePriseEffetAdresse: null,
          complementLocalisation: null,
          communeDeRattachement: null,
          caracteristiques: null,
          indicateurValidationBAN: false,
          indiceRepetitionAutre: null,
          is16PTriggered: false,
          dateEffet16P: null,
          empriseAeroport: null,
        },
        contactCorrespondance: null,
        nomCorrespondance: null,
        qualiteCorrespondance: null,
      },
      adresseEntreprise: {
        caracteristiques: {
          ambulant: false,
          domiciliataire: false,
          indicateurDomicileEntrepreneur: true,
          indicateurAdresseEtablissement: false,
        },
        adresse: {
          roleAdresse: null,
          pays: null,
          codePays: 'FRA',
          codePostal: '75003',
          commune: 'Paris',
          codeInseeCommune: '75103',
          typeVoie: 'RUE',
          voie: 'Charlot',
          voieCodifiee: null,
          numVoie: '5',
          indiceRepetition: null,
          distributionSpeciale: null,
          communeAncienne: null,
          rgpd: null,
          datePriseEffetAdresse: null,
          complementLocalisation: null,
          communeDeRattachement: null,
          caracteristiques: null,
          indicateurValidationBAN: false,
          indiceRepetitionAutre: null,
          is16PTriggered: false,
          dateEffet16P: null,
          empriseAeroport: null,
        },
        entrepriseDomiciliataire: null,
        is21PTriggered: false,
        dateEffet21P: null,
      },
      composition: null,
      etablissementPrincipal: null,
      autresEtablissements: [
        {
          descriptionEtablissement: {
            rolePourEntreprise: '3',
            indicateurEtranger: null,
            pays: null,
            siret: null,
            autreIdentifiantEtranger: null,
            indicateurDomiciliataire: null,
            identifiantTemporaire: null,
            activiteNonSedentaire: null,
            enseigne: null,
            nomCommercial: null,
            autonomieJuridique: null,
            greffeImmatriculation: null,
            lieuImmatriculation: null,
            dateFinToutEffectifSalarie: null,
            destinationEtablissement: null,
            autreDestination: null,
            sansActiviteAutreActiviteSiege: null,
            indicateurEtablissementPrincipal: true,
            statutPourFormalite: null,
            dateEffet: null,
            dateEffetFermeture: null,
            dateEffetTransfert: null,
            nomEtablissement: null,
            statutOuvertFerme: null,
            is60PMFTriggered: false,
            identifiantTemporaireEtablissementDestination: null,
            partnerCenterId: null,
          },
          domiciliataire: null,
          adresseDomiciliataire: null,
          effectifSalarie: {
            presenceSalarie: false,
            nombreSalarie: null,
            nombreApprenti: null,
            nombreVrp: null,
            emploiPremierSalarie: false,
            dateEffetFinEmploiSalarie: null,
            nombreSaisonnier: null,
            nombreSalariesMarin: null,
            employeurSalarieNonRegimeFr: null,
            dateEffetDebutEmploiSalarie: null,
            dateEffet: null,
            dateCessationEmploiSalaries: null,
            finEmploiSalarie: null,
          },
          adresse: {
            roleAdresse: null,
            pays: null,
            codePays: 'FRA',
            codePostal: '75003',
            commune: 'Paris',
            codeInseeCommune: '75103',
            typeVoie: 'RUE',
            voie: 'Charlot',
            voieCodifiee: null,
            numVoie: '5',
            indiceRepetition: null,
            distributionSpeciale: null,
            communeAncienne: null,
            rgpd: null,
            datePriseEffetAdresse: null,
            complementLocalisation: null,
            communeDeRattachement: null,
            caracteristiques: null,
            indicateurValidationBAN: false,
            indiceRepetitionAutre: null,
            is16PTriggered: false,
            dateEffet16P: null,
            empriseAeroport: null,
          },
          activites: [
            {
              rolePourEtablissement: null,
              dateEffet: null,
              statutFormalite: null,
              indicateurPrincipal: true,
              indicateurProlongement: false,
              dateDebut: '2023-05-01',
              dateFin: null,
              exerciceActivite: 'P',
              dateDebutPeriode: null,
              dateFinPeriode: null,
              indicateurNonSedentaire: false,
              formeExercice: 'COMMERCIALE',
              categorisationActivite1: '07',
              precisionAutreCategorie1: null,
              categorisationActivite2: '03',
              precisionAutreCategorie2: null,
              categorisationActivite3: '07',
              precisionAutreCategorie3: null,
              categorisationActivite4: null,
              precisionAutreCategorie4: null,
              indicateurActiviteViticole: null,
              indicateurActiviteElevage: null,
              codeAprm: null,
              descriptionDetaillee: 'Développement informarique',
              precisionActivite: '99',
              precisionAutre: 'Activité de services',
              surface: null,
              qualiteNonSedentaire: null,
              autreMotifModification: null,
              totalitePartie: null,
              locationDpb: null,
              indicateurArtisteAuteur: false,
              soumissionAuPrecompte: null,
              indicateurMarinProfessionnel: false,
              rolePrincipalPourEntreprise: true,
              codeApe: null,
              typpl: null,
              numPraticien: null,
              statutPraticien: null,
              activiteRattacheeEirl: null,
              denominationEirlRattachee: null,
              activiteReguliere: null,
              indicateurPremiereActivite: null,
              dateEffetTransfert: null,
              identifiantTemporaireEtablissementDestination: null,
              ancienneAdresse: null,
              origine: {
                typeOrigine: '1',
                autreOrigine: null,
                contrat: null,
                ancienExploitant: null,
                publication: null,
                indicateurPersonneContractanteAncienExploitant: null,
              },
              jqpa: null,
              locationGeranceMandat: null,
              locataireGerantMandataire: null,
              adresseGerantMandataire: null,
              is20PTriggered: false,
              is61PMFTriggered: false,
              is62PMTriggered: false,
              is67PMTriggered: false,
              dateEffet20P: null,
              dateEffet67PM: null,
              is24Or27PMTriggered: false,
              dateEffet24Or27PM: null,
              effectifSalarie: null,
              buildings: null,
              is20MTriggered: false,
              dateEffet20M: null,
              indicateurActiviteOcculte: null,
              is25PActiviteTriggered: false,
              dateEffet25PActivite: null,
              is82PTriggered: false,
              destinationActivite: null,
              is29PMTriggered: false,
              dateEffet29PM: null,
              is63PMFTriggered: false,
              dateEffet63PMF: null,
              is53PMFTriggered: false,
              dateEffet53PMF: null,
              destinationActiviteAutre: null,
            },
          ],
          nomsDeDomaine: null,
          detailCessationEtablissement: null,
          dateEffetOuvertureEtablissement: null,
          isTransfer: false,
          is54PMFTriggered: false,
          is80PMFTriggered: false,
          is11PMFTriggered: false,
          is56PMFTriggered: false,
          isLocationGeranceOrGeranceMandat: false,
          locationGeranceMandat: null,
          locataireGerantMandataire: null,
          adresseGerantMandataire: null,
          siegeGerantMandataire: null,
          is82Or83Or84PTriggered: false,
          is84PTriggered: false,
          is53PMFTriggered: false,
          dateEffet53PMF: null,
          is84MTriggered: false,
        },
      ],
      optionsFiscales: {
        indicateurMembreExploitation: null,
        regimeImpositionBenefices: '116',
        optionParticuliereRegimeBenefice: null,
        regimeImpositionTVA: '310',
        periodiciteEtOptionsParticulieresTVA: null,
        conditionVersementTVA: null,
        dateClotureExerciceComptable: null,
        optionVersementLiberatoire: false,
        lieuImposition: null,
        dateEnregistrementStatuts: null,
        dateEffetFiscalite: null,
        regimeImpositionBenefices2: null,
        immeubles: null,
        optionParticuliereRegimeBenefice2: null,
        regimeImpositionTVA2: null,
        dateEffet: null,
        periodiciteEtOptionsParticulieresTVA2: null,
        taxeTroisPourcent: null,
        detentionParticipationSocieteFrancaise: null,
        periodiciteVersement: null,
        chiffreAffairePrevisionnelVente: null,
        chiffreAffairePrevisionnelService: null,
        deviseChiffreAffaire: null,
        numeroTVAIntra: null,
        redevableTVA: null,
        redevablePAS: null,
        numeroTVAFrance: null,
        clienteleIdentifieesTVA: null,
        clienteleParticuliers: null,
        clienteleAutre: null,
        ali: null,
        aic: null,
        lic: null,
        indicateurAutreOptionFiscale: null,
        autreOptionFiscale: null,
        conditionVersementTVA2: null,
        conditionVersementTVA3: null,
      },
      detailCessationEntreprise: null,
    },
    personneMorale: null,
    exploitation: null,
    declarant: null,
    piecesJointes: null,
    isCreatedViaSimplifiedFormalities: false,
    indicateurActive: null,
    isBackToDraft: null,
  },
  rneContent: null,
  referenceMandataire: 'Foo Bar SI',
  nomDossier: 'Foo Bar SI',
  typeFormalite: 'C',
  typePersonne: 'P',
  typeLiasse: null,
  numeroLiasseFormaliteAnterieur: null,
  mandataireId: 937509,
  codeAPE: null,
  diffusionINSEE: null,
  diffusionCommerciale: 'N',
  observationSignature: null,
  registreOrigine: null,
  regularizedFormalityId: null,
  hasRnippBeenCalled: false,
  formalityScope: [],
  created: '2023-05-22T10:50:45+02:00',
  updated: '2023-05-22T11:44:45+02:00',
  regularisation: false,
};
