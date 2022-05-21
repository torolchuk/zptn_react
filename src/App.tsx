import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import { Button } from './components/button';
import { CreatePollPage } from './pages/create_poll';
import { MainPage } from './pages/main_page';
import * as appRoutes from './consts/routes';
import { ElementsDemoPage } from './pages/elementsDemo';

import './App.scss';

function App() {
  return (
      <Router>
        {/* <div>
          <ul>
            <li>
              <Link to={appRoutes.mainPage()}>Main page</Link>
            </li>
            <li>
              <Link to={appRoutes.newPoll()}>New Poll</Link>
            </li>
            <li>
              <Link to={appRoutes.elementsDemo()}>Elements Demo</Link>
            </li>
          </ul>
        </div> */}
        <Routes>
          <Route path={appRoutes.mainPage()} element={<MainPage />} />
          <Route path={appRoutes.newPoll()} element={<CreatePollPage />}/>
          <Route path={appRoutes.elementsDemo()} element={<ElementsDemoPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
