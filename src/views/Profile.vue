<script>
import Editor from './components/Editor.vue'

export default {
  components: {
    Editor,
  },

  data() {
    return {
      content: '<h1>Jane Doe</h1>',
      content2: '<p>Edit Bio Here</p>'
    }
    
  },
}
</script>

<template>
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

  <main>
    <br /><br />
    <div class="favorites">
      <h2 id="movieText">Favorite Movies</h2>
      <div class="imgContainer">
        <img
          class="fave-image"
          src="../assets/harrypotter.png"
          alt="Harry Potter Movie Cover"
        />
      </div>
      <div class="imgContainer">
        <img
          class="fave-image"
          src="../assets/hunger games.png"
          alt="Hunger Games Movie Cover"
        />
      </div>
      <div class="imgContainer">
        <img
          class="fave-image"
          src="../assets/spiderman.png"
          alt="Spiderman Movie Cover"
        />
      </div>
    </div>

    <div class="userbackground">
      <div class="user">
        <img id="profileimg" src="../assets/profilepicavatar.png" />
      </div>
      <div class="name">
        <editor v-model="content" />
      </div>
      <div class="bio">
        <editor v-model="content2" />
      </div>
      
    </div>
    
    <div class="friends">
      <h2 id="friendText">Friends List</h2>
      <button class="btn seeMore">See More</button>
      <div class="row">
        <div class="column">
          <img class ="userimg" src="../assets/avatar1.png" />
          <img class ="userimg" src="../assets/avatar2.png" />
          <img class ="userimg" src="../assets/avatar3.png" />
          <img class ="userimg" src="../assets/avatar4.png" />
          <img class ="userimg" src="../assets/avatar5.png" />
          <img class ="userimg" src="../assets/avatar6.png" />
          <img class ="userimg" src="../assets/avatar3.png" />
          <img class ="userimg" src="../assets/avatar1.png" />
          <img class ="userimg" src="../assets/avatar9.png" />
          <img class ="userimg" src="../assets/avatar8.png" />
          <img class ="userimg" src="../assets/avatar6.png" />
          <img class ="userimg" src="../assets/avatar7.png" />
        </div>
      </div>
    </div>
    <div class="forum">
      <h1>Jane's Recent Responses</h1>
      <button class="btn forumBtn" onclick="location.href='./Forums'">Go to Forum</button>
      <div class="container">
        <div class="containertxt">
          <img src="../assets/profilepicavatar.png" alt="Avatar" >
          <p><span>xwmao</span> Oscars Slap</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>


      <div class="container">
        <div class="containertxt">
          <img src="../assets/profilepicavatar.png" alt="Avatar" />
          <p><span>xwmao</span> Oscars Slap</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      
      <div class="container">
        <div class="containertxt">
          <img src="../assets/profilepicavatar.png" alt="Avatar" />
          <p><span>xwmao</span> Oscars Slap</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import "../assets/base.css";

body {
  background-color: #eeeadb;
  font-weight: normal;
  padding-top: 60px;
  padding-bottom: 40px;
}
nav a:hover{
  color: grey;
}

.fixed-header {
  top:0;
}
.fixed-footer {
  top:0;
}
.fixed-header, .fixed-footer{
        width: 100%;
        position: fixed;        
        background: white;
        padding: 10px 0;
        color: white;
        z-index: 2;
}
nav a{
        color: black;
        text-decoration: none;
        padding: 7px 25px;
        display: inline-block;
        font-size: 27px;
        font-family: "Lucida Console", "Courier New", monospace;
      
    }

.nav-bar {
float:right;
}

#logo {
   width: 100%;
  height: 40px;
}
.imgContainer {
  float: left;
  padding: 5px;

}
.favorites {
  padding: 15px;
  background-color: #e8ded1;
  background-clip: padding-box;
  width: 800px;
  height: 500px;
  padding-top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  float:left;
  border-radius: 25px;
  
}


.fave-image {
  width:230px;
  height: auto;
  cursor: pointer;
}
#movieText {
  padding-bottom: 20px;
  font-size: 27px;
  font-family: "Lucida Console", "Courier New", monospace;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  padding: 10px;
}

.column img {
  margin-top: 8px;
  margin-right: 2px;
  margin-left: 2px;
  vertical-align: middle;
  float:right;
  height:78px;
  
}

.friends {
  position:absolute;left:1019px; top:500px; 
  
  background: white;
  background-clip: padding-box;
  width: 500px;
  height:auto;
  padding-top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-height:350px;
  overflow-y:scroll;
  border-radius: 25px;
}
#friendText{
  text-align: right;
  padding-right: 10px;
  font-size: 27px;
  font-family: "Lucida Console", "Courier New", monospace;

}
.seeMore {
  float:right;
  padding-right:10px;
  color: blue;
}
.btn {
  border: none;
  background-color: inherit;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  text-decoration: underline;
}

/*.user {
  float: left;
  background-color: white;
  height: 300px;
  width:300px;
  padding: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  
}*/
#profileimg {
  float:left;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1;
}

.userbackground {
  float: right;
  background-color: #d1c0a8;
  padding:13px;
  height:325px;
  width: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 25px;
}
.bio, .name {
  font-family: "Lucida Console", "Courier New", monospace;
  text-align: center;
  background-color: #e8ded1;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.editBtn {
  background-color:#876450;
  color: white;
  height:40px;
  width: 80px;
  margin-right: 2px;
  float:right;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.editBtn:hover{
  background-color: gray;
}
.forum {
  background-color: #d1c0a8;
  position:absolute;left:0px; top:650px; 
  padding:20px;
  padding-top:30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 25px;
  
}
.container {
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  margin: 16px 0;
  height: 100px;
  width:900px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 25px
  
}
.forum h1 {
  font-family: "Lucida Console", "Courier New", monospace;
}
.container span {
  font-size: 12px;
  margin-right: 15px;

  
}
.containertxt{
  text-align:left;
  float: left;
}
.container img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
  height:80px;
  margin-top:10px;

}
.forumBtn {
  float:right;
  color: #00008B;
}

.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

.content {
  padding: 1rem 0 0;

  h3 {
    margin: 1rem 0 0.5rem;
  }

  pre {
    border-radius: 5px;
    color: #333;
  }

  code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color:#e9ecef;
    color: #495057;
  }

}

</style>
