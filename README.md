# Shelter Gemini Message Generator Plugin

This Shelter plugin integrates with Google's Gemini 2.5 Flash model to generate chat messages based on conversation history and a user-provided prompt.

## Installation

1.  Go to Shelter's settings.
2.  In the "Plugins" section, paste the following URL into the "Install from URL" box:
    ```
    https://Tayshie.github.io/shelter-gemini-plugin/
    ```
    
3.  Click "Install". The plugin will be added to your plugins list.
4.  Enable the "Gemini Message Generator" plugin.

## Configuration (API Key)

To use this plugin, you need a Google Gemini API key.

1.  **Obtain a Gemini API Key:**
    *   Go to the [Google AI Studio](https://aistudio.google.com/app/apikey) website.
    *   Create a new API key and copy it.

2.  **Enter API Key in Shelter:**
    *   In Shelter's settings, find the "Gemini Message Generator" plugin and click on its settings.
    *   Paste your Gemini API key into the text field.

## Usage

Use the `/gemini` command in any chat channel:
`/gemini <your_prompt_here>`

## Building from Source

If you want to modify the plugin, you'll need to build it from the source code. This project uses [Lune](https://shelter.uwu.network/guides/lune) as its build tool.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/shelter-gemini-plugin.git
    cd shelter-gemini-plugin
    ```

2.  **Install Dependencies:**
    This project uses pnpm.
    ```bash
    pnpm install
    ```

3.  **Build the Plugin:**
    ```bash
    pnpm build
    ```
    This command will generate the `plugin.json` manifest in the root directory and the compiled code in `dist/`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
