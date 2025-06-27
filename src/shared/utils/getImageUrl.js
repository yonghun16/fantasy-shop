const IMG_URL = import.meta.env.VITE_API_IMG_URL;

export const getImageUrl = (path) => `${IMG_URL}${path}`;
