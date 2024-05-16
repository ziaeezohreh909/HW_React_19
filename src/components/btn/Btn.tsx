interface btnProps {
  ctaText: string;
  onClick: () => void;
}

export default function Btn({ ctaText, onClick }: btnProps) {
  return (
    <>
      <button
        className=" text-white text-sm font-bold text-center shadow-lg "
        onClick={onClick}
      >
        {ctaText}
      </button>
    </>
  );
}
