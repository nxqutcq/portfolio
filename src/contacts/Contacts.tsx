import styleContainer from '../common/styles/Container.module.css'
import style from '../contacts/Contacts.module.css'
export const Contacts = () => {
    return (
        <div className={styleContainer.container}>
            <div className={style.containerContacts}>
                <h2>Contacts</h2>
            </div>
        </div>
    )
}