# Theme App — Module 6, Week 3, Day 1 Homework

A React + Redux app with light/dark theme switching using styled-components and styled-theming.

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Tech Stack

| Package | Version |
|---|---|
| react | 16.8.6 |
| react-dom | 16.8.6 |
| react-scripts | 2.1.8 |
| styled-components | 4.4.1 |
| styled-theming | 2.2.0 |
| redux | 4.0.1 |
| react-redux | 7.0.3 |

---

## 📁 Project Structure

```
src/
├── App.js                  # Main app — styled components + ThemeProvider
├── App.css                 # Custom CSS (h1, h2, p input, p p)
├── index.js                # Entry point
├── DarkThemeProvider.js    # Connects Redux state to styled-components ThemeProvider
├── DarkThemeToggle.js      # Checkbox component — dispatches TOGGLE_DARKTHEME
└── redux/
    ├── actions.js          # TOGGLE_DARKTHEME action & action creator
    ├── reducers.js         # preferences reducer with combineReducers
    └── store.js            # Redux store
```

---

## 💡 How It Works

1. **Redux store** holds `preferences.darkThemeEnabled` (boolean, default: `false`)
2. **DarkThemeToggle** checkbox dispatches `TOGGLE_DARKTHEME` on change
3. **DarkThemeProvider** reads Redux state via `useSelector` and passes `{ theme: "dark" | "light" }` to styled-components `ThemeProvider`
4. **theme1** and **theme2** are `styled-theming` variables that switch background and text colors based on active theme
5. **App** renders with light theme by default; checking the box switches to dark theme

---

## 📝 Submission

- **Due:** This Sunday, 10:30 PM PT
- **Submit:** Post GitHub URL on GAP Week 7 Day 1 Homework
