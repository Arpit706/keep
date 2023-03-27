import React from 'react'

function Note({element,title,desc,notes,setNotes,setEditid,tagline,isPinned,setIsPinned}) {
    
    
    const removeHandler=(id)=>{
        // console.log(notes)
  const newNotes = notes.filter((element)=>{
    if(element.id!==id){         
       return element
     } 
  })
  setNotes(newNotes);
  
    }
    const editHandler=(id)=>{
        setEditid(id);
notes.filter((elem)=>{
    if(elem.id===id){
        const titleInput = document.getElementById("edittitle");
        if (titleInput) {
          titleInput.value = elem.title;
        }
        const taglineInput = document.getElementById("edittagline");
        if (taglineInput) {
          taglineInput.value = elem.tagline;
        }
        const descInput = document.getElementById("editdesc");
        if (descInput) {
          descInput.value = elem.desc;
        
    } 
}
})
    }
    const pinned = (id) =>{
        if(element.id==id){
        setIsPinned(prevState => !prevState);
        }
    }


    return (
        <>

            <div className="card mb-3">
                <div className="card-body"style={{textTransform:"capitalize"}}>
                    <h5 className="card-title">{element.title}</h5>
                    <h5 className="card-tagline">{element.tagline}</h5>
                    <p className="card-text">{element.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                     onClick={()=> {editHandler(element.id)}}
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2" onClick={()=> {removeHandler(element.id)}}>Remove</button>
                    <button className="btn btn-danger mx-2" onClick={()=>pinned(element.id)}>
                    {isPinned ? 'Unpin' : 'Pin'}
                    </button>
                </div>
            </div>


        </>
    )
}

export default Note
