const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
app.use(cors());
const PORT = 4000
let data = "";

axios.get('http://API-GateWay-LB-1216189706.eu-north-1.elb.amazonaws.com/health')
  .then((response) => {
    data = response.data;
    console.log(data);
  })
  .catch((error) => {
    console.error('Request error:', error);
  });

app.listen(PORT,()=>{
    console.log(`[LOG:] App is running on port ${PORT}`)
})