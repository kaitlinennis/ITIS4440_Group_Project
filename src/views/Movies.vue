/*import { Carousel, Slide } from './..vue-carousel';*/

<script>
export default {
  /*
  name: "app",
  data() {
    return {
      api_key: "k_pz5kcxqe",
    };
  },
  */
};

/*GET request call to the IMDb API for 'most popular movies' data*/

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://imdb-api.com/en/API/MostPopularMovies/k_pz5kcxqe",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
</script>

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
      <br />
      <div class="welcome">
        <br />
        <h1>
          Browse our list of the <br />
          most popular movies!
        </h1>

        <br />

        <h3>
          Whether it's browsing movies by category or discovering <br />
          the most talked-about films in a spoiler-free zone, this is the <br />
          place for you.
        </h3>
        <br />
        <button>Browse By Category</button>

        <br /><br />
        <img
          class="placeholderImage"
          src="../assets/img-placeholder-rectangle.jpg"
          alt="placeholder"
        />
      </div>

      <br />
      <div class="topFilmsMessage">
        <h3>Top Films of the Year</h3>
      </div>

      <table class="movieTable">
        <tr>
          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>
        </tr>

        <tr>
          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>
        </tr>

        <tr>
          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>
        </tr>

        <tr>
          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>
        </tr>

        <tr>
          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>

          <td>
            <img
              class="movieImage"
              src="../assets/img-placeholder-rectangle.jpg"
              alt="placeholder"
            />
            <p class="movieName">Movie name</p>
            <p class="movieOtherInfo">Other info</p>
          </td>
        </tr>
      </table>
    </body>
  </main>
</template>

<style>
@import "../assets/base.css";

body {
  background-color: #eeeadb;
  font-weight: normal;
  padding-top: 60px;
  padding-bottom: 40px;
}

.topFilmsMessage {
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  width: 50%;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

.welcome h1 {
  font-weight: bold;
}

.welcome {
  text-align: center;
}

button {
  background-color: black;
  color: white;
  padding: 15px;
  font-size: 16px;
}

.movieName {
  font-weight: bold;
}

.fixed-header {
  top: 0;
  z-index: 1;
}
.fixed-footer {
  top: 0;
  z-index: 1;
}
.fixed-header,
.fixed-footer {
  width: 100%;
  position: fixed;
  background: white;
  padding: 10px 0;
  color: white;
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

.movieTable {
  margin: 0 auto;
  width: 700px;
  height: 600px;
  margin-top: 20px;
}

table,
td {
  /*border: 5px solid;*/
}

td {
  text-align: center;
}

.movieImage {
  width: 250px;
  height: 200px;
}
</style>
