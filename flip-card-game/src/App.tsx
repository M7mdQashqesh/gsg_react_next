import './App.css'
import GameScreen from './screens/game.screen'
import LoginScreen from './screens/login.screen'
import NotFound from './screens/not-found.screen'
import LevelsScreen from './screens/levels.screen'
import ScoreBoardScreen from './screens/score-board.screen'
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'

function App() {
  const routes: RouteObject[] = [
    { path: "/", element: <LoginScreen /> },
    { path: "/game", element: <GameScreen /> },
    { path: "/levels", element: <LevelsScreen /> },
    { path: "/score-board", element: <ScoreBoardScreen /> },
    { path: "*", element: <NotFound /> }
  ];

  return (<RouterProvider router={createBrowserRouter(routes)} />)
}

export default App
