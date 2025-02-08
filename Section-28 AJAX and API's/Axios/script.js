//Axios is a library for making HTTP Requests 

// axios.get("https://swapi.tech/api/people/1/")
// .then((res) => {
//     console.log("RESPONSE: ", res);
// })
// .catch((e) => {
//     console.log("ERROR!", e);
// })

const getStarWarsPerson = async (id) => {
try {
    const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
    console.log(res.data.result.properties);
}
catch(e) {
    console.log("ERROR!", e);
}
};

getStarWarsPerson(5);
getStarWarsPerson(15);
getStarWarsPerson(25);
getStarWarsPerson(55);