const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadjoke();
    // console.log(jokeText);
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadjoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json'} };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch (e) {
        return "No jokes available :(";
    }
}

button.addEventListener('click', addNewJoke);
