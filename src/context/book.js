import React, { useState, createContext } from "react";

const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    // basically the book entry in the array will be like
    // {uid, title, tag, content, image}, {uid, title, tag, content, image}, {uid, title, tag, content, image}

    return (
        <BookContext.Provider value={([books, setBooks])}>
            {children}
        </BookContext.Provider>
    )
};

export { BookContext, BookProvider };