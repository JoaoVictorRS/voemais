'use client'

import { Button, Table } from "react-bootstrap"
import Pagina from "../components/Pagina"
import Link from "next/link"
import { FaPlusCircle } from "react-icons/fa"
import { FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useEffect, useState } from "react"

export default function Page() {

  const [empresas, setEmpresas] = useState([])

  useEffect(() => {
    setEmpresas(JSON.parse(localStorage.getItem('empresas')) || [])
  }, [])

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const dados = empresas.filter(item => item.id != id)
      localStorage.setItem('empresas', JSON.stringify(dados))
      setEmpresas(dados)
    }
  }

  return (
    <Pagina titulo="Empresas">

      <Link
        href="/empresas/create"
        className="btn btn-success my-3 me-2"
      >
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map(item  => (
            <tr key={item.id}>
              <td>
                <Link
                  href={`/empresas/edit/${item.id}`}
                  className="btn btn-primary mx-1"
                  title="Editar"
                >
                  <MdEdit />
                </Link>
                <Button
                  className="btn btn-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                >
                  <FaTimes />
                </Button>
              </td>
              <td>{item.nome}</td>
              <td>
                <Link href={item.site} target="_blank">
                  <img height={50} src={item.logo} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}
