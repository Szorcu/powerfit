export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-800">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full scale-x-[-1] object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,34,34,0)_0%,#222222_116.76%)]" />
    </section>
  );
};
