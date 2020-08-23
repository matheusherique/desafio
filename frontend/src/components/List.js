import React from 'react';
const List = (props) => {
  const { rockets } = props;
  if (!rockets || rockets.length === 0) return <p>No flights, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>All flights</h2>
      {rockets.map((rocket) => {
        return (
          <li key={rocket.id} className='list'>
            <span className='repo-text'>{rocket.flight_number} </span>
            <span className='repo-description'>{rocket.rocket_name}</span>
            <span className='repo-text'>{rocket.launch_year} </span>
            <span className='repo-description'>{rocket.launch_date_utc}</span>
            <span className='repo-text'>{rocket.launch_date_local} </span>
            <span className='repo-description'>{rocket.rocket_id}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;