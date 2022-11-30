import useTopAlbums from "../hooks/useTopAlbums";
import AlbumCard from "../components/AlbumCard";
import LoadingIcon from "../components/LoadingIcon";
import { Link } from "react-router-dom";

const TopAlbums = () => {
  const { albums, loading } = useTopAlbums();

  return (
    <section>
      <h2>Top Albums</h2>

      {loading && <LoadingIcon />}

      {albums.length > 0 && (
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`}>
                <AlbumCard album={album} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TopAlbums;
