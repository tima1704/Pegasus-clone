import React from 'react';
import cls from './NewProduct.module.scss';
const NewProduct = () => {
     const NewProduct = [
          {
               id: 1,
               img: 'https://www.pegasus-bikes.nl/media/resized/1/c72e62c4-68b7-4d1e-b98a-94934276fb82/960xauto_pegasus-siena-e7f-plus-dark-blue-grey-matt-black-matt-elektrische-fietsen-herenfiets-50-cm.png',
               name: "Siena E7 Plus",
               text: "Méér fiets voor ieder type fietser.",
          }
     ]
     return (
          <div className={cls.NewProduct}>
               {NewProduct.map(item => {
                    return(
                         <div className={cls.NewProduct__content}>
                              <div className={cls.left__content}>
                                   <img data-aos-duration="2000"  data-aos="fade-right" src={item.img} alt={`img:${item.name}id: ${item.id}`} />
                              </div>
                              <div className={cls.right__content}>
                                   <h1>{item.name}</h1>
                                   <p>{item.text}</p>
                                   <button>Learn More</button>
                              </div>
                         </div>
                    )
               })}
          </div>
     )
};
export default NewProduct;