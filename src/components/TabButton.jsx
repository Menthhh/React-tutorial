export default function TabButton(props) {
    
    return (
        <button onClick={props.onSelect}>
            {props.children}
        </button>
    )
}
