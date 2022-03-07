import React, { useState, FC } from 'react'
import Buttons from '../Button';
import TodoForm from '../Form';
import { NameType } from './NameType';



function Todos () {
    const [ nameArr , setNameArr ] = useState<NameType[]>([])
    const [selectedNoteId, setSelectedNoteId] = useState<string>("");
    const [ isEditing ,  setIsEditing ] = useState<boolean>(false);
    const [ getInput , setGetInput ] = useState<string>('');
    // const [ inputSet , setInputSet ] = useState<string>('');
    
    
// for submit data and show in list
    const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()

        const NameObj :NameType ={
            names:getInput,
            id: Math.random() + getInput
        }

        setNameArr([ ...nameArr , NameObj ]);
    console.log(nameArr);

    }

    /// for delete data
    const handleDelete = (id: string) =>{
         const deleteUpdate = nameArr.filter((data)=>data.id !== id);
         setNameArr(deleteUpdate)
         console.log(deleteUpdate)
    }

    // for Update values

    const handleEdite = ( id:string ) =>{
        setIsEditing(true);

        for (let index = 0; index < nameArr.length; index++) {
           
            const note = nameArr[index];

            if (note.id === id) {
                setGetInput(note.names);
              setSelectedNoteId(note.id);
              break;
            }
          }
    }


    // console.log(inputSet)

    const handleReset = () =>{
        setGetInput('');
        setIsEditing(false);
    }

    const handleUpdate = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        const Updatedarr = nameArr.map((data)=>{
            if(data.id === selectedNoteId){
                data.names = getInput;
            }
            return data;
        });
        setNameArr(Updatedarr);
        handleReset();
    } 

    

    return (
        <div>
            <TodoForm isEditings={isEditing} inputValues={getInput} getInputs={setGetInput}  handleResets={handleReset} onSubmitHandler={isEditing ? handleUpdate : handleSubmit }  />
            <h2> Students List </h2>
            {nameArr.map((data)=>{
                return<div key={data.id}>
                    <p>{data.names}</p>
                    <Buttons onClickFun={()=>handleDelete(data.id)} textBtn='Delete' />
                    <Buttons onClickFun={()=>handleEdite(data.id)} textBtn='Update' />
                    </div>
            })}
        </div>
    )
}

export default Todos