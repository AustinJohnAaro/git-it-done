
  <script src="./assets/js/homepage.js"></script>
  
  
  getUserRepos();
  var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
  };
script

