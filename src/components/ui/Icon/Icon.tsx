import * as Icons from './components/index';

export type IconProps = {
  name: keyof typeof Icons;
  className?: string;
  size?: number;
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  const Component = Icons[name];

  return <Component width={size} height={size} {...props} />;
}
