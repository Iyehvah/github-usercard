/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




// console.log(myProfile);


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
function githubCard(myProfile) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newImg = document.createElement('img');
  newImg.classList.add('card img');

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.classList.add('card p');

  const location = document.createElement('p');
  location.classList.add('card p');

  const profile = document.createElement('p');
  profile.classList.add('card p');
  const profileLink = document.createElement('a')

  const followers = document.createElement('p');
  followers.classList.add('card p');

  const following = document.createElement('p');
  following.classList.add('card p');

  const bio = document.createElement('p');
  bio.classList.add('card p');

  newCard.appendChild(newImg);
  newCard.appendChild(cardInfo);
  newCard.appendChild(name);
  newCard.appendChild(userName);
  newCard.appendChild(location);
  newCard.appendChild(profile);
  profile.appendChild(profileLink);
  newCard.appendChild(followers);
  newCard.appendChild(following);
  newCard.appendChild(bio);

  newImg.src = `${myProfile.avatar_url}`;
  name.textContent = `${myProfile.name}`;
  userName.textContent = `${myProfile.login}`;
  location.textContent =  `${myProfile.location}`;
  profileLink.src =  `${myProfile.html_url}`;
  followers.textContent =  `${myProfile.followers_url}`;
  following.textContent =  `${myProfile.following_url}`;
  bio.textContent =  `${myProfile.bio}`;



  console.log(newCard);
}



const cardss = document.querySelector('.cards');


axios
  .get('https://api.github.com/users/Iyehvah')
    .then((response) => {
      response.data.forEach((card) => {
        const newProfileEntry = new githubCard(card);
        cardss.appendChild(newProfileEntry);
      });
    })
    .catch( err => {
      console.log(err);
    });