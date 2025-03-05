## 1. Install Dependencies
`npm install`

## 2. Build the Project
`npm run build`

## 3. Install gh-pages (if not already installed)
`npm install gh-pages --save-dev`

## 4. Update package.json
Add the following to your package.json:
```
"homepage": "https://github.com/MeenakshiKathiresan",
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
} 
```

## 5. Deploy the App
`npm run deploy`

## 6. Visit Your Site
Your site will be available at:
https://meenakshikathiresan.github.io/meenakshikathiresan

