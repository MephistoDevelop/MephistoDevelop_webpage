window.onload = function() {
  console.log(this.readOnce());
};
/*writeBookData(
    2,
    "J.K. rowling",
    "Amazing ficticial book",
    "2000r",
    "Harry Potter",
    true,
    "https://www.harrypotter.com"
  );
};*/

function writeBookData(bookId, title, description, author, pages, read, link) {
  const database = firebase.database();
  const rootRef = database.ref("books");
  rootRef.child(2).set({
    title: title,
    author: author,
    description: description,
    pages: pages,
    read: read,
    url: link
  });
}

function readOnce() {
  var userId = 1;
  var query = firebase
    .database()
    .ref("books/2")
    .once("value");

  var result = query.then(function(snapshot) {
    console.log(snapshot.val());
  });
}

function readListener() {
  var starCountRef = firebase.database().ref("books/" + bookId + "/starCount");
  starCountRef.on("value", function(snapshot) {
    updateStarCount(postElement, snapshot.val());
  });
}

function writeNewBook(bookId, title, description, author, pages, read, link) {
  // A post entry.
  var books = {
    bookId: bookId,
    title: title,
    author: author,
    desciption: description,
    pages: pages,
    read: read,
    url: link
  };

  // Get a key for a new Post.
  var newBookKey = firebase
    .database()
    .ref()
    .child("books")
    .push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/books/" + newBookKey] = books;
  updates["/user-books/" + uid + "/" + newBookKey] = postData;

  return firebase
    .database()
    .ref()
    .update(updates);
}
