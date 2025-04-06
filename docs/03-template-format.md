# Template Format

This document describes the format of templates used by Workflow Cloner.

## JSON Structure

Templates are defined in JSON format with a nested structure that represents the directory hierarchy and component files to be generated.

### Basic Structure

```json
{
  "directoryName": {
    "subdirectoryName": {
      "anotherSubdirectory": ["Component1", "Component2"]
    },
    "anotherSubdirectory": ["Component3", "Component4"]
  }
}
```

### Rules

1. **Keys** represent directory names
2. **Array values** represent component names to be created in that directory
3. **Object values** represent subdirectories

### Example

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

This template will generate:

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── features/
│       └── auth/
│           ├── Login.tsx
│           └── Register.tsx
├── pages/
│   ├── HomePage.tsx
│   └── AboutPage.tsx
├── utils/
└── hooks/
```

### Empty Directories

To create an empty directory, use an empty array:

```json
{
  "emptyDirectory": []
}
```

## Best Practices

1. **Organize by Feature**: Group related components together by feature
2. **Common Components**: Separate reusable components into a "common" directory
3. **Consistent Naming**: Use consistent naming conventions (e.g., PascalCase for components)
4. **Descriptive Names**: Use descriptive names for directories and components 