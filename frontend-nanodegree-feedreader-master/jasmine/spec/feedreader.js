
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        

        it('should have each feed url defined and not to be empty', function () {
            for(var i=0, len=allFeeds.length; i<len; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /** This loops each feed in allFeeds - it tests to make sure
         * each feed has a name defined
         * and that the name is not empty.
         */
        it('should have each feed name defined and not to be empty', function () {
            for(var i=0, len=allFeeds.length; i<len; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

     // describe test suite "The menu"
  
    describe('The menu', function () {

        var BODY = $('body'),
            MENU_BUTTON = $('.menu-icon-link');

        
        it('should hide the menu by default', function () {
            expect(BODY.hasClass('menu-hidden')).toBeTruthy();
        });

        
        it('should show menu when click the menu icon link and hide the menu when click again', function () {
            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeFalsy();

            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeTruthy();
        });

    });


    
    //describe test suite "Initial Entries"
    
     describe('Initial Entries', function(){
         beforeEach(function (done) {
             loadFeed(0, function () {
                 done();
             });

         });

        it('should loadFeed and render the entry and .feed container', function () {
            expect($('.feed').has('.entry').length).not.toBe(0);
        });
     });

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
            })
        });
        it('should load new feed', function (done) {
            var newFeedHtml = $('.feed').html();
            expect(newFeedHtml).not.toBe(initialFeedHtml);
            done();
        });
    });
}());