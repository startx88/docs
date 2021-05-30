/**
 * https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work
 * How CSS works:
 * *. When a browser display a content.
 * *. It must combine the document's content with its style information.
 * *. It processes the document in a number of stage.
 *
 * Steps:
 * 1. The browser loads the HTML (e.g. receives it from the network).
 * 2. It converts the HTML into a DOM (Document Object Model). The DOM represents the document in the computer's memory.
 * 3. The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images and videos ... and linked CSS
 * 4. The browser parses the fetched CSS,  and sorts the different rules by their selector types into different "buckets"
 * 5. The render tree is laid out in the structure it should appear in after the rules have been applied to it.
 *
 *
 *
 * Tree:
 *
 * Load html => Parse Html + Load css => Parse CSS + Create DOM => Display
 */