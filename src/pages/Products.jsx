import Table from "../components/table/Table";
import productsList from '../assets/JsonData/products-list.json'
import React from "react";

export default function Products () {
    const ProductsTableHead = [];
    for(let key in productsList[0]){
        ProductsTableHead.push(key);
    }
    const TableHeaders = [...ProductsTableHead,'Count'];
    console.log(productsList)
    const renderHead = (item,index)=><th key={index}>{item}</th>
    const renderBody = (item,index)=>(
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>${item.description.slice(0,50)}...</td>
            <td>{item.category}</td>
            <td><img style={{width:'50px'}} src={item.image} alt={item.title}/></td>
            <td>{item.rating.rate}</td>
            <td>{item.rating.count}</td>
        </tr>
    )
    return(
        <div>
            <h2 className={'page-header'}>Products</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit={10}
                                headData={TableHeaders }
                                bodyData={productsList}
                                renderHead={(item,index)=>renderHead(item,index)}
                                renderBody={(item,index)=>renderBody(item,index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}