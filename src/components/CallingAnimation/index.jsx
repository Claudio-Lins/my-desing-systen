import { Phone } from "phosphor-react";
import styles from "./animation.module.css";

export function CallingAnimation() {
  return (
    <div className={`flex h-screen items-center justify-center bg-slate-600`}>
      <div className={`
        bg-green-700 w-32 h-32 rounded-full flex justify-center items-center relative
        ${styles.antes}
        ${styles.depois}
      `}>
        <Phone size={60} color="#fff" weight="light" />
      </div>
    </div>
  );
}
