import { FiDownload } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa6";

export default function DocumentItem({ documentItem, docIndex }) {
  const { title, file, description } = documentItem;

  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="esal-document"
    >
      <div className="document-icon">
        <FaRegFilePdf />
      </div>

      <div className="document-number">
        {String(docIndex + 1).padStart(2, "0")}
      </div>

      <div className="document-content">
        <h5 className="document-title">
          {title}
        </h5>
        <p className="document-description">
          {description}
        </p>
      </div>

      <div className="document-action">
        <FiDownload />
        Descargar
      </div>
    </a>
  );
}