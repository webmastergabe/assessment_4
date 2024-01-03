// let user = document.querySelector("name");

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Your success will astonish everyone!", "Your mind is your greatest asset.", "You are wealthy beyond your wildest dreams", "You will live a fulfilled life full of adventure, love, and laugher.", "Your cybersecurity expertise will have a significant impact in protecting sensitive data."];
        
        let anotherRandomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[anotherRandomIndex];
        
        res.status(200).send(randomFortune);
    },


    getDate: (req, res) => {
        const date = new Date().toLocaleDateString();
        
        res.status(200).send(date);
    },

    getTime: (req, res) => {
        const time = new Date().toLocaleTimeString();
        
        res.status(200).send(time);
    },


    // welcomeUser: (req, res) => {
    //     const newName = req.data.name;
    //     res.send(newName);
    // },

    getNum: (req, res) => { //make random image?
        let numbers = Math.floor(Math.random() * 100) + 1;
        res.status(200).send(numbers.toString());
    },

    getName: (req, res) => {
        // res.sendFile('index.html');
        let name = document.getElementById("name-input");
        res.status(200).send((`<p>Welcome ${nam.value}!</p>`));
      },
    
};