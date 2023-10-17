import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowDownOutline = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        d="m112 268 144 144 144-144M256 392V100"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};
