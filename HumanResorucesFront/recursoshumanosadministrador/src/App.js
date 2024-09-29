import TableComponent from './components/TableComponent';
import ModalAdd from './components/ModalAdd';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import ModalActions from "./components/ModalActions";

function App() {
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [empleados, setEmpleados] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const getEmpleados = async () => {
    try{
    const response = await api.get("/empleados");
    setEmpleados(response.data);
    console.log(empleados);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getEmpleados();
  },[]);

  const deleteEmpleados = async (empleadoId) => {
    try {
      await api.delete(`/empleados/${empleadoId}`);
      setEmpleados(empleados.filter(empleado => empleado.id !== empleadoId));
    } catch (err) {
      console.log(err);
    }
  };

  const editEmpleado = (empleadoId) => {
    const empleado = empleados.find(emp => emp.id === empleadoId);
    setEmpleadoSeleccionado(empleado);
    setModalOpen(true);
  };

  const updateEmpleado = async (empleadoActualizado) => {
    try {
      await api.put(`/empleados/${empleadoActualizado.id}`, empleadoActualizado);
      setEmpleados(empleados.map(emp => (emp.id === empleadoActualizado.id ? empleadoActualizado : emp)));
      setModalOpen(false);
    } catch (err) {
      console.log(err);
      console.log(empleadoActualizado);
    }
  };

  const addEmpleado = async (nuevoEmpleado) => {
    try {
      const response = await api.post("/empleados", nuevoEmpleado);
      setEmpleados([...empleados, response.data]);
      setAddModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='App'>
      <TableComponent listaempleados={empleados} onDelete={deleteEmpleados} onEdit={editEmpleado}/>
      <button onClick={() => setAddModalOpen(true)}>Añadir Empleado</button>
      {modalOpen && <ModalActions empleado={empleadoSeleccionado} closeModal={() => setModalOpen(false)} saveEmpleado={updateEmpleado}/>}
      {addModalOpen && (<ModalAdd closeModal={() => setAddModalOpen(false)} addEmpleado={addEmpleado}/>)}
    </div>
  );
}

export default App;
