Following are the requirements for this app to run
    1) Nodejs
To run the app for the first time please follow the steps:
    1) clone the app to a directory
    2) run npm install command in MakerSightsTest directory
    3) run npm start command
This app runs on port 3000 so make sure no other app is using that port.
Links to api endpoint for localhost
http://localhost:3000/api/getData
http://localhost:3000/api/addProduct.

My approach to developing this model app.
    Step 1: Using the data available, create a database model. From the information available I categorized the data into 3 tables: Products, Brand and productTypes.
    Step 2: Create a model data json that adheres to this data structure. You can find my model json in schema.json file.
    Step 3: Analize all api endpoints based on requirements. I came to a conclusion that only 2 api endpoints are required:
        1) to get the data from backend: the getData endpoint, and 
        2) to add product to database: the addProduct endpoint.
    We could add the filter functionality to backend but I concluded that it would be better to do it on the frontend as it will unnecessairly utilize server resources and would also hurt the user-experience.
    Step 4: Start building the node app and write functionality for the endpoints. For this task I implemented the getData endpoint which just reads the schema.json file and sends the data to frontend.
    Step 5: Test backend api and add test automation. I created a test file to simply test the getData endpoint. For more detailed explaination please read Testing section below.
    Step 6: (This step would ideally be parallel to step 5). Build frontend. For this task I built the productCard component.

Testing:
    To implement automated testing in this project, we can use jest and supertest to test all api endpoints and other endpoints to see how the app handles each request(refer api.test.js). 
    We can also implement tests to check each api functionality individually using jest. We can mock database calls use fake data like in schema.json to check if our get api is working properly.
    To test addProduct we should write the following tests:
        1) A test that passes all the required information in the current format. This should insert data into database and return success.
        2) A test that has some missing requierd data. This should return a bad request error.
        3) A thest that has some missing not-required data. This should insert data into database and return success.
        4) A test that passes all required data but in incorrect format. This should return a bad request error.
    We can use Selenium to test our front end. 
    When our page loads we can write a test to check all the components on the page and they should match a pre-defined list of components. On the products page the number of cards should equial to the number of products returned by getData api
    Write a test to click the addProduct button and check if correct page renders. On add product page write a test to fill dummy data and test all possible edge cases.

BONUS
Mock page improvements:
1) Add search bar to allow users to search for products.
2) Add a price range filter.
3) Add categories to products (shirts,pants) (I have demostrated this in my schema) to allow users to lookup products by category.
4) Instead of a single static image add a rotating image slider for products to depict multiple angles.




Please Note:
- schema.json cosists of the schema I would create for this page. It is a relational schema which I believe will help simplify the management. I am also more familiar with relational databases than noSQL.
- Store all prices in USD. Any conversions can be applied on front enbd
