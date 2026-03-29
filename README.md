# Personal Website

A beautiful, modern personal website built with React, TypeScript, TailwindCSS, and shadcn/ui components.

## Features

- 🎨 Modern UI with beautiful animations
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Fast performance with Vite
- 🎯 Clean, maintainable code structure

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## Install Node.js

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

. ~/.bashrc source ~/.bashrc nvm install --lts node -v npm -v
```

## Install as a Service


Copy the `myresumewebsite.service` file to `/etc/systemd/system/`:

```bash
sudo nano /etc/systemd/system/myresumewebsite.service
```

```bash
sudo systemctl daemon-reload

sudo systemctl enable myresumewebsite.service

sudo systemctl start myresumewebsite.service

sudo systemctl status myresumewebsite.service

journalctl -u myresumewebsite.service -f

sudo systemctl restart myresumewebsite.service
```

## License

MIT
