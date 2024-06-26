import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import routes from './routes/route';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App;
