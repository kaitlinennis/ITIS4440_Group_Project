<script setup></script>

<template>
  <header>
    <nav>
      <div class="fixed-header">
        <a href="/" class="brand-logo"
          ><img id="logo" src="../assets/logo-image.png"
        /></a>
        <div class="nav-bar">
          <a href="./Forums">Forum</a>
          <a href="./Movies">Movies</a>
          <a href="./Profile">Profile</a>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <body>
      <div class="row">
        <div class="movies1">
          <img
            src="../assets/morbuismovie.jpg"
            alt="morbuis"
            width="300"
            height="360"
            title="Morbuis"
          />
        </div>

        <div class="intro">
          <h2>A place to discuss the most popular films</h2>
          <b
            >Post movie reviews, find similar movies,browse movies in a spoiler-
            free zone, and more!</b
          >
          <button onclick="location.href='./Movies'">
            Browse Popular Movies
          </button>
        </div>
      </div>

      
      <br>
        <div class="row2">
          <div class="forum1">
        
          <div class="container1">
            <div class="containertxt">
              <img src="../assets/avatar2.png" alt="Avatar" />
              <p><span>xwmao</span> Oscars Slap</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          <div class="container1">
            <div class="containertxt">
              <img src="../assets/avatar2.png" alt="Avatar" />
              <p><span>xwmao</span> Oscars Slap</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          <div class="container1">
            <div class="containertxt">
              <img src="../assets/avatar2.png" alt="Avatar" />
              <p><span>xwmao</span> Oscars Slap</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          </div>
        
          
          <div class="upcoming">
          
          <h2>Join the talk about your faves !</h2>
          <b>
            Go to our forum to join the chat about their favorite movies.
            Here's a sneak peek at the top discussions
          </b>
          
          <button onclick="location.href='./Forums'">View Forum</button>
          
          </div>
      </div>

    

      <div class="row3">
        <div class="movie3">
          <img
            src="../assets/avatar2.png"
            alt="avatar"
            width="300"
            height="360"
            title="avatar"
          />
        </div>
        <div class="pfp">
          <h2>Customize your profile</h2>
          <b>
            Click here to check out your profile let your creative imagination
            flow and turn it into something you love
          </b>
          <button onclick="location.href='./Profile'">View my profile</button>
        </div>
      </div>
    </body>
  </main>

  <footer></footer>
</template>

<style>
@import "../assets/base.css";

body {
  background-color: #eeeadb;
  font-weight: normal;
  padding-top: 60px;
  padding-bottom: 40px;
}

.fixed-header {
  top: 0;
}
.fixed-footer {
  top: 0;
}
.fixed-header,
.fixed-footer {
  width: 100%;
  position: fixed;
  background: white;
  padding: 10px 0;
  color: white;
  z-index: 1;
}
nav a {
  color: black;
  text-decoration: none;
  padding: 7px 25px;
  display: inline-block;
  font-size: 27px;
  font-family: "Lucida Console", "Courier New", monospace;
}

.nav-bar {
  float: right;
}

nav a:hover {
  color: grey;
}

#logo {
  width: 100%;
  height: 40px;
}

.intro {
  padding: 30px;
  /*background-color: blue;*/
  position: static;
  width: 300px;
}

.movies1 {
  /*morbuis*/
  padding: 30px;
  width: 200px;
  left: 650px;
  top: 0px;
  float:right;
}

button {
  background-color: black;
  color: white;
}
button:hover {
  background-color: gray;
  cursor: pointer;
}

h2 {
  font-size: 27px;
  font-family: "Lucida Console", "Courier New", monospace;
}

.upcoming {
  padding:30px;
  
  width: 300px;
  
  
}

.pfp {
  padding: 30px;
  width: 300px;
  
  
 
  /*background-color: yellow;*/
}

.movies2 {
  
  padding: 30px;
  position: relative;
  width: 300px;
}

.movie3 {
  
  float:left;
 
  /*background-color: yellow;*/
}

.forum1 {
  background-color: #d1c0a8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow-y: scroll;
 left:0;
  max-width: 50%;
}
.container1 {
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  margin: 8px 0;
  height: 100px;
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 100%;
}
.forum1 h1 {
  
  font-family: "Lucida Console", "Courier New", monospace;
}
.container span {
  font-size: 12px;
  margin-right: 15px;
}
.containertxt {
  text-align: left;
  float: left;
}
.container1 img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
  height: 80px;
}

.forum2{ 
  text-align: center;
}
</style>
