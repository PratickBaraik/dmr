"use client";

type Props = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  fullWidth?: boolean;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  fullWidth = false,
}: Props) {
  return (
    <section
      id={id}
      className={`
        relative 
        py-16 sm:py-20 md:py-28 lg:py-32
        ${className}
      `}
    >
      <div
        className={`
          ${fullWidth ? "w-full px-5 sm:px-6 md:px-10" : "max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16"}
          ${containerClassName}
        `}
      >
        {children}
      </div>
    </section>
  );
}
