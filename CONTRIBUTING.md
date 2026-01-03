# Contributing to Boardroom Bandit Website

Thank you for your interest in contributing to the Boardroom Bandit restaurant website! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- Git
- A code editor (VS Code recommended)

### Initial Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Bandit.git
   cd Bandit
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/3nxni8/Bandit.git
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Development Workflow

### Before You Start

1. Ensure your fork is up to date:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. Create a feature branch:
   ```bash
   git checkout -b feature/descriptive-name
   # or
   git checkout -b fix/bug-description
   ```

### During Development

1. Make your changes
2. Test locally:
   ```bash
   npm run dev
   ```

3. Check code quality:
   ```bash
   npm run lint
   npm run type-check
   ```

4. Commit your changes (see [Commit Guidelines](#commit-guidelines))

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `style/` - Code style changes (formatting, etc.)
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

Examples:
- `feature/add-dark-mode`
- `fix/menu-navigation-bug`
- `docs/update-readme`

## 📝 Coding Standards

### TypeScript Guidelines

1. **Use TypeScript for all new files**
   ```typescript
   // Good
   interface Props {
     name: string;
     age: number;
   }
   
   const Component: React.FC<Props> = ({ name, age }) => {
     return <div>{name} is {age} years old</div>;
   };
   ```

2. **Avoid `any` type**
   ```typescript
   // Bad
   const data: any = fetchData();
   
   // Good
   interface UserData {
     id: string;
     name: string;
   }
   const data: UserData = fetchData();
   ```

3. **Export interfaces and types**
   ```typescript
   // types/index.ts
   export interface MenuItem {
     name: string;
     price: number;
   }
   ```

### React Component Guidelines

1. **Use functional components**
   ```typescript
   // Good
   const MyComponent: React.FC<Props> = (props) => {
     return <div>...</div>;
   };
   
   export default MyComponent;
   ```

2. **Use meaningful component names**
   ```typescript
   // Bad
   const Comp = () => { ... };
   
   // Good
   const ReservationForm = () => { ... };
   ```

3. **Keep components small and focused**
   - One component should do one thing
   - If a component is >200 lines, consider splitting it

4. **Use proper prop destructuring**
   ```typescript
   // Good
   const Button: React.FC<ButtonProps> = ({ 
     label, 
     onClick, 
     disabled = false 
   }) => {
     return <button onClick={onClick} disabled={disabled}>{label}</button>;
   };
   ```

### Styling Guidelines

1. **Use Tailwind CSS utility classes**
   ```tsx
   <div className="flex items-center justify-between p-4 bg-white rounded-lg">
   ```

2. **Use the `cn()` utility for conditional classes**
   ```typescript
   import { cn } from '@/lib/utils';
   
   <div className={cn(
     'base-class',
     isActive && 'active-class',
     isDisabled && 'disabled-class'
   )}>
   ```

3. **Use CSS custom properties for brand colors**
   ```tsx
   <div className="bg-[var(--color-red)] text-[var(--color-white)]">
   ```

### File Organization

```
component-name/
  ├── ComponentName.tsx      # Main component
  ├── ComponentName.test.tsx # Tests (when we add them)
  └── index.ts               # Barrel export
```

### Import Order

Organize imports in this order:

```typescript
// 1. React and Next.js
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party libraries
import { Lucide Icons } from 'lucide-react';
import { clsx } from 'clsx';

// 3. Internal utilities and hooks
import { cn } from '@/lib/utils';
import { useMyHook } from '@/hooks/useMyHook';

// 4. Internal components
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';

// 5. Types
import type { MyType } from '@/types';

// 6. Styles (if any)
import styles from './Component.module.css';
```

## 💬 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no functional changes)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(menu): add category filtering functionality

Added ability to filter menu items by category using tabs.
Users can now click on category names to view specific sections.

Closes #123
```

```
fix(reservation): replace alert with inline message

Replaced browser alert() with a user-friendly inline success message
that displays for 5 seconds after form submission.

Fixes #456
```

```
docs: update README with installation instructions
```

### Commit Best Practices

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit the subject line to 50 characters
- Capitalize the subject line
- Don't end subject line with a period
- Use the body to explain what and why (not how)

## 🔍 Pull Request Process

### Before Submitting

1. ✅ Code follows the style guidelines
2. ✅ All tests pass (when we add tests)
3. ✅ Lint checks pass: `npm run lint`
4. ✅ Type checks pass: `npm run type-check`
5. ✅ Documentation updated if needed
6. ✅ No console.log statements left in code

### PR Title Format

Follow the same format as commit messages:

```
feat(component): brief description of changes
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How did you test your changes?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] Any dependent changes have been merged
```

### Review Process

1. Submit your PR
2. Wait for code review
3. Address any feedback
4. Once approved, a maintainer will merge your PR

## 🧪 Testing

### Manual Testing

Before submitting a PR, test your changes:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Test on different screen sizes (mobile, tablet, desktop)

3. Check browser console for errors

4. Test all interactive elements

### Future: Automated Testing

We plan to add:
- Unit tests with Vitest
- Component tests with Testing Library
- E2E tests with Playwright

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## ❓ Questions?

If you have questions:
1. Check existing issues
2. Review the documentation
3. Open a new issue with the `question` label

## 🙏 Thank You!

Your contributions help make this project better. We appreciate your time and effort!

---

*Last Updated: January 3, 2026*
