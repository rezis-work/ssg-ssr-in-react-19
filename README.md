# React Server-Side Rendering (SSR) Example

This project demonstrates a complete implementation of server-side rendering (SSR) for a React application using Node.js. The architecture is split between client and server components for clear separation of concerns.

## Project Structure

### Client Folder (`client/`)

Contains all client-side React code that gets executed in the browser:

- `Client.js` - The main client entry point that hydrates the server-rendered markup
- React components - All UI components that make up the application
- Any client-side specific logic, hooks, or utilities

The client bundle is built and served by the server, but executes in the browser to add interactivity after initial render.

### Server Folder (`server/`)

Contains the Node.js server that handles:

- Server-side rendering of React components
- Serving static assets
- API routes (if any)
- The HTML template (index.html) injection

The server performs the initial render of React components to HTML, sends this to the client, then the client takes over for subsequent interactions (hydration).

## How SSR Works in This Project

1. **Initial Request**:

   - Browser requests page from Node server
   - Server renders React components to HTML
   - Server injects rendered HTML into index.html template
   - Server sends complete HTML to browser

2. **Client Hydration**:
   - Browser receives and displays server-rendered HTML
   - Client JavaScript bundle loads
   - React "hydrates" the existing markup, attaching event handlers
   - Application becomes fully interactive

## Development Setup

1. Install dependencies for both client and server:

   ```bash
   npm install
   cd client && npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Key Benefits

- Faster initial page loads
- Better SEO as search engines can crawl the rendered content
- Progressive enhancement - works even if JavaScript fails
- Shared code between server and client

## Static Site Generation (SSG) Setup

The `ssg` folder contains a static site generation implementation that pre-renders pages at build time.

### How SSG Works in This Project

1. **Build Process**:

   - Runs at build time (not on each request)
   - Renders React components to HTML files
   - Generates complete static HTML files for each route
   - Outputs to `dist` directory

2. **Client Hydration**:
   - Similar to SSR, React hydrates the static markup
   - Becomes fully interactive after hydration
   - No server required in production

### Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build static files:

   ```bash
   npm run build
   ```

3. Preview production build:
   ```bash
   npm run preview
   ```

### Key Benefits

- Fastest possible page loads (pre-built files)
- Can be hosted on any static file server/CDN
- Lower server costs (no Node server required)
- Still maintains React interactivity after hydration
