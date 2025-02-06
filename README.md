---

# Re.Words

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### 📚 **Functionality**

### 📦 **Word Management**

Three-level organization:

- Global categories: All Words / To Review / Learned
- Language groups: Separate dictionaries for each language
- Thematic subcategories (e.g., "Transport," "Food")

Supports an unlimited number of languages and translations

Quick translation direction switch (A → B / B → A)

### 🔧 **Filters & Sorting**

Advanced display options:

- New ➕ / Old 🕰
- Long 🔠 / Short 🔡
- Alphabetical order (A-Z ⬆ / Z-A ⬇)
- Random mix 🎲

Dynamic list updates upon changes

### ⚡ **Batch Operations**

Mass actions for selected words:

- Move between categories ↔
- Bulk deletion 🗑
- Mark for review 🔁
- Smart warnings for critical actions ⚠

### 🔍 **Universal Search**

Instant search across all words from anywhere in the app

Highlighted matches in results

Direct access to word cards

### 🔐 **Account System**

Full-fledged registration/authentication via Firebase

Personal data encryption 🔒

Cross-device synchronization 🔄

Automatic logout after inactivity ⏳

---

### 📊 **Logic & Workflow**

- Dynamic updates: All changes sync instantly with Firebase
- Data validation: Ensures correctness before saving to the database
- Optimized queries: Batch processing to reduce load

---

### 📸 **Screenshots & Demo**

Live demo: https://deorfeal.github.io/Re.Words

---

### 📧 **Contacts**

- **Name:** Mykhailo Hakman
- **Email:** deorfeal.it@gmail.com
- **Whatsapp:** +39 351 795 1487

---

### 📜 **License**

This project is distributed under the MIT License.

---

Re.Words showcases expertise in:

✅ Vue 3 Composition API

✅ TypeScript & strict typing

✅ Firebase (Auth/Firestore/Storage)

✅ Complex state management

✅ Responsive UI

✅ Optimized network requests

Make language learning effective and engaging! 🚀

---
