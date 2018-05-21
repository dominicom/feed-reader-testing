
# Feed Reader Testing

Student Project #5 during Google Front-End Development Nanodegree Program at Udacity
This project demonstrates browser based testing using [Jasmine](http://jasmine.github.io/)

[See live project](https://dominicom.github.io/feed-reader-testing/)

## Table of Contents

* [Project Overview](#project-overview)
* [How to Run Application](#how-to-run-application)
* [Instructions](#instructions)
* [Contributing](#contributing)

## Project Overview

This is #5 student project made for Udacity classroom on Front-End Web Developer track.

In this project students are given a web-based application that reads RSS feeds. For testing an existing web application with incomplete test suite  students have to use [Jasmine](http://jasmine.github.io/) to write a number of tests described on section [Instructions](#instructions).



#### Starter Project
> link http://github.com/udacity/frontend-nanodegree-feedreader

## How to Run Application
Possible choices:

**1**. Run test on your local machine:
* download or clone the repository
* open `index.html` file in your browser


**2**. Open live project with complete test suite [here](https://dominicom.github.io/feed-reader-testing/).

You will find test results in small popup on the right bottom corner of your browser.

## Instructions

List of instructions for students to complete this project:

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

#### External libraries Used

* jQuery
* Jasmine
* Handlebars.js
* IcoMoon
* Normalize.css


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
