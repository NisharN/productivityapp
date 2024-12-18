function Header(props){
    return (
        <div>
            <h1 className="text-3xl font-medium">Hey {props.username}</h1>
            <p>I help you manage your activities after you login :)</p>
        </div>
    )
}export default Header