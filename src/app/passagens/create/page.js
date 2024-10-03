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

  const voos = JSON.parse(localStorage.getItem('voos')) || []
  const passageiros = JSON.parse(localStorage.getItem('passageiros')) || []

  function salvar(dados) {
    const passagens  = JSON.parse(localStorage.getItem('passagens')) || []
    passagens.push(dados)
    localStorage.setItem('passagens', JSON.stringify(passagens))
    return route.push("/passagens")
  }

  return (
    <Pagina titulo="Criar Empresa">
      <Formik
        initialValues={{ voo_id: '', passageiro_id: '', assento:'', preco: '' }}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
          <Form className="my-3">
            <Form.Select aria-label="Default select example"
              name="voo_id"
              value={values.voo_id}
              onChange={handleChange('voo_id')}
              className="mb-3"
            >
              {voos.map(item => (
                <>
                  <option>Selecionar Voo</option>
                  <option>{item.identificador}</option>
                </>
              ))}
            </Form.Select>

            <Form.Select aria-label="Default select example"
              name="passageiro_id"
              value={values.passageiro_id}
              onChange={handleChange('passageiro_id')}
              className="mb-3"
            >
              {passageiros.map(item => (
                <>
                  <option>Selecionar Passageiro</option>
                  <option>{item.nome}</option>
                </>
              ))}
            </Form.Select>

            <Form.Group className="mb-3" controlId="assento">
              <Form.Label>Assento</Form.Label>
              <Form.Control type="text"
                name="assento"
                value={values.assento}
                onChange={handleChange('assento')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="preco">
              <Form.Label>Preço</Form.Label>
              <Form.Control type="text"
                name="preco"
                value={values.preco}
                onChange={handleChange('preco')} />
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
