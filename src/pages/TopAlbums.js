import useTopAlbums from "../hooks/useTopAlbums";

const TopAlbums = () => {
  const { albums, loading } = useTopAlbums();
  console.log(albums);
  return (
    <section>
      <h2>Top Albums</h2>
    </section>
  );
};

export default TopAlbums;
