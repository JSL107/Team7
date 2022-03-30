import React, { useEffect, useState } from 'react';
import Book from './Book'
import './Result.css'


const BOOKS = [
  {
    id: "dummy1",
    location: "제주",
    name: "신라호텔",
    address: "제주시 서귀포",
    price: "10",
  },
  {
    id: "dummy2",
    location: "제주서귀포",
    name: "서귀포KAL호텔",
    address: "제주시 서귀포",
    price: "15",
  },
]

//TEST DB로 연습한 것
const BASE_URL = 'http://localhost:8090/api/v1/acccomm';

const Result = () => {
    const [books, setBooks] = useState(BOOKS);
    //DUMMY BOOKS 확인용
      // const booksList = books.map((book) => (
      //   <li key={book.id}>
      //     <h3>{book.name}</h3>
      //     <div>{book.description}</div>
      //     <div>{book.author}</div>
      //   </li>
      // ));

    // 3. firebase를 활용하여 DUMMY DATA GET.
    useEffect(() => {
        console.log('호출');
        const fetchBooks = async () => {
        const response = await fetch(BASE_URL);

        console.log(response.ok);
        const responseData =  await response.json();
        console.log(responseData);

        const booksData = [];
        for (const key in responseData) {
            booksData.push({
            id: key,
            location: responseData[key].location,
            name: responseData[key].name,
            address: responseData[key].address,
            price: responseData[key].price,
            });
        }

        setBooks(booksData);
        }

        fetchBooks().catch(error => {
        console.log(error);
        })
    }, []);


    const booksList = books.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        location={book.location}
        name={book.name}
        address={book.address}
        price={book.price}
      />
    ));


  return (

    <div className="result">
      <div className="empty"/>
        <div className='list'>
          {booksList}
        </div>
        <div className="borderBottom"/>
      <div className="empty"/>
    </div>

  )
}

export default Result