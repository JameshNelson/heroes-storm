let heroes = [
    {
        name:'Abathur',
        title: 'Evolution Master',
        class: 'Ranged Assassin',
        WinRate: 46.52
    },
    {
        name: "Gul'dan",
        title:  'Darkness Incarnate',
        class: 'Ranged Assassin',
        WinRate: 47.00
    },
    {
        name: 'Arthas',
        title: 'The Lich King',
        class: 'Tank',
        WinRate: 49.30
    }

]

module.exports = {
    read: (req, res) => {
        res.status(200).send(heroes); 
    },

    newHero: (req, res) => {
        // const {name, title, hClass, wR} = req.body;
        // heroes.push({name, title, hClass, wR});
        // console.log(req.body); 
        heroes.push(req.body);
        res.status(200).send(heroes);
    }
}