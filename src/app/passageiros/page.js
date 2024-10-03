'use client'

import { Table } from "react-bootstrap"
import Pagina from "../components/Pagina"
import Link from "next/link"
import { FaPlusCircle } from "react-icons/fa"

export default function Page() {

  const passageiros = JSON.parse(localStorage.getItem('passageiros')) || []

  return (
    <Pagina titulo="Passageiros">
      <Link
        href="/passageiros/create"
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
          {passageiros.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.nome}</td>
              <td>{item.tipo_documento}</td>
              <td>{item.documento}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.data_nascimento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}
