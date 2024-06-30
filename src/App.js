import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/route';
import { UserProvider } from './Providers/userProvider';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>

  )
}

export default App;
