import React, { useEffect, useState } from "react";
import { getRequest } from "../commons/Axios";

const CustomerOrderList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var response = await getRequest("/Order");
      setOrderList(response);
    }

    fetchData();
  }, []);


  const getTableDetails = (orderList) => {
    return (
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Status</th>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Ordered Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.itemEntity && order.itemEntity.id}</td>
              <td>{order.itemEntity && order.itemEntity.name}</td>
              <td>{order.itemEntity && order.itemEntity.price}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="item-list">
      <h1>Order List</h1>
      <br></br>
      {(orderList && orderList.length>0) ? getTableDetails(orderList) : <div>No data found</div>}
    </div>
  );
};

export default CustomerOrderList;
