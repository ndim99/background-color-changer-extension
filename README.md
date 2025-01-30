# Website Background Color Changer Extension

This Chrome extension allows you to change the background color of any website based on a custom domain and color that you specify. Once you set the color for a domain, the extension will automatically apply the chosen background color every time you visit that website.

## Features:
- Set a custom background color for any domain.
- Choose any color using the color picker in the extension popup.
- The background color is automatically applied every time you visit the specified domain.

## How to Use:
1. Install the extension by following the steps below.
2. Click on the extension icon in your Chrome toolbar.
3. Enter the website domain (e.g., `example.com`) and select a background color.
4. Click **Save**.
5. Visit the specified website, and the background color will be applied!

## Installation (Locally):
1. Clone or download this repository.
2. Open `chrome://extensions/` in your Chrome browser.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder where you saved the extension files.
5. The extension icon will appear in your toolbar.

## How it Works:
- The extension stores your domain-color preferences in the browser's local storage.
- On every page you visit, the content script checks if the domain has a saved color and applies it to the page’s background.

## License:
This project is open-source and available under the MIT License.
