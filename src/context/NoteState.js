
import noteContext from "../context/noteContext"
const NoteState =(props)=>{



    return(

<noteContext.Provider  value= {{ }}>
    {props.children}
</noteContext.Provider>



    )
}

    export default  NoteState
    

    