import styled from 'styled-components'
export const Content = styled.div`
  .sidebar{
    min-width: var(--sidebar-width);
    height: 100vh;
    position: fixed;
    left: 0;
    background: var(--main-bg);
    box-shadow: var(--box-shadow);
    &__logo{
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        height: 45px ;
      }
    }
    &__item{
      color:var(--txt-color);
      padding:0 20px;
      &-inner{
        padding: 15px 25px;
        display: flex;
        align-items: center;
        font-weight: 600;
        transition: color .3s ease 0s;
        i{
          margin-right: 10px;
          font-size: 1.5rem;
        }
        span{
          text-transform: capitalize;
          
        }
        &:hover{
          color:var(--main-color);
        }
      }
      
      &-inner.active{
        &.active{
          border-radius: var(--border-radius);
          background-image: linear-gradient(
                  to right,
                  var(--main-color),
                  var(--second-color)
          );
          color: var(--txt-white);
        }
      }
  }

  }
  
`;
