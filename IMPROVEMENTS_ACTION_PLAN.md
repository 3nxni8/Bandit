# Frontend Engineering Improvements - Action Plan

## Quick Reference: Issues to Fix

This document provides a prioritized action plan based on the comprehensive frontend engineering review.

---

## 🔴 Critical Issues - Fix Now

### 1. Code Typos and Errors

#### Issue 1.1: CSS Variable Typo
**File:** `app/menu/page.tsx:52`  
**Problem:** `--color-balck` should be `--color-black`
```typescript
// Current (WRONG):
'text-[var(--color-balck)] scale-105'

// Should be:
'text-[var(--color-black)] scale-105'
```

#### Issue 1.2: Spacing Typo in className
**File:** `app/menu/page.tsx:35`  
**Problem:** `w- full` has incorrect spacing
```tsx
// Current (WRONG):
<div className=" w- full mt-8">

// Should be:
<div className="w-full mt-8">
```

#### Issue 1.3: Duplicate Component
**File:** `app/page.tsx:14`  
**Problem:** Marquee component duplicated
```tsx
// Current:
<Marquee />
<Marquee/>  // Duplicate with inconsistent spacing

// Should be: (Remove one or add different content)
<Marquee />
```

#### Issue 1.4: Production Alert Usage
**File:** `app/reservations/page.tsx:32`  
**Problem:** Using `alert()` is not user-friendly
```typescript
// Current:
alert("Reservation form submitted!");

// Better solution needed: Use toast notification or inline message
```

#### Issue 1.5: ESLint Not Runnable
**File:** `package.json:9`  
**Problem:** `eslint` command not found
```json
// Current:
"lint": "eslint"

// Should be:
"lint": "next lint"
```

---

## 🟡 High Priority Issues

### 2. Accessibility Improvements

#### Issue 2.1: Missing Image Alt Text
- All images in menu items need descriptive alt text
- Menu images from external URLs have no alt attributes

#### Issue 2.2: Form Validation
- Reservation form has no validation
- No error messages for required fields
- No aria-invalid or aria-describedby attributes

### 3. Performance Issues

#### Issue 3.1: Image Optimization
- Using `<img>` instead of Next.js `<Image>` component
- Missing lazy loading
- No responsive image sizes

### 4. Type Safety Issues

#### Issue 4.1: Duplicate Type Definitions
- `MenuCategory` and `MenuItem` defined in two places
- Type conflicts between `types/index.ts` and `data/menuData.tsx`

#### Issue 4.2: File Extension Error
- `data/menuData.tsx` contains no JSX, should be `.ts`

---

## 🟢 Medium Priority Issues

### 5. Code Quality

#### Issue 5.1: No Code Formatting
- Missing Prettier configuration
- Inconsistent quote usage (single vs double)
- Inconsistent spacing in JSX

#### Issue 5.2: No Pre-commit Hooks
- No Husky setup
- No automatic linting before commit
- No type checking before push

### 6. Testing Infrastructure

#### Issue 6.1: Zero Test Coverage
- No testing framework installed
- No unit tests
- No integration tests

### 7. Documentation

#### Issue 7.1: Empty README
- README.md is empty
- No setup instructions
- No development guidelines

---

## 🔵 Low Priority Issues

### 8. Developer Experience

#### Issue 8.1: Multiple Lock Files
- Both `package-lock.json` and `pnpm-lock.yaml` present
- Should standardize on one package manager

#### Issue 8.2: No Component Library
- No Storybook or similar tool
- Hard to showcase components in isolation

---

## Implementation Order

### Phase 1: Quick Fixes (1-2 hours)
1. ✅ Fix typo: `--color-balck` → `--color-black`
2. ✅ Fix typo: `w- full` → `w-full`
3. ✅ Remove duplicate Marquee component
4. ✅ Fix ESLint script in package.json
5. ✅ Add basic README content

### Phase 2: Critical Functionality (2-4 hours)
6. Add form validation to reservation page
7. Replace alert() with proper toast notification
8. Add missing image alt text
9. Fix type definition conflicts
10. Rename menuData.tsx to menuData.ts

### Phase 3: Tooling Setup (2-3 hours)
11. Add Prettier configuration
12. Set up Husky pre-commit hooks
13. Configure proper ESLint rules
14. Add scripts for format and type-check

### Phase 4: Quality Improvements (4-6 hours)
15. Convert img tags to Next.js Image components
16. Add unit tests for key components
17. Implement proper error handling
18. Add comprehensive documentation

### Phase 5: Advanced Features (Optional)
19. Set up Storybook
20. Add E2E tests
21. Implement dark mode
22. Create design system documentation

---

## Quick Command Reference

```bash
# Fix linting immediately
npm run lint

# After adding Prettier
npm run format

# After adding tests
npm test

# Type checking
npm run type-check

# Build to verify everything works
npm run build
```

---

## Success Criteria

### Phase 1 Complete When:
- [ ] All typos fixed
- [ ] Code runs without console errors
- [ ] Linting works properly
- [ ] README has basic content

### Phase 2 Complete When:
- [ ] Forms validate user input
- [ ] No browser alerts used
- [ ] All images have alt text
- [ ] Type system has no conflicts

### Phase 3 Complete When:
- [ ] Code auto-formats on save
- [ ] Pre-commit hooks run successfully
- [ ] Linting catches style issues
- [ ] Type checking prevents errors

### Phase 4 Complete When:
- [ ] Test coverage > 60%
- [ ] Images optimized with Next.js
- [ ] Error boundaries in place
- [ ] Documentation complete

---

## Notes

- Focus on critical issues first
- Test each change before moving to the next
- Maintain backward compatibility
- Document all major changes
- Get code review before merging

---

*Last Updated: January 3, 2026*
