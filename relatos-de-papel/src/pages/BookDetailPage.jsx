import BookDetail from "../components/BookDetail";

const BookDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
        <BookDetail id={id}/>
    </div>
  )
}

export default BookDetailPage