const Note = require('../models/note.model.js');
const Number = require('../models/number.model.js');

exports.create = (req, res) => {
    if(!req.body.Title) {
        return res.status(400).send({
            message: "Cannot create a position without a title"
        });
    }

    const note = new Note({
        OrdinalNumber: req.body.OrdinalNumber,
        Title: req.body.Title,
        Author: req.body.Author,
        Publisher: req.body.Publisher,
        Date: req.body.Date,
        Availibility: req.body.Availibility
    });

    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


exports.findAll = (req, res) => {
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving number of notes."
        });
    });
};

exports.countDocuments = (req, res) => {
    


    Note.countDocuments()
    .then(number =>{
        OrdinalNumber = new Number({
            OrdinalNumber: number
        })
        res.send(OrdinalNumber)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving number of positions."
        });
    });
};