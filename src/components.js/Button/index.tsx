import React, { FC } from 'react'

interface ButtonsFaces {
    // isEditing : boolean,
    onClickFun ?: React.MouseEventHandler<HTMLButtonElement>,
    types?: "button" | "submit" | "reset" | undefined,
    textBtn:string,
}

const Buttons: FC<ButtonsFaces> = ({ textBtn, onClickFun , types }) =>{
    return(
        <div>
        <button type={types} onClick={onClickFun} >{textBtn}</button>
        </div>
    )
}
export default Buttons;