import { JSX } from "preact/jsx-runtime";
import style from "./Figure.module.sass";

interface FigureProps {
  caption?: string;
  children?: JSX.Element;
}

export default function Figure(props: FigureProps) {
  return (
    <div className="wrapper-l">
      <figure className={style.figure}>
        {props.children}
        {props.caption && <figcaption>{props.caption}</figcaption>}
      </figure>
    </div>
  );
}