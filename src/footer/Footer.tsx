import style from "../footer/Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {SocialNetwork} from "./socialNetwork/SocialNetwork";
import {v1} from "uuid";
export const Footer = () => {

    const socialNetworks = [
        {
            id: v1(),
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
        },
        {
            id: v1(),
            img: "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
        },
        {
            id: v1(),
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png"
        }]

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.name}>Vladislav Nelipovich</div>
                <div className={style.socialNetwork}>
                    {
                        socialNetworks.map((socialNetwork) => (
                            <SocialNetwork key={socialNetwork.id} img={socialNetwork.img}/>
                        ))
                    }
                </div>
                <div className={style.rights}>© 2023 All Rights Reserved.</div>
            </div>
        </div>
    )
}