import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("contacts", "contacts.json");

export const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};
export const getById = async (id) => {
  const allContacts = await getAll();
  const contact = allContacts.filter((item) => item.id === id);
  return contact || null; 
};
export const add = async (data) => {
  const contacts = await getAll();
  const newContacts = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContacts
};
export const updateById = async (id, data) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) return null;
  contacts[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

export const deleteById = async (id) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};
