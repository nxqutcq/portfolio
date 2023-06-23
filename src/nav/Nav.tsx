import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Contacts</a>
        </div>
    )
}
