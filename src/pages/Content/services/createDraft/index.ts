import { DRAFT_API_BASE_URL } from '../../constants/api';
import { HEADERS } from '../../constants/headers';
import { BASE_REFERRER_URL } from '../../constants/referrers';
import { CreateDraftBody, CreateDraftResponse } from './types';

export const createDraft = async (
  body: CreateDraftBody
): Promise<CreateDraftResponse> => {
  const response = await fetch(DRAFT_API_BASE_URL, {
    headers: HEADERS,
    referrer: `${BASE_REFERRER_URL}/create`,
    referrerPolicy: 'same-origin',
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  });

  return response.json();
};
