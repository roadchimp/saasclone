/**
 * Workflow Cloner - Build AI-First Tools from Screens & Prompts
 * 
 * This project lets you turn screenshots, walkthroughs, or simple prompts into working app modules.
 */

// Export all modules
export * as VisualInputParser from './visual-input-parser';
export * as TemplateWizard from './template-wizard';
export * as ScaffoldGenerator from './scaffold-generator';
export * as PrototypingLayer from './prototyping-layer';
export * as PromptPackager from './prompt-packager';
export * as AppsmithExporter from './appsmith-exporter';

// Main entry point for CLI usage
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';

  switch (command) {
    case 'scaffold':
      console.log('Running scaffold generator...');
      // Import and run the scaffold generator
      await import('./scaffold-generator').then(module => {
        // Execute module functionality
      });
      break;
    
    case 'visual-parse':
      console.log('Running visual input parser...');
      // Import and run the visual input parser
      await import('./visual-input-parser').then(module => {
        // Execute module functionality
      });
      break;
    
    case 'template':
      console.log('Running template wizard...');
      // Import and run the template wizard
      await import('./template-wizard').then(module => {
        // Execute module functionality
      });
      break;
    
    case 'prototype':
      console.log('Running prototyping layer...');
      // Import and run the prototyping layer
      await import('./prototyping-layer').then(module => {
        // Execute module functionality
      });
      break;
    
    case 'prompt':
      console.log('Running prompt packager...');
      // Import and run the prompt packager
      await import('./prompt-packager').then(module => {
        // Execute module functionality
      });
      break;
    
    case 'export-appsmith':
      console.log('Running Appsmith exporter...');
      // Import and run the Appsmith exporter
      await import('./appsmith-exporter').then(module => {
        // Execute module functionality
      });
      break;
    
    case 'help':
    default:
      console.log(`
Workflow Cloner - Build AI-First Tools from Screens & Prompts

Available commands:
  scaffold         Generate code from a template
  visual-parse     Analyze screenshots or video to identify UI components
  template         Launch the template wizard
  prototype        Start a prototype session
  prompt           Generate AI prompts for code assistance
  export-appsmith  Export to Appsmith format
  help             Show this help message
      `);
      break;
  }
}

// Run the main function if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
} 