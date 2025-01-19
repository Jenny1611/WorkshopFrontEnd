/* eslint-disable react/prop-types */

import GroupBeginner1 from "./GroupBeginner1.jsx";
import GroupBeginner2 from "./GroupBeginner2.jsx";
import GroupBeginner3 from "./GroupBeginner3.jsx";
import GroupIntermediate from "./GroupIntermediate.jsx";
import GroupAdvanced from "./GroupAdvanced.jsx";
import ResultItem from "./ResultItem.jsx";

const ResultsList = ({groups}) => {
  return (
    <section className="py-2 bg-light">
      <div className="my-5 w-75 mx-auto d-flex flex-column justify-content-center">
        <h2 className="">Risultati</h2>
        <p>Risultati concreti: i progetti realizzati dai nostri gruppi.</p>
        <div className="list-group">
          <ResultItem group={groups[0]}>
            {[<GroupBeginner1 key={0} />, <GroupBeginner2 key={1} />, <GroupBeginner3 key={2} />]}
          </ResultItem>
          <ResultItem group={groups[1]}>
            <GroupIntermediate />
          </ResultItem>
          <ResultItem group={groups[2]}>
            <GroupAdvanced />
          </ResultItem>
        </div>
      </div>
    </section>
  );
};

export default ResultsList;
