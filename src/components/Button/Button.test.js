import React from 'react'
import ReactDom from 'react-dom'
import { act } from'react-dom/test-utils'

import Button from './Index'

let container

beforeEach(()=>{
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  

it('<Button/>',()=>{
    act(()=>{
        ReactDom.render(<Button/> , container)
    })
    const button = document.querySelector('button')
    const span = document.querySelector('span')
    expect(span.innerHTML).toEqual("0")
    act(()=>{
        button.dispatchEvent(new MouseEvent('click',{bubbles:true}))
    })
    expect(span.innerHTML).toEqual("1")
})