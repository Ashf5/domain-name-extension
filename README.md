# Link Domain Interceptor

**Link Domain Interceptor** is a Chrome extension that helps protect users from phishing and suspicious links in webmail services. When you click a link in your email, the extension displays a popup showing the destination domain and gives you the option to follow the link or cancel, helping you avoid scams and malicious redirects.

---

## Features

- **Domain Preview:** See the real domain before following any email link.
- **Security Check:** Quick access to a security report for the destination domain.
- **User Control:** Choose to follow the link or cancel with a single click.
- **Smart Positioning:** Popup appears near your click and stays within the visible area.
- **Supports Major Email Providers:** Works on Gmail, Outlook, Yahoo Mail, ProtonMail, AOL, Zoho, Fastmail, Yandex, and GMX.

---

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the project folder.

---

## Usage

1. Open your webmail (Gmail, Outlook, etc.).
2. Click any link in an email.
3. A popup will appear showing the destination domain and two buttons:
   - **Follow link:** Proceed to the destination.
   - **Never mind:** Cancel navigation.
4. Optionally, click "Check Report" to view a security analysis of the domain.

---

## Supported Email Sites

- Gmail (`mail.google.com`)
- Outlook (`outlook.live.com`)
- Yahoo Mail (`mail.yahoo.com`)
- ProtonMail (`mail.proton.me`)
- AOL Mail (`mail.aol.com`)
- Zoho Mail (`mail.zoho.com`)
- Fastmail (`fastmail.com`)
- Yandex Mail (`mail.yandex.com`)
- GMX Mail (`mail.gmx.com`)

---

## How It Works

- The extension injects a content script into supported email sites.
- When you click a link, it intercepts the click, extracts the real destination (even through common redirect patterns), and displays a popup with the domain.
- You decide whether to continue or cancel.

---

## Development

- All main logic is in `content.js`.
- Styling is in `style.css`.
- Domain parsing uses [`psl.min.js`](https://github.com/lupomontero/psl).

---

## Credits

- [psl.js](https://github.com/lupomontero/psl) for domain parsing (MIT License).
- Shield and mail icon generated with AI.

---

## License

This project is licensed under the MIT License.

**Note:**  
The included [`psl.min.js`](https://github.com/lupomontero/psl) library is © [lupomontero/psl](https://github.com/lupomontero/psl) and distributed under the MIT License.  
See the [psl.js license](https://github.com/lupomontero/psl/blob/master/LICENSE) for details.

---

**Stay safe when clicking links
