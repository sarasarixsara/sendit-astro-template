export default function GalleryItem({ photoData, photoIndex }) {
    const { src, title, alt } = photoData;

    return (
        <div className="gallery-item">
            <img
                src={src}
                alt={title}
                className="gallery-image"
            />
        </div>
    );
}