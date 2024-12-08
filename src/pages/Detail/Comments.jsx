import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Comments = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComment] = useState();

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/comments?id=${videoId}`)
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [videoId]);
  return (
    <div>
      {isLoading ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <h2 className="text-xl font-bold">{comments.commentsCount} Yorum</h2>
          <input
            type="text"
            className="w-full bg-transparent border-b border-gri p-2 outline-none mb-5"
            placeholder="Yorum Ekleyin.."
          />

          {comments.data.map((i) => (
            <div className="flex gap-2 items-start px-1 py-4">
              <img className="rounded-full" src={i.authorThumbnail[0].url} />
              <div className="flex flex-col">
                <h5 className="flex gap-2 items-center">
                  <span className="font-semibold">{i.authorText}</span>
                  <span className="text-gray-500 text-sm">
                    {i.publishedTimeText}
                  </span>
                </h5>

                <p>{i.textDisplay}</p>

                <div className="flex gap-5 items-center">
                  <div className="flex items-center gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
                    <AiOutlineLike />
                    <span className="text-sm text-gray-400">
                      {i.likesCount}
                    </span>
                  </div>

                  <div className="hover:bg-gray-700 p-1 rounded cursor-pointer">
                    <AiOutlineDislike />
                  </div>

                  <span className="hover:bg-gray-700 p-1 rounded cursor-pointer">
                    yanıtla
                  </span>
                </div>

                {i.replyCount > 0 && (
                  <div className="flex w-fit items-center p-1 rounded-md gap-2 text-blue-500 hover:bg-[#36639662] cursor-pointer">
                    <TiArrowSortedDown />
                    {i.replyCount} yanıt
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
