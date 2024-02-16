import { membersData } from '../../membersData';
import Member from '../Member/Member';
import './Members.scss';

const Members = () => {
  return (
    <section className="section container">
      <h2 className="section__title">Our Team Members</h2>
      <p className="section__description">
        Our team member is committed to providing the highest level of service
        and support to our clients. With a passion for customer satisfaction and
        a deep understanding of the crypto markets, they are an invaluable asset
        to our team.
      </p>
      <div className="members">
        {membersData.map((member) => (
          <Member
            key={member.id}
            fullName={member.fullName}
            imgSrc={member.imgSrc}
            position={member.position}
            facebook={member.facebook}
            twitter={member.twitter}
            instagram={member.instagram}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  );
};

export default Members;
