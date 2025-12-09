export const Noise = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-25"
      style={{
        backgroundImage: "url('/noise.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "50%",
      }}
    />
  );
};
