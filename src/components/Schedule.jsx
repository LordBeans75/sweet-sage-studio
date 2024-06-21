import React from 'react';
import './Schedule.css';
import backgroundImage from '../assets/background.jpg';

const Schedule = () => {
  const calendarUrl = 'https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Timezone';

  return (
    <main className="schedule">
      <div className="schedule-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Class Schedule</h1>
      </div>
      <div className="calendar-container">
        <iframe
          src={calendarUrl}
          title="Sweet Sage Studio Calendar"
          className="calendar-iframe"
        ></iframe>
      </div>
    </main>
  );
};

export default Schedule;
