import photo from '../assets/img/photo.jpg'
const Header = () => {
   return (
      <>
         <header >
            <img src={photo} className="bg-cover w-full rounded-t-xl" alt="profile"/>
         </header>
      </>
   )
}

export default Header;
