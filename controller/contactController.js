Contact = require('../model/contactModel');

//view all contact
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

//create contact
exports.new = function (req, res) {
    const contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function (err) {
        /*if (err)
            res.json(err);*/
        res.json({
            message: 'New Contact created!',
            data: contact
        });
    });
};

//view specific contact
exports.view = function (req, res) {

    Contact.findById(req.params.contact_id, function (err, contact)  {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });

};

//update contact
exports.update = function (req, res) {

    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);

        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

        contact.save(function (err) {
            if (err)
                res.json(err);

            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

//delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};