# Shelter Gemini Message Generator Plugin

This Shelter plugin integrates with Google's Gemini 1.5 Flash model to generate chat messages based on conversation history and a user-provided prompt.

## Features

*   **Context-Aware Generation:** Leverages recent chat history to provide relevant responses.
*   **Customizable Prompts:** Users can provide specific prompts to guide the AI's output.
*   **Seamless Integration:** Utilizes Shelter's command system for easy access.

## Installation

1.  **Clone the Repository:**
    Navigate to your Shelter plugins folder (this location varies by operating system and Shelter setup) and clone this repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/shelter-gemini-plugin.git
    ```
    (Replace `YOUR_USERNAME` with your actual GitHub username and adjust the path if necessary).

2.  **Manual Download (Alternative):**
    *   Create a new folder named `shelter-gemini-plugin` inside your Shelter plugins directory.
    *   Download `plugin.json` and `index.js` from this repository and place them into the `shelter-gemini-plugin` folder.

3.  **Enable in Shelter:**
    *   Open your Discord client with Shelter loaded.
    *   Go to Shelter's settings.
    *   Locate the "Gemini Message Generator" plugin and enable it.

## Configuration (API Key)

To use this plugin, you need a Google Gemini API key.

1.  **Obtain a Gemini API Key:**
    *   Go to the [Google AI Studio](https://aistudio.google.com/app/apikey) website.
    *   Sign in with your Google account.
    *   Create a new API key.
    *   Copy the generated API key.

2.  **Enter API Key in Shelter:**
    *   In Shelter's settings, find the "Gemini Message Generator" plugin.
    *   Click on its settings.
    *   Paste your copied Gemini API key into the provided text field.

## Usage

Once the plugin is enabled and configured with your API key, you can use the `/gemini` command in any chat channel:
