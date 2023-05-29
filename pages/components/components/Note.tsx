import React from "react";
import { MdDelete } from "react-icons/md"

function Note(props) {
  function deleteItem() {
    let index = props.index;
    props.deleteItem(index);
  }

  return (
    <div className="note">
      <div className={`flex flex-col m-4 border-[1px] border-slate w-[280px] p-1 rounded-lg`}>
 
        <div className=" font-semibold pl-2 py-4 overflow-auto">
        <h1>{props.title}</h1>
        </div>
 
        <div>
          <p className="w-[240px] overflow-auto pl-2 pb-2">{props.content}</p>
        </div>

        <div className=" flex flex-row justify-end">
          <button onClick={deleteItem} className=" right-0">
            <MdDelete/>
          </button>
         </div>
      </div>
    </div>
  );
}

export default Note;
