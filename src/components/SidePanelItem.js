export default function SidePanelItem({ member }) {
  return (
    <div className="side-item">
      <div className="avatar">{member.name[0]}</div>
      <div className="side-item-text">
        {member.role === "owner" && <span className="owner">Owner</span>}
        <div className="name">{member.name}</div>
      </div>
    </div>
  );
}