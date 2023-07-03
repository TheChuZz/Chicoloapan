import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Editar.css";

function Editar() {
  const { id } = useParams();
  const [datos, setDatos] = useState({
    nombre_empresa_escuela: "",
    direccion_institucion: "",
    responsable_directo: "",
    area: "",
    cargo: "",
    telefono: "",
    correo: "",
    objeto_convenio: "",
    actividades_alumnos: "",
    carreras: "",
    observaciones: "",
  });

  useEffect(() => {
    // Realizar la consulta al backend para obtener los datos del registro con la ID proporcionada
    fetch(`http://localhost/convenios/actualizar.php?consultar=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setDatos(data);
        } else {
          console.log("Error al obtener los datos");
        }
      })
      .catch((error) => {
        console.log("Error de conexión", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la solicitud de actualización al backend
    fetch(`http://localhost/convenios/actualizar.php?actualizar=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Registro actualizado exitosamente");
          // Realizar cualquier acción adicional después de la actualización exitosa
        } else {
          console.log("Error al actualizar el registro");
        }
      })
      .catch((error) => {
        console.log("Error de conexión", error);
      });
  };

  return (
    <div className="padre">
      <div className="editar">
        <h2>Editar Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="hijos">
            <label>Nombre de la empresa o escuela:</label>
            <input
              type="text"
              name="nombre_empresa_escuela"
              value={datos.nombre_empresa_escuela}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Dirección de la institución:</label>
            <input
              type="text"
              name="direccion_institucion"
              value={datos.direccion_institucion}
              onChange={handleChange}
            />
          </div >
          <div className="hijos">
            <label>Responsable directo:</label>
            <input
              type="text"
              name="responsable_directo"
              value={datos.responsable_directo}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Área:</label>
            <input
              type="text"
              name="area"
              value={datos.area}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Cargo:</label>
            <input
              type="text"
              name="cargo"
              value={datos.cargo}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={datos.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Correo:</label>
            <input
              type="text"
              name="correo"
              value={datos.correo}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Objeto del convenio:</label>
            <input
              type="text"
              name="objeto_convenio"
              value={datos.objeto_convenio}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Actividades para los alumnos:</label>
            <input
              type="text"
              name="actividades_alumnos"
              value={datos.actividades_alumnos}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Carreras:</label>
            <input
              type="text"
              name="carreras"
              value={datos.carreras}
              onChange={handleChange}
            />
          </div>
          <div className="hijos">
            <label>Observaciones:</label>
            <input
              type="text"
              name="observaciones"
              value={datos.observaciones}
              onChange={handleChange}
            />
          </div> <br />
          <Link id="Actualizar" to="/Listas"><button type="submit" onClick={()=>{window.alert("Datos Actualizados")}}>Actualizar</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Editar;
