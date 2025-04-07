# Template Contribution Guide

This guide explains how to create and contribute templates to the Workflow Cloner project.

## Creating a Template

Templates are JSON files that define the structure of an application to be generated. Here's how to create a new template:

### Basic Structure

```json
{
  "src": {
    "components": {
      "common": ["Button", "Input", "Modal"],
      "layout": ["Header", "Footer"],
      "features": {
        "auth": ["Login", "Register"]
      }
    },
    "pages": ["HomePage", "AboutPage"],
    "utils": [],
    "hooks": []
  }
}
```

### Template Metadata

To make your template more discoverable, add metadata at the root of your JSON file:

```json
{
  "metadata": {
    "name": "My Template",
    "description": "A template for creating a basic web application",
    "author": "Your Name",
    "tags": ["web", "react", "basic"],
    "version": "1.0.0"
  },
  "src": {
    // Template structure...
  }
}
```

## Contributing Your Template

1. **Fork the Repository**: Fork the Workflow Cloner repository to your GitHub account.

2. **Add Your Template**: Create your template JSON file in the `community/templates` directory with a descriptive name.

3. **Test Your Template**: Test your template by running the scaffold generator against it:

   ```bash
   npm run scaffold -- community/templates/your-template.json ./test-output
   ```

4. **Create a Pull Request**: Submit a pull request with your template to the main repository.

## Template Guidelines

To ensure quality and consistency, please follow these guidelines:

1. **Clear Structure**: Organize your template in a logical, clear structure.

2. **Descriptive Names**: Use descriptive names for directories and components.

3. **Complete Metadata**: Include all metadata fields to make your template discoverable.

4. **Documentation**: Include a brief description of what your template generates.

5. **Test Your Template**: Ensure your template generates without errors.

## Example Templates

Check out the following examples for inspiration:

- [Sales Engagement SDR Template](../../templates/sales-engagement-sdr-template.json)
- [Basic Web App Template](../../templates/basic-web-app-template.json) (coming soon)
- [Dashboard Analytics Template](../../templates/dashboard-analytics-template.json) (coming soon)

Your contributions are what make this project valuable to the community. Thank you for sharing your templates! 