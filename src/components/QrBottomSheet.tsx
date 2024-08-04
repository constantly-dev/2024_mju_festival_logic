import styled from 'styled-components';
import { motion } from 'framer-motion';

const QrBottomSheet = () => {
  return (
    <>
      <BackgroundOverlay
        variants={{
          opened: {
            backdropFilter: 'blur(1px)',
            pointerEvents: 'all',
            opacity: 0.7,
          },
          closed: {
            backdropFilter: 'blur(0px)',
            pointerEvents: 'none',
            opacity: 0,
          },
        }}
      />

      <SheetBackground drag="y" dragConstraints={{ top: 0, bottom: 0 }}>
        <BottomHeader>
          <HandleBar />
        </BottomHeader>

        <SheetContentWrapper
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={false}
          style={{ height: 500, zIndex: 999 }}
          ref={contentRef}
        >
          <SheetContent></SheetContent>
        </SheetContentWrapper>
      </SheetBackground>
    </>
  );
};

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: black;
`;
const SheetBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  background: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 24px 24px 0 0;
  padding: 12px 0 24px 0;
  will-change: transform;
`;
const BottomHeader = styled.div``;
const HandleBar = styled.div``;
const SheetContentWrapper = styled(motion.div)``;
const SheetContent = styled.div``;

export default QrBottomSheet;
