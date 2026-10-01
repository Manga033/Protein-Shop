# Protein Shop

**A responsive, multi-page e-commerce front end for a protein supplement store, built with plain HTML, CSS and JavaScript.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

My first front-end project at International Burch University (October 2024 – January 2025). It has no frameworks, so every interaction is written by hand.

## Screenshots

| Home | Products | Registration |
|------|----------|--------------|
| ![Home](docs/screenshots/home.png) | ![Products](docs/screenshots/products.png) | ![Register](docs/screenshots/register.png) |

## Features

- **Pages:** home, products, about us, contact, login and registration.
- **Registration and login:** form validation, toast notifications (Toastr) and a live password-strength indicator on registration.
- **FAQ:** accordion on the home page that expands and collapses smoothly.
- **Gallery:** click an image on the home page to open it in a pop-up viewer.
- **Responsive layout:** media queries for desktop, tablet and phone screens.

## Run it

No build step is needed.

```bash
git clone https://github.com/Manga033/Protein-Shop.git
cd Protein-Shop
```

Open `index.html` in a browser, or serve the folder locally with `python3 -m http.server 8000`.

## Project structure

```
├── index.html, products.html, info.html, contact.html, login.html, register.html
├── style.css            # Shared styles and media queries
├── validation.js        # Registration form validation
├── loginval.js          # Login validation and notifications
├── password.js          # Password-strength indicator
├── faq.js, gallery.js   # FAQ accordion and image pop-up
├── pictures/, videos/   # Images and promotional video
```

## What I learned

- Building a multi-page site and keeping the design consistent with shared CSS.
- Responsive design with media queries.
- Handling the DOM and form validation with vanilla JavaScript.

## Author

**Danin Mangafić** – IT student at International Burch University, Sarajevo
[LinkedIn](https://www.linkedin.com/in/danin-mangafi%C4%87-45b39b431) · [GitHub](https://github.com/Manga033)
