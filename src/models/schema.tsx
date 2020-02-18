
export const CONTACTS_SCHEMA = 'contact';

export const ContactsSchema = {
  name: CONTACTS_SCHEMA,
  properties: {
    id: 'string',
    name: 'string',
    profile_photo: 'string',
    mobile: 'string',
    dob: 'string',
    email: 'string',
    created_at: 'date',
    updated_at: 'date',
  }
};

export const databaseOptions = {
  schema: [ContactsSchema],
  schemaVersion: 0
};

