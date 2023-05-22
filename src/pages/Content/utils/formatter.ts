import { set } from 'immutable-set';

export type GuichetFormDa = {
  [key: string]: string | boolean | null;
  'common.nomDossier': string;
  'entrepreneur-description.prenoms': string;
  'entrepreneur-description.prenoms1': string;
  'entrepreneur-description.nom': string;
  'entrepreneur-description.titre': string;
  'entrepreneur-description.nomUsage': string;
  'entrepreneur-description.pseudonyme': string;
  'entrepreneur-description.dateDeNaissance': string;
  'entrepreneur-description.paysNaissance': string;
  'entrepreneur-description.lieuDeNaissance': string;
  'entrepreneur-description.indicateurDeNonSedentarite': boolean;
  'entrepreneur-adresse.codePays': string;
  'entrepreneur-adresse.voie': '76 RUE Félix Brun 69007 Lyon';
  'entrepreneur-adresse.complementLocalisation': string;
  'entrepreneur-contact.mail': string;
  'entrepreneur-contact.phoneCode': string;
  'entrepreneur-contact.telephone': string;
  'entrepreneur-volet-social.numeroSecu': string;
  'entrepreneur-volet-social.indicateurActiviteAnterieure': boolean;
  'entrepreneur-volet-social.indicateurActiviteAnterieure_1': boolean;
  'entrepreneur-volet-social.organismeAssuranceMaladieActuelle': string;
  'entrepreneur-volet-social.demandeAcre': boolean;
  'entrepreneur-volet-social.demandeAcre_1': boolean;
  'entrepreneur-volet-social.activiteSimultanee': boolean;
  'entrepreneur-volet-social.activiteSimultanee_1': boolean;
  'entrepreneur-volet-social.affiliationPamBiologiste': boolean;
  'entrepreneur-volet-social.affiliationPamBiologiste_1': boolean;
  'entrepreneur-volet-social.affiliationPamPharmacien': boolean;
  'entrepreneur-volet-social.affiliationPamPharmacien_1': boolean;
};

export const formatToGuichetUnique = (data: GuichetFormDa) => {
  let formattedData = {};

  Object.keys(data).forEach((key) => {
    const value = data[key];

    formattedData = set(formattedData, key, value);
  });

  return formattedData;
};
