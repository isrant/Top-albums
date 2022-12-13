const AlbumInfo = ({ info }) => {
  const { collectionName, artistName, releaseDate, artworkUrl100 } = info;

  return (
    <section className="album-info">
      <img
        src={artworkUrl100.replace("100x100", "400x400")}
        alt={collectionName}
      />
      <div>
        <h2> {collectionName}</h2>
        <h3>
          {artistName} - {releaseDate.split("T")[0]}
        </h3>
      </div>
    </section>
  );
};

export default AlbumInfo;
