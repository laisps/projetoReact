import React, {useState, useEffect} from 'react'

const Segundo = () => {
    const [repositorios, setRepositorios] = useState([])

    useEffect(()=>{
        const pegaDados = async () => {
            const resposta = await fetch('https://api.github.com/users/simaraconceicao/repos')
            const dados = await resposta.json()
            setRepositorios(dados)
        }
        pegaDados()
    },[])

    return(
        <ul>
            {repositorios.map(repo => (
                <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
    )
}

export default Segundo