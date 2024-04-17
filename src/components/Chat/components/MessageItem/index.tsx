import "./styles.css";

interface IProps {
  text: string;
  avatar: string;
  uid: string;
  currentUid?: string;
}

export const MessageItem = ({ text, avatar, uid, currentUid }: IProps) => {
  return (
    <div
      className="messageItemWrapper"
      style={{ marginLeft: uid === currentUid ? "none" : "auto" }}
    >
      <div>
        <img className="logo" src={avatar} alt="" />
      </div>
      <div>{text}</div>
    </div>
  );
};
