import gallery from "./gallery.data";
import GalleryItem from "./GalleryItem";


export default function Gallery() {

    return (
        <section className="gallery">
            {gallery.map((photoItem,photoIndex) => (
                 <GalleryItem
                    photoData={photoItem}
                    photoIndex={photoIndex} 
                    key={photoItem.id}
                />
            ))}
        </section>
    )
}