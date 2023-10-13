import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

export const OptionsOutline = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />

      <Circle
        cx={336}
        cy={128}
        r={32}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />

      <Circle
        cx={176}
        cy={256}
        r={32}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />

      <Circle
        cx={336}
        cy={384}
        r={32}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};
