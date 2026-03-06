// menu data for dynamic rendering
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

// hamburger menu toggle
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // close menu when click on link
        const links = navLinks.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// form validation
function setupFormValidation() {
    const form = document.querySelector('.order-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // clear old errors
        const oldErrors = form.querySelectorAll('.error-message');
        oldErrors.forEach(function(error) {
            error.remove();
        });
        
        // validate name
        const nameInput = document.getElementById('customer-name');
        if (nameInput && nameInput.value.trim() === '') {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        }
        
        // validate email
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
        
        // validate phone
        const phoneInput = document.getElementById('phone');
        if (phoneInput && phoneInput.value.trim() === '') {
            showError(phoneInput, 'Please enter your phone number');
            isValid = false;
        }
        
        if (isValid) {
            showSuccessMessage(form);
        }
    });
    
    // remove error when user types
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

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    formGroup.appendChild(error);
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showSuccessMessage(form) {
    const existingSuccess = form.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    const success = document.createElement('div');
    success.className = 'success-message';
    success.textContent = 'Thanks! Your order has been received.';
    form.appendChild(success);
    
    setTimeout(function() {
        success.remove();
        form.reset();
    }, 3000);
}

// back to top button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// render menu items dynamically
function renderMenuItems(items) {
    const container = document.getElementById('menu-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    items.forEach(function(item) {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-item';
        
        menuCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">$${item.price.toFixed(2)}</p>
        `;
        
        container.appendChild(menuCard);
    });
}

// filter menu items
function setupMenuFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // remove active from all buttons
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // add active to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            let filteredItems;
            if (category === 'all') {
                filteredItems = menuItems;
            } else {
                filteredItems = menuItems.filter(function(item) {
                    return item.category === category;
                });
            }
            
            renderMenuItems(filteredItems);
        });
    });
}

// accordion faq
function setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            // close currently open item
            if (currentlyActive && currentlyActive !== header.parentElement) {
                currentlyActive.classList.remove('active');
            }
            
            // toggle clicked item
            header.parentElement.classList.toggle('active');
        });
    });
}

// fetch quote from API
function fetchDailyQuote() {
    const quoteContainer = document.getElementById('daily-quote');
    
    if (!quoteContainer) return;
    
    quoteContainer.innerHTML = '<p class="loading">Loading quote...</p>';
    
    fetch('https://api.quotable.io/random?tags=inspirational')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            return response.json();
        })
        .then(function(data) {
            quoteContainer.innerHTML = `
                <blockquote>
                    <p>"${data.content}"</p>
                    <footer>— ${data.author}</footer>
                </blockquote>
            `;
        })
        .catch(function(error) {
            quoteContainer.innerHTML = '<p class="error">Could not load quote. Please try again later.</p>';
        });
}

// run everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupHamburgerMenu();
    setupFormValidation();
    setupBackToTop();
    renderMenuItems(menuItems);
    setupMenuFilter();
    setupAccordion();
    fetchDailyQuote();
});
