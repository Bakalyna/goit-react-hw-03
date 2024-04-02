import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contactsList, onDelete }) => {
  return (
    <div>
      <ul className={css['users-list']}>
        {contactsList.length !== 0 ? (
          contactsList.map(contact => {
            return (
              <Contact
                userContact={contact}
                key={contact.id}
                onDelete={onDelete}
              />
            );
          })
        ) : (
          <p>Nothing to show...</p>
        )}
      </ul>
    </div>
  );
};
export default ContactList;
