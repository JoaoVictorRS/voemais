'use client'

import { Table } from "react-bootstrap"
import Pagina from "../components/Pagina"
import Link from "next/link"
import { FaPlusCircle } from "react-icons/fa"

export default function Page() {

  const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || []

  return (
    <Pagina titulo="Aeroportos">
      <Link
        href="/aeroportos/create"
        className="btn btn-primary my-3"
      >
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sigla</th>
            <th>UF</th>
            <th>Cidade</th>
            <th>Pais</th>
          </tr>
        </thead>
        <tbody>
          {aeroportos.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.nome}</td>
              <td>{item.sigla}</td>
              <td>{item.uf}</td>
              <td>{item.cidade}</td>
              <td>{item.pais}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}
