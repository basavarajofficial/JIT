import React from 'react'

function Lists() {

    // Internal Css by creating object
    let myStyle = {
        container : {
            border : "1px solid white",
            width : "50vw",
            margin : "auto auto",
            display : "flex",
            flexDirection : "column",
            gap : "10px"
        }
    }

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        url : 'https://i.imgur.com/yXOvdOSs.jpg" alt="imgg" '
        }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        url : 'https://i.imgur.com/yXOvdOSs.jpg" alt="imgg" '
        }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        url : 'https://i.imgur.com/yXOvdOSs.jpg" alt="imgg" '
        }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
        url : 'https://i.imgur.com/yXOvdOSs.jpg" alt="imgg" '
        }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        url : 'https://i.imgur.com/yXOvdOSs.jpg" alt="imgg" '
    }];

    let printData = people.map((e) => (
        <div key={e.id} style={{backgroundColor : "navy",
        color : "white", borderRadius : "5px"}}  >
            <img style={{borderRadius : "50%"}} src={e.url} alt="" />
            <h3 >{e.name}</h3>
            <p>{e.profession}</p>
        </div>
    ))


  return (
    // style Adding by the object which above defined
    <div style={myStyle.container} >
        {printData}
    </div>
  )
}

export default Lists