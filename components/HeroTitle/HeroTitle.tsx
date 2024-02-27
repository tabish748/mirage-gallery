import styles from './HeroTitle.module.css';

type HeroTitleProps = {
  accentColor?: string;
  children: React.ReactNode;
  subtitle?: string;
};

export const HeroTitle = ({
  subtitle,
  children,
  accentColor = '', // init with white space to prevent wrong values in html classes
}: HeroTitleProps) => {
  return (
    <div
      className={`flex flex-col w-full space-y-6 py-10 max-w-screen-2xl ${accentColor}`}
    >
      <span className={styles.subtitle}>{subtitle}</span>
      <h3 className={styles.title}>{children}</h3>
    </div>
  );
};
