import Svg, { SvgProps, Path } from 'react-native-svg';

export const ChevronForward = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        d="m184 112 144 144-144 144"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
      />
    </Svg>
  );
};
