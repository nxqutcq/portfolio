import style from "../footer/Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {SocialNetwork} from "./socialNetwork/SocialNetwork";

export const Footer = () => {

    const socialNetworks = [
        {
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
        },
        {
            img: "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png"
        }]

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <div>Vladislav Nelipovich</div>
                <div className={style.socialNetwork}>
                    {
                        socialNetworks.map((socialNetwork) => (
                            <SocialNetwork img={socialNetwork.img}/>
                        ))
                    }
                </div>
                <div>© 2023 All Rights Reserved.</div>
            </div>
        </div>
    )
}