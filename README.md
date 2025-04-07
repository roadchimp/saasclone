# 🛠️ Workflow Cloner – Build AI-First Tools from Screens & Prompts

This project lets you turn screenshots, walkthroughs, or simple prompts into working app modules.

## 👾 Features
- Modular template system (starting with SDR tools)
- Smart prompt export for Cursor + V0 + Appsmith
- Community-first and open-source

## 🧩 Architecture
This project follows a modular architecture with the following components:

- **Visual Input Parser**: Analyzes screenshots and video frames to identify UI components
- **Template Wizard**: Guides users through template selection and customization
- **Scaffold Generator**: Converts parsed visual data into initial code structures
- **Prototyping Layer**: Allows testing of the generated scaffold with rapid prototyping
- **Prompt Packager**: Creates AI prompts based on the application's context
- **Appsmith Exporter**: Transforms the scaffolded application for Appsmith compatibility
- **Community Layer**: Enables sharing and collaboration on templates

## 🚀 Getting Started
1. Clone this repo
```bash
git clone https://github.com/roadchimp/saasclone.git
cd saasclone
```

2. Install dependencies
```bash
npm install
```

3. Choose a command to run
```bash
# Generate code from a template
npm run scaffold

# Analyze screenshots or video to identify UI components
npm run visual-parser

# Launch the template wizard
npm run template-wizard

# Start a prototype session
npm run prototype

# Generate AI prompts for code assistance
npm run prompt

# Export to Appsmith format
npm run export-appsmith
```

## 📦 Roadmap
- Add wizard UI for template creation
- Expand to BI dashboards, onboarding flows, etc.
- Enable template sharing via GitHub or your own registry

## 📚 Documentation
Explore our documentation in the `docs` directory:
- [Introduction](./docs/00-intro.md)
- [User Journeys](./docs/01-user-journeys.md)
- [Architecture](./docs/02-architecture.md)
- [Template Format](./docs/03-template-format.md)
- [Community Guide](./docs/04-community-guide.md)
- [FAQ](./docs/99-faq.md)

MIT Licensed • Built with ❤️ in Cursor 