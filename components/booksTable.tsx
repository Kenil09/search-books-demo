// BookTable.js
import { Book } from '@/interfaces/book.interface';
import React from 'react';

interface BookTableProps {
  books: Book[];
}

const BookTable: React.FC<BookTableProps> = ({ books }) => {
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-200 max-w-[1250px]">
      {/* <table className='table-auto overflow-scroll w-full bg-white border border-gray-200'> */}
        <thead className='block'>
          <tr>
            <th className="py-2 px-4 border-b w-[30%] text-left">Title</th>
            <th className="py-2 px-4 border-b w-[20%] text-left">Author(s) Name</th>
            <th className="py-2 px-4 border-b w-[15%] text-left">Year First Published</th>
            <th className="py-2 px-4 border-b w-[20%] text-left">ISBN Number</th>
            <th className="py-2 border-b w-[15%] text-left ml-1">Number of Pages</th>
          </tr>
        </thead>
        <tbody className="max-h-72 overflow-y-auto block">
          {books.map((book) => (
            <tr key={book.key} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b w-[30%] break-words">{book.title}</td>
              <td className="py-2 px-4 border-b w-[20%] break-words">{Array.isArray(book.author_name) ? book.author_name.join(', ') : ''}</td>
              <td className="py-2 px-4 border-b w-[15%] break-words">{book.first_publish_year}</td>
              <td className="py-2 px-4 border-b w-[20%] break-words">{book.isbn ? book.isbn[0] : ''}</td>
              <td className="py-2 px-4 border-b w-[15%] break-words">{book.number_of_pages_median}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
