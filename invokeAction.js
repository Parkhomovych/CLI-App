import * as contacts from "./contacts/index.js";

export const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAll();
      return console.table(allContacts);
    case "get":
      const onecontact = await contacts.getById(id);
      return console.log(onecontact);
    case "add":
      const newContacts = await contacts.add({ name, email, phone });
      return console.log(newContacts);
    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "remove":
      const deleteContact = await contacts.deleteById(id);
      return console.log(deleteContact);
    default:
      return console.log("Action is NotFound");
  }
};
