const app = require('./config/express-custom')();

const port = process.env.PORT || 3000;
app.listen(port);

