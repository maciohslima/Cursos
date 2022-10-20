export function Post(props) {
    return (
        <div>
            <h2>{props.author}</h2>
            <p>{props.content}</p>
            <img src="https://avatars.githubusercontent.com/u/71100863?v=4" alt="Perfil" />
        </div>
    )
}