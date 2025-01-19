const Marquee = ({ texto }) => {
  return (
    <div className="w-full overflow-hidden bg-amber-950">
      <div className="p-1 text-sm font-semibold text-white whitespace-nowrap animate-marquee">
        {Array(20).fill(`${texto}//`).join("")}
      </div>
    </div>
  );
};

export default Marquee;
