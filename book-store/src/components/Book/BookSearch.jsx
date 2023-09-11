import { useState } from "react";
import Input from "../UI/Input";
import "./BookSearch.css";

const BookSearch = ({ searchData, onBookSelect }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [noResult, setNoResult] = useState(false);

    const handleBookSearch = (e) => {
        const searchText = e.target.value;
        setSearchTerm(searchText);

        if (searchText.length >= 3) {
            if (searchData) {
                const results = searchData.filter((book) =>
                    book.title.toLowerCase().includes(searchText.toLowerCase())
                );

                results.length === 0 ? setNoResult(true) : setNoResult(false);

                setSearchResults(results);
            }
        } else {
            setSearchResults([]);
            setNoResult(false);
        }
    };

    const handleBookSelect = (selectedBook) => {
        onBookSelect(selectedBook);
        setSearchTerm("");
        setSearchResults([]);
        setNoResult(false);
    };

    return (
        <>
            <h1 className="text-center">Book Search</h1>
            <div className="inputWrapper">
                <Input
                    placeholder="Book Search"
                    onChange={handleBookSearch}
                    value={searchTerm}
                />
                {
                    noResult && (
                        <ul className="resultedDropBox">
                            <li className="noResult">Book not available</li>
                        </ul>
                    )
                }
                {searchResults.length !== 0 && (
                    <ul className="resultedDropBox">
                        {searchResults.map((book) => (
                            <li key={book.isbn} onClick={() => handleBookSelect(book)}>
                                {book.title} by {book.author}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default BookSearch;