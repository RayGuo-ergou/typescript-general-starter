# Typescript General Purpose Starter

Welcome to the Typescript General Purpose Starter, a comprehensive and versatile starter repository for TypeScript projects. This repository is designed to provide you with a robust starting point for any TypeScript application, whether it's for web development, server-side applications, or general utility scripts.

## Getting Started

To get started, simply clone this repository and install the dependencies:

```bash
git clone https://github.com/RayGuo-ergou/typescript-general-starter.git
pnpm install
```

Then, you can run the project in development mode:

```bash
pnpm dev
```

In this project, [nodemon](https://nodemon.io/) combined with [ts-node](https://typestrong.org/ts-node/) is used to provide hot reloading for the project. This means that any changes you make to the source code will be automatically recompiled and reloaded in the running application.

## Typescript Configuration
```json
{
  "compilerOptions": {
    "target": "es2022",
    "lib": ["es2022"],
    "moduleDetection": "force",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "allowJs": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noEmit": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "skipLibCheck": true
  }
}
```
This configuration is recommended for not transpiling your typescript code with tsc, if you want to build the production javascript code, it's recommended to change the following configuration:
```json
{
  "moduleResolution": "Bundler",
  "module": "ESNext",
  "noEmit": true
}
```

to

```json
{
  "moduleResolution": "NodeNext",
  "module": "NodeNext",
  "outDir": "dist"
}
```

Reference: [The TSConfig Cheat Sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet) from [Matt Pococks](https://www.mattpocock.com/)

## Code formatting and linting

I am using my [own eslint configuration](https://github.com/RayGuo-ergou/eslint-config), which is based on [antfu/eslint-config](https://github.com/antfu/eslint-config) with my personalized rules.

Prettier is not used here as eslint covered everything I need.

To check the linting errors, run:

```bash
pnpm lint
```

To fix the linting errors, run:

```bash
pnpm lint:fix
```

## Test
[Vitest](https://vitest.dev) is used for testing, it's a very simple and fast test utility for Typescript projects.

As an example, create a simple `sum` function in `src/utility/sum.ts`:

```ts
// sum.ts
export const sum = (a: number, b: number) => a + b
```

Then create a test file called `sum.test.ts` in the `src/utility` folder, and write the following code:

```ts
// sum.test.js
import { expect, it } from 'vitest'
import { sum } from './sum'

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```
To run the test, run:

```bash
pnpm test
```

## License

This project is licensed under the [MIT License](./LICENSE).