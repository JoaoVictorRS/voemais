'use client'

import { Table } from "react-bootstrap"
import Pagina from "../components/Pagina"
import Link from "next/link"
import { FaPlusCircle } from "react-icons/fa"

export default function Page() {

  const voos = JSON.parse(localStorage.getItem('voos')) || []

  return (
    <Pagina titulo="Voos">
      <Link
        href="/voos/create"
        className="btn btn-primary my-3"
      >
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Internacional</th>
            <th>Identificador</th>
            <th>Data Checkin</th>
            <th>Data Embarque</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Empresa</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {voos.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.internacional}</td>
              <td>{item.identificador}</td>
              <td>{item.data_checkin}</td>
              <td>{item.data_embarque}</td>
              <td>{item.id_origem}</td>
              <td>{item.id_destino}</td>
              <td>{item.empresa_id}</td>
              <td>{item.preco}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}
