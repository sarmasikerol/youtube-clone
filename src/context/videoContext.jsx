import { createContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { categories } from "../utils/constants";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [category, setCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    let type = category.type;

    // seçilen kategori menü tipindeyse fonk. durdur
    if (type === "menu") return;

    // istek atılacak url'i belirle
    const url =
      type === "home"
        ? "/home"
        : "type" === "trending"
        ? "/trending"
        : `/search?query=${category.name}`;

    setIsLoading(true);

    // api isteği at
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [category]);

  console.log(videos);

  return (
    <VideoContext.Provider
      value={{ videos, category, setCategory, isLoading, error }}
    >
      {children}
    </VideoContext.Provider>
  );
};
