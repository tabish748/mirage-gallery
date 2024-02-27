import { Fragment, useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { Dialog, Transition } from '@headlessui/react';

type FullWidthImageModalProps = {
  id: string;
  url: string;
};

// Basic loading spinner; feel free to replace with your desired spinner or styling
const LoadingSpinner = () => (
  <div className="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin bg-red-200"></div>
);

export const FullWidthImageModal = ({ id, url }: FullWidthImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileType, setFileType] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImageInModal, setShowImageInModal] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [viewportSize, setViewportSize] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }));

  // Add a state for media type
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);

  const DEFAULT_WIDTH_AND_HEIGHT = 768;

  function closeModal() {
    setIsOpen(false);
    setShowImageInModal(false);
  }

  function openModal() {
    setIsOpen(true);
    setImageLoaded(false);
    setShowImageInModal(true);
  }

  useEffect(() => {
    fetch(url, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          const contentType = response.headers.get('Content-Type');
          setFileType(contentType);

          // Set the media type based on content type
          if (contentType?.startsWith('image/')) {
            setMediaType('image');
          } else if (contentType?.startsWith('video/')) {
            setMediaType('video');
          }
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch();
  }, [url]);

  useEffect(() => {
    fetch(url, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          setFileType(response.headers.get('Content-Type'));
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch();
  }, [url]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
    img.src = url;
  }, [url]);

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateViewportSize);
    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  const calculateImageDimensions = () => {
    if (!imageDimensions) {
      return {
        width: DEFAULT_WIDTH_AND_HEIGHT,
        height: DEFAULT_WIDTH_AND_HEIGHT,
      };
    }

    const aspectRatio = imageDimensions.width / imageDimensions.height;

    let renderWidth, renderHeight;

    if (aspectRatio > 1) {
      // Image is wide
      renderWidth = viewportSize.width;
      renderHeight = renderWidth / aspectRatio;
    } else {
      // Image is tall
      renderHeight = viewportSize.height * 0.9;
      renderWidth = renderHeight * aspectRatio;
    }

    return {
      width: renderWidth,
      height: renderHeight,
    };
  };

  const { width, height } = calculateImageDimensions();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const renderMedia = (className: string, mediaUrl: string, id: string) => {
    switch (mediaType) {
      case 'image':
        return renderImage(className, id);
      case 'video':
        mediaUrl = mediaUrl.replace('upload/', 'upload/q_auto,f_auto/');
        return renderVideo(className, mediaUrl);
      default:
        return null;
    }
  };

  const renderVideo = (className: string, videoUrl: string) => (
    <video
      className={className}
      controls
      height={isOpen ? height : DEFAULT_WIDTH_AND_HEIGHT}
      width={isOpen ? width : DEFAULT_WIDTH_AND_HEIGHT}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  const renderImage = (className: string, imageUrl: string) => {
    const imageComponent = (
      <CldImage
        alt="imagen"
        className={className}
        height={isOpen ? height : DEFAULT_WIDTH_AND_HEIGHT}
        onLoad={handleImageLoad}
        quality={90}
        src={imageUrl}
        width={isOpen ? width : DEFAULT_WIDTH_AND_HEIGHT}
        {...(fileType === 'image/gif' || fileType === 'image/avif'
          ? {}
          : {
              blurDataURL: '/assets/placeholder.svg',
              placeholder: 'blur',
            })}
      />
    );

    return (
      <div className="relative">
        {' '}
        {!imageLoaded && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LoadingSpinner />
          </div>
        )}
        {imageComponent}
      </div>
    );
  };
  return (
    <>
      <button
        className="overflow-hidden duration-300 rounded-2xl hover:opacity-80"
        onClick={openModal}
        type="button"
      >
        {renderMedia('object-cover aspect-square', url, id)} {/* Thumbnail */}
      </button>

      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-[60]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white/80 backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 "
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 "
            >
              <Dialog.Panel
                className={`w-[${width}px] h-[${height}px] max-h-[90vh] overflow-y-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl flex items-center justify-center`}
              >
                {' '}
                <Dialog.Title as="h3" className="hidden">
                  About
                </Dialog.Title>
                {showImageInModal &&
                  renderMedia('object-contain max-w-full max-h-full', url, id)}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
