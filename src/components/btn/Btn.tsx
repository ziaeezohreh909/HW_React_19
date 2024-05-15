interface btnProps{
  ctaText:string
}


export default function Btn({ctaText}:btnProps) {
  return (
    <>
      <button className=" text-white text-sm font-bold text-center">{ctaText}</button>
    </>
  );
}
