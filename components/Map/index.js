import styled from 'styled-components';

const MapStyle = styled.div`
  iframe {
    width: 100vw;
  }
`;

const Map = () => (
  <MapStyle>
    <iframe
      title="Poco Piatti"
      width="600"
      height="450"
      src="https://maps.google.com/maps?q=Koala%20Berry&t=&z=13&ie=UTF8&iwloc=&output=embed"
      allowFullScreen
    />
  </MapStyle>
);

export default Map;
