import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../../Components/Header';
import cls from './Main.module.scss';
import NewProduct from "../../Components/NewProduct";
import Footer from "../../Components/Footer";
// background video
import BgVideo from '../../../gallery/video/background_img.mp4';
const Main = () => {

     // AOS effects
     useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);
     const kindsBikes = [
          {
               id: 0,
               name: 'E-bikes',
               text: 'Innovatie door de hele fiets',
               img: 'https://www.pegasus-bikes.nl/uploads/media/file/8f9fdee1-4005-4801-ba85-465f6cf23428/1920xauto-pegasus-ravenna-evo-5-belt-metallic-black-all-matt-elektrische-fietsen-unisexfiets-45-cm.png',
               href: "/elektrische-bikes"
          },
          {
               id: 2,
               name: 'Stadsfietsen',
               text: 'De wendbare allrounder',
               img: 'https://www.pegasus-bikes.nl/uploads/media/file/d66add14-fbbb-484f-82f5-ab4a22d42612/pegasus-stadsfiets.png',
               href:"/stadsbikes"
          },
          {
               id: 3,
               name: 'Hybride fietsen',
               text: 'Om grenzen te verleggen',
               img: 'https://www.pegasus-bikes.nl/uploads/media/file/c4ed5345-21ad-4502-9948-e0da52d51245/hybride-fiets.png',
               href:"/hybride-bikes"
          },
          {
               id: 4,
               name: 'Kinderfietsen',
               text: 'Velig, betrouwbaar en stoer',
               img: 'https://www.pegasus-bikes.nl/uploads/media/file/1709e561-a621-42f4-9091-90cd60e1c01a/pegasus-kinderfiets.png',
               href: "/kinderbikes"
          },
     ]
     return (
          <section className={cls.main}>
               <nav>
                    <Header/>
               </nav>
               <main>
                    <section>
                         <div className={cls.block__main}>
                              <video autoPlay muted loop>
                                   <source src={BgVideo} type="video/mp4"/>
                              </video>
                              <span className={cls.shadowVideo}/>
                              <div  className={cls.content_videoImgMain}>
                                   <div/>
                                   <div className={cls.PegasusBlockMain}>
                                        <div data-aos="zoom-in" data-aos-duration="1000">
                                             <h1>Pegasus</h1>
                                             <p>Approved quality</p>
                                             <button>Show all bikes</button>
                                        </div>
                                        
                                   </div>
                              </div>
                         </div>
                    </section>
                         <NewProduct/>
                    <section>
                         <div className={cls.KindsBikes__Block}>
                              {
                                   kindsBikes.map(item => {
                                        return(
                                             <div data-aos="fade-up" data-aos-duration="1500" className={cls.KindBike__box} key={item.id}>
                                                  <div className={cls.KindBikebody_box}>
                                                       <h1>{item.name}</h1>
                                                       <p>{item.text}</p>  
                                                       <button>Look more</button>
                                                  </div>
                                                  <div className={cls.KindBikefooter_box}>
                                                       <img src={item.img} alt={`img:${item.id}`}/>
                                                  </div>
                                             </div>
                                        )
                                   })
                              }
                         </div>
                    </section>
                    <section>
                         <div className={cls.Best__ElectroBikes}>
                              <div className={cls.left__contentBestBox}>
                                   <div data-aos-duration="1000" data-aos="fade-up" className={cls.photoleft__content}>

                                   </div>
                              </div>
                              <div className={cls.right__contentBestBox}>
                                   <div data-aos-duration="2000" data-aos="fade-left" className={cls.photoright__content}>
                                   </div>
                                   <div className={cls.content__bottomBestBox}>
                                        <h1>De best geteste elektrische fietsen van Pegasus!</h1>
                                        <p>De elektrische fietsen van Pegasus worden elk jaar door verschillende onafhankelijke organisaties streng gekeurd en beoordeeld. Zo werd de e-bike Siena E7 Plus in 2021 het best getest in Nederland en ontving een 8,1 als eindcijfer van de ANWB.</p>
                                        <button>Bekijk alle resultaten</button>
                                   </div>
                              </div>
                         </div>
                    </section>
               </main>
               <header>
                    <Footer/>
               </header>
          </section>
     );
};

export default Main;