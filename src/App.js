import React,{useState, createContext} from 'react';
import Header from "./components/Header/Header";
import {Container, Row, Col} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CardBuy from "./components/Card/Card";


export const ContextCart = createContext('');



function App() {
  const [cardCount, setCardCount] = useState([]);
  
  const [dadaCart, setDataCart] = useState([
    {
      name:'Product Name 1',
      subTitle:'Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.',
      price:231,
      src:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQbHqzveFOhwVBnVnZVLJIDGzuRVqTYd8TSK2kZva49JUoWVbq6NtiA1aa2ZARmGkyx31CCMg_iOsLcdGvJwwF5HwZrZbeGJ7bZzsRDLNM61J5iLt9jWok&usqp=CAE'
    },
    {
      name:'Product Name 2',
      subTitle:'Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.',
      price:231,
      src:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlyI8PBBuJkIwWPOtaXPbHY2MATM4mcxdDMhqqdBW364x6xVhTKZ-Vr5H2EQVaMcjfGayz0U4ijD12Uz9rSQWKL7_GUQvf8hEFRsGQfP_tP-neobgfFCdLlg&usqp=CAE'
    },
    {
      name:'Product Name 3',
      subTitle:'Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.',
      price:231,
      src:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSL23UlPoBZ3ZhqbAxEdKhRpwoNfZG7Zp_TZDYgHAxQ-nNa-VESwxKbs6OSuF6SQaWA5s33OVGrmioIAZwD0s0g8AA87iiK6OFOpeOnWWNeXkmuBB9M8nhQCA&usqp=CAE'
    }

  ])

 

  const addToCart =async (event)=>{
    const id = event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('id')
    const itemFind = dadaCart.find((item,index) => index === Number(id))
    
    const existe = cardCount.find((itemCoun)=> itemCoun.name === itemFind.name)
   
    if(!existe){
      await setCardCount([...cardCount,{
              name:itemFind.name,
              quantite: 1,
              priceTotal:itemFind.price,
              src:itemFind.src
            }])
            
           
    }else{
       const itemsFiltrador = await cardCount.filter(item=> item.name !== itemFind.name)
      
      await setCardCount([...itemsFiltrador,{
        name:existe.name,
        quantite: existe.quantite += 1,
        priceTotal: itemFind.price * existe.quantite,
        src:itemFind.src
      }])

    }
    
    

    
   
   
 
 
  }
  return (
    <>
    <ContextCart.Provider value={{items:cardCount}} >
      <Header cart={cardCount.reduce((ac, item)=> ac + item.quantite,0)} />
     </ContextCart.Provider>
     <Container style={{marginTop:'50px'}}>
       
      <Row>
      {dadaCart.map((item,index)=>(
        <Col className='col-sm' key={index}>
          <CardBuy onClick={addToCart} id={index} src={item.src} title={item.name} subTitle={item.subTitle} text={`R$ ${item.price}`}/>
        </Col>

       ))}
      </Row>
     </Container>
    </>
  );
}

export default App;
