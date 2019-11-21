const express = require('express'); 
const hc = require('./controllers/hero_controller'); 


const app = express(); 
app.use(express.json()); 

const heroUrl = '/heroes';

app.get(heroUrl, hc.read);
app.post(heroUrl, hc.newHero);





const port = 4010; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}, me lord`)
})