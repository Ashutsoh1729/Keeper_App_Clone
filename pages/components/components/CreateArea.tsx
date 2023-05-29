import React, { useState } from "react";
import { GrAdd } from "react-icons/gr"
function CreateArea(prop: { addNote: (arg0: { title: string; content: string; }) => void; }) {
  let [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(e: { target: { name: any; value: any; }; }) {
    let { name, value } = e.target;

    setNote((pre) => {
      return {
        ...pre,
        [name]: value
      };
    });
  }

  function handleTextareaClick() {
    setIsExpanded(true);
  }

  function addNote(event: { preventDefault: () => void; }) {
    prop.addNote(note);

    setNote((pre) => {
      return {
        title: "",
        content: ""
      };
    });
    event.preventDefault();
  }

  return (
    <div className={`flex flex-col items-center mt-12`}>
      <div className={`flex flex-col  border-[2px] rounded-lg shadow-md w-[40vw] my-4`}>
        <form className="flex flex-col m-1">
          {isExpanded && (
            <input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={note.title}
              className="focus:outline-none py-[10px] px-[15px] w-full transition-opacity duration-500"
            />
          )}
          <div className="flex flex-row justify-start items-end">
          <textarea
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            onChange={handleChange}
            value={note.content}
            className={`focus:outline-none py-3 px-4 w-full resize-none`}
            onClick={handleTextareaClick}
            />
            {isExpanded && (
              <button onClick={addNote} className="transition-opacity duration-500">
                <GrAdd size={25} className="m-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateArea;
