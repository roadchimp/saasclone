# Architecture

This document outlines the architecture of the Workflow Cloner tool.

## Overview

Workflow Cloner is a template-based scaffolding tool that generates React component stubs based on a JSON structure definition. The tool is designed to be simple, flexible, and extensible.

## Components

### Template Parser

The template parser reads a JSON file that defines the structure of the application to be generated. It validates the structure and transforms it into an internal representation that can be processed by the generator.

### Scaffold Generator

The scaffold generator takes the parsed template and creates the necessary directories and files based on the defined structure. It generates React component stubs for each component specified in the template.

### Component Templates

The component templates are the blueprints used to generate the React component stubs. These templates can be customized to match specific coding styles or framework requirements.

## Directory Structure

```
/
├── src/                     # Source code
│   ├── scaffold-generator.ts # Main generator script
│   ├── utils/               # Utility functions
│   └── hooks/               # Custom React hooks
├── templates/               # Template definitions
│   └── sales-engagement-sdr-template.json # Example template
├── docs/                    # Documentation
├── dist/                    # Compiled JavaScript (generated)
└── node_modules/            # Dependencies (generated)
```

## Flow

1. User selects or creates a JSON template
2. Template parser validates and processes the template
3. Scaffold generator creates the directory structure
4. Component stubs are generated based on the templates
5. User customizes the generated code as needed

## Future Extensions

- Add support for custom component templates
- Implement a web interface for template creation
- Support for non-React frameworks (Vue, Angular, etc.)
- Integration with design tools for automatic code generation from mockups 