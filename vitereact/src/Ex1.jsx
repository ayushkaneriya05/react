import './index.css'
import Card from './components/Card';

function Ex1() {
  const name = "Ayush";
  const obj ={
    name: "Ayush",
    age: 19,
    city: "Ahmedabad"
  }
  return (
    <>
      <div className='bg-green-300 text-black p-4 mb-4'>Hello {name}</div>
      <Card name="Ayush"/>
      <Card name="Vishva" myObj={obj}/>
    </>
  )
}

export default Ex1