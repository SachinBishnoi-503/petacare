import dogBanner from '../assets/images/webp/dog-banner.png';

const DogBanner = () => {
    return (
        <div className="min-h-[440px] bg-cover bg-repeat w-full" style={{ backgroundImage: `url(${dogBanner})` }}
        ></div>
    );
};

export default DogBanner;
