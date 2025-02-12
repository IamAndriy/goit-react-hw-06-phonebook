import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import {Filter} from "../Filter/Filter";
import {ContactList} from "../ContactList/ContactList";
import css from "./SectionContacts.module.css";

export const SectionContacts = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    return <section className={css.section}>

                <h2 className={css.title}>Contacts</h2>
                
                <Filter/>
                <ContactList/>
{/*                 
                {   (contacts.length > 0) 
                        ? <ContactList/>
                        : (filter.trim())
                            ? <p className={css.massage}>There are no contacts you are looking for</p>
                            : <p className={css.massage}>There are no contacts in the phone book yet</p>
                } */}
            </section>
}