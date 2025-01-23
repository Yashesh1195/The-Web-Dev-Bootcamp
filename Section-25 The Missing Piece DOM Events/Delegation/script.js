// const lis = document.querySelectorAll("li");
// for(let li of lis) {
//     li.addEventListener("click", function() {
//         li.remove();
//     })
// }

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function(e){
    e.preventDefault();
    const userName = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    addTweet(userName.value, tweet.value);
    userName.value="";
    tweet.value="";
});

const addTweet = (userName, tweet) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(userName);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener("click", function(e) {
    e.target.nodeName==="LI" && e.target.remove();
});