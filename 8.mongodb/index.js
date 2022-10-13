const express = require('express');
const app = express();

const {connect} = require('./utils/database');
connect();

const PORT = 8000;
app.listen(PORT, () => console.log(`listen in port: http://localhost:${PORT}`))


//   mongodb+srv://root:root@cluster0.icgwqdl.mongodb.net/pepe?retryWrites=true&w=majority

