interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  tags?: string[]; // e.g. ['family','work']
}

let contacts: Contact[] = [];

function addContact(contact: Contact): void {
  contacts.push(contact);
}
function listContacts(): void {
  contacts.forEach(contact => {
    console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email || 'N/A'}, Phone: ${contact.phone || 'N/A'}, Tags: ${contact.tags?.join(', ') || 'N/A'}`);
  });
}

addContact({ id: 1, name: 'Alina', email: 'alina@gmail.com', phone:'023444124', tags: ['family'] });
addContact({ id: 2, name: 'Evan', email: 'evan@gmail.com', phone:'023424124', tags: ['work'] });
addContact({ id: 3, name: 'Mahedi', email: 'mahedi@gmail.com', phone:'024644124', tags: ['family'] });
addContact({ id: 4, name: 'Israt', email: 'israt@gmail.com', phone:'023498124', tags: ['work'] });

console.log('List of Contacts:');
listContacts();

function findByName(name: string): Contact[] {
  return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
}

console.log('Search Results for Specified Contact:');
console.log(findByName('Isrt')); 

function removeContact(id: number): boolean {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    return true;
  }
  return false;
}
removeContact(3); 
console.log('List of Contacts After Removal by Specified ID:');
listContacts(); 