import './App.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Root from './Root';
import { HomePage, PortfolioPage, Resume } from './pages';

function App() {
  // App Router here
  const router = createBrowserRouter([
    {path: '/', element: <Root/>, children: [
      {index: true, element: <HomePage/>},
      {path: 'Portfolio', element: <PortfolioPage/>},
      {path: 'Resume', element: <Resume/>}
    ]}
  ], { basename: '/my-web-portfolio' });
  return <RouterProvider router={router}/>
}

export default App;