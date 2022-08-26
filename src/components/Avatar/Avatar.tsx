import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

type Props = {
  src: string;
  hasBorder: boolean;
  alt?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function Avatar({ hasBorder, ...props }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
