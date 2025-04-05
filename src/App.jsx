import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import './App.css'

function App() {

  return (
    <>
      <Title />
      <Todo task="Learn React" description="Code along and take notes"/>
      <Todo task="fininsh App" description="4hrs Everyday input"/>
      <Todo task="Land a Remote job" description="Apply for Remote jobs"/>
      <Todo task="Earn $10k+" description="Live life and relax"/>
    </>
  )
}

export default App
