# BrewRoute Coffee Website

**Name:** Hussein Araji  
**Student Number:** 101304329  
**Course:** IMD1005 - Web Development  
**Assignment:** Assignment 2  
**Date:** February 2026

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

## AI Usage

I used ChatGPT to help with some parts of this project:

**What I used AI for:**
- Helped me understand how to structure the HTML semantic elements like header, nav, main, section
- Explained how flexbox and grid work because I was confused about when to use each one
- Helped debug some CSS spacing issues when things werent lining up right
- Suggested some form input types I didnt know about like type="time" and type="tel"

**What I learned:**
- Semantic HTML makes the code more organized and easier to read
- Flexbox is good for one direction layouts like navigation or buttons in a row
- Grid is better for card layouts where you want multiple rows and columns
- Forms need proper labels connected to inputs for accessibility
- Box model with padding and margin controls spacing

**Code I wrote myself:**
- All the HTML structure and content
- Most of the CSS styling and colors
- The layout decisions for each section
- Navigation links between pages

I estimate about 70% of the code is written by me and 30% was helped by AI for specific problems.

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
