// create a reference to the model
let BusinessModel = require('../models/business');

module.exports.businessList = function(req, res, next) {  
    BusinessModel.find((err, businessList) => {
        //console.log(businessList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business/list', {
                title: 'Business List', 
                BusinessList: businessList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    BusinessModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedItem = BusinessModel({
        name: req.body.id,
        number: req.body.item,
        email: req.body.qty        
    });

    BusinessModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/business/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    BusinessModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/business/list');
        }
    });

}


module.exports.displayAddPage = (req, res, next) => {

    let newItem = BusinessModel();

    res.render('business/add_edit', {
        title: 'Add a new Item',
        item: newItem,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newItem = BusinessModel({
        name: req.body.id,
        number: req.body.item,
        email: req.body.qty        
    });

    BusinessModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/business/list');
        }
    });    
}