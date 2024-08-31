import styles from './Map.module.css';

const Map = () => {
  return (
    <div className="relative w-full h-full">
      {/* Use a map library here (like react-leaflet or google-maps-react) */}
      <div className="absolute inset-0 bg-blue-100">
        {' '}
        {/* Placeholder for the map */}
      </div>
    </div>
  );
};

export { Map };
