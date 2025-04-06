import * as fs from 'fs';
import * as path from 'path';

interface Structure {
  [key: string]: Structure | string[];
}

const componentTemplate = (componentName: string): string => `
import React from 'react';

interface ${componentName}Props {
  // Define your props here
}

const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <div>
      <h1>${componentName} Component</h1>
      {/* Add your component logic here */}
    </div>
  );
};

export default ${componentName};
`;

const generate = (basePath: string, structure: Structure): void => {
  Object.entries(structure).forEach(([key, value]) => {
    const currentPath = path.join(basePath, key);

    // Create directory
    if (!fs.existsSync(currentPath)) {
      console.log(`Creating directory: ${currentPath}`);
      fs.mkdirSync(currentPath, { recursive: true });
    } else {
        console.log(`Directory already exists: ${currentPath}`);
    }

    if (Array.isArray(value)) {
      // Create component files
      value.forEach((componentName) => {
        const componentFileName = `${componentName}.tsx`;
        const componentFilePath = path.join(currentPath, componentFileName);
        if (!fs.existsSync(componentFilePath)) {
          console.log(`Creating component: ${componentFilePath}`);
          fs.writeFileSync(componentFilePath, componentTemplate(componentName));
        } else {
            console.log(`Component already exists: ${componentFilePath}`);
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      // Recursively generate nested structure
      generate(currentPath, value);
    }
  });
};

// Read the template file
const readTemplate = (templatePath: string): Structure => {
  try {
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    return JSON.parse(templateContent);
  } catch (error) {
    console.error(`Error reading template file: ${error}`);
    process.exit(1);
  }
};

const run = () => {
  const args = process.argv.slice(2);
  const templatePath = args[0] || path.join(process.cwd(), 'templates', 'default-template.json');
  const outputBasePath = args[1] || process.cwd();

  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Template file not found at ${templatePath}`);
    process.exit(1);
  }

  try {
    const structure = readTemplate(templatePath);

    console.log('Starting structure generation...');
    generate(outputBasePath, structure);
    console.log('Structure generation finished.');

  } catch (error) {
    console.error('Error processing template:', error);
    process.exit(1);
  }
};

run(); 