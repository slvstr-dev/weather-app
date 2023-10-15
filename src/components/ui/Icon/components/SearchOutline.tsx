import Svg, { SvgProps, Path } from 'react-native-svg';

export const SearchOutline = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path
        d="M338.29 338.29 448 448"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </Svg>
  );
};
