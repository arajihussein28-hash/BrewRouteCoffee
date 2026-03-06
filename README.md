# BrewRoute Coffee Website

**Name:** Hussein Araji  
**Student Number:** 101304329  
**Course:** IMD1005 - Web Development  
**Assignment:** Assignment 3 - Interactive Features  
**Date:** March 2026

## About the Project

This is a website for BrewRoute Coffee, a independent cafe in downtown Ottawa. The cafe wants to help busy commuters order coffee online so they dont have to wait in long lines during morning rush.

The website has 3 pages:
- Home page with information about the cafe and how ordering works
- Menu page showing all the drinks
- Order page with a form to place orders

## Client Description

BrewRoute Coffee is a local cafe that focuses on:
- Good quality ethically sourced coffee beans
- Fast service for people going to work or school
- Helping customers save time in the morning

The main customers are professionals and students who are in a hurry and need their coffee fast.

## Design Changes from Assignment 1

I made some changes from my original design:

1. **Navigation** - Added a simple navigation bar at the top so people can move between pages easily. In Assignment 1 I didnt think about how pages connect together.

2. **Menu page** - Created a full menu page because in Assignment 1 I only showed a few drinks on the home page. Now users can see all options.

3. **Form layout** - Made the order form simpler and more organized. I added more input fields like phone number and pickup time so the order is complete.

4. **Colors** - Kept the warm brown and beige colors from Assignment 1 because they match the coffee theme and feel welcoming.

5. **Mobile focus** - Tried to keep buttons big and text readable because most users will be on their phones.

6. **Responsive design** - Added media queries so the website works on different phone sizes. On smaller screens the layout changes to single column and text gets smaller.

7. **Visual polish** - Added shadows to cards and buttons to make them look more professional. Also added hover effects so buttons move a bit when you hover over them.

## Assignment 3 - Interactive Features Checklist

### ✓ Request 1: Responsive Hamburger Menu
**What I built:** Added a hamburger menu that shows on screens smaller than 768px. When you click it the navigation slides in from the left. Click again or click a link and it closes.

**Challenges:** Had some trouble getting the animation smooth at first. Also had to make sure the menu appeared above other content using z-index.

### ✓ Request 2: Form Validation
**What I built:** The order form now checks if name, email, and phone are filled in before submitting. Email has to be in proper format. Error messages show up in red under each field. When form is valid it shows a green success message.

**Challenges:** Figuring out how to clear old error messages before showing new ones was tricky. Also learned about preventDefault to stop the form from actually submitting.

### ✓ Request 3: Back to Top Button
**What I built:** A round button appears in bottom right corner after you scroll down 300px. Click it and page smoothly scrolls back to top.

**Challenges:** Making it fade in and out smoothly took some CSS tweaking. Used opacity and visibility together.

### ✓ Request 4: Dynamic Menu Rendering
**What I built:** Menu items are stored in a JavaScript array with 8 items. Each has name, description, price, and category. JavaScript creates all the menu cards automatically when page loads.

**Challenges:** Had to use createElement and appendChild which was new to me. Making sure the HTML structure matched the original static version took some testing.

### ✓ Request 5: Accordion FAQ
**What I built:** Added 4 FAQ questions on home page. Click a question and answer slides down. Click another question and previous one closes automatically. Plus icon rotates to X when open.

**Challenges:** Getting only one item open at a time required checking for currently active item and closing it first. The max-height transition was smoother than I expected.

### ✓ Request 6: Menu Filtering
**What I built:** Added filter buttons on menu page - All, Hot Drinks, Cold Drinks, Drip Coffee. Click a button and only those items show. Active button is highlighted in brown.

**Challenges:** Learning Array.filter() method. Also had to make sure the "All" button showed everything again.

### ✓ Request 7: API - Daily Quote
**What I built:** Home page fetches a random inspirational quote from Quotable API. Shows "Loading..." while fetching. If it fails shows error message instead of breaking the page.

**Challenges:** Understanding promises and .then() was confusing at first. Also had to handle errors properly with .catch() so site doesnt crash if API is down.

## AI Usage

I used ChatGPT to help with some parts of this project:

**What I used AI for in Assignment 3:**
- Explained how addEventListener works and event handling
- Helped me understand the difference between forEach and filter for arrays
- Showed me how fetch API works with promises and .then()
- Helped debug an issue where my accordion wasnt closing previous items
- Explained classList.toggle and classList.add/remove methods
- Helped me understand email regex pattern for validation

**What I learned:**
- JavaScript runs when page loads using DOMContentLoaded
- Functions help organize code instead of having everything in one big script
- querySelector and querySelectorAll are used to find HTML elements
- Event listeners wait for user actions like clicks or scrolling
- Fetch gets data from other websites using APIs
- Array methods like filter and forEach make working with data easier

**Code I wrote myself:**
- All the JavaScript function structure and logic
- The menu data array with all 8 items
- Most of the HTML updates for new sections
- All the CSS styling for new features
- Decided where each feature should go on the pages

I estimate about 75% of the code is written by me and 25% was helped by AI for learning new concepts.

## Technical Features

The website demonstrates:

- **Semantic HTML**: Using header, nav, main, section, footer elements
- **Flexbox**: Used for navigation bar, hero section, testimonials, and button groups
- **CSS Grid**: Used for menu items display and menu cards on the menu page
- **Forms**: Order form with proper labels, different input types (text, email, tel, time, select, textarea)
- **Box Model**: Padding and margins throughout, using box-sizing: border-box
- **External CSS**: All styles in style.css file, no inline styles

## Files Included

- index.html - Home/landing page
- menu.html - Full menu page
- order.html - Order form page
- style.css - All styling
- README.md - This file

## How to View

Open index.html in a web browser to see the website. Click the navigation links to move between pages.

## Future Improvements

Things I would add if I had more time:
- Make it work better on mobile with media queries
- Add actual wait time estimates
- Make the form actually submit somewhere
- Add more images of coffee drinks
- Add a map showing the cafe location
