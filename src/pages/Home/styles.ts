import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  
`

export const Text = styled.p`
  font-size: 16px;
`

export const View = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
`
export const Card = styled.div`
  display: flex;
  border-radius: 10px;
  align-self: center;
  flex-direction: column;
  align-items: center;
	box-shadow: 7px 7px 15px rgba(50, 50, 50, 0.3);
  
 
 
 
  .viewcards{
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media screen and (min-width: 1200px) {
      flex-direction: row; 
    }
  }

  
  @media screen and (max-width: 600px) {
    .child{
      width: 90%;
      .nome{
            width: 11rem;
            justify-content: flex-start;
          }
      tr{
        display: flex;
        flex-direction: row;
        th, td{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 5rem;
        }
      } 
    }  
  }

  @media screen and (min-width: 600px) {
    .child{
      width: 30rem;
      .nome{
        width: 11rem;
        justify-content: flex-start;
      }
      tr{
        display: flex;
        flex-direction: row;
        th, td{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 5rem;
        }
      } 
    }
  }

`