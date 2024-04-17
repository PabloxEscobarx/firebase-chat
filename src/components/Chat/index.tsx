import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "../..";
import { messageCollection } from "../../constants";
import {
  addDoc,
  collection,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { MessageItem } from "./components";
import "./styles.css";

export const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages] = useCollectionData(
    query(collection(firestore, messageCollection), orderBy("time"))
  );
  const [text, setText] = useState<string>("");

  const sendMessage = async () => {
    await addDoc(collection(firestore, messageCollection), {
      uid: user?.uid,
      name: user?.displayName,
      avatar: user?.photoURL,
      text: text,
      time: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div className="chatPage">
      <h2>Chat</h2>
      <div className="messagesWrapper">
        <div className="messagesList">
          {messages?.map(({ text, avatar, uid }, i) => (
            <MessageItem
              text={text}
              avatar={avatar}
              uid={uid}
              currentUid={user?.uid}
              key={i}
            />
          ))}
        </div>
        <div className="inputs">
          <input
            type="text"
            value={text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setText(event.target.value)
            }
            className="inputChat"
          />
          <button className="btnSend" disabled={!text} onClick={sendMessage}>
            click msg
          </button>
        </div>
      </div>
    </div>
  );
};
