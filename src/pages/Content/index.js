import { BASE_REFERRER_URL } from './constants/referrers';
import { createDraft } from './services/createDraft';
import { getCreateDraftBody } from './services/createDraft/utils';
import { editDraft } from './services/editDraft';
import { getEditDraftBody } from './services/editDraft/utils';

// Warning: You must reload the extension for modifications to take effect
console.log('Content script initialized!');

chrome.runtime.onMessage.addListener(async (message) => {
  try {
    const payload = JSON.parse(message);

    // TODO: Modify the method to actually transform payload
    const createDraftBody = getCreateDraftBody(payload);

    const createdDraft = await createDraft(createDraftBody);

    // TODO: Modify the method to actually transform payload
    const editDraftBody = getEditDraftBody(payload, createdDraft);

    await editDraft(createdDraft.id, editDraftBody);

    window.location.href(`${BASE_REFERRER_URL}/drafts/${createdDraft.id}/edit`);
  } catch (error) {
    console.error(error);
  }
});
