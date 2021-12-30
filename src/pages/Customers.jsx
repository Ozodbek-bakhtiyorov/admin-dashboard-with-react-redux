import React from 'react';
import Table from "../components/table/Table";

import customersList from '../assets/JsonData/customers-list.json'

const customerTableHead = []
for(let key in customersList[0]){
    customerTableHead.push(key);
}

const renderHead = (item,index)=><th key={index}>{item}</th>
const renderBody = (item,index)=>(
    <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.location}</td>
        <td>{item.phone}</td>
        <td>{item.total_spend}</td>
        <td>{item.total_orders}</td>
    </tr>
)
const Customers = () => {
  return (
    <div>
      <h2 className='page-header'>customers</h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                         <Table
                             limit={10}
                             headData={customerTableHead}
                             bodyData={customersList}
                             renderHead={(item,index)=>renderHead(item,index)}
                             renderBody={(item,index)=>renderBody(item,index)}
                         />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Customers;
