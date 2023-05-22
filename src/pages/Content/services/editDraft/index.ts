import { DRAFT_API_BASE_URL } from '../../constants/api';
import { HEADERS } from '../../constants/headers';
import { BASE_REFERRER_URL } from '../../constants/referrers';
import { EditDraftBody, EditDraftResponse } from './types';

export const editDraft = async (
  draftId: number,
  body: EditDraftBody
): Promise<EditDraftResponse> => {
  try {
    const response = await fetch(`${DRAFT_API_BASE_URL}/${draftId}`, {
      headers: HEADERS,
      referrer: `${BASE_REFERRER_URL}/drafts/${draftId}/edit`,
      referrerPolicy: 'same-origin',
      body: JSON.stringify(body),
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
    });

    return response.json();
  } catch (error) {
    console.info('Error while editing draft');
    console.error(error);
    throw error;
  }
};
