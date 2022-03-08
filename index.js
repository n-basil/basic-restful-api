const app = require("./app");
const port = 8080;

app.listen(port, () => {
  console.log(`Server is listening at localhost on port: ${port}`);
});