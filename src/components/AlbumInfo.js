const AlbumInfo = ({ info }) => {
  const { collectionName, artistName, releaseDate, artworkUrl100 } = info;
  console.log(collectionName, artistName, releaseDate, artworkUrl100);

  return (
    <section className="album-info">
      <img src={artworkUrl100} alt={collectionName} />
      <h2> {collectionName}</h2>
      <h3>
        {artistName} - {releaseDate.split("T")[0]}
      </h3>
    </section>
  );
};

export default AlbumInfo;
