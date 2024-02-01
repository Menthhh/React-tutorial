export default function TabButton({children, isSelected, ...props}) { //{children, onslect, IsSelected}
    
    return (
        <button className={isSelected ? "active": undefined} {...props}>
            {children}
        </button>
    )
}
