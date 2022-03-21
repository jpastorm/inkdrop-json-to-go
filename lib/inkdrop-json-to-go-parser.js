'use babel';

import React, {useEffect, useState} from 'react'
import { jsonToGo } from './parserHelper';

const InkdropJsonToGo = (props) => {
  const [state, setState] = useState({})
  
  useEffect(()=>{
    setState(jsonToGo(props.children[0], null, null, false))
  },[props.children[0]])

  return (
    <div>
    {
    state.error ? 
      <div className="ui error message">
        <div className="header">Failed to render goStruct</div>
        <div>
          <pre>{state.error}</pre>
        </div>
      </div>

      :
      <pre>{state.go}</pre>
    }
    </div>
  )
}

export default InkdropJsonToGo
