const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
// let user = {
//     username: 'goku',
//     firstname: 'John',
//     lastname:'wick'

//     let username = <req class="body goku"></req>
//     let firstName = <req.body.john
//     let lastName="req.body.wick
//     res.status(200).send(Welcome,{goku})It is nice to meet you{john}{wick}

//     let gokuUpdated={
//       goku= "movie"
//     }
//   }
complimentBtn.addEventListener('click', getCompliment)