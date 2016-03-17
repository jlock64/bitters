module.exports = {
  post: [
    `<h2 class="user"></h2>
    <h2 class="time"></h2>
    <h1 class="title"></h1>
    <div class="postWrapper">
      <p class="post"></p>
    </div>
    <div>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>`
  ].join(''),

  createPost: [
    `<form class="">
      <input type="text" name="name" placeholder="Name">
      <input type="text" name="title" placeholder="Title">
      <textarea name="bitterPost" rows="8" cols="40" placeholder="What are you bitter about?"></textarea>
      <button class="submitPost" type="submit" name="button">Submit</button>
    </form>`
  ].join('')
}
