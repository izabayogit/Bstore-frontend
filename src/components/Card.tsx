import React from 'react'
interface CardProps { 
  book: {
    id: Number,
     authorId: Number,
     coverImage: string,
     price: Number,
     createdAt: String,
     tag: String,
     title: String,
     writer: String,
     updatedAt: string,
   }
}


const Card: React.FC<CardProps> = ({ book } ) => {


    return (
      <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-4 rounded-t-lg h-[300px] w-[100%]" src={book.coverImage} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">{book.title} </h5>
          <div className='flex justify-between'>
            <p> Author</p>
            <p>{book.writer}</p>
          </div>
          <div className='flex justify-between'>
            <p> Tag</p>
            <p> {book.tag}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-gray-900 dark:text-white">$ {book.price.toString()}</span>

          </div>
        </div>
      </div>

    );
    }


export default Card
