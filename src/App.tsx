// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfilePageWidget from '@/pages/profile/page-widget.tsx';
import HomePage from '@/pages/home/page.tsx';
import LoginPage from '@/pages/login/page.tsx';
import SearchPage from '@/pages/search/page.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/profile',
    element: <ProfilePageWidget activeTab='threads' />,
  },
  {
    path: '/profile/replies',
    element: <ProfilePageWidget activeTab='replies' />,
  },
  {
    path: '/profile/reposts',
    element: <ProfilePageWidget activeTab='reposts' />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
