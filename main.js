document.addEventListener("DOMContentLoaded", function () {
    const profileAvatar = document.querySelector('.profile-avatar');
    const profileName = document.querySelector('.profile-name');
    const profileUser = document.querySelector('.profile-username');
    const profileRepository = document.querySelector('.profile-repository');
    const profileFollowers = document.querySelector('.profile-followers');
    const profileFollowing = document.querySelector('.profile-following');
    const profileLink = document.querySelector('.profile-link');

    const endpoint = "https://api.github.com/users/Carluuss";


    fetch(endpoint).then(function (res) {
        return res.json();
    })
        .then(function (json) {
            profileAvatar.src = json.avatar_url;
            profileName.innerHTML = json.name;
            profileUser.innerHTML = json.login;
            profileRepository.innerHTML = json.public_repos;
            profileFollowers.innerHTML = json.followers
            profileFollowing.innerHTML = json.following;
            profileLink.href = json.html_url;
        })
})