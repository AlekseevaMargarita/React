export const selectMessagesByChatId = (chatId) => (state) =>
    state.messages.messages[chatId];
