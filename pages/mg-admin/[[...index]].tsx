import { NextStudio } from 'next-sanity/studio';
import { config } from 'sanity.config';

const StudioPage = () => {
  return (
    <div className="w-full">
      <NextStudio config={config} />
    </div>
  );
};

export default StudioPage;
