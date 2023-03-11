import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom';

export default function Reservations() {
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/admin/show")
          .then(response => {
            console.log(response);
            setReservations(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
  return (
        <div>
      <h2 style={{paddingTop : 100}}>List of Reservations</h2>
      <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
    <th scope="col">rid</th>
    <th scope="col">Journey Start Date</th>
      <th scope="col">Journey End Date</th>
      <th scope="col">Start Location</th>
      <th scope="col">Drop Location</th>
      <th scope="col">Amount</th>

    </tr>
  </thead>
  <tbody>
    {
        reservations.map((res, index) => (
            <tr>
              <th scope="row" key={index}>{index+1}</th>
              <td>{res.startDate}</td>
              <td>{res.endDate}</td>
              <td>{res.pickupLocation.city}</td>
              <td>{res.dropLocation.city}</td>
              <td>{res.amount}</td>
            </tr>
          
          ))
    }
    </tbody>
</table>

        </div>
    </div>
    </div>
    
  )
}