const express = require('express');
const cors = require ('cors');
const bod =  require ('body-parser');
const app = express();
const path = require ('path');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));
app.use(bod());

app.get('/company',function(req,res){
    res.sendFile(path.resolve(__dirname, "COMPANY.html"));
})

if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 8080;
    app.listen(8080, ()=>console.log(`server will be back shortly ${port}`));
}