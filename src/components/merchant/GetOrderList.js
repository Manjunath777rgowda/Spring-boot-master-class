import React, { useEffect, useState } from "react";
import { getRequest } from "../commons/Axios";

const GetOrderList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var response = await getRequest("/Order");
      setOrderList(response);
    }

    fetchData();
  }, []);

  const getOrderDetails = async () => {
    const response = await getRequest("/Order/8");

    if (response) {
      window.confirm("asdasd");
    }
  };

  const getTableDetails = (orderList) => {
    return (
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Edit</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>
                {order.status == "ORDER_ACCEPTED" ? (
                  ""
                ) : (
                  <button className="ui button blue">Edit</button>
                )}
              </td>
              <td>
                <button className="ui button blue" onClick={getOrderDetails}>
                  View
                </button>
              </td>
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
      {orderList ? getTableDetails(orderList) : <div>No data found</div>}
    </div>
  );
};

export default GetOrderList;
