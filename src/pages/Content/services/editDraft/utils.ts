import { EditDraftBody } from '../../types';
import { CreateDraftResponse } from './../createDraft/types';

export const getEditDraftBody = (
  data: any,
  createDraftResponse: CreateDraftResponse
): EditDraftBody => {
  // TODO: Implement data transformation
  return { ...createDraftResponse, ...data } as EditDraftBody;
};
