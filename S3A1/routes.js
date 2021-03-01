module.exports = requestHandler = (req, res) => {
  const { url, method } = req;

  switch (url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.write("<html><head><head><body>Input your username, please User");
      res.write(
        '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'
      );
      return res.end("</body></html>");

    case "/users":
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      let list = "<html><head></head><body><ul>";
      for (
        let index = 0;
        index <= Math.floor(Math.random() * 10 + 1);
        index++
      ) {
        list += `<li>User ${index}</li>`;
      }
      list += "</ul></body></html>";
      res.write(list);
      return res.end();

    case "/create-user" && method == "POST":
      const body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody);
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      break;

    default:
      res.statusCode = 404;
      //console.log("Route not designed");
      return res.end("Not found");
  }
};
