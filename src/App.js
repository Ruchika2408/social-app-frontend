import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/route';
import { UserProvider } from './Providers/userProvider';
import { SocialPostProvider } from './Providers/socialPostProvider';

const router = createBrowserRouter(routes);

function App() {
  return (
    <UserProvider>
      <SocialPostProvider>
        <RouterProvider router={router} />
      </SocialPostProvider>
    </UserProvider>
  )
}

export default App;
