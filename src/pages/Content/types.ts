import z from 'zod';
import {
  ActivityOriginSchema,
  ActivitySchema,
  AddressSchema,
  BusinessAddressSchema,
  ContactInfoSchema,
  ContentSchema,
  EditDraftBodySchema,
  EntrepreneurSchema,
  EstablishmentDescriptionSchema,
  EstablishmentSchema,
  IdentitySchema,
  InsolvencySchema,
  NatureCreationSchema,
  PersonDescriptionSchema,
  PhysicalPersonSchema,
  ResidencySchema,
  SalariedWorkforceSchema,
  TaxInfoSchema,
  VoletSocialSchema,
} from './schemas';

// types
export type Activity = z.infer<typeof ActivitySchema>;
export type ActivityOrigin = z.infer<typeof ActivityOriginSchema>;
export type Address = z.infer<typeof AddressSchema>;
export type BusinessAddress = z.infer<typeof BusinessAddressSchema>;
export type ContactInfo = z.infer<typeof ContactInfoSchema>;
export type Content = z.infer<typeof ContentSchema>;
export type Entrepreneur = z.infer<typeof EntrepreneurSchema>;
export type Establishment = z.infer<typeof EstablishmentSchema>;
export type EstablishmentDescription = z.infer<
  typeof EstablishmentDescriptionSchema
>;
export type Identity = z.infer<typeof IdentitySchema>;
export type Insolvency = z.infer<typeof InsolvencySchema>;
export type NatureCreation = z.infer<typeof NatureCreationSchema>;
export type PersonDescription = z.infer<typeof PersonDescriptionSchema>;
export type PhysicalPerson = z.infer<typeof PhysicalPersonSchema>;
export type Residency = z.infer<typeof ResidencySchema>;
export type SalariedWorkforce = z.infer<typeof SalariedWorkforceSchema>;
export type TaxInfo = z.infer<typeof TaxInfoSchema>;
export type VoletSocial = z.infer<typeof VoletSocialSchema>;

// payloads
export type EditDraftBody = z.infer<typeof EditDraftBodySchema>;
