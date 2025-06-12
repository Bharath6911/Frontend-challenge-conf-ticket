# Frontend Mentor - Conference ticket generator solution

This is my solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). I created a ticket generator application that allows users to enter their details, upload an avatar, and generate a stylish conference ticket.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Form View](./preview.jpg)
![Mobile View](./mocileview.jpg)

The screenshots show both the form view where users enter their information and the ticket view after successful submission.

### Links

- Solution URL: [GitHub Repository](https://github.com/Bharath6911/Frontend-challenge-conf-ticket)
- Live Site URL: [GitHub Pages](https://bharath6911.github.io/Frontend-challenge-conf-ticket/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- SVG manipulation
- File upload handling
- CSS positioning for overlays

### What I learned

This project helped me learn several important concepts:

1. **File Upload Handling**: I learned how to implement drag and drop file upload and handle displaying images.

```js
// Handling drag and drop for file uploads
uploadLabel.addEventListener('drop', function(e) {
  e.preventDefault();
  uploadLabel.style.borderColor = '#5e3be1';
  
  if (e.dataTransfer.files.length > 0) {
    avatarInput.files = e.dataTransfer.files;
  }
});
```

2. **SVG as Background**: I learned how to use SVG images as container backgrounds and position content precisely over them.

```css
.ticket-svg-container {
  position: relative;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.ticket-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
```

3. **Form Validation**: I implemented basic form validation and error handling for required fields.

### Continued development

In future projects, I'd like to:

- Implement more advanced form validation (custom error messages, real-time validation)
- Add animation effects when transitioning between form and ticket views
- Create a backend to actually store ticket information
- Implement a download feature for the generated ticket
- Add QR code generation for the ticket

## Author

- Frontend Mentor - [@Bharat6911](https://www.frontendmentor.io/profile/Bharath6911)
- GitHub - [@Bharath6911](https://github.com/Bharath6911)

## Acknowledgments

I would like to acknowledge the Frontend Mentor community for providing this challenge. I completed most of this project independently, though I used GitHub Copilot for some assistance with CSS positioning and JavaScript file handling. The project helped me understand better how to work with form submissions and create interactive elements.
