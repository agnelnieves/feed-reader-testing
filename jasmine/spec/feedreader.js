/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


          /** This loops each feed in allFeeds - it tests to make sure
         * each feed has a URL defined
         * and that the URL is not empty.
         */


        it('url defined', function () {
            for (let feed of allFeeds) {
                //  Expecting values
                expect(feed.url).toBeDefined();
                // Checking length
                expect(feed.url.length).not.toBe(0);
            }
        });


        /** This loops each feed in allFeeds - it tests to make sure
         * each feed has a name defined
         * and that the name is not empty.
         */

        it('name defined', function () {
            for (let feed of allFeeds) {
                //  Expecting values
                expect(feed.name).toBeDefined();
                // Checking length
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /**
  * describe test suite "The menu"
  * */
    describe('The menu', function () {

        var BODY = $('body'),
            MENU_BUTTON = $('.menu-icon-link');

        /**
         * This tests if the menu is hidden by default on page load
         * hidden by default.
         */
        it('should hide the menu by default', function () {
            expect(BODY.hasClass('menu-hidden')).toBeTruthy();
        });

        /**
         * This test if the menu is visible
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should show menu when click the menu icon link and hide the menu when click again', function () {
            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeFalsy();

            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeTruthy();
        });

    }); //End menu test

    /**
* describe test suite "Initial Entries"
* */

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });


        /** Test after loadFeed function,
         * the HTML should contains at least a feed with entry
         */


        it('completes work', function () {
            console.log($('.feed.entry'));
            const feed = document.querySelector('.feed');
            expect(feed.lenght > 0).toBe(false);
        });
    });



    /**
* Describe test suite "New Feed Selection"
*/
    describe('New Feed Selection', function () {
        var initialFeedHtml;

        beforeEach(function (done) {
            // load first feed
            loadFeed(0, function () {
                initialFeedHtml = $('.feed').html();

                // Load second feed
                loadFeed(1, function () {
                    done();
                });
            });

        });

        it('should load new feed', function (done) {
            var newFeedHtml = $('.feed').html();
            expect(newFeedHtml).not.toBe(initialFeedHtml);
            done();
        });
    });
}());
