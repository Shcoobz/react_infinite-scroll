import PropTypes from 'prop-types';

/**
 * Functional component to render a container with images.
 * @param {Object[]} photos - Array of photo objects to be displayed.
 */
function ImageContainer({ photos }) {
  return (
    <div className='image-container' id='image-container'>
      {photos.map((photo, index) => (
        <a
          href={photo.links.html}
          target='_blank'
          rel='noopener noreferrer'
          key={photo.id + index}>
          <img
            src={photo.urls.regular}
            alt={photo.alt_description}
            title={photo.alt_description}
          />
        </a>
      ))}
    </div>
  );
}

ImageContainer.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      links: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired,
      urls: PropTypes.shape({
        regular: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
};

export default ImageContainer;
