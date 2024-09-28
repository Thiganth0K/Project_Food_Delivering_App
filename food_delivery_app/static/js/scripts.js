function showHomePage() // home_page_function
{   
    const detailsSection = document.getElementById('restaurantDetails');
    const restaurantGrid = document.querySelector('.restaurant-grid');
    const filterSection = document.querySelector('.filter-section');
    const ordersPage = document.getElementById('ordersPage');
    const signInPage = document.getElementById('signInPage');
    filterSection.style.display = 'block';//search_bar
    restaurantGrid.style.display = 'grid';//restaurant_grid
    detailsSection.style.display = 'none';//hide_details_&_sign_in_page_&_help_page
    ordersPage.style.display = 'none';
    signInPage.style.display = 'none'; 
    helpPage.style.display = 'none';
}

function showOrdersPage() //order_page
{   
    const detailsSection = document.getElementById('restaurantDetails');
    const restaurantGrid = document.querySelector('.restaurant-grid');
    const filterSection = document.querySelector('.filter-section');
    const ordersPage = document.getElementById('ordersPage');
    const signInPage = document.getElementById('signInPage');
    restaurantGrid.style.display = 'none';//hide_restaurant_grid_&_seaarch_bar_&_restaurant_details
    filterSection.style.display = 'none';
    detailsSection.style.display = 'none';
    signInPage.style.display = 'none'; // hide_sign_page_&_help_page
    helpPage.style.display = 'none';
    ordersPage.style.display = 'block';//show_order_page
}

function showSignInPage() //sign_in_page_func
{   
    const detailsSection = document.getElementById('restaurantDetails');
    const restaurantGrid = document.querySelector('.restaurant-grid');
    const filterSection = document.querySelector('.filter-section');
    const ordersPage = document.getElementById('ordersPage');
    const signInPage = document.getElementById('signInPage');
    restaurantGrid.style.display = 'none';//hide_restaurant_grid_&search_bar_&_orders_&_details_&help_page
    filterSection.style.display = 'none';
    detailsSection.style.display = 'none';
    ordersPage.style.display = 'none';
    helpPage.style.display = 'none';
    signInPage.style.display = 'block';//show_sign_in_page
}

function handleSignIn(event) //sign_in_checeker
{   
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(`Username: ${username}, Password: ${password}`);
    if (username === "testuser" && password === "password123") //sign_in_logic
    {
        alert("Sign in successful!");
        showHomePage(); //after_sign_in_shows_home_page
    } else {
        alert("Invalid username or password.");
    }
    document.getElementById('signInForm').reset();//reset_form_fields
}

function showDetails(name, image, cuisine, description) //restaurant_details_displaying_func
{   
    const detailsSection = document.getElementById('restaurantDetails');
    const restaurantGrid = document.querySelector('.restaurant-grid');
    const filterSection = document.querySelector('.filter-section');
    document.getElementById('detailsName').textContent = name; //value_assigning
    document.getElementById('detailsImage').src = image;
    document.getElementById('detailsImage').alt = name;
    document.getElementById('detailsCuisine').textContent = cuisine;
    document.getElementById('detailsDescription').textContent = description;
    detailsSection.style.display = 'block';//show_res_details
    restaurantGrid.style.display = 'none';//hide_the_rest_of_the_grid
    filterSection.style.display = 'none'; //hide_the_search_bar
}

function hideDetails() //func_to_hide_details_of_spec_restaurant
{   
    const detailsSection = document.getElementById('restaurantDetails');
    const restaurantGrid = document.querySelector('.restaurant-grid');
    const filterSection = document.querySelector('.filter-section')
    detailsSection.style.display = 'none';//hide_details_sec
    restaurantGrid.style.display = 'grid';//show_restaurant_cards
    filterSection.style.display = 'block'; // Show the search bar
}

function showHelpPage() //func_help_page
{   
    const detailsSection = document.getElementById('restaurantDetails');
    const restaurantGrid = document.querySelector('.restaurant-grid');
    const filterSection = document.querySelector('.filter-section');
    const ordersPage = document.getElementById('ordersPage');
    const signInPage = document.getElementById('signInPage');
    const helpPage = document.getElementById('helpPage');
    restaurantGrid.style.display = 'none';//hide_restaurant_grid_,_search_bar_,_details_section_,_order_page_,_sign_in_page
    filterSection.style.display = 'none';
    detailsSection.style.display = 'none';
    ordersPage.style.display = 'none';
    signInPage.style.display = 'none';
    helpPage.style.display = 'block';//show_help_page
}
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase(); // current_value_of_search_bar
    const cards = document.querySelectorAll('.restaurant-card'); // get_all_restaurant_cards
    
    cards.forEach(card => {
        const cuisine = card.querySelector('p').textContent.toLowerCase(); //get_cuisine_text_from_each_restaurants
        if (cuisine.includes(query) || card.querySelector('h3').textContent.toLowerCase().includes(query)) {
            card.style.display = 'block'; // matched_card
        } else {
            card.style.display = 'none'; // hide_irrelevant_card
        }
    });
});
