import * as contacts from "./contact.js";

export const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.ListContacts();
      return console.table(allContacts);
    case "get":
      const onecontact = await contacts.getContactById(id);
      return console.log(onecontact);
    case "add":
      const newContacts = await contacts.addContact({ name, email, phone });
      return console.log(newContacts);
    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    default:
      return console.log("Action is NotFound");
  }
};
