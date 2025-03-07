import React from "react"
import { FaPlug } from "react-icons/fa"

const AddItem = () => {
  return (
    <form className="addForm">
        <label htmlFor="addItem">Add Item</label>
        <input
        autoFocus
         type="text"
            id="addItem"
            placeholder="Add Item"
            required
             />
             <button 
                type="submit"
                aria-label="Add Item">
                    <FaPlug/>
             </button>
    </form>
    
  )
}

export default AddItem