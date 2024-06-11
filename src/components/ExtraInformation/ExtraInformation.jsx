import React from "react";
import PropTypes from "prop-types";

const ExtraInformation = ({ tonos, tamanos, accesorios }) => {
  if (tonos && tonos.tono && tonos.tono.length > 0) {
    return (
      <div>
        <h4 className="text-sm md:text-lg font-semibold text-primary mb-5">
          Tonos Disponibles
        </h4>
        <div className="grid grid-cols-3 xl:grid-cols-5 gap-y-8 gap-x-4 max-h-[190px] overflow-y-scroll scroll-bar">
          {tonos.tono.map((item, index) => (
            <div key={index} style={{ textAlign: "-webkit-center" }}>
              <img
                src={item.imagen.node.mediaItemUrl}
                alt={item.titulo}
                className="mb-2 rounded-full shadow-md"
              />
              <h3 className="text-[12px]">{item.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tamanos && tamanos.length > 0) {
    return (
      <div>
        <h4 className="text-sm md:text-lg font-semibold text-primary mb-5">
          Tamaños Disponibles
        </h4>
        <div className="grid grid-cols-1 gap-y-2">
          {tamanos.map((tamano, index) => (
            <div key={index} className="text-left border-b border-primary border-solid">
              <h3 className="text-[12px]">{tamano.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (accesorios && accesorios.length > 0) {
    return (
      <div>
        <h4 className="text-sm md:text-lg font-semibold text-primary mb-5">
          Accesorios Disponibles
        </h4>
        <div className="grid grid-cols-2 mg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 max-h-[190px] overflow-y-scroll scroll-bar">
          {accesorios.map((accesorio, index) => (
            <div key={index} style={{ textAlign: "-webkit-center" }}>
              <img
                src={accesorio.imagen.node.mediaItemUrl}
                alt={accesorio.titulo}
                className="mb-2"
              />
              <h3 className="text-[12px]">{accesorio.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <p>No additional information available.</p>;
};

/* ExtraInformation.propTypes = {
  tonos: PropTypes.shape({
    tono: PropTypes.arrayOf(
      PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        imagen: PropTypes.shape({
          node: PropTypes.shape({
            mediaItemUrl: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }),
  tamanos: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
    }).isRequired
  ),
  accesorios: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      imagen: PropTypes.shape({
        node: PropTypes.shape({
          mediaItemUrl: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ),
}; */

export default ExtraInformation;
