import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path
        d="M22.7 25.1s-4.2-2.6-9.6 2.7c-5.4 5.4-9.7 17.9-9.7 17.9s13.6-7.2 17.4-11c2.4-2.4 3.6-4.5 3.5-6.4-.1-1.1-.6-2.2-1.6-3.2z"
        fill="#FFBC45"
      ></path>
      <path
        d="M23.1 25.3s-2.4-1.5-5.4 1.5c-3 3-5.4 10-5.4 10s7.6-4 9.7-6.2c1.3-1.3 2-2.5 2-3.6 0-.5-.3-1.1-.9-1.7z"
        fill="#FF6D24"
      ></path>
      <path
        d="M28.5 16.4L21.9 16.4 17.8 20.9 25.5 20.7z"
        fill="#CADFE0"
      ></path>
      <path
        d="M32.1 19.2L32.8 25.8 28.9 29.9 28.7 22.5z"
        fill="#CADFE0"
      ></path>
      <path
        d="M22.6 23.3H23.900000000000002V28.1H22.6z"
        fill="#1A315B"
        transform="rotate(-47.78 23.264 25.66)"
      ></path>
      <path
        d="M43.2 3.5L23.5 25.2l-2.3-2.1s1.4-1.8 2.1-2.3 3.9-5 7.2-9.1c1.8-2.3 3.6-4 5.9-5.4 1.8-1.1 4-2 6.8-2.8z"
        fill="#ED5564"
      ></path>
      <path
        d="M43.2 3.5L23.5 25.2l2.3 2.1s1.7-1.5 2.1-2.3c.4-.8 4.6-4.3 8.3-8 2.1-2 3.6-4 4.8-6.4 1-1.9 1.7-4.2 2.2-7.1z"
        fill="#C9364C"
      ></path>
      <path
        d="M38.1 11.1c.1 0 .2-.1.3-.1-.1-.5-.4-1-.8-1.4-1-.9-2.6-.8-3.5.2-.8.9-.9 2.2-.1 3.2 0-.3.1-.6.2-.9.8-2 2.6-.4 3.9-1z"
        fill="#60359E"
      ></path>
      <path
        d="M37.9 13.1c.6-.6.7-1.4.6-2.2-.1 0-.2.1-.3.1-1.3.7-3.1-1-3.9.9-.1.3-.2.6-.2.9l.3.3c1 1.1 2.5 1 3.5 0z"
        fill="#401F75"
      ></path>
      <path
        d="M34.2 13.5c-1.1-1-1.2-2.8-.2-3.9s2.8-1.2 3.9-.2 1.2 2.8.2 3.9c-1.1 1.1-2.8 1.2-3.9.2zm3.3-3.7c-.9-.8-2.3-.8-3.1.1-.8.9-.8 2.3.2 3.2.9.8 2.3.8 3.2-.2.7-.9.6-2.3-.3-3.1z"
        fill="#FFFFFF"
      ></path>
      <path
        d="M22.2 24.8H24.599999999999998V25.7H22.2z"
        fill="#AEB2B9"
        transform="rotate(-47.78 23.382 25.258)"
      ></path>
      <g>
        <path
          d="M42 8.4c.5-1.4.9-3.1 1.3-4.9-1.8.5-3.4 1.1-4.8 1.7L42 8.4z"
          fill="#112828"
        ></path>
      </g>
    </Svg>
  );
};

export default Icon;
