// Create web server
// Create comments.js file
// Add the following code to comments.js:
// comments.js
// Create a function that receives a request and response object as parameters.
// Set the header of the response object to application/json.
// Set the status of the response object to 200.
// Send the response object the following JSON object: { comments: [] }.
// Export the function.
// Create a web server that listens on port 3001.
// When the server receives a request, it should call the function created in the previous step.
// Add the following code to comments.js:
const http = require('http');

function requestListener(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  response.end(JSON.stringify({ comments: [] }));
}

const server = http.createServer(requestListener);
server.listen(3001);
module.exports = requestListener;
// Path: comments.test.js
// Create comments.test.js file
// Add the following code to comments.test.js:
// comments.test.js
// Import the comments.js file.
// Import the http module.
// Import the supertest module.
// Call the test function from the supertest module with the server created in the comments.js file as a parameter.
// Use the expect function from the supertest module to check if the header of the response object is set to application/json.
// Use the expect function from the supertest module to check if the status of the response object is set to 200.
// Use the end function from the supertest module to end the test.
// Add the following code to comments.test.js:
const comments = require('./comments');
const http = require('http');
const request = require('supertest');

describe('GET /comments', () => {
  it('should return a list of comments', (done) => {
    const server = http.createServer(comments);
    request(server)
      .get('/comments')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });
});
// Run the test
// Run the test with the following command:
// npm test
// The test should fail with the following error message:
// Error: expected 404 "Not Found", got 200 "OK"
// Fix the code
// Fix the code in comments.js to make the test pass.
// comments.js
// Add the following code to the end of the file:
const