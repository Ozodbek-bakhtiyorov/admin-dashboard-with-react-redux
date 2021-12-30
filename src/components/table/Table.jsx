import {TableContent} from "./Table.element";
import {useState} from "react";

export default function Table (props){
    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0,Number(props.limit)):props.bodyData;
    const [datsShow,setDataShow] = useState(initDataShow);
    let pages=1;
    let range=[];
    if(props.limit !==undefined){
        let page = Math.floor(props.bodyData.length/Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page:page+1;
        range =[...Array(pages).keys()]
        console.log(range)
    }

    const [currP, setCurrP] = useState(0);
    const selectP = (page)=>{
        const start = Number(props.limit) * page;
        const end = start + Number(props.limit)

        setDataShow(props.bodyData.slice(start,end));
        console.log(page)
        setCurrP(page)
    }
    return(
        <TableContent>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item,index)=>props.renderHead(item,index))
                                    }
                                </tr>
                            </thead>
                        ):null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody>
                            {
                               datsShow.map((item,index)=>props.renderBody(item,index))
                            }
                            </tbody>
                        ):null
                    }
                </table>
                {
                    pages > 1 ? (
                        <div className="table__pagination">
                            {
                                range.map((item,index)=>(
                                    <div
                                        className={`table__pagination-item ${currP===index ? 'active':''}`}
                                        key={index}
                                        onClick={()=>selectP(index)}
                                    >
                                        {item+1}
                                    </div>
                                ))
                            }
                        </div>
                    ):null
                }
            </div>

        </TableContent>
    )

}