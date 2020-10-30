import * as mongooes from "mongoose";
import { ContactSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Contact = mongooes.model('Contact', ContactSchema)
export class ContactController {

    /**
     * addNewContact
     */
    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if (err) {
                res.send(err)
            }
            res.json(contact);
        })
    }

    /**
     * getContact
     */
    public getContact(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact)
        });
    }

    /**
     * getContactWithID
     */
    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        })
    }

    /**
     * updateContact
     */
    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    /**
     * deleteContact
     */
    public deleteContact(req: Request, res: Response) {
        Contact.remove({_id: req.params.contactId}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}