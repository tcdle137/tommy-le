import headshot from '../public/headshot.jpg';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="page-heading">Welcome!</h2>
          <div className="text-section">
            <p>My name is Tommy Le, and I am a Senior Computer Science Undergraduate at Lawrence Technological University with a concentration in Software Engineering. I am expected to graduate in May 2026. I love programming, creating software, and seeing projects come to life from start to finish. You can find more about me under the About page in the top right!</p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={headshot.src} alt="headshot" className="profile-image" />
        </div>
      </div>
    </div>
  );
}
