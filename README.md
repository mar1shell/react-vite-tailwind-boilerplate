# React + Vite + Tailwind Boilerplate (TypeScript)

<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier" />
</p>

A **structured and scalable boilerplate** for building modern web applications with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.  
This starter includes reusable utilities, dark mode setup, and best practices for maintainable frontend development.

---

## ✨ Features

- ⚡️ **Vite** — lightning-fast dev server and bundler
- 🎨 **Tailwind CSS** — utility-first styling with dark mode support
- 🌙 **Dark Mode** — built-in via `useDarkMode` hook and Tailwind’s `dark:` classes
- 💾 **Local Storage Hook** — `useLocalStorage` for persistent state across sessions
- 🧩 **Structured Project Architecture** — well-organized for scalability
- 🛠 **TypeScript** — type-safe development out of the box
- 🔧 **ESLint + Prettier** — consistent formatting and linting
- 🖼 **Icon Libraries** — [react-icons](https://react-icons.github.io/react-icons/) and [lucide-react](https://lucide.dev/) for scalable SVG icons
- 🛠 **VSCode extensions recommended**:
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mar1shell/react-vite-tailwind-boilerplate.git
cd react-vite-tailwind-boilerplate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 📂 Project Structure

```
.
├── public/                # Static assets (served as-is by Vite)
│
├── src/
│   ├── assets/            # Images, fonts, and other project assets
│   ├── components/        # Reusable React components
│   │   └── ui/            # Atomic UI components (Button, Card, Input...)
│   ├── contexts/          # React Contexts (AuthContext, ThemeContext, etc.)
│   ├── hooks/             # Custom React hooks
│   │   ├── useDarkMode.ts # Dark mode toggle with Tailwind integration
│   │   └── useLocalStorage.ts # Persistent state with localStorage
│   ├── lib/               # Core logic, external integrations, and utilities
│   │   ├── icons/         # SVG icon components
│   │   ├── i18n/          # Internationalization (i18n) utilities
│   │   ├── api/           # API call functions (fetch wrappers, axios instances)
│   │   ├── data/          # Static data, constants, mock JSON
│   │   └── utils/         # Utility functions (formatters, helpers)
│   ├── layout/            # Shared layout components (Main Layout, Navbar, Sidebar, Footer)
│   ├── pages/             # Route-level components (Home, Login, Dashboard)
│   ├── styles/            # Global CSS and Tailwind configs
│   │   └── globals.css    # Tailwind imports + dark mode setup
│   ├── types/             # TypeScript types and interfaces
│   ├── App.tsx            # Root component
│   ├── main.tsx           # React entry point
│   └── vite-env.d.ts      # Vite type declarations
│
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── index.html             # Root HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.cjs    # Tailwind configuration
├── tsconfig.json          # TypeScript config
├── tsconfig.app.json      # TypeScript app-specific config
├── tsconfig.node.json     # TypeScript node-specific config
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## 🌙 Dark Mode

This project uses a custom `useDarkMode` hook to enable dark mode with Tailwind’s `dark:` classes.

**Example Usage:**

```tsx
import useDarkMode from "@/hooks/useDarkMode";

export default function ThemeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={toggleDarkMode}
        className="rounded bg-gray-200 px-4 py-2 text-black dark:bg-gray-800 dark:text-white"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
```

---

## 📖 Usage Guidelines

- **Components** → Reusable components under `src/components/`.
- **Layout** → Shared layout components (e.g., Navbar, Sidebar, Footer) are organized in `src/layout/`.
- **Context** → Global state and providers (like ThemeContext, AuthContext) are managed in `src/contexts/`.
- **Data** → Static data, constants, and mock JSON files are stored in `src/lib/data/`.
- **Utils** → Utility functions and helpers are placed in `src/lib/utils/`.
- **Features** → Page-specific logic under `pages/` (or create `features/` if app grows).
- **Hooks** → Shared logic in `src/hooks/`.
- **API Calls** → Keep network logic inside `src/lib/api/`.
- **Types** → Store all TypeScript types in `src/types/`.

---

## 🧪 Testing (Optional Setup)

You can add testing with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).  
Future improvements may include `/tests` folder setup.

---

## 🤝 Contributing

Contributions are welcome! Please follow the steps below:

1. **Fork** the repository
2. **Create a feature branch**
   ```bash
   git checkout -b feature/my-feature
   ```
3. **Commit changes**
   ```bash
   git commit -m "feat: add my feature"
   ```
4. **Push to branch**
   ```bash
   git push origin feature/my-feature
   ```
5. **Open a Pull Request**

---

## 📏 Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for consistency:

- `feat:` → A new feature
- `fix:` → A bug fix
- `docs:` → Documentation changes
- `style:` → Code style changes (formatting, etc.)
- `refactor:` → Code refactoring without changing behavior
- `test:` → Adding or updating tests
- `chore:` → Maintenance tasks (config, tooling, dependencies)

**Examples:**

- `feat: add dark mode toggle`
- `fix: resolve issue with localStorage hook`
- `docs: update README with folder structure`

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

<p align="center">
    Made with ❤️ by <a href="https://github.com/mar1shell">mar1shell</a>
</p>
