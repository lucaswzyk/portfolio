import React from "react";
import { Button as AureliusButton } from "@lukeashford/aurelius";

const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
  ...props
}) => {
  return (
    <AureliusButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </AureliusButton>
  );
};

export default Button;