import styled from 'styled-components'
export const StatusCardElement=styled.div`
    .status-card{
      color:var(--txt-color);
      margin-bottom: 30px;
      padding: 30px;
      display: flex;
      align-items: center;
      background-color: var(--main-bg);
      -webkit-box-shadow: var(--box-shadow);-moz-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);
      -webkit-border-radius: var(--border-radius);-moz-border-radius: var(--border-radius);border-radius: var(--border-radius);
      position: relative;
      z-index: 1;
      overflow: hidden;
      -webkit-transition: color .5s ease 0s;-moz-transition: color .5s ease 0s;-ms-transition: color .5s ease 0s;-o-transition: color .5s ease;transition: color .5s ease 0s;
      &__icon{
        width: 30%;
        height: 100%;
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
       }
      &__info{
        flex-grow: 1;
        text-align: center;
        z-index: 1;
        text-transform: capitalize;
        h4{
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
      }
      &::before{
        content: '';
        width: 100%;
        padding-top: 100%;
        border-radius: 50%;
        background-image: linear-gradient(
          to top right,
          var(--main-color),
          var(--second-color)
        );
        position: absolute;
        left:-50%;
        top:0;
        -webkit-transform: scale(0);-moz-transform: scale(0);-ms-transform: scale(0);-o-transform: scale(0);transform: scale(0);
        -webkit-transition: transform .5s ease 0s;-moz-transition: transform .5s ease 0s;-ms-transition: transform .5s ease 0s;-o-transition: transform .5s ease 0s;transition: transform .5s ease 0s;
      }
      &:hover::before{
        -webkit-transform: scale(3);-moz-transform: scale(3);-ms-transform: scale(3);-o-transform: scale(3);transform: scale(3);
      }
      &:hover{
        color:var(--txt-white);
        
      }
    }
`