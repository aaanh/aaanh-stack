# AAANH Stack

A modern Next.js template with Shadcn UI, TypeScript, Tailwind CSS, and T3 Env configuration.

Mostly for my own but feel free to use 😁

## Usage

To create a new project using this template, run:

```bash
npm create aaanh-stack my-app
```

This will create a new directory called `my-app` with all the necessary files and configurations.

## Features

- Next.js 15 with App Router
- Shadcn UI components
- TypeScript
- Tailwind CSS
- T3 Env for type-safe environment variables
- Drizzle ORM for database management
- Modern development setup with Turbopack

## Getting Started

After creating your project:

1. Navigate to your project directory:
   ```bash
   cd my-app
   ```

2. Set up your environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Update the `DATABASE_URL` with your database connection string
   - Add any other environment variables your application needs

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see your application.

## Environment Variables

The template uses T3 Env for type-safe environment variables. The following environment variables are required:

- `DATABASE_URL`: Your PostgreSQL database connection string

## License

MIT