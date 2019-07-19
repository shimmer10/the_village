# the_villiage

## **The Village is a site designed to allow people with autistic children to add information on Business that work well with kids with autism**
## **This includes people creating user profiles and being able to add reviews to the places/business to share their experience**
## Developers: Brenda, Jenn, Pete, Sean

## **Link to Heroku deployed site: https://the-villiage-1.herokuapp.com/**

### **The site opens at the start page with '/'**
    * The page renders the home page with a carousel of images related to autism
    * The user can move the carousel images by clicking on them otherwise they will automatically rotate through
    * There is a header/nav bar that includes the site name 'The Village', 
    * The nav bar also include clickable links of 'Login/Register', 'Home', 'Search'
### **If the user clicks 'Login/Register'**
    * A menu form will drop down and the user will be prompted to enter their username and email to sign in
### **If the user clicks 'Home'**
    * The user will be redirected from whatever page they are on to the '/' route homepage
### **If the user clicks 'Search'**
    * The user will be redirected to the '/search' page that will allow them to search information on the place/business information
    * The user can choose to view 10, 25, 50, or 100 places/business per page (if available) or overflow entries will appear on different second 'page'
### **Adding a place/business on the Search Page**
    * The user can click the 'Add' button on this page to enter a new place/business and they will be prompted via modal for the following information
        * Category 
            * Dental
            * Dining
            * Education
            * Entertainment
            * Medical
            * Personal care
        * Location Name
        * Phone Number
        * Street Address
        * City
        * State
        * Zip Code
        * Summary
        * Services
        * Web Address
    *If they user clicks the submit button the place information will be saved to the database
### **Viewing a Place on the Search Page**
    * If there is a place to view the user can click the 'View' button
    * When the user clicks the 'View' button they are redirected to the Place Page for that specific place/business
    * The view button holds the id of the place and when clicked renders '/place/:id' using the id passed with the on-click action
### **Deleting a Place on the Search Page**
    * If the 'X', or delete button, on the row for a place is selected it will delete the place information
    * This action grabs the id for the place/business from the on-click action and uses that to do a delete with an ajax call for destory passing in '/place/:id'
    * This will cascade to delete to the reviews associated to that place/business
### **If the user has selected a place and now is on the Place Page**
    * The information entered for the place/business is rendered to the page
    * The user can view the review information or add using the 'Add Review' button
    * The user can choose to view 10, 25, 50, or 100 reviews per page (if available) or overflow entries will appear on different second 'page'
    * If the user clicks the 'Add Review' button a modal will prompt them to enter a star (1-5) review and a text review
    * If the user the hits the 'Submit' button the information for that review will be saved on the review table using '/review'
### **Enhancements**
    * Add catagories that are more broad with subcatagories that are more specific
        * i.e. Have a category of 'Entertainment' which has subcategories such as 'Dining', 'Theme Park', 'Movie Theaters', etc.
    * Location services to use zipcode and allow searching within a radius
    * Search bar rather than button on nav bar to allow for more convenient searching  
        * Dependent on location services, otherwise we would need a search bar and state dropdown on our nav bar
    * Search by keyword
    * Reviews by username
        * Click username when viewing a review
        * Search by a username to see all of their reviews
    * Username and password
        * This is to make it more secure rather than having user be based on username and email