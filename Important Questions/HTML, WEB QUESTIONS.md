### Q. What is !important?

    The properties marked with !important will be at upmost priority, its like infinite specificity.

### Q. What is the box model?

    Essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content edge.

### Q. What is the difference between position absolute, relative and fixed?

    Relative - the element is positioned relative to its normal position.
    Absolute - the element is positioned absolutely to its first relative positioned parent.
    Fixed - the element is positioned related to the browser window.
    Sticky - the element is positioned based on the user's scroll position.

### Q. What is CSS positioning?

    Its how an element is positioned in a document. The top , right , bottom , and left properties determine the final location of positioned elements.

### Q. Whats the difference between display none and display hidden?

    visibility:hidden hides the element, but it still takes up space in the layout.
    display:none removes the element from the document. It does not take up any space.

### Q. Difference between flex and grid? Where to use it?

    flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.
    Flex is used at low and simple designs, while grid is used for large scale.
    Items dont overlap in flexbox and its content based, while grid can overlap content and its layout based.

### Q. What is BEM?

    BEM (which stands for Block-Element-Modifier) is a naming convention standard for CSS class names.

### Q. What is the z-index? What is the stacking context?

    The stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage.
    Z index gives order to stacking of elements.

### Q. Explain briefly what happens when you hit a url? explain DNS lookup?

    After you've typed the URL into your browser and pressed enter, the browser needs to figure out which server on the Internet to connect to. To do that, it needs to look up the IP address of the server hosting the website using the domain you typed in. It does this using a DNS lookup
    DNS translates domain names to IP addresses so browsers can load Internet resources.

### Q. What is a URLs full form? Explain what a url is and the four parts it consists of The protocol in use The hostname of the server The location of the file The arguments to the file?

    Uniform Resource Locator
    Parts - Protocol, Host & port, path, query string.

    * => scheme://host:port/path?query

### Q. What is HTTP protocol?

    Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML.

### Q. What is TCP Protocol?

    TCP is used for organizing data in a way that ensures the secure transmission between the server and client.

### Q. Explain all the different HTTP methods?

    POST, GET, PUT, PATCH, and DELETE.

### Q. What are HTTP headers?

    HTTP header is a field of an HTTP request or response that passes additional context and metadata about the request or response.

### Q. What are some HTTP response codes? what does it mean? 2xx, 3xx, 4xx, 5xx

    200 Accepted / OK
    300 Redirection
    400 Client Error
    500 Server Error

### Q. What does cache control on http response mean?

    Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses.

### Q. What is polling?

    Polling is a technique that allows the servers to push information to a client again an again. Like making request in a set interval.

     On another side, long polling is a version of traditional polling that allows the server to send data to a client whenever available. As a result, the server does not have to wait for the client to send a request. In Long Polling, the server does not close the connection once it receives a request from the client.

### Q. What are web sockets?

    The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server.

### Q. How is web sockets different from HTTP?

    WebSocket is a protocol providing full-duplex communication channels over a single TCP connection. Where as, HTTP providing half-duplex communication.
    Means, server can push information to the client (which does not allow direct HTTP)

### Q. What is HTTPS?

    Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer.

### Q. What is Cross Origin Resource Sharing? ( CORS ) Why do we need it?

    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

### Q. What does Access-Control-Allow-Origin header do?

    It indicates whether the response can be shared with requesting code from the given origin.

### Q. What is clickjacking? How do you fix it?

    When an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the top level page.
    Sending the proper Content Security Policy (CSP) frame-ancestors directive response headers that instruct the browser to not allow framing from other domains.

### Q. What are some performance metrics for your website?

    1. Website Speed
        Time to Title
        Time to Start Render
        Time to Interact
    2. Number of Assets.
    3. Error Rate
    4. Bounce Rate
    5. Unique Visitors
    6. Traffic Source
    7. Conversion Rate
    8. Top Pages Website - Landing Pages
    9. Keyword Ranking
    10. Lead Generation

### Q. What does the following term mean?

1 Time to first byte,
2 Page load time

    Time-to-first-byte is the time it takes for a client to receive the first byte of a response to a request that it sends.
    The average amount of time it takes for a page to show up on your screen

### Q. What do CDN or Content Delivery Networks do? When do you need a CDN?

    Distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device.  Like Amazon CloudFront, Cloudfare, Google cloud CDN.

### Q. What is the difference between Client Side Renderring and Server Side Renderring?

    Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript.
    Server-side rendering (SSR) is an application's ability to convert HTML files on the server into a fully rendered HTML page for the client.

### Q. What is Progressive Renderring?

    The web page is divided into different parts on the basis of priority.

### Q. What are service workers?

    Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available).
