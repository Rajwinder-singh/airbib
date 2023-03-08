import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import smallCard from '../smallcard.json';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import mediumCard from '../mediumCard.json';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ location, img, distance }) => (
              <SmallCard key={location} img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ title, img }) => (
              <MediumCard key={title} title={title} img={img} />
            ))}
          </div>
        </section>

        <section>
              <LargeCard 
                img='https://drive.google.com/uc?export=view&id=1Xd1gfRaVdGm97JU46d-fWiLRTEEkBX0a'
                title='The Greatest Outdoors'
                description='Wishlists curated by Airbnb.'
                buttonText='Get Inspired'
              />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const exploreData = smallCard;
  const cardsData = mediumCard;
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}