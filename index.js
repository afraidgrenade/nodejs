const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<p>Server running...</p>");
});
server.listen(3000, "127.0.0.1", () => {
    console.log("\x1b[33mServer running...");
});