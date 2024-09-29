import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import "../css/TableComponent.css";

export default function TableComponent({ listaempleados = [], onEdit, onDelete }) {
  return (
      <div>
        <h1>RR.HH JM</h1>
        <div className="Table-wrapper">
          <table className="Table">
            <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Habilidades</th>
              <th>Formación academica</th>
              <th>Historial laboral</th>
              <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {listaempleados.map((empleado) => (
                <tr key={empleado.id}>
                  <td>{empleado.id}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.email}</td>
                  <td>{empleado.telefono}</td>
                  <td>
                    <ul className="list-column">
                      {(empleado.habilidades || []).map((habilidad, index) => (
                          <li key={index}>{habilidad}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="list-column">
                      {(empleado.formacionAcademica || []).map((formacion, index) => (
                          <li key={index}>{formacion}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="list-column">
                      {(empleado.historialLaboral || []).map((historial, index) => (
                          <li key={index}>{historial}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                  <span className="Actions">
                    <BsFillTrashFill className="Delete-btn" onClick={() => onDelete(empleado.id)} />
                    <BsFillPencilFill className="Edit-btn" onClick={() => onEdit(empleado.id)} />
                  </span>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
