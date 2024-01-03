const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

// everything above is original


const fortuneBtn = document.querySelector("#fortuneButton")

const getFortune = () => {
     axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)



const dateBtn = document.querySelector("#dateButton")

const getDate = () => {
    axios.get("http://localhost:4000/api/date/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


dateBtn.addEventListener('click', getDate)



const timeBtn = document.querySelector("#timeButton")

const getTime = () => {
    axios.get("http://localhost:4000/api/time/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


timeBtn.addEventListener('click', getTime)



const numBtn = document.querySelector("#randomNum")

const getNum = () => {
    axios.get("http://localhost:4000/api/number/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};


numBtn.addEventListener("click", getNum)


  
const nameBtn = document.querySelector("#nameButton")

// const getName = () => {
//     axios.get('http://localhost:4000/api/greet/')
//         .then(res => {
//             const data = res.data;
//             alert(data);
//         });
  
// };

// nameBtn.addEventListener("click", getName)