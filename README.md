# 🚀 GitHub Linktree Self-Hosted

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green)](https://nodejs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)  
[![Express](https://img.shields.io/badge/Express-4.18-yellow)](https://expressjs.com/)  
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)](https://getbootstrap.com/)

Ein modernes **self-hosted Linktree**, gebaut mit **OOP-Architektur**, **TypeScript**, **Express** und **Bootstrap 5**.  
Zeige deine Links, Projekte oder GitHub-Repos auf deiner eigenen Website – elegant, responsive und modern.


![Screenshot](img.png)



---

## ⚡ Features

- **Self-hosted** – volle Kontrolle über deine Links
- **OOP-Architektur** – sauberer, wartbarer Code
- **REST API** – Links programmatisch verwalten
- **Bootstrap 5 UI** – modern, responsive, mobilfreundlich
- **GitHub Repo Integration** – Avatar, Repo-Name, Beschreibung, Sterne & Forks
- **JSON-Datenbank** – einfache Speicherung ohne Datenbank

---

## 🛠 Installation

1. Repository klonen:
```bash
git clone https://github.com/44erxyz/linktree-selfhost.git
cd github-linktree-oop
Abhängigkeiten installieren:

bash
Code kopieren
npm install
Optional: Fehlende Pakete installieren

bash
Code kopieren
npm install uuid cors morgan
npm install --save-dev @types/uuid @types/cors @types/morgan
TypeScript kompilieren (optional):

bash
Code kopieren
npm run build
🚀 Starten
Entwicklung
bash
Code kopieren
npm run dev
Produktion
bash
Code kopieren
npm start
Standard-Port: 3000

Browser öffnen: http://localhost:3000

🔗 Links verwalten
JSON-Datei
json
Code kopieren
[
  { "id": "1", "title": "🌐 Website", "url": "https://example.com" },
  { "id": "2", "title": "📚 Docs", "url": "https://example.com/docs" }
]
REST API
Methode	Endpoint	Beschreibung
GET	/api/links	Alle Links abrufen
POST	/api/links	Neuen Link erstellen
GET	/api/links/:id	Link nach ID abrufen
PATCH	/api/links/:id	Link aktualisieren
DELETE	/api/links/:id	Link löschen
GET	/api/repo?repo=owner/repo	GitHub-Repo Infos abrufen

📁 Projektstruktur
csharp
Code kopieren
github-linktree-oop/
├─ src/
│  ├─ controllers/   # Express Controller
│  ├─ dtos/          # Data Transfer Objects
│  ├─ models/        # OOP-Modelle
│  ├─ repositories/  # JSON-Datenverwaltung
│  ├─ services/      # Business-Logik
│  ├─ utils/         # Helper wie GitHubClient
│  ├─ app.ts         # Express App Setup
│  └─ server.ts      # Server Start
├─ public/            # Frontend HTML/Bootstrap
├─ data/              # JSON-Datenbank
├─ package.json
├─ tsconfig.json
🎨 Design & Customization
Bootstrap 5 Buttons mit Emojis

Responsive Layout für Mobile & Desktop

Avatar & GitHub Repo Info automatisch

Farben, Styles und Buttons leicht anpassbar via index.html oder CSS

📜 Lizenz
MIT © 44er
