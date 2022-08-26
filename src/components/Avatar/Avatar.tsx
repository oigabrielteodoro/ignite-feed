import styles from "./Avatar.module.css";

type Props = {
  src: string;
  hasBorder: boolean;
};

export default function Avatar({ src, hasBorder }: Props) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
