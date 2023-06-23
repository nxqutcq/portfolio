import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Vladislav Nelipovich</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photoContainer}>
                    <img className={style.photo}
                        src="https://sun9-64.userapi.com/impf/c844617/v844617904/200033/oAT8xJ6LLDQ.jpg?size=1600x1600&quality=96&sign=4dd0eb4d7aa64ae246dddc15eb060c65&type=album"
                        alt="my-photo"/>
                </div>
            </div>
        </div>
    )
}