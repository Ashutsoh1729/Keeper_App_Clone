import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { json } from "stream/consumers";


export interface Note{
  title: string,
  content: string
}

function App() {
  const [notes, setNotes] = useState([]);

  // I have to create a localStorage place of array where it will store the array
  useEffect(()=> {
    // localStorage.setItem("notes", JSON.stringify(notes));
    // const localNotes = localStorage.getItem("notes");
    // let existingNotes: Note[];
    // if (localNotes !== null) {
    //   existingNotes = JSON.parse(localNotes)
    // }
    // setNotes([...existingNotes])


    const localNotes = localStorage.getItem("notes");
    let existingNotes: Note[] = [];

    if (localNotes) {
      existingNotes = JSON.parse(localNotes);
    } else {
      
      let existingNotes: any = JSON.stringify([]);
      localStorage.setItem("notes",existingNotes)
    }

    setNotes(existingNotes);
  },[])
  
  function addtoNote(note: Note) {
    
    //   localStorage.setItem("notes", JSON.stringify(notes));
    //   const localNotes = localStorage.getItem("notes");
    //   let existingNotes: Note[];
    //   if (localNotes !== null) {
    //     existingNotes = JSON.parse(localNotes)
    //   }
    // setNotes([...existingNotes, note])
    
    // // To sotre the modified new notes array inside the localSotrage
    // let storedNotes = JSON.stringify(notes)
    // localStorage.setItem("notes", storedNotes)


    // Code by ChatGPT
    const updatedNotes: any = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    
    
    // setNotes((pre) => {
    //   return [...pre, note];
    // });
  }

  function onDeleteItem(itemIndex: number) {
    // setNotes(() => {
    //   return notes.filter((element, index) => {
    //     return itemIndex !== index;
    //   });
    // });
    // let localNotes:any;
    // localNotes = notes;
    // let storedNotes = JSON.stringify(localNotes)
    // localStorage.setItem("notes", storedNotes)


    // Code by ChatGPT
    const updatedNotes = notes.filter((_, index) => itemIndex !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addtoNote} />

      {notes.map((element, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={element.title}
            content={element.content}
            deleteItem={onDeleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
