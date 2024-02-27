import { useCallback, useEffect, useRef, useState } from 'react';

import styles from 'modules/curated/styles/CuratedGallery.module.css';
import DropsFilter from 'modules/curated/components/DropsFilter';
import { DropGallery, MintStatus } from 'types/drops';
import { DropCover } from './DropCover';
import { DropCoverOverlay } from './DropCoverOverlay';

type CuratedGalleryProps = {
  drops: DropGallery[];
};

// Per design, we should only show a max of 14 drops
const MAX_DROPS = 14;

export const CuratedGallery = ({ drops }: CuratedGalleryProps) => {
  const [selectedStatus, setSelectedStatus] = useState<MintStatus>(
    MintStatus.ALL
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const filterDrops = useCallback(
    (drop: DropGallery) => {
      if (drop.status === 'private') {
        return false; // Exclude private drops
      }

      if (selectedStatus === MintStatus.ALL) {
        return true;
      }

      return drop.status === selectedStatus;
    },
    [selectedStatus]
  );

  const TOTAL = drops.filter(filterDrops).length || 14;
  const PAGES = Math.ceil(TOTAL / MAX_DROPS);
  const START = currentPage === 1 ? 0 : (currentPage - 1) * MAX_DROPS;
  const END = TOTAL > currentPage * MAX_DROPS ? currentPage * MAX_DROPS : TOTAL;

  const ref = useRef<HTMLDivElement>(null);
  const [offset, setoffset] = useState<number>(0);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStatus]);

  useEffect(() => {
    if (ref.current) {
      const { offsetTop } = ref.current;
      setoffset(offsetTop);
    }
  }, [currentPage]);

  const emitPrev = () => {
    setCurrentPage((prev) => prev - 1);
    window.scrollTo(0, offset - 120);
  };

  const emitNext = () => {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo(0, offset - 120);
  };

  return (
    <div className="px-2 md:px-6" ref={ref}>
      <DropsFilter
        selectedFilter={selectedStatus}
        setFilter={setSelectedStatus}
        showUpcoming={
          !!drops.find((drop) => drop.status === MintStatus.UPCOMING)
        }
      />
      <div className={styles.gallery}>
        {drops
          .filter(filterDrops)
          .slice(START, END)
          .map((drop, index) => (
            <div className={`group ${styles.drop}`} key={drop._id}>
              <DropCover drop={drop} index={index} />
              <DropCoverOverlay
                artists={drop.artists}
                name={drop.name}
                status={drop.status}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-between mx-auto mt-8 max-w-screen-2xl">
        {currentPage > 1 && (
          <>
            <div
              className="py-3 text-white cursor-pointer bg-curated px-9"
              onClick={() => emitPrev()}
            >
              Prev
            </div>
            <div></div>
          </>
        )}
        {currentPage < PAGES && (
          <>
            <div></div>
            <div
              className="self-end py-3 ml-3 text-white cursor-pointer bg-curated px-9 justify-self-end"
              onClick={() => emitNext()}
            >
              Next
            </div>
          </>
        )}
      </div>
    </div>
  );
};
