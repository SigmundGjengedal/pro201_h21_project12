import "./AboutUs.css";
import { useState } from "react";
export default function AboutUs() {
  const [moreEnabled, setMoreEnabled] = useState(false);
  const aboutText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque eaque illum minus non possimus quia recusandae repellat unde voluptates. Exercitationem, perspiciatis, repudiandae? Architecto culpa, cupiditate, dignissimos enim explicabo facilis illum inventore iure laboriosam molestias nam nemo nostrum optio soluta tempora ullam veritatis voluptates. Ad fugit ipsum libero nisi obcaecati officiis praesentium soluta? Adipisci animi asperiores beatae consequatur doloremque eius est et id, incidunt ipsam iure nisi odio officiis, placeat praesentium quasi qui quis quos suscipit temporibus ullam unde voluptates. Architecto at atque blanditiis consequatur deleniti dolores eaque eos ex expedita explicabo fugit, laudantium maiores molestiae, nemo nesciunt nostrum pariatur quo recusandae reiciendis rem reprehenderit saepe sunt tempora totam vel veritatis voluptas. Debitis ducimus illum ipsum itaque molestias non perspiciatis quibusdam quo voluptate, voluptatibus. ";

  const handleMore = () => {
    setMoreEnabled(!moreEnabled);
  };
  return (
    <>
      <div className="grey-line" />
      <div className="about-wrapper">
        <div className="about-text-wrapper">
          <div className="about-text-left">
            <h2>About Redd Barna</h2>
            <article className={"about-text"}>
              {moreEnabled ? aboutText : aboutText.substring(0, 350)}
            </article>
            <p className="about-header show-more " onClick={handleMore}>
              {moreEnabled ? "Show less" : "Show more"}
            </p>
          </div>
          <div className="about-text-image">
            <div className={"about-text-image-wrapper"}>
              <img
                src="https://images.unsplash.com/photo-1593347535897-06149dba667c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                alt="something image"
              />
            </div>
          </div>
        </div>
        <div className="about-values-wrapper">
          <div className="about-values-image">
            <div className="about-values-image-container">
              <img
                src="https://media.istockphoto.com/photos/integrity-concept-picture-id1308296736?k=20&m=1308296736&s=612x612&w=0&h=YGSpxKf23f1vl_hR81mbUznt8_mHOlYJy7IEOW-cqhk="
                alt="honesty"
              />
            </div>
          </div>
          <div className="about-values-list">
            <div className={"about-header our-values"}>Our Values</div>
            <div className="about-values-items-wrapper">
              <div className={"values-list-item"}>
                <div className="values-list-item-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/img/handhearticon.jpeg"}
                    alt="some icon"
                  />
                </div>
                <div className="values-list-item-text">
                  <div>Transparency</div>
                  <div>
                    Redd Barna will always be open and transparent about what we
                    do
                  </div>
                </div>
              </div>
              <div className={"values-list-item"}>
                <div className="values-list-item-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/img/handhearticon.jpeg"}
                  />
                </div>
                <div className="values-list-item-text">
                  <div>Honesty</div>
                  <div>
                    Redd Barna will always be open and transparent about what we
                    do
                  </div>
                </div>
              </div>
              <div className={"values-list-item"}>
                <div className="values-list-item-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/img/handhearticon.jpeg"}
                  />
                </div>
                <div className="values-list-item-text">
                  <div>Open-hearted</div>
                  <div>
                    Redd Barna will always be open and transparent about what we
                    do
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-people-wrapper">
          <h2>The people behind</h2>
          <div className="people-cards-wrapper">
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person1.jpg"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person2.jpg"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person3.jpg"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person4.jpg"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person5.jpg"}
            />
          </div>
        </div>
        <div className="about-contact-wrapper">
          <h2>Get in touch with us</h2>
          <div className="contact-footer">
            <div className="about-location-wrapper">
              <div className={"about-header"}>Location</div>
              <div>Storgata 38, 0182 Oslo</div>
            </div>
            <div className="about-contactinfo-wrapper">
              <div className={"about-header"}>Contact Info</div>
              <div>Redd Barna</div>
              <div>Postboks 0492 St. Olavs Plass</div>
              <div>0130 Oslo</div>
              <div></div>
              <div>(+47) 22 99 09 00</div>
              <div></div>
              <div>giverservice@reddbarna.no</div>
              <div>post@reddbarna.no</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function PeopleCard({ img }) {
    return (
      <>
        <div className="people-card-wrapper">
          <div className="people-card-image">
            <img src={img} alt="profile-pic" />
          </div>
          <div className="people-card-name">Max Power</div>
          <div className="people-card-title">Founder</div>
        </div>
      </>
    );
  }
}
