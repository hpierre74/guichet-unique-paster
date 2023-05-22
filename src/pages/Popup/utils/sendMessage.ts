// We can trigger this extension only from the guichet unique page
export const sendMessageToActiveTab = async (
  message: string
): Promise<void> => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  if (tab.id) {
    await chrome.tabs.sendMessage(tab.id, message);
  }
};
