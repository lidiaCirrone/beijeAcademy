import React from 'react';
import { useLocation, useParams } from "react-router-dom";

function Orders() {

  const params = useParams()
  const location = useLocation()

  console.log('orders location', location)

  return (
    <div>
      Orders
    </div>
  );
}

export default Orders;
