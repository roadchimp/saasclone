# Frequently Asked Questions

## General Questions

### What is Workflow Cloner?

Workflow Cloner is a tool that helps developers quickly scaffold out applications based on JSON templates. It generates a directory structure with React component stubs based on the template definition.

### Why should I use Workflow Cloner?

Workflow Cloner can significantly speed up the initial setup phase of a project by automating the creation of components and directory structures. It ensures consistency across your codebase and reduces manual boilerplate work.

### Is it only for React applications?

Currently, Workflow Cloner is focused on generating React components, but the architecture is designed to be extensible. Support for other frameworks may be added in the future.

## Technical Questions

### Can I customize the component templates?

Yes, you can customize the component template in the `scaffold-generator.ts` file by modifying the `componentTemplate` function.

### How do I add new template files?

You can create new template files in the `/templates` directory. Follow the JSON structure outlined in the [Template Format documentation](./03-template-format.md).

### Can I generate components with different file extensions?

Currently, the generator creates `.tsx` files for React components. To change this, you would need to modify the `generate` function in the `scaffold-generator.ts` file.

### How do I handle more complex component requirements?

For more complex components, you can either:
1. Customize the component template to include more sophisticated code
2. Generate basic stubs and then manually enhance them afterward
3. Extend the generator to support different types of components with different templates

## Troubleshooting

### The generator creates empty directories for arrays with names

Make sure that your arrays contain strings (component names) and not objects. For example, `["Button", "Input"]` is correct, but `[{"name": "Button"}]` is not.

### I get TypeScript errors when running the generator

Ensure that you have installed all the required dependencies:

```bash
npm install
```

Also, check that your TypeScript configuration in `tsconfig.json` is correct. 