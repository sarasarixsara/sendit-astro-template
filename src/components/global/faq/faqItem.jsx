import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFaqItem({ faq, i }) {
  return (
    <div className={`accordion-item ${i === 0 ? "shows" : ""}`}>
      <span>0{i + 1}</span>
    
          <div>
            <a href={faq.link} target="_blank">{faq.linkTitle}</a>
          </div>
          {/* <div>
            <a href={faq.link2} target="_blank">{faq.linkTitle2}</a>
          </div> */}

      
    </div>
  );
}