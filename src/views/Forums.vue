<script>
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
</script>

<template>
  <nav>
    <div class="fixed-header">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <a href="/" class="brand-logo"
        ><img id="logo" src="../assets/logo-image.png"
      /></a>
      <div class="nav-bar">
        <a href="./Forums">Forum</a>
        <a href="./Movies">Movies</a>
        <a href="./Profile">Profile</a>
      </div>
      <form class="example" action="/action_page.php">
        <input type="text" placeholder="Search this forum..." name="search" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>

      <div class="bbground">
        <div class="boxcont">
          <div class="container">
            <img src="../assets/avatar1.png" alt="Avatar" style="width: 90px" />
            <p><span>ywnam</span> Oscars Slap</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div class="container">
            <img src="../assets/avatar2.png" alt="Avatar" style="width: 90px" />
            <p><span>txwom</span> Oscars Slap</p>
            <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus</p>
          </div>

          <div class="container">
            <img src="../assets/avatar4.png" alt="Avatar" style="width: 90px" />
            <p><span>xwmao</span> Oscars Slap</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>

        <div class="boxcont">
          <div class="container">
            <img src="../assets/avatar1.png" alt="Avatar" style="width: 90px" />
            <p><span>wvem</span> Morbius</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div class="container">
            <img src="../assets/avatar2.png" alt="Avatar" style="width: 90px" />
            <p><span>suemx</span> Morbius</p>
            <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus</p>
          </div>

          <div class="container">
            <img src="../assets/avatar4.png" alt="Avatar" style="width: 90px" />
            <p><span>ogruv</span> Morbius</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>

        <button class="open-button" onclick="openForm()">Post</button>

        <div class="chat-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Post</h1>

            <label for="msg"><b>Message</b></label>
            <textarea
              placeholder="Type message.."
              name="msg"
              required
            ></textarea>

            <button type="submit" class="btn">Send</button>
            <button type="button" class="btn cancel" onclick="closeForm()">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@import "../assets/base.css";

body {
  background-color: #eeeadb;
  font-weight: normal;
  padding-top: 100px;
  padding-bottom: 100px;
}
.background {
  background-color: #eeeadb;
  padding-top: 100px;
  padding-bottom: 100px;
  height: 100px;
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

#logo {
  width: 100%;
  height: 40px;
}

body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

.bbground {
  background-color: #eeeadb;
  padding-top: 70px;
  padding-bottom: 100px;
}

form.example input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: whitesmoke;
}

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #195a68;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #195a68;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 1px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #195a68;
  color: white;
  border: 1px solid #0b7dda;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.boxcont {
  background-color: #d1c0a8;
  width: 550px;
  padding: 1px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.container {
  border: 2px solid #ccc;
  background-color: #195a68;
  border-radius: 15px;
  padding: 16px;
  margin: 16px 0;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
}

.container span {
  font-size: 20px;
  margin-right: 15px;
}

@media (max-width: 500px) {
  .container {
    text-align: center;
  }
  .container img {
    margin: auto;
    float: none;
    display: block;
  }
}

body {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}

/* Button used to open the chat form - fixed at the bottom of the page */
.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
}

/* The popup chat - hidden by default */
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}

/* Full-width textarea */
.form-container textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
  min-height: 200px;
}

/* When the textarea gets focus, do something */
.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/send button */
.form-container .btn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
</style>
