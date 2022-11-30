const getAlbumWithSongs = async (id) => {
  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&entity=song`
    );

    if (res.ok) {
      const body = await res.json();

      const [info, ...songs] = body.results;

      return { info, songs };
    }
  } catch (error) {
    console.error(error);
  }
};

export default getAlbumWithSongs;
