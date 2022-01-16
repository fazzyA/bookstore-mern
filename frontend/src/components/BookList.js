import React from "react";
import  { useSelector, useDispatch } from 'react-redux'
import { getBooks } from "../store/actions";

const BookList = () => {

  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(getBooks())
  }, [])

  const books = useSelector((state) => state.books);
  return (
    <div>
       { books && books.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
