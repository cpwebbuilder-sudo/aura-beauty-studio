export default function Marquee() {
  return (
    <section className="overflow-hidden bg-yellow-500 py-6">
      <div className="whitespace-nowrap animate-marquee">

        <span className="text-black text-4xl font-bold mx-10">
          BRIDAL MAKEUP
        </span>

        <span className="text-black text-4xl font-bold mx-10">
          HAIR STYLING
        </span>

        <span className="text-black text-4xl font-bold mx-10">
          SKIN CARE
        </span>

        <span className="text-black text-4xl font-bold mx-10">
          NAIL ART
        </span>

      </div>
    </section>
  );
}