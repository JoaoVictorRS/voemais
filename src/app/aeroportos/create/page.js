'use client'

import Pagina from "@/app/components/Pagina"
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap"
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


export default function Page() {

  const route = useRouter()

  function salvar(dados) {
    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || []
    aeroportos.push(dados)
    localStorage.setItem('aeroportos', JSON.stringify(aeroportos))
    return route.push("/aeroportos")
  }

  return (
    <Pagina titulo="Criar Aeroporto">
      <Formik
        initialValues={{ nome: '', sigla: '', uf:'', cidade: '', pais: '' }}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
          <Form className="my-3">
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange('nome')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="sigla">
              <Form.Label>Sigla</Form.Label>
              <Form.Control type="text"
                name="sigla"
                value={values.sigla}
                onChange={handleChange('sigla')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="uf">
              <Form.Label>UF</Form.Label>
              <Form.Control type="text"
                name="uf"
                value={values.uf}
                onChange={handleChange('uf')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text"
                name="cidade"
                value={values.cidade}
                onChange={handleChange('cidade')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pais">
              <Form.Label>Pais</Form.Label>
              <Form.Control type="text"
                name="pais"
                value={values.pais}
                onChange={handleChange('pais')} />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" onClick={handleSubmit}><FaCheck /> Salvar</Button>
              <Link href="/empresas" className="btn btn-danger mx-3"><FaTimes /> Cancelar</Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  )
}
