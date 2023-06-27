import style from "../footer/Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
export const Footer = () => {
    return (
        <div className={`${styleContainer.container} ${style.footerBlock}`}>
            <div>Vladislav Nelipovich</div>
            <div></div>
            <div>© 2023 All Rights Reserved.</div>
        </div>
    )
}