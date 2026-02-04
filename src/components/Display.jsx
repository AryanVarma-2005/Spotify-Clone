import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Displayhome from './displayhome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef(null);
  const location = useLocation();

  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum
    ? Number(location.pathname.split('/').pop())
    : null;

  useEffect(() => {
    if (!displayRef.current) return;

    if (isAlbum && albumsData[albumId]) {
      displayRef.current.style.backgroundImage =
        `linear-gradient(180deg, ${albumsData[albumId].bgColor}, #121212 60%)`;
    } else {
      displayRef.current.style.backgroundImage = 'none';
      displayRef.current.style.backgroundColor = '#121212';
    }
  }, [isAlbum, albumId]);

  return (
    <div
      ref={displayRef}
      className="w-full h-full px-6 pt-4 text-white overflow-y-auto lg:w-[75%]"
    >
      <Routes>
        <Route path="/" element={<Displayhome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
