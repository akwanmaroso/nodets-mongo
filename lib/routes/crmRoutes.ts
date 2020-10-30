import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {

    public contactController: ContactController = new ContactController();

    /**
     * routes
     */
    public routes(app): void {
        
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successfulll!!!"
            })
        })

        // Contact
        app.route('/contact')
        // Get all contacts
        .get(this.contactController.getContact)
        // Create Contact
        .post(this.contactController.addNewContact)

        // Contact Detail
        app.route('/contact/:contactId')
        // Get a specific contact
        .get(this.contactController.getContactWithID)
        // Update a contact
        .put(this.contactController.updateContact)
        // Delete a contact
        .delete(this.contactController.deleteContact)
    }
}