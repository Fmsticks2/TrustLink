import React from 'react'
import ReviewImg from '../../../../public/reviewImg.png'

const Reviews = () => {

  const reviews = [
    {
      name: "Sam Crockett",
      title: "Independent Web Developer",
      quote: 'The freelance talent we work with are more productive than we ever thought possible.The freelance talent we work with are more productive than.'
    },
    {
      name: "Jane Doe",
      title: "Marketing Manager",
      quote: 'The freelance talent we work with are more productive than we ever thought possible.The freelance talent we work with are more productive than.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 p-6 pb-0">Reviews</h2>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-between items-start xs:p-10 p-5">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-sm w-full h-full">
            <div className="flex xs:flex-nowrap flex-wrap gap-2 mb-4 items-start w-fit">
              <img src={ReviewImg} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="text-gray-700 ">{review.quote}</p>
                <div className='mt-4'>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="my-4 text-blue-500 w-full text-center">View All</button>
    </div>
  )
}

export default Reviews