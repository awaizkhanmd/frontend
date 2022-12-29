
import noteContext from "../context/noteContext"
import { useState } from "react"
const NoteState = (props) => {

    const noteInitial =
        [
            {
                "_id": "63a9f28735bf25714fbb6f7a",
                "title": "Mytitle",
                "description": "my notes my wish",
                "tag": "attitude",
                "date": "2022-12-26T19:14:15.947Z",
                "__v": 0
            },
            {
                "_id": "63a9f48a4f0ec757ec6cc330",
                "title": "Mytitle",
                "description": "my notes my wish",
                "tag": "attitude",
                "date": "2022-12-26T19:22:50.491Z",
                "__v": 0
            }
        ]
    const [notes, setNotes] = useState(noteInitial)

    return (

        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>



    )
}

export default NoteState


