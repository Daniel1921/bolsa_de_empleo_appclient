import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "./sidebar";


export const ModificarCiudadano = () => {

    const { state } = useLocation();    

  const {id, tipo_documento, nombres, apellidos, email, fecha_nacimiento, profesion, aspiracion_salarial } = state.data;
    
    const parseFecha = fecha_nacimiento.split('T');

     const [ciudadano, setCiudadano] = useState({  
        Id: id,
        Tipo_documento: tipo_documento,
        Nombres: nombres,
        Apellidos: apellidos,
        Fecha_nacimiento:  parseFecha[0],
        Profesion: profesion,
        Aspiracion_salarial: aspiracion_salarial,
        Email: email
     })

     const {        
        Id,
        Tipo_documento,
        Nombres,
        Apellidos,
        Fecha_nacimiento,
        Profesion,
        Aspiracion_salarial,
        Email,
      } = ciudadano;


     const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log(value);
    
        setCiudadano({
          ...ciudadano,
          [name]: value,
        });
      };

      const onFormSubmit = async (event) => {
        event.preventDefault();
        if ([Nombres, Apellidos, Profesion, Email].includes("")) {
          return alert("Existen campos sin rellenar");
        }
    
        console.log(JSON.stringify(ciudadano));
    
         try {
           await axios.put(`https://localhost:44377/api/Ciudadanos/${Id}`, JSON.stringify(ciudadano), {
               headers: {
                 "Content-Type": "application/json",
               },
             })
             .then((response) => {
               console.log(response);
             });
         } catch (error) {
           console.log(error);
            if (!error.response) {
              // network error
              alert("Error: Network Error");
            } else {
              alert(error.response.data.message);
            }
            return
         }
    
        alert(" Actualización completada exitosamente!");
        

        // vaciar campos
        //navegar a la tabla de registros
      };
    
    

  return (
    <div className="container-fluid">
      <h3>Bolsa de Empleo APP</h3>
      <hr />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <h4>Modificar Ciudadano: <small>{nombres + ' '} { apellidos } </small></h4>
          <hr />
          <form onSubmit={onFormSubmit}>            
          
            <div className="mb-3">
              <label htmlFor="Nombres" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                value={Nombres}
                onChange={onInputChange}
                className="form-control"
                name="Nombres"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Apellidos" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                value={Apellidos}
                onChange={onInputChange}
                className="form-control"
                name="Apellidos"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Fecha_nacimiento" className="form-label">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                name="Fecha_nacimiento"
                value={Fecha_nacimiento}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Profesion" className="form-label">
                Profesión
              </label>
              <input
                type="text"
                value={Profesion}
                onChange={onInputChange}
                className="form-control"
                name="Profesion"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Aspiracion_salarial" className="form-label">
                Aspiración salarial
              </label>
              <input
                type="number"
                className="form-control"
                name="Aspiracion_salarial"
                value={Aspiracion_salarial}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={Email}
                onChange={onInputChange}
                className="form-control"
                name="Email"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
