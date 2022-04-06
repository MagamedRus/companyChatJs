import React from "react";
import styles from "./Frame.module.scss";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import { isEmptyString } from "../../common/validations/stringValidations";

const Frame = ({ children, style, headerText }) => {
  const additionalStyle = style || "";
  return (
    <div className={`${styles.container} ${additionalStyle}`}>
      {!isEmptyString(headerText) && <ComponentHeader header={headerText} />}
      {children}
    </div>
  );
};
export default Frame;
