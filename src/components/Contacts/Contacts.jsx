import css from './Contacts.module.css'

export default function Contacts({ contacts, hendleDelete }) {

  return (
    <>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return <li className={css.list_line} key={contact.id}>
                    {contact.name}: {contact.number}
                    <button className={css.list_button}  type="button" onClick={() => hendleDelete(contact.id)}>delete</button>
                  </li>
        })}       
      </ul>
    </>
        

  )
};