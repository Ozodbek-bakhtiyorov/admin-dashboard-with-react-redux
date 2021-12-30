import styled from "styled-components";
export const TableContent = styled.div`
  .table-wrapper{
    table{
      width: 100%;
      border-spacing: 0;
      thead{
        background-color: var(--second-bg);
      }
      tr{
        text-align: left;
        th,td{
          color:var(--txt-color);
          text-transform: capitalize;
          padding:15px 10px;
        }
        -webkit-transition: all .4s ease 0s;-moz-transition: all .4s ease 0s;-ms-transition: all .4s ease 0s;-o-transition: all .4s ease 0s;transition: all .4s ease 0s;
        
      }
      tbody>tr:hover{
        background-color: var(--main-color);
        color:var(--txt-white);
      }
    }
  }
  .table__pagination{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    &-item ~ &-item{
       margin-left: 10px;
    }
    &-item{
      color:var(--txt-color);
      width:30px;
      height: 30px;
      -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
      display: flex;align-items: center;justify-content: center;
      cursor: pointer;
      -webkit-transition: all .3s ease 0s;-moz-transition: all .3s ease 0s;-ms-transition: all .3s ease 0s;-o-transition: all .3s ease 0s;transition: all .3s ease 0s;
      &:hover{
        color:var(--txt-white);
        background-color: var(--second-color);
      }
    }
   
    &-item.active,&-item.active:hover{
      background-color: var(--main-color);
      color: var(--txt-white);
      font-weight: 600;
    }
  }
  
`;