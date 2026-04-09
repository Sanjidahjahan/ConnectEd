import React, { useState } from 'react';

function EventsScreen({ onEventClick, registeredEventIds }) {
  const [showFilter, setShowFilter] = useState(false);
  const [showConnectionPopup, setShowConnectionPopup] = useState(false); 
  const [showMatchProfile, setShowMatchProfile] = useState(false); 
  
  const handleEventClick = (eventData) => {
    onEventClick(eventData);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  const connectionData = {
      name: "Benito Martinez",
      matchPercent: "87%",
      image: 'https://touchdownactu.com/wp-content/uploads/2025/09/Sans-titre-12.jpeg', 
      profileDetails: {
          year: "Junior",
          school: "Columbia College",
          language: "Spanish",
          level: "Intermediate II",
      },
      popupTags: ["Spanish", "Chatty Studier", "Foodie", "And more..."],
      profileTags: ["Early Bird", "Traveler", "Animal Lover", "Music Lover", "Sports Fan", "Foodie"]
  };
  
  const allEvents = [
    {
      id: 'event1',
      title: 'Event Title', 
      date: 'Date - Time - Location', 
      category: 'Upcoming Events',
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: placeholderDescription
    },
    {
      id: 'event2',
      title: 'Event Title', 
      date: 'Date - Time - Location', 
      category: 'Upcoming Events',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: placeholderDescription
    },
    {
      id: 'event3',
      title: 'Event Title', 
      date: 'Date - Time - Location', 
      category: 'Community & Culture',
      image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: placeholderDescription
    },
    {
      id: 'event4',
      title: 'Event Title', 
      date: 'Date - Time - Location', 
      category: 'Community & Culture',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: placeholderDescription
    }
  ];

  const registeredEvents = allEvents.filter(event => registeredEventIds.includes(event.id));
  const upcomingEvents = allEvents.filter(event => 
    !registeredEventIds.includes(event.id) && event.category === 'Upcoming Events'
  );
  const communityEvents = allEvents.filter(event => 
    !registeredEventIds.includes(event.id) && event.category === 'Community & Culture'
  );

  const renderConnectionPopup = () => {
    if (!showConnectionPopup) return null;

    return (
        <div className="rsvp-overlay">
            <div className="connection-popup">
                <h3 className="connection-title">You've been ConnectEd!</h3>
                
                <div 
                    className="connection-image"
                    style={{ backgroundImage: `url(${connectionData.image})` }}
                />

                <h2 className="connection-name">{connectionData.name}</h2>
                <p className="connection-match">{connectionData.matchPercent} Match! Based on:</p>

                <div className="connection-tags">
                    {connectionData.popupTags.map((tag, index) => (
                        <span key={index} className="connection-tag">{tag}</span>
                    ))}
                </div>

                <button 
                    className="open-profile-button"
                    onClick={() => {
                        setShowConnectionPopup(false);
                        setShowMatchProfile(true);
                    }}
                >
                    Open Benito's Profile
                </button>
            </div>
        </div>
    );
  };
  
  const renderMatchProfile = () => {
      if (!showMatchProfile) return null;

      const { name, image, matchPercent, profileDetails, profileTags } = connectionData;

      return (
          <div className="phone-frame events-phone match-profile-screen">
            
              <div className="match-profile-scroll-container">
                  <div className="profile-close-icon" onClick={() => setShowMatchProfile(false)}>
                      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#262659" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                  </div>

                  <p className="profile-match-header">You are a {matchPercent} match with...</p>
                  
                  <div className="star-deco-container">
                      
                      <div 
                          className="profile-image-large"
                          style={{ backgroundImage: `url(${image})` }}
                      />
                  </div>

                  <h1 className="profile-name">{name}</h1>

                  <div className="profile-details">
                      <p><strong>Year:</strong> {profileDetails.year}</p>
                      <p><strong>School:</strong> {profileDetails.school}</p>
                      <p><strong>Language:</strong> {profileDetails.language}</p>
                      <p><strong>Level:</strong> {profileDetails.level}</p>
                  </div>
                  
                  <div className="profile-tags-container">
                      {profileTags.map((tag, index) => (
                          <span key={index} className="profile-tag">{tag}</span>
                      ))}
                  </div>
              </div>
              
              <div className="profile-button-sticky">
                  <button className="chat-button" onClick={() => console.log(`Starting chat with ${name}`)}>
                      Chat with {name.split(' ')[0]}!
                  </button>
              </div>
          </div>
      );
  };

  const renderEventCard = (event, isRegistered = false) => {
    
    const fullDateLocation = event.date; 
    
    const titleText = (isRegistered && event.id === 'event1') ? 'Event Title' : event.title; 

    let pairingPercent = 68; 
    let isConnectReady = false;
    
    if (isRegistered && event.id === 'event1') {
        pairingPercent = 100; 
        isConnectReady = true; 
    }

    const handleConnectClick = () => {
        if (isConnectReady) {
            setShowConnectionPopup(true);
        }
    };


    return (
      <div key={event.id} className="event-card">
        
        <div 
          className="event-image"
          style={{
            backgroundImage: `url(${event.image})`
          }}
          id={isRegistered ? 'registered-card-image' : null}
        />
        
        <div className={isRegistered ? 'event-info-registered' : 'event-info'}>
          
          <div className="event-details-registered">
            
            <div className="event-title-badge-container">
              <h3 
                onClick={() => handleEventClick(event)} 
                className="event-title"
              >
                {titleText}
              </h3>
              
              {isRegistered && (
                  <div className="registered-badge-stacked">Registered</div>
              )}
            </div>

            <p className="event-date">
                {isRegistered ? fullDateLocation : event.date}
            </p>

            {isRegistered && (
              <>
                <p className="registered-pairing">Pairing Process - {pairingPercent}% matched</p>
                
                <div 
                  className={`registered-progress-bar-shell ${isConnectReady ? 'clickable-connect' : ''}`}
                  onClick={handleConnectClick} 
                >
                    <div className="registered-progress" style={{ width: `${pairingPercent}%` }}></div>
                </div>
                
                {pairingPercent < 100 ? (
                    <p className="registered-check-back">Check back to see your connection!</p>
                ) : (
                    
                    <p 
                        className={`registered-check-back connect-ready ${isConnectReady ? 'clickable-text' : ''}`}
                        onClick={handleConnectClick} 
                    >
                        You've been ConnectEd!
                    </p>
                )}
              </>
            )}
          </div>
          
          {!isRegistered && (
            <div className="arrow-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path 
                    d="M12.5 19.5V5M12.5 5L8.5 9M12.5 5L16.5 9" 
                    stroke="#262659" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M5 14V19C5 20 6 21 7 21H18C19 21 20 20 20 19V14" 
                    stroke="#262659" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
          )}
        </div>
      </div>
    );
  };


  return (
    <div className="events-container">
      

      {showMatchProfile ? (
          renderMatchProfile()
      ) : (
          <div className="phone-frame events-phone">
            
            {renderConnectionPopup()}

            <div className="search-container">
              <input
                type="text"
                placeholder="Search Events"
                className="search-input"
                onClick={toggleFilter}
              />
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#262659"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>

            {showFilter && (
              <div className="filter-dropdown">
                <label className="filter-option">
                  <input type="checkbox" className="filter-checkbox" />
                  <span className="filter-label">My Events</span>
                </label>
                
                <label className="filter-option">
                  <input type="checkbox" className="filter-checkbox" />
                  <span className="filter-label">Upcoming Events</span>
                </label>
                
                <label className="filter-option">
                  <input type="checkbox" className="filter-checkbox" />
                  <span className="filter-label">Community & Culture</span>
                </label>
                
                <label className="filter-option">
                  <input type="checkbox" className="filter-checkbox" />
                  <span className="filter-label">Business & Professional</span>
                </label>
                
                <label className="filter-option">
                  <input type="checkbox" className="filter-checkbox" />
                  <span className="filter-label">Performing & Visual Arts</span>
                </label>
                
                <label className="filter-option">
                  <input type="checkbox" className="filter-checkbox" />
                  <span className="filter-label">Educational</span>
                </label>
              </div>
            )}

            <div className="events-scroll-container">
              {registeredEvents.length > 0 && (
                <div className="event-section">
                  <h2 className="section-title">My Events</h2>
                  {registeredEvents.map(event => renderEventCard(event, true))}
                  <div className="section-divider"></div>
                </div>
              )}
              

              <div className="event-section">
                <h2 className="section-title">Upcoming Events</h2>
                {upcomingEvents.map(event => renderEventCard(event))}
              </div>

              <div className="section-divider"></div>

              <div className="event-section">
                <h2 className="section-title">Community & Culture</h2>
                {communityEvents.map(event => renderEventCard(event))}
              </div>
            </div>

            <div className="bottom-nav">
              <div className="nav-icon">
                <svg width="45" height="45" viewBox="0 0 50 50" fill="none">
                  <path 
                    d="M25 8C15 8 8 14 8 22C8 26 10 29.5 13.5 32L12 40L20 36C21.5 36.5 23 37 25 37C35 37 42 31 42 22C42 14 35 8 25 8Z" 
                    stroke="#262659" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinejoin="round"
                  />
                  <circle cx="18" cy="22" r="2" fill="#262659"/>
                  <circle cx="25" cy="22" r="2" fill="#262659"/>
                  <circle cx="32" cy="22" r="2" fill="#262659"/>
                </svg>
              </div>

              <div className="nav-icon">
                <svg width="45" height="45" viewBox="0 0 50 50" fill="none">
                  <path 
                    d="M10 25L25 10L40 25V42C40 43 39 44 38 44H12C11 44 10 43 10 42V25Z" 
                    fill="#262659"
                  />
                  <rect x="20" y="30" width="10" height="14" fill="#F5ECE6"/>
                </svg>
              </div>

              <div className="nav-icon">
                <svg width="45" height="45" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="20" stroke="#262659" strokeWidth="3" fill="none"/>
                  <circle cx="25" cy="20" r="6" fill="#262659"/>
                  <path 
                    d="M13 38C13 32 18 27 25 27C32 27 37 32 37 38" 
                    stroke="#262659" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
      )}

      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Pangolin&display=swap" rel="stylesheet" />    
    </div>
  );
}

export default EventsScreen;