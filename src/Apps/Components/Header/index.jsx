import cls from './Header.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
const Header = ({}) => {
     const types_of_bicycles = [
          {
               id: 1,
               name: "Elektriche bikes",
               href: "/elektrische-bikes"
          },
          {
               id: 2,
               name: "Stand bikes",
               href:"/stadsbikes"
          },
          {
               id: 3,
               name: "Hybride bikes",
               href:"/hybride-bikes"
          },
          {
               id: 4,
               name: 'Kinderbikes',
               href: "/kinderbikes"
          }
     ]
     return (
          <div className={cls.header}>
               <div className={cls.logo_header}>
                    <img src="https://www.pegasus-bikes.nl/dist/images/logos/pegasus-logo-white.svg?id=1c4cb5740df74e73f078" alt="pegasus-logo"/>
               </div>
               <div className={cls.types_of_bicycles}>
                    <ul>
                         {
                              types_of_bicycles.map(item => {
                                   return(
                                        <li key={item.id}><a href={item.href}>{item.name}</a></li>
                                   )
                              })
                         }
                    </ul>
               </div>
               <div className={cls.site_header__menu}>
                    <div className={cls.change__lang}>
                         <span>
                              <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Russia_%281991%E2%80%931993%29.svg/2560px-Flag_of_Russia_%281991%E2%80%931993%29.svg.png`} alt="flag"/>
                         </span>
                         <span><h3>RU</h3></span>
                         <span><MdKeyboardArrowDown className={cls.arrowIcon}/></span>
                    </div>
                    <div className={cls.header__search}>
                         <BsSearch className={cls.searchIcon}/>
                         <p>Find what you need</p>
                    </div>
                    <div className={cls.header__compare}>
                         <AiOutlineHeart className={cls.heartIcon}/>
                    </div>
               </div>
          </div>
     );
};

export default Header;