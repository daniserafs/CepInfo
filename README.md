Create an API to search CEP (Brazilian Zip Code/Postal Code). Consume the API and show data to user.✅
Input: Zip Code using strings with hyphens.✅ (❓ I'm not quite sure if the code at this point is able to accept hyphens.)
Requirements: Use Axios, desctrutings and other ES6+ resources. ✅
Use http modules from nodeJS. ✅

### Initializing

    on terminal: `yarn start`
    will start both server and client

### Some thoughts

    - this is a simple project to develop my skills on back-end and front-end applications
    - any feedback is helpful!
    - I installed express and cors via yarn. Cors is going to help establish communication between the front-end and back-end. I'm not sure I'll be needing that but it seems important.
    - `useState` is still something blurry in my mind

### What's next
    - use a debounce to avoid fetching zipcode every time, just when the user finishes typing or just when the length of the input represents a zipcode 
        * I'm having problems with rendering in debounce, the debounce works but the application doens't fetch the data
    - add tests to backend using supertest
    - add tests on frontend using testing library
    -learn to use fetch instead of axios is a more low level abstraction that gives you more levels of freedom