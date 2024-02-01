export default function Tabs({children, buttons, ButtonContainer="menu"}){
    // ButtonContainer = buttonContatiner
    return(
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        { children }
        </>
    )
}