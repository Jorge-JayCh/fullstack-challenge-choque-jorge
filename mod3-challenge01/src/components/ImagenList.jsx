import React, {useState, useEffect} from 'react';
import Imagen from './Imagen';
import { getCharacters } from '../service';
const ImagenList = ({setPrincipal}) => {

  const [imagenList, setImagenList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const cargarColores = () => {
    // setIsLoading(true)
    // setTimeout(() => {
    //   setColorList(colors)
    //   setIsLoading(false)
    // }, 3000);
  }

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setImagenList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  
  return (
    <>
      {isLoading && <h1>Loading</h1>}
      <div>
        {
         imagenList.map( personaje =>
          <Imagen name={personaje.name} species={personaje.species} status={personaje.status} key={personaje.id} image={personaje.image} setPrincipal={setPrincipal}/>
           )
        }
      </div>
    </>
  );
}

export default ImagenList;