import { MapPin, Navigation } from "lucide-react";

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56022.53990212553!2d77.06505738430059!3d28.64747756780526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03affaba3255%3A0x378cd9a211faaaf3!2sChartking%20Elliott%20Trading%20Academy!5e0!3m2!1sen!2sin!4v1742904089316!5m2!1sen!2sin";

export default function LocationMap() {
  return (
    <section className="section location-section" id="location">
      <div className="section-heading">
        <p className="eyebrow">Our address</p>
        <h2>Visit Chartking Elliott Trading Academy.</h2>
      </div>

      <div className="location-layout">
        <div className="card location-card">
          <MapPin size={32} />
          <h3>Chartking Elliott Trading Academy</h3>
          <p>
            Open the map to view the original Chartkingz location and get
            directions in Google Maps.
          </p>
          <a
            className="button full-width"
            href="https://www.google.com/maps/search/?api=1&query=Chartking%20Elliott%20Trading%20Academy"
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={18} />
            Get directions
          </a>
        </div>

        <iframe
          className="map-frame"
          title="Chartking Elliott Trading Academy location map"
          src={mapUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
