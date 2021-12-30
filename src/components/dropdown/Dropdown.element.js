import styled from 'styled-components'
export const DropdownContent = styled.div`
  .dropdown{
    position: relative;
    z-index: 99;
    &__toggle{
      border:none;
      outline:none;
      background-color: transparent;
      position: relative;
      i{
        font-size:2.5rem;
        color:var(--txt-color);
      }
      &-badge{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -12px;
        right: -10px;
        height: 25px;
        width: 25px;
        background-color: var(--main-color);
        color:var(--txt-color);
        font-size:.8rem;
        -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
      }
    }
    &__content{
      color:var(--txt-color);
      position: absolute;
      top: calc(100% + 5px);
      right: 0;
      width: max-content;
      max-width: 400px;
      background-color: var(--main-bg);
      -webkit-box-shadow: var(--box-shadow);-moz-box-shadow: var(--box-shadow);box-shadow: var(--box-shadow);
      -webkit-border-radius: var(--border-radius);-moz-border-radius: var(--border-radius);border-radius: var(--border-radius);
      overflow: hidden;
      transform-origin: top right;
      -webkit-transform: scale(0);-moz-transform: scale(0);-ms-transform: scale(0);-o-transform: scale(0);transform: scale(0);
      -webkit-transition: transform .3s;-moz-transition: transform .3s;-ms-transition: transform .3s;-o-transition: transform .3s;transition: transform .3s;
      &.active{
        -webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);transform: scale(1);
        -webkit-transition: transform .5s var(--transition-cubic);-moz-transition: transform .5s var(--transition-cubic);-ms-transition: transform .5s var(--transition-cubic);-o-transition: transform .5s var(--transition-cubic);transition: transform .5s var(--transition-cubic);
        
      }
    }
    &__footer{
        padding:20px;
      text-align: center;
    }
  }
`;