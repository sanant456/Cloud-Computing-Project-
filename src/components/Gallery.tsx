import { useState, useEffect } from 'react';
import '../styles/Gallery.css';

interface GalleryProps {
  images: string[];
  onDelete: (url: string) => void;
}

export default function Gallery({ images, onDelete }: GalleryProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [images]);

  return (
    <div className="gallery-container">
      <h2>📸 My Gallery</h2>
      
      {images.length === 0 ? (
        <div className="empty-message">
          No images uploaded yet. Go to the Upload tab to add some!
        </div>
      ) : (
        <div className="gallery-grid">
          {images.map((imageUrl) => (
            <div key={imageUrl} className="gallery-item">
              <img 
                src={imageUrl} 
                alt="Gallery item"
                onLoad={() => setLoading(false)}
              />
              <button
                className="delete-btn"
                onClick={() => onDelete(imageUrl)}
                title="Delete image"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
