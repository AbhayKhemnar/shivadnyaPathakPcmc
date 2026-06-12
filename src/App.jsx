import logo from '../Photos/logo.jpg'
import photo1 from '../Photos/photo1.png'
import photo2 from '../Photos/photo2.png'
import photo3 from '../Photos/photo3.png'
import photo4 from '../Photos/photo4.png'
import photo5 from '../Photos/photo5.png'
import './App.css'

const gallery = [
  { src: photo2, alt: 'Dhol player performing in red uniform' },
  { src: photo3, alt: 'Pathak member playing taal during a performance' },
  { src: photo4, alt: 'Dhol player leading a street procession' },
  { src: photo1, alt: 'Shivadnya team felicitation on stage' },
]

const whatsappNumber = '910000000000'
const bookingMessage = encodeURIComponent(
  'Hi there, I want to book Shivadnya Dhol Tasha Pathak for an event.',
)
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${bookingMessage}`
const instagramLink = 'https://www.instagram.com/shivadnyapathakpcmc/'

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Shivadnya home">
          <img src={logo} alt="Shivadnya logo" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <img className="hero-bg" src={photo5} alt="" aria-hidden="true" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img className="hero-logo" src={logo} alt="Shivadnya Dhol Tasha Pathak" />
          <p className="eyebrow">Shivadnya Dhol Tasha Pathak, PCMC</p>
          <h1>Rhythm, discipline, and Marathi tradition in full force.</h1>
          <p className="hero-copy">
            A passionate dhol tasha pathak bringing festival energy, processions,
            and stage performances to life with a powerful traditional sound.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Book on WhatsApp
            </a>
            <a className="button secondary" href="#gallery">View Photos</a>
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <div>
          <p className="section-kicker">About the pathak</p>
          <h2>Built around devotion, teamwork, and live street energy.</h2>
        </div>
        <p>
          Shivadnya represents the sound and spirit of celebration across PCMC.
          The group performs with coordinated dhol, tasha, and lezim formations
          for Ganeshotsav, Shivjayanti, cultural events, and public ceremonies.
        </p>
      </section>

      <section className="feature-band">
        <img src={photo2} alt="Dhol player focused during a live performance" />
        <div>
          <p className="section-kicker">Performance</p>
          <h2>Every beat carries presence.</h2>
          <p>
            From close indoor ceremonies to large open-road processions, the
            pathak creates a disciplined, high-impact sound shaped by practice,
            timing, and collective pride.
          </p>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-heading">
          <p className="section-kicker">Photos</p>
          <h2>Moments from recent performances</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Bring Shivadnya to your next event.</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp Booking
          </a>
          <a className="button instagram" href={instagramLink} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
