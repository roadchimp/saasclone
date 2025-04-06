# User Journeys

This document outlines the typical user journeys for working with Workflow Cloner.

## Journey 1: Creating a New Application from a Template

1. **Clone the Repository**
   ```bash
   git clone https://github.com/roadchimp/saasclone.git
   cd saasclone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Select a Template**
   Browse the available templates in the `/templates` directory, or create your own.

4. **Run the Scaffold Generator**
   ```bash
   npm run dev -- ./templates/sales-engagement-sdr-template.json ./my-new-app
   ```

5. **Customize the Generated Code**
   Navigate to the generated directory structure and customize the component stubs to fit your specific needs.

## Journey 2: Creating a Custom Template

1. **Understand the Template Structure**
   Templates are JSON files that define the directory and component structure of your application.

2. **Create a New Template File**
   ```json
   {
     "src": {
       "components": {
         "common": ["Button", "Input"],
         "features": {
           "auth": ["Login", "Register"]
         }
       },
       "pages": ["HomePage", "DashboardPage"],
       "utils": [],
       "hooks": []
     }
   }
   ```

3. **Save the Template**
   Save your template in the `/templates` directory with a descriptive name.

4. **Generate from Your Template**
   ```bash
   npm run dev -- ./templates/your-custom-template.json ./your-app-name
   ```

## Journey 3: Contributing to the Project

1. **Fork the Repository**
   Fork the repository on GitHub to your own account.

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   Implement your changes or add new features.

4. **Create a Pull Request**
   Push your changes to your fork and create a pull request to the main repository. 