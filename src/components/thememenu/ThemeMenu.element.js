import styled from "styled-components";
export const ThemeMenuElement = styled.div` 
  .dropdown__toggle{
    border:none;
    outline:none;
    background-color: transparent;
    position: relative;
    i{
      font-size:2.5rem;
      color:var(--txt-color);
    }
  }
  .theme-menu{
    color: var(--txt-color);
    position: fixed;  
    right: -300px;
    //right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    padding: 20px;
    z-index: 99;
    background-color: var(--main-bg);
    -webkit-box-shadow:var(--box-shadow);-moz-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);
    -webkit-transition: right .8s var(--transition-cubic);-moz-transition: right .8s var(--transition-cubic);-ms-transition: right .8s var(--transition-cubic);-o-transition: right .8s var(--transition-cubic);transition: right .8s var(--transition-cubic); 
    &.active{
      right: 0;
    }
    &__close{
      color: var(--txt-color);
      position: absolute;
      top: 17px;
      right: 20px;
      background-color: transparent;
      font-size: 1.5rem;
      cursor: pointer;
    }
    &__select{
      margin-top:40px;
      .mode-list{
        margin-top: 20px;
        li{
          display: flex;
          align-items: center;
          cursor: pointer;
         .mode-list__color{
            width: 30px;
            height: 30px;
            -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
            display: flex;
            align-items: center;justify-content: center;
            margin-right: 10px;
            font-size: 1.5rem;
            i{
              -webkit-transform: scale(0);-moz-transform: scale(0);-ms-transform: scale(0);-o-transform: scale(0);transform: scale(0);
              -webkit-transition: transform .5s var(--transition-cubic);-moz-transition: transform .5s var(--transition-cubic);-ms-transition: transform .5s var(--transition-cubic);-o-transition: transform .5s var(--transition-cubic);transition: transform .5s var(--transition-cubic);
            }
            &.active > i{
              -webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);transform: scale(1);
            }
          }
        }
        li ~ li{
          margin-top: 10px ;
        }
       
      }
    }
  }
  
`;
