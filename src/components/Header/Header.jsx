import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center pt-4 mx-2 border-b-2 mb-16'>
             <h1 className="text-4xl text-center pt-5">Knowlege Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;