# AJAX Giphy Party
It’s time to build something fun with your knowledge of axios and AJAX! For this exercise we will be using the Giphy API! This will require you to use an API key and understand some of the documentation about the API.

## The Application

Your application should do the following:

Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
Once the Giphy API has responded with data, append the GIF to the page
Allow the user to search for as many GIFs as they would like and keep appending them to the page
Allow the user to remove all of the GIFs by clicking a button
Here is an example of what the application might look like:
_images/app.gif
### Part 1: Building the Form

We’ve provided a starter HTML file, but there’s next to nothing in the body. Start by building a simple form with an input for a search term and a submit button. When the user submits the form, use axios to make a request to GIPHY for information based on that term. After receiving the response, console.log the response data to make sure you’re getting back what you expect.

For example, here is what the AJAX request URL would look like for search term of “hilarious”: http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym. You can click on this URL and see the JSON you will get back. To view this in a nicer format, we highly recommend using the JSON Viewer chrome extension. This is also the data you should console.log when the form is submitted.

### Part 2: Appending GIFs

Now that you’re communicating properly with the API, you should do something more interesting with the response data. Instead of logging it, grab a GIF from the response data and append the GIF to the page. Ensure that if you submit the form multiple times, you’ll get multiple GIFs showing up.

### Part 3: Removing GIFs

Add a button next to the form which, when clicked, will remove all GIFs from the page.
