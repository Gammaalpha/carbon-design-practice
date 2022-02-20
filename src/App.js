import './App.scss';
import { Button } from 'carbon-components-react';
import { CustomTable } from './components/CustomTable/CustomTable';

function App() {
  const rows = [
    {
      id: 'a',
      name: 'Load balancer 1',
      status: 'Disabled',
    },
    {
      id: 'b',
      name: 'Load balancer 2',
      status: 'Starting',
    },
    {
      id: 'c',
      name: 'Load balancer 3',
      status: 'Active',
    },
  ];
  return (
    <div className="App">
      <Button>Hello</Button>
      <CustomTable rows={rows} />
    </div>
  );
}

export default App;
