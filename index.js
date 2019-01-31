console.log('Address Book Contacts')

let nextId = 0
let contacts = []

const addressBook = {
  displayContacts: () => {
    contacts.forEach(contact => {
      console.log(
        `${contact.id}: ${contact.name} (${contact.phone}) <${contact.email}>`
      )
    })
  },

  addContact: (name, phone, email) => {
    const newContact = {
      name,
      phone,
      email,
      id: nextId
    }
    contacts.push(newContact)
    nextId += 1
    console.log('New contact added!')
  },

  deleteContact: contactId => {
    const newContacts = contacts.filter(contact => {
      return contact.id !== contactId
    })
    contacts = newContacts
  }
}

addressBook.addContact('Tony Stark', '+1-01-1010101', 'tony@stark.com')
addressBook.addContact('Steve Rogers', '+1-08-080808', 'steve@america.com')

addressBook.displayContacts()
