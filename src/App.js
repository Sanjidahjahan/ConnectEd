import React, { useState } from 'react';
import './App.css';
import EventsScreen from './EventsScreen';
import EventOverview from './EventOverview';

function App() {
  const [currentScreen, setCurrentScreen] = useState('events');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleEventClick = (eventData) => {
    setSelectedEvent(eventData);
    setCurrentScreen('overview');
  };

  const handleRSVPConfirmed = (eventData) => {
    if (eventData && !registeredEvents.includes(eventData.id)) {
      setRegisteredEvents((prev) => [...prev, eventData.id]);
    }
  };

  const handleBackToEvents = () => {
    setCurrentScreen('events');
    setSelectedEvent(null);
  };

  return (
    <div className="App">
      {currentScreen === 'events' && (
        <EventsScreen 
          onEventClick={handleEventClick} 
          registeredEventIds={registeredEvents} 
        />
      )}
      
      {currentScreen === 'overview' && (
        <EventOverview 
          onBack={handleBackToEvents} 
          eventData={selectedEvent}
          onRSVPConfirmed={handleRSVPConfirmed}
        />
      )}
    </div>
  );
}

export default App;