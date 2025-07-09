import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function GlobalCounter(block) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // o un loader temporal
  return (
    <section
      className={`counter-up ${
        block.alternate_style ? "counter-up-two pb-xxl-14 pb-lg-13" : ""
      }`}
      id="counter-up"
    >
      <div className="container">
        <div className="row">
          <div className="section-header px-2 ">
            <h2>
              {block.title} <span>{block.title_suffix}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
