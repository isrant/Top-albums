import { useParams } from "react-router-dom";
import useAlbumWithSongs from "../hooks/useAlbumWithSongs";
import LoadingIcon from "../components/LoadingIcon";
import AlbumInfo from "../components/AlbumInfo";
import AlbumSongs from "../components/AlbumSongs";

const AlbumDetails = () => {
  const { id } = useParams();
  const { album, loading } = useAlbumWithSongs(id);

  return (
    <section>
      <h2>Album {id}</h2>

      {loading && <LoadingIcon />}

      {album.info && <AlbumInfo info={album.info} />}

      {album.song?.lenght > 0 && <AlbumSongs songs={album.songs} />}
    </section>
  );
};

export default AlbumDetails;
