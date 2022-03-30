import React, { useContext, useState, useEffect } from "react";
import Accom from './Accom';

import ReserveItem from "./ReserveItem";
import ReserveOrder from './ReserveOrder';
import ReserveContext from "./ReserveContext";

const BOOKS = [
  {
    id: "book1",
    name: "THE OLD MAN AND THE SEA",
    description:
       "A story of Santiago, an aging Cuban fisherman who struggles with a giant marlin far out in the Gulf Stream off the coast of Cuba",
     author: "Ernest Hemingway",
     price: 10.57,
   },
   {
     id: "book2",
     name: "THE GREAT GATSBY",
     description:
       "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
     author: "F.Scott Fitzgerald",
     price: 12.97,
   },
];

const ACCOM = [
    {
        id: "dum1",
        city: "jeju",
        accommodationName: "효리네민박", 
        address: "제주시 어쩌구 저쩌구",
        phoneNumber: "000-000-0000" ,
    }
];

const BASE_URL = 'http://localhost:8090/accommodation/get';
console.log(localStorage.getItem("체크인"));

const Reserve = () => {
  const [lists, setLists] = useState(ACCOM);

    useEffect(() => {
        console.log('호출');
        const fetchAccoms = async () => {
        const response = await fetch(BASE_URL);

        console.log(response.ok);
        const responseData =  await response.json();
        console.log(responseData);

        const listsData = [];
        for (const key in responseData) {
            listsData.push({
            id: key,
            city: responseData[key].city,
            accommodationName: responseData[key].accommodationName,
            address: responseData[key].address,
            phoneNumber: responseData[key].phoneNumber,
            });
        }

        setLists(listsData);
        }

        fetchAccoms().catch(error => {
        console.log(error);
        })
    }, []);

    const accomsList = lists.map((list) => (
        <Accom
          key={list.id}
          id={list.id}
          city={list.city}
          accommodationName={list.accommodationName}
          address={list.address}
          phoneNumber={list.phoneNumber}
        />
      ));

  /*const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  // ContextAPI 적용 후,
  const reserveContext = useContext(ReserveContext);
 // Submit 결과 메시지 확인용 Toggle
 const [didSubmit, setDidSubmit] = useState(false);

 const removeItemInCartHandler = (id) => {
  reserveContext.removeItem(id);
 };

 const totalAmount = `$${reserveContext.totalAmount.toFixed(2)}`;

 const cartItems = (
   <ul>
     {reserveContext.items.map((book) => (
       <ReserveItem
         key={book.id}
         id={book.id}
         name={book.name}
         price={book.price}
         amount={book.amount}
         onRemoveInCart={removeItemInCartHandler.bind(null, book.id)}
       />
     ))}
   </ul>
 );

 const cartItemsTotal = (
   <div>
     <span>Total Amount</span>
     <span>{totalAmount}</span>
   </div>
 );

 const modalButton = (
   <div>
     <button onClick={props.onClose}>Close</button>
     <button>Order</button>
   </div>
 );

 const cartOrderHandler = async (userData) => {
   console.log('주문',userData);
   // post 처리
   //console.log(reserveContext.items[0].name);
   console.log(reserveContext.items);

   console.log(JSON.stringify({
     userName: userData.userName,
     address: userData.address,
     bookTitle : reserveContext.items[0].name,
     totalPrice : reserveContext.totalAmount,
     // bookDto: cartContext.items[0]
   }));


   await fetch(BASE_URL,
     {
       method: 'POST',
       headers: {
         'Content-Type' : 'application/json',
       },
       body: JSON.stringify({
         userName: userData.userName,
         address: userData.address,
         bookTitle : reserveContext.items[0].name,
         totalPrice : reserveContext.totalAmount,
       })
     }
   );

   setDidSubmit(true);
 }

 const cartModalContent = (
   <>
     {cartItems}
     {cartItemsTotal}
     {modalButton}
     <ReserveOrder onOrder={cartOrderHandler}/>
   </>
 );

 const didSubmitModalContent = (
   <>
     <p>Successfully ordered!</p>
   </>
 );*/

 return (
  <div>
   {/*testdb 연습
    <div>
    <p onClose={props.onClose}  onClick={openModal}>{!didSubmit ? cartModalContent : didSubmitModalContent}</p>;
  </div>*/}
    {accomsList}
  </div>
 )

};


export default Reserve