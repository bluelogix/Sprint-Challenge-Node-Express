// play this: https://www.youtube.com/watch?v=d-diB65scQU
require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})

