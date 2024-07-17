Mechanical Keyboard Shop - Frontend
This repository contains the frontend code for the Mechanical Keyboard Shop, an e-commerce website exclusively for mechanical keyboards. The frontend is built using React, Vite, TypeScript, Redux, and RTK Query.

Features
Homepage: Showcase featured products, popular brands, and customer reviews.
Products Page: Browse all products with search and filter options.
Product Details Page: Detailed view of a single product.
Cart Page: Manage cart items and proceed to checkout.
Checkout Page: User details and payment options.
Product Management: Admin dashboard for managing products.
About Us & Contact Us Pages: Information about the store and contact details.
Technology Stack
React: JavaScript library for building user interfaces.
Vite: Next generation frontend tooling.
TypeScript: Typed superset of JavaScript.
Redux: State management library.
RTK Query: Data fetching and caching tool for Redux.
Prerequisites
Node.js
Getting Started
Clone the repository:

bash

git clone https://github.com/yourusername/mechanical-keyboard-shop-frontend.git
cd mechanical-keyboard-shop-frontend
Install dependencies:

bash

npm install
Environment Variables:

Create a .env file in the root directory and add the following variables:

env

VITE_API_URL=http://localhost:5000/api
Run the development server:

bash

npm run dev
Folder Structure
src/
components/ - Reusable UI components.
features/ - Redux slices and RTK Query services.
pages/ - Page components for different routes.
routes/ - Route definitions.
styles/ - CSS and Tailwind styles.
utils/ - Utility functions and hooks.
Available Scripts
npm run dev - Start the development server.
npm run build - Build the project for production.
npm run lint - Lint the source code.
Deployment
To deploy the application, build the project using the npm run build command. This will generate a dist folder containing the production-ready files.

You can then deploy the contents of the dist folder to your preferred hosting provider.

License
This project is licensed under the MIT License. See the LICENSE file for details.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- live-link:https://key-tech-hu-b.vercel.app/
