// Export the scaffold generator functionality
export * from './generator';

// Re-export types if needed
export interface ScaffoldOptions {
  templatePath: string;
  outputPath: string;
  verbose?: boolean;
} 