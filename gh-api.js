var lookupButton = document.querySelector('.lookup');
var usernameElem = document.querySelector('.username');
var usernameMessage = document.querySelector('.usernameMessage');


//alert($);

lookupButton.addEventListener('click', function(){

    var username = usernameElem.value;
    var url = "https://api.github.com/users/" + username;

    $.ajax({
        type : 'GET',
        url: url,
        headers: {"Authorization": "token <GITHUB_TOKEN_HERE>"}
    })
    .then(function(result){
       var message = "Hi, " + username + " you have " + result.public_repos + " repos in GitHub!"
       usernameMessage.innerHTML = message;
   });
});
