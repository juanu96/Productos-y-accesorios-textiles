import React from "react";
import PropTypes from "prop-types";
import ExtraInformation from "../ExtraInformation/ExtraInformation";

const Content = ({ content, title, tonos, tamanos, accesorios }) => {
    console.log("Content:", content)
  return (
    <div>
      <h2 className="font-bold text-xl md:text-[28px] text-secondary mb-5 uppercase">{title}</h2>
      <p
        className="text-secondary font-medium text-sm md:text-lg mb-8"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      ></p>
      <ExtraInformation tonos={tonos} tamanos={tamanos} accesorios={accesorios} />
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <a href={content?.whatsapp} target="_blank" rel="noreferrer" className="text-white hover:text-primary bg-primary hover:bg-white font-semibold text-sm md:text-base border border-solid border-primary w-full text-center py-3 rounded-lg">
          Quiero este producto
        </a>
        <a href={content?.pdf} className="text-primary hover:text-white bg-white hover:bg-primary font-semibold text-sm md:text-base border border-solid border-primary w-full text-center py-3 rounded-lg">
          Descargar catálogo
        </a>
      </div>
    </div>
  );
};

/* Content.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    tonos: PropTypes.shape({
      tono: PropTypes.arrayOf(
        PropTypes.shape({
          titulo: PropTypes.string,
          imagen: PropTypes.shape({
            node: PropTypes.shape({
              mediaItemUrl: PropTypes.string,
            }),
          }),
        })
      ),
    }), // Información sobre los tonos disponibles
    tamanos: PropTypes.arrayOf(
      PropTypes.shape({
        titulo: PropTypes.string,
      })
    ), // Información sobre los tamaños disponibles
    accesorios: PropTypes.arrayOf(
      PropTypes.shape({
        titulo: PropTypes.string,
        imagen: PropTypes.shape({
          node: PropTypes.shape({
            mediaItemUrl: PropTypes.string,
          }),
        }),
      })
    ), // Información sobre los accesorios disponibles
  }; */

export default Content;
