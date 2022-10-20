const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3514dd4dc328702c2dd8dc4b59f7b060',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;