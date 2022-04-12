import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Design from './components/layouts/Design';
 
function App() {
  return (
    <BrowserRouter>
      <Design>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="new-meetup" element={<NewMeetupPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Routes>
      </Design>
    </BrowserRouter>
  );
}
 
export default App;
