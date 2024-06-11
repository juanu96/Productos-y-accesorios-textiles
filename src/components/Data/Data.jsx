import { useQuery, gql } from "@apollo/client";

const TELAS = gql`
  {
    telas {
      nodes {
        title
        content {
          pdf
          whatsapp
          content
          image {
            node {
              mediaItemUrl
            }
          }
        }
        categoriasDeProductos {
          nodes {
            name
          }
        }
        tonos {
          titulo
          tono {
            titulo
            imagen {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;

const POLIFIBRAS = gql`
  query {
    polifibras {
      nodes {
        title
        content {
          content
          pdf
          whatsapp
          image {
            node {
              mediaItemUrl
            }
          }
        }
        tamanosDisponibles {
          tamano {
            titulo
          }
        }
      }
    }
  }
`;

const ACCESORIOS = gql`
  query {
    accesorios {
      nodes {
        title
        content {
          content
          pdf
          whatsapp
          image {
            node {
              mediaItemUrl
            }
          }
        }
        accesoriosDisponibles {
          accesorio {
            titulo
            imagen {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;

// Hooks personalizados para cada consulta
export const useTelasData = () => {
  const { data, loading, error } = useQuery(TELAS);
  return {
    data: data ? data.telas.nodes : [],
    loading,
    error,
  };
};

export const usePolifibrasData = () => {
  const { data, loading, error } = useQuery(POLIFIBRAS);
  return {
    data: data ? data.polifibras.nodes : [],
    loading,
    error,
  };
};

export const useAccesoriosData = () => {
  const { data, loading, error } = useQuery(ACCESORIOS);
  return {
    data: data ? data.accesorios.nodes : [],
    loading,
    error,
  };
};
