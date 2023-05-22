import { CreateDraftResponse } from './../createDraft/types';
import { EditDraftBody } from './types';

export const getEditDraftBody = (
  data: any,
  createDraftResponse: CreateDraftResponse
): EditDraftBody => {
  // TODO: Implement data transformation
  return { ...createDraftResponse, ...data } as EditDraftBody;
};
