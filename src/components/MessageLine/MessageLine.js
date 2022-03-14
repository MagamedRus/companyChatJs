import React from "react";
import styles from "./MessageLine.module.scss";
import { useSelector } from "react-redux";
import { getDateType } from "../../contants/types/timeUtil";
import { getFormatedTime } from "../../common/time";

const MessageLine = ({ message }) => {
  const userData = useSelector((state) => state.auth);
  const isSelf = userData.id === message.id;
  const messageTime = getFormatedTime(getDateType.HM, Number(message.date));
  return (
    <div className={isSelf ? styles.selfMsg : styles.container}>
      <div className={styles.msgText}>
        <p>{message.txt}</p>
        <p className={styles.date}>&nbsp;&nbsp;{messageTime}</p>
      </div>
      <div className={styles.ico}>
        <p>{message.user.charAt(0)}</p>
      </div>
    </div>
  );
};

export default MessageLine;