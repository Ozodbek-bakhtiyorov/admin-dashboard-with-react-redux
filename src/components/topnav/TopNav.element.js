import styled from 'styled-components'
export const  Content = styled.div`
    .topnav{
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--topnav-height);
      &__search{
        color:var(--txt-color);
        position: relative;
        height: 50px;
        display: flex;
        background:var(--main-bg);
        align-items: center;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        overflow:hiedden;
        input{
          height: 100%;
          width: 100%;
          padding:10px 60px 10px 60px;
          font-size: 1rem;
          border-radius: var(--border-radius);
          color:var(--txt-color);
          background: var(--main-bg);
        }
        i{
          font-size: 1.5rem;
          position: absolute;
          right: 20px;
        }
      }
      &__right{
        display: flex;
        align-items: center;
        &-item{
          margin-left: 30px;
        }
        &_user{
          display: flex;
          align-items: center;
          &-img{
            width: 40px;
            height: 40px;
            -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
            overflow: hidden;
            margin-right: 10px;
            img{
              width: 100%;
            }
          }
          &-name{
            font-size: 1rem;
            font-weight: 600;
            
          }
        }
        
      }
      
    }
  .notification-item{
    display: flex;
    align-items: center;
     padding: 20px;
    &:hover{
      background-color: var(--second-bg);
    }
    i{
      margin-right: 20px;
      font-size:1.5rem ;
    }
  }
  
`