import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/demo/HelloWord'

ReactDOM.render(
    <Hello name='Typescript!' />,
    document.querySelectorAll('.app')[0]
)
