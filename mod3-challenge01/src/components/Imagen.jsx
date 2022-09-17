const Imagen = ({name, species, status, image, setPrincipal }) => {
    return (
      <button
        className="color-square"
        onClick={() => setPrincipal(image)}
      >
        <h2>{name}</h2>
        <img src={image}></img>
        <p>{species}</p>
        <p>{status}</p>
      </button>
    );
  };
  export default Imagen;