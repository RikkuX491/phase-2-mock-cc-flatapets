# Flatapets

There is a new website called Flatapets dedicated to helping pets find new homes, but they need our help! Our job is to implement a React application to help organize their data!

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `4000`.
3. In a new terminal, run `npm start`. This will run your React app on port `5000`.

In our React application, the data about the Pets is in the `db.json` file. This file will mimic an API that follows RESTful conventions.

Make sure to open [http://localhost:4000/pets] (http://localhost:4000/pets) in the browser to verify that your backend is working before you proceed!

## What You Already Have

The `App` component holds three children. `Header`, `SearchBar`, and `PetsContainer`. `Header` and `SearchBar` have some starter code in them already. The `PetsContainer` component will render all `Pet` components.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; however, if your finished product has some styling issues, don't worry too much about it.

# Core Deliverables

As a user, I should be able to:

- See list of pets on the page, using the `Pet` component. The `Pet` component should display the pet's image, name, and conditionally render whether it is from a pet shop or from the wild. If the pet is from a pet shop, the component should say "From a Pet Shop", otherwise it should say "From the wild".
- Click on the image of the pet in the `Pet` component and see the animal_type in place of the name. If I click on the image again, the animal_type should again be replaced with the name. If I click on another pet's image, it toggles that pet's name independent of any other pet's.
- Type in the `SearchBar` component and see the list of pets whose name or animal_type match the text in the search bar. If there's no text in the search bar, all the pets should be rendered.