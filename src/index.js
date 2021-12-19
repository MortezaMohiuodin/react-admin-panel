import React from 'react'
import ReactDom from 'react-dom'

import Button from './components/Button/Index'
import image from '@/public/img/image.png'

const App = () => (
    <div>
        <img src={image} alt='some image...' />
        <Button/>
    </div>
)

ReactDom.render(<App/>,document.getElementById('app'))



