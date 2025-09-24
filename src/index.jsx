import { shelter } from "@shelter/shelter";

const settings = shelter.settings.createStore({
  apiKey: "",
});

// CHANGED: Model updated from 1.5 to 2.5
const geminiEndpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-latest:generateContent";

const generateMessage = async (prompt, history) => {
  const ankey = settings.apiKey;
  if (!ankey) {
    shelter.ui.showToast({
      title: "Gemini Plugin Error",
      content: "API key not set in plugin settings.",
    });
    return;
  }

  const formattedHistory = history.map((msg) => ({
    role: msg.author.id === shelter.flux.stores.UserStore.getCurrentUser().id ? "user" : "model",
    parts: [{ text: msg.content }],
  }));

  try {
    const response = await fetch(`${geminiEndpoint}?key=${ankey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [...formattedHistory, { role: "user", parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }

    const data = await response.json();
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No candidates returned from API.");
    }
    const generatedText = data.candidates[0].content.parts[0].text;

    shelter.flux.dispatcher.dispatch({
      type: "SEND_MESSAGE",
      channelId: shelter.flux.stores.ChannelStore.getCurrentlySelectedChannelId(),
      content: generatedText,
    });
  } catch (error) {
    console.error("Gemini API error:", error);
    shelter.ui.showToast({
      title: "Gemini Plugin Error",
      content: "Failed to generate message. See console for details.",
    });
  }
};

const command = {
  name: "gemini",
  displayName: "gemini",
  description: "Generate a message with Gemini",
  options: [{
    name: "prompt",
    displayName: "prompt",
    description: "The prompt for the message generation",
    type: 3, // String
    required: true,
  }],
  execute: async (interaction, options) => {
    const prompt = options.getString("prompt");
    const channelId = shelter.flux.stores.ChannelStore.getCurrentlySelectedChannelId();
    const messages = shelter.flux.stores.MessageStore.getMessages(channelId);
    const history = messages.toArray().slice(-10);
    generateMessage(prompt, history);
    return {
      // CHANGED: Response message updated from 1.5 to 2.5
      content: "Generating message with Gemini 2.5 Flash...",
      flags: 64, // Ephemeral
    };
  },
};

const SettingsPage = () => (
  <div>
    <shelter.ui.Textbox
      placeholder="Enter your Gemini API Key"
      value={settings.apiKey}
      onChange={(v) => (settings.apiKey = v)}
    />
  </div>
);

export const onLoad = () => {
  shelter.plugins.registerCommand(command);
};

export const onUnload = () => {
  shelter.plugins.unregisterCommand(command.name);
};

export const settingsUI = SettingsPage;
