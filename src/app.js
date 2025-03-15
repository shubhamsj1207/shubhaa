const express = require('express');
const app = express();
const port = 9000;
app.use(express.json());
app.use(routing);
app.listen(port, () => {
    console.log(`server running on the port${port}`)
}
);