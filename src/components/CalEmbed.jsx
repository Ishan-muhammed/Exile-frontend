import React from "react";
import "./CalEmbed.css";

function CalEmbed() {
  return (
    <div id ="calEmbed" className="cal-container">
      {/* Top Header with two "boxes": Left (title) & Right (subtitle) */}
      <div className="cal-header">
        <div className="cal-header-left">
          <h2 className="cal-header-left-heading">
            Let's <span className="highlight">Connect</span>
          </h2>
        </div>
        <div className="cal-header-right">
          <p className="cal-header-right-para">
            If you're ready to explore an AI Voice solution for your business,
            feel free to schedule a discovery call.
          </p>
        </div>
      </div>

      {/* Main White Card for Cal.com Embed */}
      <div className="cal-box">
        <iframe
          title="AI Voice Agent Discovery Call"
          src="https://cal.com/exile-automate-vvgfkw/ai-voice-agent-discovery-call"
          className="cal-iframe"
        />
      </div>
    </div>
  );
}

export default CalEmbed;