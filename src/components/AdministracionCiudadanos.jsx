import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const AdministracionCiudadanos = () => {
  const navigate = useNavigate();
  const [ciudadano, setCiudadano] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:44377/api/Ciudadanos").then((response) => {
      setCiudadano(response.data);
    });
  }, [ciudadano]);

  if (!ciudadano) {
    return <div> Cargando información... </div>;
  }

  const borrarCiudadano = (id) =>{
    axios.delete(`https://localhost:44377/api/Ciudadanos/${id}`).then((response) => {
      console.log(response);
    } )
  }

  const actualizarCiudadano = (data) => {
    console.log(data);
     navigate('/actualizarCiudadano', {replace: true, data});
  }

  return (
    <div className="container-fluid">
      <h3>Bolsa de Empleo APP</h3>
      <hr />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Tipo de documento</th>
                  <th scope="col">Cedula</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Profesion</th>
                  <th scope="col">Aspiracion_salarial</th>
                  <th scope="col">Email</th>
                  <th scope="col">Modificar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {ciudadano.map((data, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{data.tipo_documento}</th>
                      <td>{data.id}</td>
                      <td>{data.nombres}</td>
                      <td>{data.apellidos}</td>
                      <td>{data.profesion}</td>
                      <td>{data.aspiracion_salarial}</td>
                      <td>{data.email}</td>                     
                      <td><Link className="btn btn-success" to={{
                        pathname: `/actualizarCiudadano/${data.id}`
                      }} state={{data}}> Modificar</Link></td>
                      <td><button onClick={() => borrarCiudadano(data.id)} className="btn btn-danger">Borrar</button></td>
                    </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
