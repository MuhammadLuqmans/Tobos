import React, { useState, FC } from 'react'
import Buttons from '../Button';
import { NameType } from './NameType';



function Todos () {
    const [ nameArr , setNameArr ] = useState<NameType[]>([])
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedNoteId, setSelectedNoteId] = useState<string>("");
    const [ isEditing ,  setIsEditing ] = useState<boolean>(false);
    
// for submit data and show in list
    const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()

        const NameObj :NameType ={
            names:inputValue,
            id: Math.random() + inputValue
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
              setInputValue(note.names);
              setSelectedNoteId(note.id);
              break;
            }
          }
    }

    const handleReset = () =>{
        setInputValue('');
        setIsEditing(false);
    }

    const handleUpdate = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        const Updatedarr = nameArr.map((data)=>{
            if(data.id === selectedNoteId){
                data.names = inputValue;
            }
            return data;
        });
        setNameArr(Updatedarr);
        handleReset();
    } 

    return (
        <div>
            <form onSubmit={isEditing ? handleUpdate : handleSubmit}>
                <input placeholder='Enter your name' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Buttons types='submit' textBtn={isEditing ? "Update Name" : 'Add Name'} />
                {isEditing && <Buttons onClickFun={()=>handleReset()} textBtn='Reset' />}

            </form>

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