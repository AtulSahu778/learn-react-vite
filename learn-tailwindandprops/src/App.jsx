import Card  from './components/card'
import './App.css'

function App() {

  const myobj = {
    username:"Atul Sahu",
    age: 21
  }

  return (
    <>
     <div>
      <Card username={myobj.username} />
      <Card username={myobj.username="Payal Singh"} />
     </div>
    </>
  )
}

export default App
