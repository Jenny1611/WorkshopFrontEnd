import GroupCard from "../components/groupCard";
import Navbar from "../components/navbar";
import sampleImage from "../assets/sample-image.jpg";
import Group1 from "../components/Group1/Group1";
import Group2 from "../components/Group2/Group2";
import Group3 from "../components/Group3/Group3";
import Description from "../components/Description/Description";

const Home = () => {
  return (
    <>
      <Navbar />

      <Description />

      <div className="row mt-4 mx-4">
        <div className="col-4 mb-4">
          <GroupCard difficulty="easy" imageSrc={sampleImage} title="Easy" text={"Descrizione progetto"} />
        </div>
        <div className="col-4 mb-4">
          <GroupCard difficulty="medium" imageSrc={sampleImage} title="Medium" text={"Descrizione progetto"} />
        </div>
        <div className="col-4 mb-4">
          <GroupCard difficulty="hard" imageSrc={sampleImage} title="Hard" text={"Descrizione progetto"} />
        </div>
      </div>

      <Group1 />
      <Group2 />
      <Group3 />
    </>
  );
};

export default Home;
