'use client'

import { Table } from "react-bootstrap"
import Pagina from "../components/Pagina"
import Link from "next/link"
import { FaPlusCircle } from "react-icons/fa"

export default function Page() {

  const passagens = JSON.parse(localStorage.getItem('passagens')) || []

  return (
    <Pagina titulo="Passagens">
      <Link
        href="/passagens/create"
        className="btn btn-primary my-3"
      >
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Voo</th>
            <th>Passageiro</th>
            <th>Assento</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>
          {passagens.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.voo_id}</td>
              <td>{item.passageiro_id}</td>
              <td>{item.assento}</td>
              <td>{item.preco}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}
