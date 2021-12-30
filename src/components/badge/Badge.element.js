import styled from 'styled-components'
export const BadgeElement=styled.div`
  .badge{
    padding: 6px 11px;
    color:var(--text-white);
    -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
    -webkit-box-shadow: var(--box-shadow);-moz-box-shadow: var(--box-shadow);box-shadow: var(--box-shadow);
  }
  .badge-danger{
    background-color: var(--main-color-red);
  }  
  .badge-success{
    background-color: var(--main-color-green);
  } 
  .badge-primary{
    background-color: var(--main-color-blue);
  }  
  .badge-warning{
    background-color: var(--main-color-orange);
  }
`;