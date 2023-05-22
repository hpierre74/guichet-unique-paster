import { createDraft } from './services/createDraft';
import { editDraft } from './services/editDraft';

// Warning: You must reload the extension for modifications to take effect
console.log('Content script initialized!');

chrome.runtime.onMessage.addListener(async (message) => {
  try {
    const payload = JSON.parse(message);
    const createdDraft = await createDraft(payload);

    console.log(createdDraft);

    await editDraft(createdDraft.id, payload);
  } catch (error) {
    console.error(error);
  }
});
