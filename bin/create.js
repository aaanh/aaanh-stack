#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectName = process.argv[2];
if (!projectName) {
  console.error('Please specify the project name:');
  console.error('  npm create next-shadcn-ts-tw-t3env my-app');
  process.exit(1);
}

const templatePath = path.join(__dirname, '..', 'template');
const projectPath = path.join(process.cwd(), projectName);

// Create project directory
fs.mkdirSync(projectPath, { recursive: true });

// Copy template files
const copyDir = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyDir(templatePath, projectPath);

// Update package.json with project name
const packageJsonPath = path.join(projectPath, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.name = projectName;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Remove .env.local and create .env.local.example
fs.unlinkSync(path.join(projectPath, '.env.local'));
fs.copyFileSync(
  path.join(projectPath, '.env.local.example'),
  path.join(projectPath, '.env.local')
);

console.log(`\nSuccess! Created ${projectName} at ${projectPath}`);
console.log('\nInside that directory, you can run several commands:');
console.log('\n  npm run dev');
console.log('    Starts the development server.');
console.log('\n  npm run build');
console.log('    Builds the app for production.');
console.log('\n  npm start');
console.log('    Runs the built app in production mode.');
console.log('\nWe suggest that you begin by typing:');
console.log(`\n  cd ${projectName}`);
console.log('  npm install');
console.log('  npm run dev\n'); 