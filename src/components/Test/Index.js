import styled from "styled-components"
import { useState, useMemo } from "react"

import Button from "@/src/components/Button/Index"

const Form = styled.form`
  max-width: 400px;
  min-width: 350px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  background-color: lightblue;
`
const Input = styled.input`
  border: 0;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 0.4rem;
  width: 100%;
  box-sizing: border-box;
`

export default function Test() {
  const [name, setName] = useState("morteza")

  const handleChange = (e) => {
    setName(() => e.target.value)
  }

  const BlackButton = styled(Button)`
    background: black;
  `

  return (
    <>
      <BlackButton />
      <Form>
        {name}
        <Input onChange={handleChange} value={name} />
      </Form>
    </>
  )
}
