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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleRemoveArrayField = (index, field) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Validación de formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Por favor, ingrese un email válido.");
      return;
    }

    // Validación de formato de teléfono (10 dígitos)
    const telefonoPattern = /^\d{10}$/;
    if (!telefonoPattern.test(formData.telefono)) {
      alert("Por favor, ingrese un teléfono válido (10 dígitos).");
      return;
    }

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
                  type="text"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  value={formData.nombre}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                  type="text"
                  name="apellido"
                  placeholder="Ingrese su apellido"
                  value={formData.apellido}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  name="email"
                  placeholder="Ingrese su email"
                  value={formData.email}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                  type="tel"
                  name="telefono"
                  placeholder="Ingrese su teléfono"
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
              <button type="button" onClick={(e) => handleAddArrayField(e, 'habilidades')}>Agregar habilidad</button>
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
              <button type="button" onClick={(e) => handleAddArrayField(e, 'formacionAcademica')}>Agregar formación</button>
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
              <button type="button" onClick={(e) => handleAddArrayField(e, 'historialLaboral')}>Agregar historial laboral</button>
            </div>

            <button type="submit" className="submit">Añadir Empleado</button>
          </form>
        </div>
      </div>
  );
};

export default ModalAdd;
