import React, { useState } from 'react';

function EventOverview({ onBack, eventData, onRSVPConfirmed }) {
  const [showRSVPConfirmation, setShowRSVPConfirmation] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false); 

  const handleRSVP = () => {
    if (!isConfirmed) {
      setShowRSVPConfirmation(true);
    }
  };
  
  const handleConfirm = () => {
    onRSVPConfirmed(eventData); 
    
    setShowRSVPConfirmation(false); 
    
    setIsConfirmed(true);
  };
  
  const handleCancel = () => {
    setShowRSVPConfirmation(false); 
  };

  const eventTitleDisplay = eventData?.title || '[Language] [Event Title]';
  let dateAndTime = '[Date] at [Time]';
  if (eventData?.date) {
      const parts = eventData.date.split(' - ');
      dateAndTime = parts[0].trim();
  }
  const eventDateTimeDisplay = dateAndTime;
  
  const showModal = showRSVPConfirmation || isConfirmed;

  return (
    <div className="overview-container">
      <div className="phone-frame overview-phone">
        {/* Top Navigation */}
        <div className="top-nav">
          <div onClick={onBack} className="back-arrow">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path 
                d="M25 10L15 20L25 30" 
                stroke="#262659" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="share-icon">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path 
                d="M17.5 25V10M17.5 10L12 15.5M17.5 10L23 15.5" 
                stroke="#262659" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path 
                d="M7 20V28C7 29 8 30 9 30H26C27 30 28 29 28 28V20" 
                stroke="#262659" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div 
          className="overview-event-image"
          style={{
            backgroundImage: `url(${eventData?.image || 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800'})`
          }}
        />

        <h1 className="overview-event-title">{eventData?.title || 'Event Title'}</h1>

        <p className="overview-event-date">{eventData?.date || 'Date - Time - Location'}</p>

        <div className="rsvp-badge">
          <p className="rsvp-badge-text">X people have RSVP'd!</p>
        </div>

        <h2 className="overview-section-title">Overview</h2>

        <div className="overview-text-container">
          <p className="overview-text">
            {eventData?.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          </p>
        </div>

        <div className="rsvp-section">
          <div className="rsvp-by-container">
            <p className="rsvp-by-title">RSVP by</p>
            <p className="rsvp-by-date">MM/DD/YY</p>
          </div>

          <button 
            onClick={handleRSVP} 
            className="rsvp-button"
          >
            {isConfirmed ? 'Attending' : 'RSVP!'}
          </button>
        </div>

        {showModal && (
          <>
            <div className="rsvp-overlay" onClick={handleCancel}></div>
            
            {showRSVPConfirmation && (
              <div className="rsvp-confirmation">
                <div className="rsvp-header">
                  <svg className="rsvp-calendar-icon" viewBox="0 0 24 24">
                    <rect x="3" y="6" width="18" height="15" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2L8 6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="rsvp-confirmation-title">Confirm Attendance</p>
                </div>
                
                <p className="rsvp-confirmation-text">
                  Can you make it to <br/>
                  <strong>{eventTitleDisplay}</strong> <br/>
                  on <strong>{eventDateTimeDisplay}</strong>?
                </p>
                
                <div className="rsvp-buttons-container">
                  <button onClick={handleConfirm} className="confirm-button yes">
                    Yes, I'm going
                  </button>
                  <button onClick={handleCancel} className="confirm-button cancel">
                    Cancel
                  </button>
                </div>
              </div>
            )}
            
            {isConfirmed && (
                <div className="rsvp-success-confirmation">
                    <h2 className="success-title">You're Going!</h2>
                    <p className="success-text">
                        Get excited! You'll receive event reminders and a notice of your Connection!
                    </p>
                    <button 
                        onClick={onBack} 
                        className="return-button"
                    >
                        Return to Events Page
                    </button>
                </div>
            )}
            
          </>
        )}
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&display=swap" rel="stylesheet" />
    </div>
  );
}

export default EventOverview;