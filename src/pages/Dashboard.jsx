import React, {useEffect} from 'react';

import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from "../components/statuscard/StatusCard";

import Chart from 'react-apexcharts'
import {Link} from "react-router-dom";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

import {useDispatch, useSelector} from "react-redux";
import ThemeReducer from "../redux/reducers/ThemeReducer";
import ThemeAction from "../redux/actions/ThemeAction";

const chartOptions = {
    series: [{
        name: 'Online Customers ',
        data:[40,70,20,90,36,80,30,91,60]
    },
        {
            name:'Store Customers',
            data:[40,30,70,80,40,16,40,20 ,51,10]
        }
    ],
    options:{
        color:['#6abo4c','#2980b9'],
        chart:{
            background:'transparent'
        },
        dataLabels:{
            enabled:false,
        },
        stroke:{
            curve:'smooth'
        },
        xaxis:{
            categories:['Jan', 'Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        },
        legend:{
            position:'top'
        },
        grid:{
            show:false
        }
    }
}
const topCustomers ={
    head:[
        "user",
        "total orders",
        "total spending"
    ],
    body:[
        {"username":'John Doe',"order":490,"price":"$15,323.3"},
        {"username":'Jahongir Omonov',"order":500,"price":"$22,123.3"},
        {"username":'Alisher Usmonov',"order":990,"price":"$150,543.3"},
        {"username":'Gulnora Bobjonova',"order":610,"price":"$20,213.3"},
    ]
}
const latestOrders={
    header:[
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body:[
        {
            id:'#od1711',
            user:'John Doe',
            date:'17 Jun 2021',
            price:'900$',
            status:'shipping'
        },
        {
            id:'#od1712',
            user:'Jahongir Omonov',
            date:'18 Jul 2021',
            price:'800$',
            status:'paid'
        },
        {
            id:'#od1713',
            user:'Alisher Usmonov',
            date:'19 Aug 2021',
            price:'1000$',
            status:'paid'
        },
        {
            id:'#od1714',
            user:'Gulnora Bobjonova',
            date:'30 Sep 2021',
            price:'1200$',
            status:'refund'
        },
    ]
}
const orderStatus={
    "shipping":"primary",
    "pending":"warning",
    "paid":"success",
    "refund":"danger"
}
const renderOrderHead=(item,index)=>(
    <th key={index}>
        {item}
    </th>
)
const renderOrderBody = (item,index)=>(
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td><Badge type={orderStatus[item.status]} content={item.status}/></td>
    </tr>
)
const renderCustomerHead = (item,index)=>(
    <th key={index}>{item}</th>
);
const renderCustomerBody = (item,index)=>(
    <tr key={index}>
         <td>{item.username}</td>
         <td>{item.order}</td>
         <td>{item.price}</td>
    </tr>
)
const Dashboard = () => {
    const themereducer = useSelector(state=>state.ThemeReducer.mode);
  return (
    <div>
      <h2 className='page-header'>Dashboard</h2>
        <div className="row">
            <div className="col-6">
                <div className="row">
                    {
                        statusCards.map((item,index)=>(
                            <div className="col-6" key={index}>
                                <StatusCard
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                 />
                            </div>
                            )
                        )
                    }
                </div>
            </div>
            <div className="col-6">
                <div className="card full-height">
                    <Chart
                        options={themereducer ==='theme-dark-mode' ? {
                            ...chartOptions.options,
                            theme:{mode:'dark'}
                        }
                        :{
                            ...chartOptions.options,
                                theme:{mode:'light'}
                            }

                        }
                        series={chartOptions.series}
                        type='area'
                        height='100%'
                    />
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card__header">
                        <h3>top Customers</h3>
                    </div>
                    <div className="card__body">
                        <Table
                            headData={topCustomers.head}
                            bodyData={topCustomers.body}
                            renderHead={(item,index)=>renderCustomerHead(item,index)}
                            renderBody={(item,index)=>renderCustomerBody(item,index)}
                        />
                    </div>
                    <div className="card__footer">
                        <Link to='/'>
                            view all
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className="card">
                    <div className="card__header">
                        <h3>
                            latest orders
                        </h3>
                    </div>
                    <div className="card__body">
                        <Table
                            headData={latestOrders.header}
                            bodyData={latestOrders.body}
                            renderHead={(item,index)=>renderOrderHead(item,index)}
                            renderBody={(item,index)=>renderOrderBody(item,index)}
                        />
                    </div>
                    <div className="card__footer">
                        <Link to='/'>view all</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
