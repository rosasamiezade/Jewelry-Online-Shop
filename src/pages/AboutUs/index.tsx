import img from '../../images/How to Tie a Scarf Into a Vest (2013 version).jpg'
interface IAboutUsProps {
    
}
 
const AboutUs:React.FC<IAboutUsProps> = (): JSX.Element => {
    return  ( 
    <div className='min-h-screen flex items-center justify-between relative w-full'>
    <div className='w-2/3 flex items-center justify-between text-white flex-col p-8 rounded-lg max-w-4xl mx-auto'>
    <h1 className="text-5xl font-bold text-gold mb-8 text-center">
    About Us
  </h1>
  <p className="text-xl mb-6 leading-relaxed">
    Welcome to Luna Jewels, where elegance meets excellence. With decades of experience in the industry, we are committed to offering the finest selection of jewelry that not only complements your style but also tells your unique story.
  </p>
  <p className="text-xl mb-6 leading-relaxed">
    Our journey began with a passion for crafting timeless pieces that resonate with beauty and sophistication. Today, we stand as a beacon of quality and trust, dedicated to making your special moments even more memorable.
  </p>
  <p className="text-xl mb-6 leading-relaxed">
    At Luna Jewels, every piece is designed with meticulous attention to detail, ensuring that each jewel reflects the highest standards of craftsmanship. Whether you're looking for an engagement ring, a gift for a loved one, or a treat for yourself, our collection has something for every occasion.
  </p>
  <p className="text-xl mb-6 leading-relaxed">
    We take pride in our commitment to sustainability and ethical sourcing. Each gemstone and metal we use is carefully selected to meet our strict standards, ensuring that you can wear our jewelry with pride and confidence.
  </p>
  <p className="text-xl leading-relaxed">
    Thank you for choosing Luna Jewels as your trusted jeweler. We look forward to helping you celebrate life's precious moments with our exquisite collection.
  </p>
    </div>
    <img src={img} alt="jewelry image" className='object-cover w-1/3' />
    </div>
     );
}
 
export default AboutUs;