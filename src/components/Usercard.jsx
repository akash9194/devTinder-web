import React from 'react'

const Usercard = ({user}) => {
    const {firstName, lastName, photourl, age, gender, about} = user;
  return (
     <div className="card bg-base-200 w-96 shadow-sm">
      <figure>
        <img
          src={photourl}
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p className="my-0">{age + " " + gender}</p>}
        <p className="my-0">{about}</p>
        <div className="card-actions justify-center my-5">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>

        </div>
      </div>
    </div>
  )
}

export default Usercard