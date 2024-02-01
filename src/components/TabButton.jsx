export default function TabButton(props) { //{children, onslect, IsSelected}
    
    return (
        <button className={props.isSelected ? "active": undefined} onClick={props.onSelect}>
            {props.children}
        </button>
    )
}
