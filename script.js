// i put all menu items here so i dont have to change HTML everytime
const menuItems = [
    { 
        name: "Oat Milk Latte", 
        description: "Popular commuter pick", 
        price: 5.25, 
        category: "hot" 
    },
    { 
        name: "Cappuccino", 
        description: "Classic espresso and foam", 
        price: 4.75, 
        category: "hot" 
    },
    { 
        name: "Americano", 
        description: "Espresso with hot water", 
        price: 3.75, 
        category: "hot" 
    },
    { 
        name: "Flat White", 
        description: "Velvety microfoam latte", 
        price: 5.00, 
        category: "hot" 
    },
    { 
        name: "Cold Brew", 
        description: "Bold & smooth", 
        price: 4.50, 
        category: "cold" 
    },
    { 
        name: "Iced Latte", 
        description: "Espresso over ice with milk", 
        price: 5.25, 
        category: "cold" 
    },
    { 
        name: "Iced Americano", 
        description: "Espresso and cold water", 
        price: 4.00, 
        category: "cold" 
    },
    { 
        name: "Drip Brew of the Day", 
        description: "Fast, classic, reliable", 
        price: 3.25, 
        category: "drip" 
    }
];

// make hamburger menu work on mobile
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // i think i need to check if these exist first or it breaks
    if (hamburger && navLinks) {
        // when you click hamburger button
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // close menu when you click a nav link
        const links = navLinks.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// check if form is filled out correctly
function setupFormValidation() {
    const form = document.querySelector('.order-form');
    
    // only run if form exists on page
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // i thought this stops the form from actually submitting
        
        let isValid = true;
        
        // remove old error messages first so they dont stack up
        const oldErrors = form.querySelectorAll('.error-message');
        oldErrors.forEach(function(error) {
            error.remove();
        });
        
        // check if name is empty
        const nameInput = document.getElementById('customer-name');
        if (nameInput && nameInput.value.trim() === '') {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        }
        
        // check email - i think trim removes spaces
        const emailInput = document.getElementById('email');
        if (emailInput) {
            const emailValue = emailInput.value.trim();
            if (emailValue === '') {
                showError(emailInput, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(emailValue)) {
                showError(emailInput, 'Please enter a valid email');
                isValid = false;
            }
        }
        
        // check phone number
        const phoneInput = document.getElementById('phone');
        if (phoneInput && phoneInput.value.trim() === '') {
            showError(phoneInput, 'Please enter your phone number');
            isValid = false;
        }
        
        // if everything is valid show success
        if (isValid) {
            showSuccessMessage(form);
        }
    });
    
    // i thought it would be good to remove error when user starts typing again
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const error = input.parentElement.querySelector('.error-message');
            if (error) {
                error.remove();
            }
        });
    });
}

// show error message under input field
function showError(input, message) {
    const formGroup = input.parentElement;
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    formGroup.appendChild(error); // adds it to the parent div
}

// check if email looks correct
// AI-assisted: used ChatGPT to understand regex pattern for email because i didnt know how to do this
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// show green success message when form is good
function showSuccessMessage(form) {
    // remove old success message if there is one
    const existingSuccess = form.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    const emailInput = document.getElementById('email');
    const email = emailInput ? emailInput.value : '';
    
    // create success message box
    const success = document.createElement('div');
    success.className = 'success-message';
    success.innerHTML = `
        <strong>Order Confirmed!</strong><br>
        A confirmation email has been sent to ${email}<br>
        Check your inbox for order details.
    `;
    form.appendChild(success);
    
    // i think localStorage saves it in the browser
    if (email) {
        localStorage.setItem('lastOrderEmail', email);
    }
    
    // wait 5 seconds then remove message and clear form
    setTimeout(function() {
        success.remove();
        form.reset();
    }, 5000);
}

// show back to top button when scrolling down
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    // check scroll position - i thought 300 pixels was good amount
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show'); // show button
        } else {
            backToTopBtn.classList.remove('show'); // hide button
        }
    });
    
    // when button is clicked scroll to top smoothly
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// create menu cards from the menuItems array
function renderMenuItems(items) {
    const container = document.getElementById('menu-container');
    
    if (!container) return;
    
    container.innerHTML = ''; // clear old items first
    
    // loop through each item and create HTML
    items.forEach(function(item) {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-item';
        
        // add the item info - toFixed makes price have 2 decimals i think
        menuCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">$${item.price.toFixed(2)}</p>
        `;
        
        container.appendChild(menuCard);
    });
}

// filter menu by category buttons
function setupMenuFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // remove active class from all buttons first
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // add active to the button that was clicked
            button.classList.add('active');
            
            // get category from button - i think data-category is in the HTML
            const category = button.getAttribute('data-category');
            
            let filteredItems;
            if (category === 'all') {
                filteredItems = menuItems; // show all items
            } else {
                // only show items that match category
                filteredItems = menuItems.filter(function(item) {
                    return item.category === category;
                });
            }
            
            renderMenuItems(filteredItems); // update the display
        });
    });
}

// make FAQ accordion work
function setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            // i thought i should close the currently open item first so only one is open
            if (currentlyActive && currentlyActive !== header.parentElement) {
                currentlyActive.classList.remove('active');
            }
            
            // open or close the clicked item
            header.parentElement.classList.toggle('active');
        });
    });
}

// get coffee tip from API
// AI-assisted: ChatGPT helped me understand fetch and promises because i was confused
function fetchDailyQuote() {
    const quoteContainer = document.getElementById('daily-quote');
    
    if (!quoteContainer) return;
    
    // show loading message first
    quoteContainer.innerHTML = '<p class="loading">Loading coffee tip...</p>';
    
    // fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(function(data) {
            // array of coffee tips
            const coffeeTips = [
                "Store your coffee beans in an airtight container away from light and heat.",
                "Grind your coffee beans just before brewing for maximum freshness.",
                "Use filtered water for the best tasting coffee.",
                "The ideal water temperature for brewing is between 195-205°F.",
                "Clean your coffee maker regularly to prevent buildup and maintain flavor.",
                "Try different brewing methods to discover new flavors in your favorite beans."
            ];
            
            // use API data to pick which tip to show - i think % gives remainder
            const randomIndex = data.id % coffeeTips.length;
            const tip = coffeeTips[randomIndex];
            
            // display the tip
            quoteContainer.innerHTML = `
                <blockquote>
                    <p>"${tip}"</p>
                    <footer>— Coffee Tip of the Day</footer>
                </blockquote>
            `;
        })
        .catch(function(error) {
            // if API fails show error instead of breaking page
            quoteContainer.innerHTML = '<p class="error">Could not load coffee tip. Please try again later.</p>';
        });
}

// wait for page to load then run all the functions
// i thought DOMContentLoaded means page is ready
document.addEventListener('DOMContentLoaded', function() {
    setupHamburgerMenu();
    setupFormValidation();
    setupBackToTop();
    renderMenuItems(menuItems);
    setupMenuFilter();
    setupAccordion();
    fetchDailyQuote();
});
