import React from 'react'

export function Profile(props) {
    
return (
    <div>
       <h1>{props.name} from {props.city}</h1>
        <img src={props.url} alt="person" />
    </div>
)
}

