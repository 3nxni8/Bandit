# 🚀 Quick Start Checklist for Developers

Use this checklist when working on the Boardroom Bandit website.

---

## 📋 Before Starting Development

- [ ] Read [README.md](./README.md) for project overview
- [ ] Read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines
- [ ] Install dependencies: `npm install`
- [ ] Verify setup: `npm run dev`
- [ ] Check the site loads at `http://localhost:3000`

---

## 🔍 Before Making Changes

- [ ] Create a feature branch: `git checkout -b feature/your-feature`
- [ ] Pull latest changes: `git pull origin main`
- [ ] Review [FRONTEND_ENGINEERING_REVIEW.md](./FRONTEND_ENGINEERING_REVIEW.md) for best practices

---

## ✏️ While Coding

### Code Quality
- [ ] Follow TypeScript best practices
- [ ] Use proper component typing (`React.FC<Props>`)
- [ ] Avoid using `any` type
- [ ] Use Tailwind CSS utility classes
- [ ] Use `cn()` utility for conditional classes
- [ ] Add meaningful variable names

### Accessibility
- [ ] Use semantic HTML (`<header>`, `<nav>`, `<main>`, etc.)
- [ ] Add ARIA labels where needed
- [ ] Ensure keyboard navigation works
- [ ] Add alt text to images
- [ ] Check color contrast

### Performance
- [ ] Use Next.js `<Image>` component (not `<img>`)
- [ ] Add `loading="lazy"` for images
- [ ] Consider code splitting for large components
- [ ] Minimize client-side JavaScript

### Security
- [ ] Validate all form inputs
- [ ] Sanitize user-generated content
- [ ] Don't expose sensitive data
- [ ] Use environment variables for secrets

---

## 🧪 Before Committing

- [ ] Test your changes manually
- [ ] Check mobile responsiveness
- [ ] Run type check: `npm run type-check`
- [ ] Run linter: `npm run lint`
- [ ] Fix any lint errors: `npm run lint:fix`
- [ ] Format code: `npm run format` (when Prettier is installed)
- [ ] Remove `console.log()` statements
- [ ] Remove commented-out code

---

## 📝 Committing Changes

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

### Examples
```bash
git commit -m "feat(menu): add category filtering"
git commit -m "fix(form): add validation to reservation form"
git commit -m "docs: update README with new scripts"
```

---

## 🔄 Before Opening PR

- [ ] Rebase on main: `git fetch && git rebase origin/main`
- [ ] Resolve any conflicts
- [ ] Push your branch: `git push origin feature/your-feature`
- [ ] Test the deployed preview (if available)
- [ ] Write clear PR description
- [ ] Add screenshots for UI changes
- [ ] Link related issues

### PR Title Format
```
feat(component): brief description
```

### PR Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] No new warnings
- [ ] Documentation updated (if needed)
- [ ] Tests pass (when we add tests)

---

## 🎯 Code Review Checklist

### For Reviewers
- [ ] Code follows [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines
- [ ] TypeScript types are properly defined
- [ ] Components are properly structured
- [ ] Accessibility considerations met
- [ ] No security vulnerabilities
- [ ] Performance not degraded
- [ ] Documentation updated if needed

---

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do
```typescript
// Using any type
const data: any = fetchData();

// Using img tag
<img src="/image.jpg" />

// Using alert()
alert("Success!");

// Hardcoding values
<div className="mt-20">

// No prop types
const Component = (props) => { ... };
```

### ✅ Do Instead
```typescript
// Use proper types
interface UserData {
  id: string;
  name: string;
}
const data: UserData = fetchData();

// Use Next.js Image
import Image from 'next/image';
<Image src="/image.jpg" alt="Description" width={400} height={300} />

// Use inline messages
<div className="success-message">Success!</div>

// Use Tailwind tokens or custom properties
<div className="mt-8">

// Add prop types
interface Props {
  name: string;
}
const Component: React.FC<Props> = ({ name }) => { ... };
```

---

## 🔧 Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run type-check       # Run TypeScript check
npm run format           # Format code with Prettier
npm run format:check     # Check formatting

# Git
git status               # Check changed files
git diff                 # See changes
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push                 # Push to remote

# Troubleshooting
rm -rf node_modules      # Remove dependencies
npm install              # Reinstall dependencies
rm -rf .next             # Clear Next.js cache
```

---

## 📚 Quick Reference Links

### Internal Docs
- [README.md](./README.md) - Project setup
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guidelines
- [FRONTEND_ENGINEERING_REVIEW.md](./FRONTEND_ENGINEERING_REVIEW.md) - Detailed review
- [IMPROVEMENTS_ACTION_PLAN.md](./IMPROVEMENTS_ACTION_PLAN.md) - Improvement roadmap
- [EXECUTIVE_SUMMARY.md](./EXECUTIVE_SUMMARY.md) - Review summary

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

---

## 🎉 You're Ready!

If you've read through this checklist and the related docs, you're ready to contribute to the Boardroom Bandit website. Happy coding! 🚀

---

**Pro Tip:** Bookmark this page and refer to it before each commit. It will help maintain code quality and consistency across the project.

*Last Updated: January 3, 2026*
