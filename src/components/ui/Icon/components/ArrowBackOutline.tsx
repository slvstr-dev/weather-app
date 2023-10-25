import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowBackOutline = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        d="M244 400 100 256l144-144M120 256h292"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
      />
    </Svg>
  );
};
