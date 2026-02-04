import SingleBook from "./SingleBook";
import books from "../data/fantasy.json";

function BookList() {
  {
    books.map((book) => {
      return <SingleBook asin={book.asin} img={book.img} title={book.title} price={book.price} />;
    });
  }
}

export default BookList;
