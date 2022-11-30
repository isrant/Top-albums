const AlbumCard = ({ album }) => {
  const { name, artistName, artworkUrl100 } = album;

  return (
    <article className="album-card">
      <img src={artworkUrl100} alt={name}></img>
      <h2> {name}</h2>
      <h3>{artistName}</h3>
    </article>
  );
};

export default AlbumCard;
