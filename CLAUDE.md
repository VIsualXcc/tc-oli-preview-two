# Development Guidelines for Trading Coach Oli

## Path: /Users/guidoohlenbostel/Sites/TradingCoach_Oli/aceternity-tc-oli-2/tc-oli-preview-two/

## Project Structure
- `app`: Main Next.js app directory
- `components`: Shared UI components
- `lib`: Utility functions and shared logic
- `pages`: Next.js pages
- `styles`: Global CSS styles
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration


## Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production-ready application
- `npm run start` - Start production server with built app
- `npm run lint` - Run ESLint to check code quality

## Code Style
- **TypeScript**: Use strict typing with interfaces for props, states, and function parameters
- **Imports**: Use absolute imports with `@/*` path alias pattern
- **Formatting**: Use "use client" directive for client components; export components at end of file
- **Components**: Functional components with hooks; use React.memo for performance optimization
- **Styling**: Use Tailwind CSS with utility classes; cn() function for class merging
- **Animations**: Use Framer Motion with consistent animation patterns
- **Error Handling**: Use try/catch blocks for async operations
- **Naming**: PascalCase for components/interfaces; camelCase for variables/functions
- **Props**: Destructure with defaults; define TypeScript interfaces for all component props
- **Performance**: Use React.useCallback for event handlers; useRef for DOM references

## Architecture
- Next.js 15 app router with modern React 19 patterns
- TypeScript for strong typing
- Tailwind 4 CSS for styling
- Aceternity UI components for styling
- Client components for interactive UI elements
- Responsive design with mobile-first approach