const express = require('express'); 
const hc = require('./controllers/hero_controller'); 


const app = express(); 
app.use(express.json()); 

const heroUrl = '/api/heroes';

//EndPoints
app.get(heroUrl, hc.read);
app.post(heroUrl, hc.newHero);
app.delete(`${heroUrl}/:id`, hc.deleteHero); 
app.put(`${heroUrl}/:id`, hc.updateHero); 





const port = 4010; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}, me lord`)
})