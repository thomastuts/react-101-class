export function getBookData(bookId, cb) {
  console.log(bookId);
  setTimeout(function () {
    if (bookId === 'harry-potter') {
      cb({
          title: 'Harry Potter and The Goblet of Fire',
          rating: 3,
          image: 'http://placekitten.com/200/201',
          description: 'Harry Potter goes on a crazy adventure, wow!'
        }
      )
    } else {
      cb({
          title: 'Fifty Shades of Grey',
          rating: 3,
          image: 'http://placekitten.com/200/201',
          description: 'Some kind of weird book a lot of people seem to be into.'
        }
      )
    }
  }, 100);
}
