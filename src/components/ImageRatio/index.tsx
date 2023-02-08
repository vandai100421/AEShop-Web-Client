import React, { FC } from "react";
import cx from "classnames";
import styles from "components/ImageRatio/ImageRatio.module.css";

type Props = {
  ratio?: number;
  src?: string;
  alt?: string;
  className?: string;
};

const ImageRatio: FC<Props> = ({ src, alt, ratio = 1, className }) => {
  const paddingBottom = 100 / ratio;
  return (
    <div
      className={cx(styles.wrapper, className)}
      style={{ paddingBottom: `${paddingBottom}%` }}
    >
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ImageRatio;
