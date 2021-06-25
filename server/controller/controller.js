var Notedb = require('../model/model');

// create and save new note
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new note
    const user = new Notedb({
        title : req.body.title,
        content : req.body.content
        
    })

    // save note in the database
    user
        .save(user)
        .then(data => {
            
            res.redirect('/add-note');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all notes/ retrive and return a single note
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Notedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found note with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving note with id " + id})
            })
    
    }else{
        Notedb.find().sort({ createdOn: 'desc' })
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}

exports.findtitle = (req, res)=>{
    const title = req.params.title;

    Notedb.find({"title": title})
        .then(data =>{
            if(!data){
                res.status(404).send({ message : "Not found note with title "+ title})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving note with title " + title})
        })
}

// Update a new idetified note by note id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Notedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update note with ${id}. Maybe note not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update note information"})
        })
}

// Delete a note with specified note id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Notedb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "note was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete note with id=" + id
            });
        });
}