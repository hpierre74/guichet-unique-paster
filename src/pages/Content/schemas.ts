import { z } from 'zod';

export const AddressSchema = z.object({
  caracteristiques: z.nullable(z.unknown()),
  codeInseeCommune: z.string(),
  codePays: z.string(),
  codePostal: z.string(),
  commune: z.string(),
  communeAncienne: z.nullable(z.string()),
  communeDeRattachement: z.nullable(z.string()),
  complementLocalisation: z.nullable(z.string()),
  dateEffet16P: z.nullable(z.string()),
  datePriseEffetAdresse: z.nullable(z.string()),
  distributionSpeciale: z.nullable(z.string()),
  empriseAeroport: z.nullable(z.string()),
  indicateurValidationBAN: z.boolean(),
  indiceRepetition: z.nullable(z.string()),
  indiceRepetitionAutre: z.nullable(z.string()),
  is16PTriggered: z.boolean(),
  numVoie: z.string(),
  pays: z.nullable(z.string()),
  rgpd: z.nullable(z.string()),
  roleAdresse: z.nullable(z.string()),
  typeVoie: z.string(),
  voie: z.string(),
  voieCodifiee: z.nullable(z.string()),
});

export const NatureCreationSchema = z.object({
  dateCreation: z.nullable(z.string()),
  dateDepotCreation: z.nullable(z.string()),
  eirl: z.boolean(),
  entrepriseAgricole: z.boolean(),
  etablieEnFrance: z.boolean(),
  formeJuridique: z.string(),
  indicateurEtablissementFictif: z.boolean(),
  microEntreprise: z.boolean(),
  relieeEntrepriseAgricole: z.boolean(),
  salarieEnFrance: z.boolean(),
  seulsBeneficiairesModifies: z.nullable(z.unknown()),
  societeEtrangere: z.boolean(),
  typeExploitation: z.nullable(z.string()),
});

export const VoletSocialSchema = z.object({
  activiteAnterieureActivite: z.nullable(z.string()),
  activiteAnterieureCodeGeo: z.nullable(z.string()),
  activiteAnterieureCodePostal: z.nullable(z.string()),
  activiteAnterieureCommune: z.nullable(z.string()),
  activiteAnterieureDateFin: z.nullable(z.string()),
  activiteAnterieurePays: z.nullable(z.string()),
  activiteNonSalariee: z.boolean(),
  activiteSimultanee: z.boolean(),
  affiliationPamBiologiste: z.boolean(),
  affiliationPamPharmacien: z.boolean(),
  ancienNumeroSiren: z.nullable(z.string()),
  autreActiviteExercee: z.nullable(z.string()),
  autreOrganisme: z.nullable(z.string()),
  choixOrganismeAssuranceMaladie: z.nullable(z.string()),
  dateEffetVoletSocial: z.nullable(z.string()),
  declarationMineur: z.null(),
  demandeAcre: z.boolean(),
  departementOrganismeAssuranceMaladie: z.nullable(z.string()),
  eirl: z.boolean(),
  entrepriseAgricole: z.boolean(),
  etablieEnFrance: z.boolean(),
  formeJuridique: z.nullable(z.string()),
  indicateurActiviteAnterieure: z.boolean(),
  indicateurEtablissementFictif: z.boolean(),
  indicateurRegimeAssuranceMaladie: z.nullable(z.string()),
  jeuneAgriculteur: z.null(),
  microEntreprise: z.boolean(),
  mineur: z.null(),
  natureVoletSocial: z.nullable(z.string()),
  nbMineursDeclares: z.null(),
  nonSalarieOuConjointBeneficiaireRsaRmi: z.null(),
  organismeAssuranceMaladieActuelle: z.nullable(z.string()),
  organismePension: z.null(),
  relieeEntrepriseAgricole: z.boolean(),
  salarieEnFrance: z.boolean(),
  situationVisAVisMsa: z.nullable(z.string()),
  societeEtrangere: z.boolean(),
  statutExerciceActiviteSimultanee: z.nullable(z.string()),
});

export const PersonDescriptionSchema = z.object({
  codeInseeGeographique: z.string(),
  codeNationalite: z.string(),
  codePostalNaissance: z.string(),
  confirmRnippMismatch: z.nullable(z.string()),
  dateDeNaissance: z.string(),
  dateEffet10P: z.nullable(z.string()),
  dateEffet15P: z.nullable(z.string()),
  dateEffet17P: z.nullable(z.string()),
  dateEffetRoleDeclarant: z.nullable(z.string()),
  formeSociale: z.nullable(z.string()),
  genre: z.string(),
  indicateurDeNonSedentarite: z.boolean(),
  is10PTriggered: z.boolean(),
  is15PTriggered: z.boolean(),
  is17PTriggered: z.boolean(),
  lieuDeNaissance: z.string(),
  lieuRegistre: z.nullable(z.string()),
  mineurEmancipe: z.nullable(z.string()),
  nationalite: z.nullable(z.string()),
  nicSiege: z.nullable(z.string()),
  nom: z.string(),
  nomUsage: z.nullable(z.string()),
  numeroSecu: z.string(),
  optionRgpd: z.string(),
  paysNaissance: z.string(),
  prenoms: z.array(z.string()),
  pseudonyme: z.nullable(z.string()),
  qualiteDeNonSedentarite: z.nullable(z.string()),
  role: z.nullable(z.string()),
  siren: z.nullable(z.string()),
  situationMatrimoniale: z.string(),
  statutVisAVisFormalite: z.nullable(z.string()),
  titre: z.nullable(z.string()),
});

export const ContactInfoSchema = z.object({
  dateEffet: z.nullable(z.string()),
  mail: z.nullable(z.string()),
  optionRgpd: z.nullable(z.string()),
  phoneCode: z.string(),
  roleDonneesContact: z.nullable(z.string()),
  telecopie: z.nullable(z.string()),
  telephone: z.string(),
});

export const ResidencySchema = z.object({
  adresse: z.nullable(AddressSchema.partial()),
  dateEffet: z.nullable(z.string()),
  is28PTriggered: z.boolean(),
  nomResidence: z.nullable(z.string()),
  publication: z.nullable(
    z.object({
      typePublication: z.string(),
      lieuPublication: z.string(),
    })
  ),
  residenceInsaisissable: z.boolean(),
  statutPourLaFormalite: z.nullable(z.string()),
});

export const InsolvencySchema = z.object({
  residencePrincipale: ResidencySchema,
  residencesSecondaires: z.nullable(z.array(ResidencySchema)),
});

export const BusinessAddressSchema = z.object({
  adresse: AddressSchema,
  caracteristiques: z.object({
    ambulant: z.boolean(),
    domiciliataire: z.boolean(),
    indicateurDomicileEntrepreneur: z.boolean(),
    indicateurAdresseEtablissement: z.boolean(),
  }),
  dateEffet21P: z.nullable(z.string()),
  entrepriseDomiciliataire: z.nullable(z.unknown()),
  is21PTriggered: z.boolean(),
});

export const EntrepreneurSchema = z.object({
  adresseDomicile: AddressSchema,
  capaciteJuridique: z.nullable(z.unknown()),
  compte: z.nullable(z.string()),
  conjoint: z.nullable(z.unknown()),
  contact: ContactInfoSchema,
  dateEffet35M: z.nullable(z.string()),
  dateEffet: z.nullable(z.string()),
  descriptionEntrepreneur: z.nullable(z.string()),
  descriptionPersonne: PersonDescriptionSchema,
  greffeImmatriculation: z.nullable(z.string()),
  is29Or30PInfoTriggered: z.boolean(),
  is29Or30PTriggered: z.boolean(),
  is35MTriggered: z.boolean(),
  noUniqueIdentification: z.nullable(z.string()),
  nouveauRoleConjoint: z.nullable(z.unknown()),
  regimeMicroSocial: z.object({
    optionMicroSocial: z.boolean(),
    periodiciteVersement: z.string(),
  }),
  roleConjoint: z.nullable(z.unknown()),
  voletSocial: VoletSocialSchema,
});

export const ActivityOriginSchema = z.object({
  ancienExploitant: z.nullable(z.unknown()),
  autreOrigine: z.nullable(z.unknown()),
  contrat: z.nullable(z.unknown()),
  indicateurPersonneContractanteAncienExploitant: z.nullable(z.unknown()),
  publication: z.nullable(z.unknown()),
  typeOrigine: z.string(),
});

export const ActivitySchema = z.object({
  activiteRattacheeEirl: z.nullable(z.unknown()),
  activiteReguliere: z.nullable(z.unknown()),
  adresseGerantMandataire: z.nullable(AddressSchema),
  ancienneAdresse: z.nullable(AddressSchema),
  autreMotifModification: z.nullable(z.unknown()),
  buildings: z.nullable(z.unknown()),
  categorisationActivite1: z.string(),
  categorisationActivite2: z.string(),
  categorisationActivite3: z.string(),
  categorisationActivite4: z.nullable(z.unknown()),
  codeApe: z.nullable(z.unknown()),
  codeAprm: z.nullable(z.unknown()),
  dateDebut: z.string(),
  dateDebutPeriode: z.nullable(z.unknown()),
  dateEffet20M: z.nullable(z.unknown()),
  dateEffet20P: z.nullable(z.unknown()),
  dateEffet24Or27PM: z.nullable(z.unknown()),
  dateEffet25PActivite: z.nullable(z.unknown()),
  dateEffet29PM: z.nullable(z.unknown()),
  dateEffet53PMF: z.nullable(z.unknown()),
  dateEffet63PMF: z.nullable(z.unknown()),
  dateEffet67PM: z.nullable(z.unknown()),
  dateEffet: z.nullable(z.unknown()),
  dateEffetTransfert: z.nullable(z.unknown()),
  dateFin: z.nullable(z.unknown()),
  dateFinPeriode: z.nullable(z.unknown()),
  denominationEirlRattachee: z.nullable(z.unknown()),
  descriptionDetaillee: z.string(),
  destinationActivite: z.nullable(z.unknown()),
  destinationActiviteAutre: z.nullable(z.unknown()),
  effectifSalarie: z.nullable(z.unknown()),
  exerciceActivite: z.string(),
  formeExercice: z.string(),
  identifiantTemporaireEtablissementDestination: z.nullable(z.unknown()),
  indicateurActiviteElevage: z.nullable(z.unknown()),
  indicateurActiviteOcculte: z.nullable(z.unknown()),
  indicateurActiviteViticole: z.nullable(z.unknown()),
  indicateurArtisteAuteur: z.boolean(),
  indicateurMarinProfessionnel: z.boolean(),
  indicateurNonSedentaire: z.boolean(),
  indicateurPremiereActivite: z.nullable(z.unknown()),
  indicateurPrincipal: z.boolean(),
  indicateurProlongement: z.boolean(),
  is20MTriggered: z.boolean(),
  is20PTriggered: z.boolean(),
  is24Or27PMTriggered: z.boolean(),
  is25PActiviteTriggered: z.boolean(),
  is29PMTriggered: z.boolean(),
  is53PMFTriggered: z.boolean(),
  is61PMFTriggered: z.boolean(),
  is62PMTriggered: z.boolean(),
  is63PMFTriggered: z.boolean(),
  is67PMTriggered: z.boolean(),
  is82PTriggered: z.boolean(),
  jqpa: z.nullable(z.unknown()),
  locataireGerantMandataire: z.nullable(z.unknown()),
  locationDpb: z.nullable(z.unknown()),
  locationGeranceMandat: z.nullable(z.unknown()),
  numPraticien: z.nullable(z.unknown()),
  origine: ActivityOriginSchema,
  precisionActivite: z.string(),
  precisionAutre: z.string(),
  precisionAutreCategorie1: z.nullable(z.unknown()),
  precisionAutreCategorie2: z.nullable(z.unknown()),
  precisionAutreCategorie3: z.nullable(z.unknown()),
  precisionAutreCategorie4: z.nullable(z.unknown()),
  qualiteNonSedentaire: z.nullable(z.unknown()),
  rolePourEtablissement: z.nullable(z.unknown()),
  rolePrincipalPourEntreprise: z.boolean(),
  soumissionAuPrecompte: z.nullable(z.unknown()),
  statutFormalite: z.nullable(z.unknown()),
  statutPraticien: z.nullable(z.unknown()),
  surface: z.nullable(z.unknown()),
  totalitePartie: z.nullable(z.unknown()),
  typpl: z.nullable(z.unknown()),
});

export const EstablishmentDescriptionSchema = z.object({
  activiteNonSedentaire: z.nullable(z.string()),
  autonomieJuridique: z.nullable(z.string()),
  autreDestination: z.nullable(z.unknown()),
  autreIdentifiantEtranger: z.nullable(z.string()),
  dateEffet: z.nullable(z.string()),
  dateEffetFermeture: z.nullable(z.string()),
  dateEffetTransfert: z.nullable(z.string()),
  dateFinToutEffectifSalarie: z.nullable(z.string()),
  destinationEtablissement: z.nullable(z.unknown()),
  enseigne: z.nullable(z.string()),
  greffeImmatriculation: z.nullable(z.string()),
  identifiantTemporaire: z.nullable(z.string()),
  identifiantTemporaireEtablissementDestination: z.nullable(z.string()),
  indicateurDomiciliataire: z.nullable(z.string()),
  indicateurEtablissementPrincipal: z.boolean(),
  indicateurEtranger: z.nullable(z.string()),
  is60PMFTriggered: z.boolean(),
  lieuImmatriculation: z.nullable(z.string()),
  nomCommercial: z.nullable(z.string()),
  nomEtablissement: z.nullable(z.string()),
  partnerCenterId: z.nullable(z.string()),
  pays: z.nullable(z.string()),
  rolePourEntreprise: z.nullable(z.string()),
  sansActiviteAutreActiviteSiege: z.nullable(z.unknown()),
  siret: z.nullable(z.string()),
  statutOuvertFerme: z.nullable(z.null()),
  statutPourFormalite: z.nullable(z.string()),
});

export const SalariedWorkforceSchema = z.object({
  dateCessationEmploiSalaries: z.nullable(z.string()),
  dateEffet: z.nullable(z.string()),
  dateEffetDebutEmploiSalarie: z.nullable(z.string()),
  dateEffetFinEmploiSalarie: z.nullable(z.string()),
  emploiPremierSalarie: z.boolean(),
  employeurSalarieNonRegimeFr: z.nullable(z.unknown()),
  finEmploiSalarie: z.nullable(z.unknown()),
  nombreApprenti: z.nullable(z.union([z.string(), z.number()])),
  nombreSaisonnier: z.nullable(z.union([z.string(), z.number()])),
  nombreSalarie: z.nullable(z.union([z.string(), z.number()])),
  nombreSalariesMarin: z.nullable(z.union([z.string(), z.number()])),
  nombreVrp: z.nullable(z.union([z.string(), z.number()])),
  presenceSalarie: z.boolean(),
});

export const EstablishmentSchema = z.object({
  activites: z.array(ActivitySchema),
  adresse: AddressSchema,
  adresseDomiciliataire: z.nullable(AddressSchema),
  adresseGerantMandataire: z.null(),
  dateEffet53PMF: z.null(),
  dateEffetOuvertureEtablissement: z.null(),
  descriptionEtablissement: EstablishmentDescriptionSchema,
  detailCessationEtablissement: z.null(),
  domiciliataire: z.nullable(z.unknown()),
  effectifSalarie: SalariedWorkforceSchema,
  is11PMFTriggered: z.boolean(),
  is53PMFTriggered: z.boolean(),
  is54PMFTriggered: z.boolean(),
  is56PMFTriggered: z.boolean(),
  is80PMFTriggered: z.boolean(),
  is82Or83Or84PTriggered: z.boolean(),
  is84MTriggered: z.boolean(),
  is84PTriggered: z.boolean(),
  isLocationGeranceOrGeranceMandat: z.boolean(),
  isTransfer: z.boolean(),
  locataireGerantMandataire: z.null(),
  locationGeranceMandat: z.null(),
  nomsDeDomaine: z.null(),
  siegeGerantMandataire: z.null(),
});

export const TaxInfoSchema = z.object({
  aic: z.nullable(z.unknown()),
  ali: z.nullable(z.unknown()),
  autreOptionFiscale: z.nullable(z.unknown()),
  chiffreAffairePrevisionnelService: z.nullable(z.unknown()),
  chiffreAffairePrevisionnelVente: z.nullable(z.unknown()),
  clienteleAutre: z.nullable(z.unknown()),
  clienteleIdentifieesTVA: z.nullable(z.unknown()),
  clienteleParticuliers: z.nullable(z.unknown()),
  conditionVersementTVA2: z.nullable(z.unknown()),
  conditionVersementTVA3: z.nullable(z.unknown()),
  conditionVersementTVA: z.nullable(z.unknown()),
  dateClotureExerciceComptable: z.nullable(z.unknown()),
  dateEffet: z.nullable(z.unknown()),
  dateEffetFiscalite: z.nullable(z.unknown()),
  dateEnregistrementStatuts: z.nullable(z.unknown()),
  detentionParticipationSocieteFrancaise: z.nullable(z.unknown()),
  deviseChiffreAffaire: z.nullable(z.unknown()),
  immeubles: z.nullable(z.unknown()),
  indicateurAutreOptionFiscale: z.nullable(z.unknown()),
  indicateurMembreExploitation: z.nullable(z.unknown()),
  lic: z.nullable(z.unknown()),
  lieuImposition: z.nullable(z.unknown()),
  numeroTVAFrance: z.nullable(z.unknown()),
  numeroTVAIntra: z.nullable(z.unknown()),
  optionParticuliereRegimeBenefice2: z.nullable(z.unknown()),
  optionParticuliereRegimeBenefice: z.nullable(z.unknown()),
  optionVersementLiberatoire: z.boolean(),
  periodiciteEtOptionsParticulieresTVA2: z.nullable(z.unknown()),
  periodiciteEtOptionsParticulieresTVA: z.nullable(z.unknown()),
  periodiciteVersement: z.nullable(z.unknown()),
  redevablePAS: z.nullable(z.unknown()),
  redevableTVA: z.nullable(z.unknown()),
  regimeImpositionBenefices2: z.nullable(z.unknown()),
  regimeImpositionBenefices: z.string(),
  regimeImpositionTVA2: z.nullable(z.unknown()),
  regimeImpositionTVA: z.string(),
  taxeTroisPourcent: z.nullable(z.unknown()),
});

export const IdentitySchema = z.object({
  adresseCorrespondance: AddressSchema,
  contactCorrespondance: z.nullable(z.string()),
  contratDAppui: z.nullable(z.string()),
  contratDAppuiDeclare: z.boolean(),
  eirl: z.nullable(z.string()),
  entrepreneur: EntrepreneurSchema,
  entreprise: z.nullable(z.string()),
  insaisissabilite: InsolvencySchema,
  nomCorrespondance: z.nullable(z.string()),
  qualiteCorrespondance: z.nullable(z.string()),
});

export const PhysicalPersonSchema = z.object({
  adresseEntreprise: BusinessAddressSchema.optional(),
  autresEtablissements: z.array(EstablishmentSchema),
  composition: z.nullable(z.string()),
  detailCessationEntreprise: z.nullable(z.unknown()),
  etablissementPrincipal: z.null(),
  identite: IdentitySchema,
  optionsFiscales: TaxInfoSchema,
});

export const ContentSchema = z.object({
  declarant: z.nullable(z.unknown()),
  evenementCessation: z.nullable(z.unknown()),
  exploitation: z.nullable(z.unknown()),
  formeExerciceActivitePrincipale: z.string(),
  indicateurActive: z.nullable(z.unknown()),
  indicateurPoursuiteCessation: z.nullable(z.unknown()),
  isBackToDraft: z.nullable(z.boolean()),
  isCreatedViaSimplifiedFormalities: z.boolean(),
  natureCessation: z.nullable(z.unknown()),
  natureCreation: NatureCreationSchema,
  personneMorale: z.nullable(z.unknown()),
  personnePhysique: PhysicalPersonSchema,
  piecesJointes: z.nullable(z.array(z.unknown())),
  succursaleOuFiliale: z.string(),
  tvaIntraCommunautaire: z.nullable(z.unknown()),
});

export const EditDraftBodySchema = z.object({
  codeAPE: z.nullable(z.unknown()),
  companyName: z.string(),
  content: ContentSchema,
  created: z.string(),
  diffusionCommerciale: z.string(),
  diffusionINSEE: z.nullable(z.unknown()),
  formalityDraftId: z.number().optional(),
  formalityScope: z.array(z.unknown()),
  hasRnippBeenCalled: z.boolean(),
  id: z.number(),
  mandataireId: z.number(),
  nomDossier: z.string(),
  numeroLiasseFormaliteAnterieur: z.nullable(z.unknown()),
  observationSignature: z.nullable(z.unknown()),
  referenceMandataire: z.string(),
  registreOrigine: z.nullable(z.unknown()),
  regularisation: z.boolean(),
  regularizedFormalityId: z.nullable(z.unknown()),
  rneContent: z.nullable(z.unknown()),
  siren: z.string().nullable(),
  typeFormalite: z.string(),
  typeLiasse: z.nullable(z.unknown()),
  typePersonne: z.string(),
  updated: z.string(),
});
