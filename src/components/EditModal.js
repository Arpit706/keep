import React from 'react'

export default function EditModal({ editid, notes, setNotes }) {

    const updateHandler = () => {
         const updateNotes=notes.map((elm) => {
            if (editid == elm.id) {
             return(
                {
                    ...elm,title: document.getElementById("edittitle")?.value,
                    tagline:document.getElementById("edittagline")?.value,
                    desc:document.getElementById("editdesc")?.value
                 }) 
                }else{
                return elm
            }
        })
  console.log(updateNotes);
  setNotes(updateNotes);
    }


    return (
        <>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form >
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label" >Title</label>
                                    <input type="text" className="form-control" id="edittitle" placeholder='Enter your Title' />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label" >Tagline</label>
                                    <input type="text" className="form-control" id="edittagline" placeholder='Enter your Tagline' />
                                </div>




                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Description</label>
                                    <textarea name="desc" id="editdesc" cols="30" rows="3" className='form-control' placeholder='Enter your Description'></textarea>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Note</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
