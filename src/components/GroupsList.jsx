/* eslint-disable react/prop-types */

import GroupCard from './GroupCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const GroupsList = ({ groups }) => {
  return (
    <section className='py-2'>
      <div className='my-5 w-75 mx-auto d-flex flex-column justify-content-center'>
        <h2>Gruppi</h2>
        <p>Collaborazione e crescita: gruppi organizzati per livello di difficoltà e interesse, per approfondire ciò che ci appassiona.</p>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <GroupCard
                id={groups[0].id}
                groupName={groups[0].card.title}
                description={groups[0].card.description}
              >
                <FontAwesomeIcon icon={faHtml5} color="#E4542F" size="4x"/>
                <FontAwesomeIcon icon={faCss} color='#663399' size="4x"/>
              </GroupCard>
            </div>
            <div className='col-md-4 col-sm-12'>
              <GroupCard
                id={groups[1].id}
                groupName={groups[1].card.title}
                description={groups[1].card.description}
              >
                <FontAwesomeIcon icon={faHtml5} color="#E4542F" size="4x"/>
                <FontAwesomeIcon icon={faCss} color='#663399' size="4x"/>
                <FontAwesomeIcon icon={faJs} color='#F1DC55' size="4x"/>
              </GroupCard>
            </div>
            <div className='col-md-4 col-sm-12'>
              <GroupCard
                id={groups[2].id}
                groupName={groups[2].card.title}
                description={groups[2].card.description}
              >
                <FontAwesomeIcon icon={faReact} color='#58C4DC' size="4x"/>
                <FontAwesomeIcon icon={faServer} color='#848484' size="4x"/>
              </GroupCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupsList;
