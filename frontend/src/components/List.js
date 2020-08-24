import React from 'react';
const List = (props) => {
  console.log(props.data)
  return (
    <ul>
      <h2 className='list-head'>All flights</h2>
          <li key={props.data.id} className='list'>
            <span className='repo-text'>{props.data.flight_number} </span>
            <span className='repo-description'>{props.data.rocket_name}</span>
            <span className='repo-text'>{props.data.launch_year} </span>
            <span className='repo-description'>{props.data.launch_date_utc}</span>
            <span className='repo-text'>{props.data.launch_date_local} </span>
            <span className='repo-description'>{props.data.rocket_id}</span>
          </li>
    </ul>
  );
};
export default List;