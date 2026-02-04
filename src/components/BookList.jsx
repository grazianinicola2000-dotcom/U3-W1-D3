import { Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ books }) {
  return (
    <>
      <Container className="d-flex justify-content-between flex-wrap gap-3">
        {books.map((book) => (
          <SingleBook key={book.asin} asin={book.asin} img={book.img} title={book.title} price={book.price} />
        ))}
      </Container>
    </>
  );
}

export default BookList;
