let heroes = [
    {
        name:'Abathur',
        title: 'Evolution Master',
        hClass: 'Ranged Assassin',
        winRate: 46.52
    },
    {
        name: "Gul'dan",
        title:  'Darkness Incarnate',
        hClass: 'Ranged Assassin',
        winRate: 47.00
    },
    {
        name: 'Arthas',
        title: 'The Lich King',
        hClass: 'Tank',
        winRate: 49.30
    },
    {
        name: 'Alarak',
        title: "Highlord of the Tal'darim",
        hClass: 'Melee Assassin',
        winRate: 51.22
    },
    {
        name: "Kel'Thuzad",
        title: 'Archlich of Naxxramas',
        hClass: 'Ranged Assassin',
        winRate: 51.28
    },
    {
        name: "Artanis",
        title: 'Hierarch of the Daelaam',
        hClass: 'Bruiser',
        winRate: 50.56
    },
    {
        name: "Diablo",
        title: 'Lord of Terror',
        hClass: 'Tank',
        winRate: 45.86
    },
    {
        name: "Medivh",
        title: 'The Last Guardian',
        hClass: 'Ranged Support',
        winRate: 43.49
    },
    {
        name: "Rexxar",
        title: 'Champion of the Horde',
        hClass: 'Bruiser',
        winRate: 58.78
    }


]

module.exports = {
    read: (req, res) => {
        res.status(200).send(heroes); 
    },

    newHero: (req, res) => {
        const {name, title, hClass, winRate} = req.body;
        console.log(req.body); 
        heroes.push({name, title, hClass, winRate});
        res.status(200).send(heroes);
    },

    deleteHero: (req, res) => {
        const deleteID = req.params.id; 
        const heroIndex = heroes.findIndex
        (hero =>  hero.name === deleteID);
        heroes.splice(heroIndex, 1);
        res.status(200).send(heroes);
        
      
    },

    updateHero: (req, res) => {
        const updateInfo = req.body;
        const updateID = req.params.id; 
        const heroIndex = heroes.findIndex(hero => hero.name == updateID);
        console.log(updateInfo)
        console.log(updateID)
        

        heroes[heroIndex] = {
            name: updateInfo.name,
            title: updateInfo.title,
            hClass: updateInfo.hClass,
            winRate: updateInfo.winRate
        };
        res.status(200).send(heroes); 
        
    }
}