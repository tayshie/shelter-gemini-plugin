import { shelter } from '@shelter/shelter';
import { generateMessage } from './index.jsx';

// Mock fetch
global.fetch = jest.fn();

describe('generateMessage', () => {
  beforeEach(() => {
    fetch.mockClear();
    shelter.ui.showToast.mockClear();
  });

  it('should show a specific error toast when content is missing', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        candidates: [{}],
      }),
    });

    await generateMessage('test prompt', []);

    expect(shelter.ui.showToast).toHaveBeenCalledWith({
      title: 'Gemini Plugin Error',
      content: "Invalid API response: content is missing.",
    });
  });

  it('should show a specific error toast when parts are missing', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        candidates: [{
          content: {},
        }],
      }),
    });

    await generateMessage('test prompt', []);

    expect(shelter.ui.showToast).toHaveBeenCalledWith({
      title: 'Gemini Plugin Error',
      content: "Invalid API response: parts are missing.",
    });
  });

  it('should show a specific error toast when parts are empty', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        candidates: [{
          content: {
            parts: [],
          },
        }],
      }),
    });

    await generateMessage('test prompt', []);

    expect(shelter.ui.showToast).toHaveBeenCalledWith({
      title: 'Gemini Plugin Error',
      content: "Invalid API response: parts are empty.",
    });
  });
});
