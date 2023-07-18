"use client";

import { useState } from "react";

type IProps = {
  data: string;
};

const CopyClassroomLink = ({ data }: IProps) => {
  const [linkCopied, setLinkCopied] = useState<boolean>(false);
  console.log("link copied", linkCopied);
  const handleLinkCopied = (link: string) => {
    navigator.clipboard.writeText(link);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 1500);
  };
  return (
    <span onClick={() => handleLinkCopied(data)} className="cursor-pointer">
      ক্লাসরুম
    </span>
  );
};

export default CopyClassroomLink;
