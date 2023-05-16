const Star = ({ filled }) => {
  return (
    <svg
      aria-hidden="true"
      className={`w-5 h-5 text-yellow-400 inline ${
        filled ? "fill-current" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L8 8l-6 1 4 4-1 6 6-3 6 3-1-6 4-4-6-1z"></path>
    </svg>
  );
};
export default Star;
