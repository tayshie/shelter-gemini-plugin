export const shelter = {
  settings: {
    createStore: jest.fn(() => ({
      apiKey: 'test-api-key',
    })),
  },
  flux: {
    stores: {
      UserStore: {
        getCurrentUser: jest.fn(() => ({ id: 'user-id' })),
      },
      ChannelStore: {
        getCurrentlySelectedChannelId: jest.fn(() => 'channel-id'),
      },
      MessageStore: {
        getMessages: jest.fn(() => ({
          toArray: jest.fn(() => []),
        })),
      },
    },
    dispatcher: {
      dispatch: jest.fn(),
    },
  },
  ui: {
    showToast: jest.fn(),
  },
  plugins: {
    registerCommand: jest.fn(),
    unregisterCommand: jest.fn(),
  },
};
