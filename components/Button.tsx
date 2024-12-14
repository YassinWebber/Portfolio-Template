type ButtonPropTypes = {
  label: string;
  primary: string;
  secondry?: string;
  className?: string;
};

export default function Button({
  label,
  primary,
  secondry,
  className,
}: ButtonPropTypes) {
  return (
    <button
      className={`bg-${primary} text-${secondry} rounded-full font-sans font-semibold text-md cursor-pointer transition-colors hover:text-${primary} hover:bg-transparent hover:border-2 hover:border-${primary} h-10 w-36 ${className}`}
      type="button"
    >
      {label}
    </button>
  );
}
