import React from "react";

const Books = () => {
  const booksArr = [
    { name: "Don't Make Me Think, 3th Edition", author: "Steve Krug" },
    { name: "Rocket Surgery Made Easy", author: "Steve Krug" },
    { name: "Law of UX", author: "Jon Yablonski" },
    {
      name: "Computer Networks, 5th Edition",
      author: "Andrew S. Tanebaum, David J. Wetherall",
    },
  ];

  return (
    <div id="books" className="books">
      <h2>Books</h2>
      {booksArr.map((book, index) => {
        return (
          <div key={index} className="books__eachBook">
            <p>
              {book.name}, {book.author}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
