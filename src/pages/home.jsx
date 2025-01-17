import Group1_1 from '../components/Group1/Group1-1';
import GroupCard from '../components/groupCard';
import Navbar from '../components/navbar';

import sampleImage from '../assets/sample-image.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row mt-4 mx-4">
        <div className="col-4 mb-4">
          <GroupCard
            difficulty="easy"
            imageSrc={sampleImage}
            title="Easy"
            text={'Descrizione progetto'}
          />
        </div>
        <div className="col-4 mb-4">
          <GroupCard
            difficulty="medium"
            imageSrc={sampleImage}
            title="Medium"
            text={'Descrizione progetto'}
          />
        </div>
        <div className="col-4 mb-4">
          <GroupCard
            difficulty="hard"
            imageSrc={sampleImage}
            title="Hard"
            text={'Descrizione progetto'}
          />
        </div>
      </div>

      <Group1_1></Group1_1>
    </>
  );
};

export default Home;
