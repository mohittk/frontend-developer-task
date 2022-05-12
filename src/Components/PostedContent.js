import React from "react";

export default function PostedContent(props) {
  return (
    <>
      <div className="feed_container flex flex-col p-5 bg-[#27292D] border-2 border-[#35373B] rounded-lg my-10">
        <h1 className="text-[#C5C7CA] m-1 text-[16px] ">{props.name}</h1>
        <h3 className=" text-[#7F8084] m-1 text-sm">{props.time}</h3>

        <div className="posted_content p-5 rounded-lg my-2 bg-[#191920]">{props.content}</div>
      </div>
    </>
  );
}
