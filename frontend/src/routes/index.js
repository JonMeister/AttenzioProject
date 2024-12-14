import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

import { Home, User } from '../pages';

const Approutes = () => {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/user" element={<User/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}
export default Approutes;
