import './Member.scss';

type memberProps = {
  fullName: string;
  imgSrc: string;
  position: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
};

const Member = ({
  fullName,
  imgSrc,
  position,
  facebook,
  twitter,
  instagram,
  linkedin,
}: memberProps) => {
  return (
    <div className="member__container">
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
        className="member__image"
      ></div>
      <h3 className="member__name">{fullName}</h3>
      <p className="member__description">{position}</p>
      <div className="member__icons">
        <a href={facebook} target="_blank" rel="noreferrer">
          <div className="member__icon member__icon--facebook" />
        </a>

        <a href={twitter} target="_blank" rel="noreferrer">
          <div className="member__icon member__icon--twitter" />
        </a>

        <a href={instagram} target="_blank" rel="noreferrer">
          <div className="member__icon member__icon--instagram" />
        </a>

        <a href={linkedin} target="_blank" rel="noreferrer">
          <div className="member__icon member__icon--linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Member;
