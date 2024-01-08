"use client";
import BookTable from "@/components/booksTable";
import { Book, sortInterface } from "@/interfaces/book.interface";
import { useState } from "react";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const fetchBooks = async (
    bookName: string,
    sort: sortInterface | null
  ): Promise<Book[]> => {
    try {
      setLoading(true);
      let url = `https://openlibrary.org/search.json?q=${bookName}`;
      if (sort) {
        url += `&sort=${sort.name}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.log("Error while fetching books:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setBooks([]);
    setSearchTerm("");
  };

  const handleToggleSort = () => {
    // Toggle the sorting order
    setSortAsc(!sortAsc);

    // fetchBooks(searchTerm, {
    //   name: "first_publish_year",
    //   sortAsc: sortAsc ? "asc" : "desc",
    // });

    // Sort the books based on the publication year
    setBooks((prevBooks) =>
      [...prevBooks].sort((a, b) =>
        sortAsc ? a.first_publish_year  - b.first_publish_year : b.first_publish_year - a.first_publish_year
      )
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex items-center border rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search books here"
          className="px-4 py-2 w-full focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          // onBlur={async (e) => {
          //   const books = await fetchBooks(e.target.value);
          //   setBooks(books);
          // }}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              console.log("calling");
              const books = await fetchBooks(searchTerm, null);
              setBooks(books);
            }
          }}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="bg-gray-300 text-gray-700 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
        {searchTerm && books.length && (
      <div className="my-1">
          <button
            onClick={handleToggleSort}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-1"
          >
            {sortAsc ? "Sort Ascending By Publish Year" : "Sort Descending By Publish Year"}
          </button>
      </div>
        )}
      <div>
        <h1 className="text-3xl font-bold mt-8 mb-4">Book Information</h1>
        {/* Showing loader while loading books */}
        {loading && (
          <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <p className="text-white animate-pulse">Loading books...</p>
          </div>
        )}
        {/* Showing no book found information */}
        {!searchTerm && !books.length && !loading && (
          <div className="">
            <p className="">Enter a search term to find books.</p>
          </div>
        )}
        {books.length ? <BookTable books={books} /> : null}
      </div>
    </main>
  );
}
