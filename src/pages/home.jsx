import GroupCard from "../components/groupCard";
import Navbar from "../components/navbar";
import sampleImage from "../assets/sample-image.jpg";
import Group1_1 from "../components/Group1/Group1-1/Group1-1";
import Group1_2 from "../components/Group1/Group1-2/Group1-2";
import Group1_3 from "../components/Group1/Group1-3/Group1-3";
import Group2 from "../components/Group2/Group2";
import Group3 from "../components/Group3/Group3";

const Home = () => {
  return (
    <>
      <Navbar />
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

      <Group1_1></Group1_1>
      <Group1_2></Group1_2>
      <Group1_3></Group1_3>
      <Group2></Group2>
      <Group3></Group3>
    </>
  );
};

export default Home;
