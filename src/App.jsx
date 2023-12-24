import { useState } from "react";
import CratePoster from "./Components/formToCreate";


function App(){
  const[createPoster, setCreatePoster] = useState(false);
const[posters, setPosters] = useState([]);

const deleteNote = (index) => {
  const updatedPosters = [...posters];
  updatedPosters.splice(index, 1);
  setPosters(updatedPosters);
};

  return(
    <>
      <h1>Notes</h1>
        <button className="create" onClick={() => setCreatePoster(true)}>
          Create note</button>

       <main className="posters">

         {posters.map((n, index) => (
          <div className="poster" key={index}>

            {n.text}
            <button className="delete" onClick={() => deleteNote(index)}>
              Delete </button>
              
          </div>
        ))}

       </main>

      {
        createPoster && (
             <div className="modal">
                <div className="body-modal">
                
          <CratePoster posters={setPosters} show={setCreatePoster} />
                   
              </div>
           </div>
        )
      }

     </>
  )
}

export default App;