import React from 'react'
import Home from './home'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function afiliados() {
  return (
    <div>
      <Home/>
      <div className="table-container d-flex justify-content-center align-items-center">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Nombre y Apellido</th>
          <th>Tipo Doc.</th>
          <th>DNI</th>
          <th>Cbu</th>
          <th>Fecha Alta</th>
          <th>Fecha Baja</th>
          <th>Estado</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>   {/* iteracion */}
          <td>Id cliente</td>             
          <td>Nombre y apellido Cliente</td>
          <td>Tipo Documento</td>
          <td>DNI</td>
          <td>CBU</td>
          <td>Fecha Alta</td>
          <td>Fecha Baja</td>
          <td>Estado</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="outline-success">Nuevo</Button>{' '}
    </div>
      </div>
  )
}

export default afiliados