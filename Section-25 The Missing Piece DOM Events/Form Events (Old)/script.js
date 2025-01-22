const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log("SUBMIT!!!");
    // const usernameInput = document.querySelectorAll("input")[0];
    // const tweetInput = document.querySelectorAll("input")[1];
    const userName = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    addTweet(userName.value, tweet.value);
    userName.value="";
    tweet.value="";
    
    // console.log(usernameInput.value, tweetInput.value);
});

const addTweet = (userName, tweet) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(userName);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}