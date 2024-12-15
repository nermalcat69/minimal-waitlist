# Minimal Waitlist
![Frame 302](https://github.com/user-attachments/assets/647a0084-362c-4e55-a677-f78d5722eab5)

Minimal Waitlist Page with Discord Webhooks


### How to import to zerops
Go to zerops dashboard and import this project:

```yml
project:
  name: Minimal Waitlist
services:
  - hostname: app
    type: nodejs@20
    buildFromGit: https://github.com/nermalcat69/minimal-waitlist
    enableSubdomainAccess: true
```

You can assign the "DISCORD_WEBHOOK_URL" environment variable in the service dashboard.

### How to export emails to json in discord channel

1. Go to your waitlist channel on your browser and open developer tools and paste the code block in console.
   
```javascript
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

const allText = document.body.innerText;

const emails = new Set(allText.match(emailRegex));

const emailArray = Array.from(emails);
const emailJSON = JSON.stringify(emailArray, null, 2);

const blob = new Blob([emailJSON], { type: 'application/json' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'waitlist-emails.json';
link.click();

console.log("Waitlist exported!!", emailArray);

```
