# ***`Zerodha Clone`***
```
- Deployment on AWS
- Jest Unit Testing
- Next Jest
- WebSockets
- socket.io
- API Integration
```

## ***Project Overview***

### 1. **Tools Required**
- *Integrated Development Environment - VS Code*
- *Chrome*
- *JavaScript Runtime - Node.js*
- *Git & GitHub*

### 2. **Frontend Technologies**
- *HTML, CSS, JS*
- *React.js (SPA - Single Page Application)*
- *[Bootstrap](https://getbootstrap.com/)*
- *[FontAwesome](https://fontawesome.com/ "we be using this for the icons")*
- *Material UI*

### 3. **Backend Technologies**
- JavaScript Runtime - Node.js
- Express.js

### 4. **Database Configuration**
- *MongoDB (NoSQL database, unstructured data with object-style syntax)*

### 5. **Testing Framework**
- *Jest Unit Testing*

### 6. **Deployment Platform**
- *AWS (Amazon Web Services)*

### 7. **GitHub Setup**
- *Repository initialized and structured for version control*

---

## ***Commands & Setup***
### ***Git Commands***
```
git init
git add .
git commit -m "Initial Setup"
git checkout -b project-structure
git commit -m "component structure setup"
```
### ***React Setup***
```
npx create-react-app frontend
cd frontend
npm start
```

---

## ***Additional Notes***

- File-based access ✅
- Folder-based access ✅
- **ZERODHA CLONE** -> 3 Subfolders

#### ***Commands***:
- `npm create vite@latest`
- Capital letters are not allowed by npm naming conventions.
- `npx create-react-app frontendapp`
- `cd` (change directory)

### ***Node Modules Management***
- Node modules can be recreated using `package.json`.
- `npm install` reads `package.json` and installs `node_modules` automatically.
- `package-lock.json` keeps track of external dependencies.
- `manifest.json` tracks cached data and manages stored cache memory..
- `robots.txt` is for SEO (Search Engine Optimization) and controls indexing(tells search engines what pages to index).

#### ***SEO and Web Performance***:
- `robots.txt` tells search engines which pages to crawl.
- Google, Bing, Yahoo first check `robots.txt` before crawling.
- `reportWebVitals.js` collects performance stats for React apps.
Tracks performance metrics such as:
  - Largest Contentful Paint (LCP) - Loading performance
  - First Input Delay (FID) - Responsiveness
  - Cumulative Layout Shift (CLS) - Visual stability

#### ***Terminal Commands:***
- `ls`, `cd`, `mkdir`, `npm start` (local commands, do not fetch from the internet)
- `npm docs react` (opens React’s documentation)

### ***React Project Setup***
- Keeping only `index.css` and `index.js` in `src`.
- React project initialized with `Create React App (CRA)` automatically sets up Git.
- `git checkout -b project-structure`

---

Visited links 
https://github.com/apna-college/Zerodha

# ***Component Structure Setup***

## ***Commit Details***
* component structure setup

## ***Created Files***

### **Root Directory**
- `Readme.md`

### **Landing Page Components**
- `src/landing_page/Footer.js`
- `src/landing_page/OpenAccount.js`

### **About Page Components**
- `src/landing_page/about/AboutPage.js`
- `src/landing_page/about/Hero.js`
- `src/landing_page/about/Team.js`

### **Home Page Components**
- `src/landing_page/home/Awards.js`
- `src/landing_page/home/Education.js`
- `src/landing_page/home/Hero.js`
- `src/landing_page/home/HomePage.js`
- `src/landing_page/home/Navbar.js`
- `src/landing_page/home/Pricing.js`
- `src/landing_page/home/Stats.js`

### **Pricing Page Components**
- `src/landing_page/pricing/Brokerage.js`
- `src/landing_page/pricing/Hero.js`
- `src/landing_page/pricing/PricingPage.js`

### **Products Page Components**
- `src/landing_page/products/Hero.js`
- `src/landing_page/products/LeftComponent.js`
- `src/landing_page/products/RightComponent.js`
- `src/landing_page/products/Universe.js`

### **Sign-Up Page Components**
- `src/landing_page/signUp/Signup.js`

### **Support Page Components**
- `src/landing_page/support/CreateTicket.js`
- `src/landing_page/support/Hero.js`
- `src/landing_page/support/SupportPage.js`

