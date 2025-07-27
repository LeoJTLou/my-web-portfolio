import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import Root from './Root';
import { HomePage, PortfolioPage } from './pages';

function App() {
  // App Router here
  const router = createBrowserRouter([
    {path: '/', element: <Root/>, children: [
      {index: true, element: <HomePage/>},
      {path: 'Portfolio', element: <PortfolioPage/>}
    ]}
  ]);
  return (
    <BrowserRouter basename="/my-web-portfolio">
      <RouterProvider router={router} />
    </BrowserRouter>
  );
}

export default App;