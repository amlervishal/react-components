import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export default function LoadMore() {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(0);
  const initialFetchDone = useRef(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function fetchQuotes() {
    setLoading(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=3&skip=${page * 3}`
      );
      const result = await response.json();

      if (result && result.quotes && result.quotes.length > 0) {
        setQuotes((prevQuotes) => [...prevQuotes, ...result.quotes]);
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (page > 0) {
      fetchQuotes();
    }
  }, [page]);

  useEffect(() => {
    if (!initialFetchDone.current) {
      fetchQuotes();
      initialFetchDone.current = true;
    }
  }, []);

  console.log(quotes.length);

  useEffect(() => {
    if (quotes && quotes.length === 15) {
      setDisabled(true);
    }
  }, [quotes]);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="grid grid-cols-1 gap-10 place-content-start justify-items-center mx-auto p-10 w-screen h-screen">
      <h2 className="font-medium text-2xl tracking-widest">LOAD MORE ...</h2>
      <div className="card-primary rounded-md border">
        {loading && <div>Loading Quotes ...</div>}
        <ul className="overflow-scroll text-center">
          {quotes.map((quote) => (
            <li className="py-2" key={quote.id || index}>
              <div>
                <h4 className="font-light">{quote.quote}</h4>
                <h6 className="text-sm font-medium py-2">- {quote.author}</h6>
                <hr className="w-32 border-amber-600 mx-auto my-4" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Button disabled={disabled} onClick={handleLoadMore}>
        {disabled ? "You have reached the limit" : "Load More"}
      </Button>
    </div>
  );
}
