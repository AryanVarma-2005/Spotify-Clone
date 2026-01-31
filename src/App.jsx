import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Player from './components/Player.jsx';
import Display from './components/Display.jsx';
import DisplayAlbum from './components/DisplayAlbum.jsx';
import { PlayerContext } from './components/PlayerContext.jsx';

const App = () => {
  const {audioRef,track} = useContext(PlayerContext);
  return (
    <Router>
      <div className="h-screen bg-black">


        <div className="h-[90%] flex">
          

          <Sidebar />

          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/album/:id" element={<DisplayAlbum />} />

            <Route
              path="/checkout"
              element={
                <h1 className="text-white text-3xl">
                  Checkout
                </h1>
              }
            />
          </Routes>

        </div>

        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </Router>
  );
};

export default App;
