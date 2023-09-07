import { Fragment, useReducer } from "react";
import bookData from "../../lib/book.json";
import BookSearch from "./BookSearch";
import Button from "../UI/Button";

const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      if (state.some((book) => book.isbn === action.book.isbn)) {
        alert("Book is already in table !");
        return state;
      }
      return [...state, action.book];

    case "REMOVE_BOOK":
      return state.filter((book) => book.isbn !== action.isbn);

    default:
      return state;
  }
};

const BookList = () => {
  const [books, dispatch] = useReducer(bookReducer, []);

  // Table Header
  const desiredKeys = ["isbn", "author", "title", "cover colors", "action"];

  const handleAddBook = (book) => {
    dispatch({ type: "ADD_BOOK", book });
  };

  const handleRemoveBook = (isbn) => {
    dispatch({ type: "REMOVE_BOOK", isbn });
  };

  return (
    <>
      <div>
        <BookSearch searchData={bookData} onBookSelect={handleAddBook} />
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {desiredKeys.map((header, index) => (
                <Fragment key={"tableHeader" + index}>
                  <th>{header.toUpperCase()}</th>
                </Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan={desiredKeys.length}>No books in table</td>
              </tr>
            ) : (
              books?.map((book, bookIndex) => (
                <tr key={"rowNum" + bookIndex}>
                  <td>{book.isbn}</td>
                  <td>{book.author}</td>
                  <td>{book.title}</td>
                  <td>{book.coverColors.join(", ")}</td>
                  <td>
                    <Button onClick={() => handleRemoveBook(book.isbn)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
