import { Header } from './components/';
import { Tasks } from './components/tasks/Tasks';

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

function App() {


  return (
    <>
      <Header />
      <Tasks />
    </>
  )
}

export default App;
