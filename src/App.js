// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';
import Rockets from './routes/Rockets';
import MyProfile from './routes/MyProfile';
import Missions from './routes/Missions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
