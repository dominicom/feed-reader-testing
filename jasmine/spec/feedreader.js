/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is #1 test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBeNull();
        });

        /* This is #2 test - it loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has an URL defined and not empty', function() {
            allFeeds.forEach(function(item) {
              expect(item.url).toBeDefined();
              expect(item.url).not.toBeNull();
            });
         });

        /* This is #3 test - it loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined and not empty', function() {
           allFeeds.forEach(function(item) {
             expect(item.name).toBeDefined();
             expect(item.name).not.toBe('');
           });
         });
    });


    /* This is our second test suite - it tests menu visibility */
    describe('The menu', function() {

        const menu = $('body');
        const menuIcon = $('.menu-icon-link');

        /* This is a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
           expect(menu.hasClass('menu-hidden')).toBe(true);
         });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('does it display when clicked and hide when clicked again', function() {

            // Menu Icon clicked to show menu
            menuIcon.click();
            expect(menu.hasClass('menu-hidden')).toBe(false);

            // and clicked again to hide menu
            menuIcon.click();
            expect(menu.hasClass('menu-hidden')).toBe(true);

          });
    });


    /* This is our third test suite - it ensures if there is any entry in the feed container */
    describe('Initial Entries', function() {

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         }, 1000);

         it('ensures there is at least a single entry', function(done) {
           const entry = $('.feed .entry');
           expect(entry.length).toBeGreaterThan(0);
           done();
         });
    });

    /* This is our fourth test suite - it test if content changes after new feed loaded */
    describe('New Feed Selection', function() {
        const feed = $('.feed');

        let nextFeed,
            prevFeed;

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
          loadFeed(0, function() {
            prevFeed = feed.html();
            loadFeed(1, function() {
              nextFeed = feed.html();
              done();
            });
          });
        }, 1000);

        it('ensures if content changes after load new feed', function() {
          expect(nextFeed).not.toEqual(prevFeed);
        });
    });
}());
