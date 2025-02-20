type SocialButtonProps = {
  onClick: () => void
  svgPath: string
  viewBox: string
  ariaLabel: string
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  onClick,
  svgPath,
  viewBox,
  ariaLabel,
}) => (
  <button
    onClick={onClick}
    rel="noopener noreferrer"
    className="max-w-[1.5rem] max-h-[1.5rem] cursor-pointer"
    aria-label={ariaLabel}
  >
    <svg
      className="social"
      width="100%"
      height="100%"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={svgPath} fill="#fff" />
    </svg>
  </button>
)
