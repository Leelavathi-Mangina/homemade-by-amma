import clsx from "clsx";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-amber-700 text-white hover:bg-amber-800 focus:ring-amber-700":
            variant === "primary",

          "border border-amber-700 text-amber-700 bg-white hover:bg-orange-50 focus:ring-amber-700":
            variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
}