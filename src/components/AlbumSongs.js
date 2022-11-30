const AlbumSongs = ({ songs }) => {
  //console.log(songs);
  return (
    <ul className="album-songs">
      {songs.map((song) => (
        <li key={song.id}></li>
      ))}
    </ul>
  );
};

export default AlbumSongs;
