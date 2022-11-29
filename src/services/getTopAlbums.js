const getTopAlbums = async () => {
  try {
    const res = await fetch(
      "https://api.allorigins.win/raw?url=https://rss.applemarketingtools.com/api/v2/es/music/most-played/50/albums.json"
    );

    if (res.ok) {
      const body = await res.json();

      return body.feed.results;
    }
  } catch (error) {
    console.error(error);
  }
};

export default getTopAlbums;
