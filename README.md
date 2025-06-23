# 🌌 Star Wars API App | React + Vite

[🇹🇷 Click for Turkish README](./README.tr.md)


*Created: May 5, 2025*

A modern and user-friendly web application for browsing starships in the Star Wars universe, built with React and Vite.

* This project was developed as **Week-12 - Assignment-2 | Star Wars API** for the Patika Frontend Bootcamp.
* Starships are listed and detailed using SWAPI (Star Wars API).
* Built with **React**, **Vite**, **CSS3**, and **SWAPI**.
* State management is handled with React Hooks.

---

## 🌐 Live Demo

Visit the live site: [Star Wars API](https://star-wars-api-reactjs.vercel.app/)

---

## :computer: Installation & Usage

1. Clone the repository:
```bash
git clone https://github.com/tunahanyasar/star-wars-api-reactjs.git
```

2. Navigate to the project folder:
```bash
cd star-wars-api-reactjs
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` to view the app.

---

## 🗂️ Project Structure

```
star-wars-api-reactjs/
│
├─ src/
│   ├─ components/
│   │   ├─ StarshipList.jsx
│   │   └─ StarshipDetail.jsx
│   ├─ assets/
│   │   └─ screenshots/
│   │       ├─ fullpage.png
│   │       ├─ detailpage.png
│   │       └─ search.png
│   ├─ App.jsx
│   ├─ App.css
│   ├─ index.css
│   ├─ main.jsx
│   └─ apiTest.js
├─ public/
├─ index.html
├─ package.json
└─ ...
```

### File & Folder Explanations

- **/src/components/**
  - **StarshipList.jsx:** Main component managing the list of starships.
  - **StarshipDetail.jsx:** Component for the starship detail page.
- **/src/assets/screenshots/**: App screenshots.
- **App.jsx:** Main application file.
- **App.css & index.css:** All style files.
- **main.jsx:** Entry point for the React app.
- **apiTest.js:** Test file for API functions communicating with SWAPI.
- **index.html:** Main HTML file for the app.
- **package.json:** Project dependencies and scripts.

---

## :star2: Main Features

1. **Starship Operations**
   - List all starships  
     See: [All Starships](#fullpage)
   - View starship details  
     See: [Details Page](#details-page)
   - Filter duplicate starships
   - Load all starships with pagination

2. **Search & Filtering**
   - Search by starship name
   - Search by model name
   - Case-insensitive search  
     See: [Search Feature](#search)

3. **Modern UI/UX**
   - User-friendly interface
   - Clean and organized codebase
   - Loading indicators

---

## 💡 Technologies & Concepts

**React:**
* Component Architecture
* Props System
* React Hooks (useState, useEffect)
* Event Handling
* Conditional Rendering
* React Router

**CSS:**
* Flexbox Layout
* CSS Grid
* Transform & Transitions
* Responsive Design
* Custom Properties

**JavaScript:**
* ES6+ Features
* Array Methods
* API Integration
* Event Handling
* State Management
* Asynchronous Programming

---
# :paperclip: Screenshots

### Fullpage
![Fullpage](./src/assets/screenshots/fullpage.png)

### Details Page
![Detailpage](./src/assets/screenshots/detailpage.png)

### Search 
![Search](./src/assets/screenshots/search.png)

---

## 🎮 How to Use

1. **Home Page:**
   - View the list of all starships
   - Use the search box to filter starships
   - Click any starship to view its details

2. **Detail Page:**
   - View all features of the selected starship
   - Use the back button to return to the home page

---

## 🔍 Detailed Explanation

### Project Purpose & Scope

This project is a web application developed to browse and examine starships in the Star Wars universe. Real-time data fetching is performed using SWAPI.

### Technical Details

#### StarshipList.jsx - Main List Component

**StarshipList.jsx** is the main component of the application and includes the following key functions:

1. **State Management:**
   - Manages starships and loading state with useState hooks
   - Integrates with the API using useEffect

2. **Data Processing:**
   - Fetches data from all pages
   - Filters duplicate starships
   - Handles search and filtering

#### User Experience
- **Loading Indicators:** Feedback to the user while data is loading
- **Easy Navigation:** Quick access to the detail page
- **Search:** Instant filtering with real-time search

---

## 👤 Contact

[Tunahan Yaşar](https://github.com/tunahanyasar)  
[LinkedIn](https://www.linkedin.com/in/tunahan-yasar/)

---

## 📚 References & Credits

This project was developed using [SWAPI (Star Wars API)](https://swapi.dev/). The official SWAPI documentation was referenced for API documentation and data structure.

