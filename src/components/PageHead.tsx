import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description: string;
}

const PageHead = ({ title, description }: PageHeadProps) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};

export default PageHead;
