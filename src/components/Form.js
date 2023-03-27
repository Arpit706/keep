import React from 'react'

function Form({ title, setTitle, desc, setDesc, notes, setNotes,tagline,setTagline }) {
    const inputHandler = (e) => {
        if (e.target.id == "title") {
            setTitle(e.target.value)
            
        }
        else if(e.target.id == "tagline"){
            setTagline(e.target.value)
        }
        else {
            setDesc(e.target.value)
        }
    }
    const addNotesHandler = (e) => {
        e.preventDefault()
        if (title !== "" && desc !== "" && tagline !=="") {
            setNotes(note => {
                return (
                    [...note, {
                        title: title,
                        desc: desc,
                        tagline:tagline,
                        id: new Date().getTime()
                    }
                    ]
                )
            })
        }
        setTitle("");
        setDesc("");
        setTagline("");
    }

    return (
        <>
            <div className="container my-3">
                <div className='row justify-content:center'></div>
                <div className='col-md-10'>

                    <form style={{ border: "2px solid #ced4da ", borderRadius: "10px", padding: "30px" }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" >Title</label>
                            <input type="text" className="form-control" id="title" placeholder='Enter your Title' value={title} onChange={inputHandler} />
                        </div>



                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" >Tagline</label>
                            <input type="line" className="form-control" id="tagline" placeholder='Enter your Tagline' value={tagline} onChange={inputHandler} />
                        </div>






                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                            <textarea name="desc" id="desc" cols="30" rows="3" className='form-control' placeholder='Enter your Description' value={desc} onChange={inputHandler}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>Add Notes</button>
                    </form>



                </div>
            </div>

        </>
    )
}

export default Form
