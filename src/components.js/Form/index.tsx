import React, { FC, useState, SetStateAction, useEffect } from 'react';
import Buttons from '../Button';

interface FormTodoInterf {
    isEditings: boolean,
    handleResets: React.MouseEventHandler<HTMLButtonElement>,
    onSubmitHandler: React.FormEventHandler<HTMLFormElement>,
    getInputs: React.Dispatch<SetStateAction<string>>,
    // setInputs: string | number | readonly string[] | undefined,
    inputValues:string,
}

const TodoForm: FC<FormTodoInterf> = ({ isEditings, getInputs, handleResets, onSubmitHandler, inputValues  }) => {

    const [inputValue, setInputValue] = useState<string>('');

        getInputs(inputValue);

        

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input placeholder='Enter your name' type='text' value={inputValues}  onChange={(e)=> setInputValue(e.target.value)} />
                <Buttons types='submit' textBtn={isEditings ? "Update Name" : 'Add Name'} />
                {isEditings && <Buttons onClickFun={handleResets} textBtn='Reset' />}
            </form>
        </div>
    )
}

export default TodoForm