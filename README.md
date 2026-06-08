# Hanisha Reddy - Portfolio Website

A simple, elegant portfolio website built with **HTML, CSS, and vanilla JavaScript**.

## Project Structure

```
portfolio-html/
├── index.html      # Main HTML file with all content
├── styles.css      # All styling
├── script.js       # Interactive features (navigation, animations)
└── README.md       # This file
```

## How to Use

### Option 1: Open Directly in Browser
Simply double-click `index.html` to open in your browser.

### Option 2: Use a Local Server (Recommended)

**Python:**
```bash
cd portfolio-html
python3 -m http.server 8000
```
Then open `http://localhost:8000`

**Node.js:**
```bash
npx serve portfolio-html
```

**VS Code:**
Install the "Live Server" extension, right-click `index.html` → "Open with Live Server"

## How to Edit Content

All content is in `index.html`. Common edits:

### Change Your Name
Search for "Hanisha" in `index.html` and replace with your name.

### Update Photo
Replace the image URL in this line:
```html
<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hanisha..." alt="...">
```

### Update Resume Link
Find and update the resume URL in both the header button and contact section.

### Edit Sections
- **Hero**: Edit the `<section id="hero">` section
- **About**: Edit the `<section id="about">` section
- **Experience**: Edit the `<section id="experience">` section  
- **Projects**: Edit the `<section id="projects">` section
- **Contact**: Edit the `<section id="contact">` section

### Change Colors
Edit colors in `styles.css`:
- Background beige: `#EDE9E3`
- Text dark: `#1A1A1A`
- Border light: `#D0CCC5`

## Deploy

This is a static website that can be deployed anywhere:

- **GitHub Pages**: Push to GitHub and enable Pages
- **Netlify**: Drag & drop the folder
- **Vercel**: Connect your GitHub repo
- **Any web hosting**: Upload via FTP

## Features

- Fully responsive design
- Smooth scroll navigation
- Mobile menu
- Scroll-triggered animations
- Animated marquee
- Hover effects
- Clean, editorial typography
- Fast loading (no frameworks!)

## License

Free to use and modify.
