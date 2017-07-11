var $ = document.getElementById.bind(document);
var TEST = ((module) => {
        // Constants
        const MEMEURL = "http://troll.me";
        const PICTURES = [
                "images/disaster-girl/red5-qa-testing-departement.jpg",
                "images/chuck-norris/testing-is-for-wimps-real-men-test-their-code-in-production.jpg",
                "images/oh-lawd/production-and-testing-in-the-same-sentence.jpg",
                "images/the-chuck-norris/no-testing-required-it-will-work.jpg",
                "images/science-cat/after-extensive-testing-the-magtorquer-experiment-has-been-an-epic-failure.jpg",
                "images/operations-kittie/humin-i-finish-patch-for-u-no-need-testings.jpg",
                "images/the-most-interesting-man-in-the-world/i-dont-always-do-integration-testing-but-when-i-do-i-do-it-in-production.jpg",
                "images/disaster-girl/issues-in-testing-no-it-will-be-fine-when-we-go-to-production.jpg",
                "images/winter-is-coming/brace-yourselves-testing-is-coming.jpg",
                "images/the-most-interesting-man-in-the-world/thank-you-for-testing-on-prod-stay-on-call-my-friend.jpg",
                "images/pissed-off-obama/get-back-to-testing-the-deployment.jpg",
                "images/dwight-schrute/false-no-one-is-good-at-testing.jpg",
                "images2/excellent-mr-burns/excellent-let-the-testing-begin.jpg",
                "images2/clients-are-the-best-testers/clients-are-the-best-testers.jpg",
                "images2/developer-vs-tester/developer-vs-tester.jpg",
                "images2/qa-engineer-walks-into-a-bar-and-order-different-number-of-beers/qa-engineer-walks-into-a-bar-and-order-different-number-of-beers.jpg",
                "images2/to-a-good-tester-the-glass-is-twice-as-big-as-it-needs-to-be/to-a-good-tester-the-glass-is-twice-as-big-as-it-needs-to-be.jpg",
            ];
        // Helpers
        var joinPaths = (...thePaths) => thePaths.join("/");
        // Exports
        module.showRandomPicture = (elementid) => {
            var randpic = Math.floor(Math.random() * PICTURES.length);
            $(elementid).src = joinPaths(MEMEURL, PICTURES[randpic]);
        };
        return module;
    })({});
window.addEventListener("load", TEST.showRandomPicture.bind(this,"testingfun"));
