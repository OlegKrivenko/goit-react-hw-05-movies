const getPosterImg = url => {
  return url
    ? `https://image.tmdb.org/t/p/w500/${url}`
    : 'https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg';
};

export default getPosterImg;
