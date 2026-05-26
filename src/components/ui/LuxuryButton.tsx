type Props = {
  text: string;
};

export default function LuxuryButton({
  text,
}: Props) {
  return (
    <button
      className="
        px-8
        py-4
        rounded-full
        bg-black/60
        border
        border-white/10
        backdrop-blur-xl
        text-[#D4AF37]
        hover:scale-105
        transition-all
        duration-300
      "
    >
      {text}
    </button>
  );
}