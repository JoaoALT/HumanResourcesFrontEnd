import React, { useState } from 'react';
import '../css/ModalActions.css';

const ModalAdd = ({ closeModal, addEmpleado }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    habilidades: [],
    formacionAcademica: [],
    historialLaboral: [],
  });

  // Manejo de inputs para los campos normales
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo para agregar elementos a arrays como habilidades, formación académica y historial laboral
  const handleAddArrayField = (e, field) => {
    e.preventDefault();
    const newValue = prompt(`Ingrese un valor para ${field}`);
    if (newValue) {
      setFormData({
        ...formData,
        [field]: [...formData[field], newValue],
      });
    }
  };

  // Manejo para eliminar elementos de arrays
  const handleRemoveArrayField = (index, field) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  // Al enviar el formulario, se ejecuta la función para añadir el empleado
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del nuevo empleado:', formData);
    addEmpleado(formData);
    closeModal();
  };

  return (
      <div className="modal-container" onClick={(e) => { if (e.target.className === "modal-container") closeModal(); }}>
        <div className="modal1">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
              />
            </div>

            {/* Campo de habilidades (array) */}
            <div className="form-group">
              <label>Habilidades</label>
              <ul>
                {formData.habilidades.map((habilidad, index) => (
                    <li key={index}>
                      {habilidad} <button onClick={() => handleRemoveArrayField(index, 'habilidades')}>Eliminar</button>
                    </li>
                ))}
              </ul>
              <button onClick={(e) => handleAddArrayField(e, 'habilidades')}>Agregar habilidad</button>
            </div>

            {/* Campo de formación académica (array) */}
            <div className="form-group">
              <label>Formación Académica</label>
              <ul>
                {formData.formacionAcademica.map((formacion, index) => (
                    <li key={index}>
                      {formacion} <button onClick={() => handleRemoveArrayField(index, 'formacionAcademica')}>Eliminar</button>
                    </li>
                ))}
              </ul>
              <button onClick={(e) => handleAddArrayField(e, 'formacionAcademica')}>Agregar formación</button>
            </div>

            {/* Campo de historial laboral (array) */}
            <div className="form-group">
              <label>Historial Laboral</label>
              <ul>
                {formData.historialLaboral.map((historial, index) => (
                    <li key={index}>
                      {historial} <button onClick={() => handleRemoveArrayField(index, 'historialLaboral')}>Eliminar</button>
                    </li>
                ))}
              </ul>
              <button onClick={(e) => handleAddArrayField(e, 'historialLaboral')}>Agregar historial laboral</button>
            </div>

            <button type="submit" className="submit">Añadir Empleado</button>
          </form>
        </div>
      </div>
  );
};

export default ModalAdd;