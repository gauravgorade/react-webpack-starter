# React Webpack Starter

![Screenshot](https://raw.githubusercontent.com/gauravgorade/react-webpack-starter/refs/heads/main/SS.png)

A minimal setup demonstrating how to wire React, Webpack, and Babel from scratch using TypeScript — no Create React App, no magic.

**[Live Demo](https://react-webpack-setup.vercel.app/)**

## Stack

- **React 18** + **TypeScript**
- **Webpack 5** with `webpack-dev-server`
- **Babel 7** for transpilation
- **CSS support** via `mini-css-extract-plugin`

## Getting Started

```bash
git clone https://github.com/gauravgorade/react-webpack-starter.git
cd react-webpack-starter
npm install
npm start
```

Runs at [http://localhost:8080](http://localhost:8080).

## Scripts

```bash
npm start        # development server
npm run build    # production build → /dist
```

## Project Structure

```
src/
├── index.tsx        # entry point
├── App.tsx          # root component
├── index.html       # HTML template
└── index.css        # global styles
webpack.config.js
babel.config.json
package.json
```
