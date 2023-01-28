import style from './Corpo.module.scss';
import '../../assets/fonts/DharmaPunk2.ttf';
import img1 from '../../assets/imgs/banda.png';
import img2 from '../../assets/imgs/banda5.png';

export default function Corpo(){
    return (
        <main className={style.principal}>
            <div className={style.textosLaterais}>
                <h1>Lorem ipsum</h1>
                <img src={img1} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime officia commodi 
                    totam impedit sapiente suscipit mollitia, excepturi dignissimos quasi expedita fugiat quis
                    quam voluptas tempora, natus nulla tenetur! Soluta, libero.
                </p> 
            </div>
            <div className={style.textosLaterais}>
                <h1>Lorem dolor</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio maxime officia commodi 
                    totam impedit sapiente suscipit mollitia, excepturi dignissimos quasi expedita fugiat quis
                    quam voluptas tempora, natus nulla tenetur! Soluta, libero.
                </p>
                <img src={img2} alt="" />
            </div>
        </main>
    )
}
