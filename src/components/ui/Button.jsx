import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '', type = 'button', disabled = false }) => {
  const baseStyles = 'font-semibold rounded-[100px] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-brand-purple text-white hover:bg-brand-purple/90 focus:ring-brand-purple',
    secondary: 'bg-brand-orange text-brand-orange-dark hover:bg-brand-orange/90 focus:ring-brand-orange',
    outline: 'border border-brand-purple text-brand-purple hover:bg-brand-purple/10 focus:ring-brand-purple',
    'outline-orange': 'border border-brand-orange text-brand-orange hover:bg-brand-orange/10 focus:ring-brand-orange',
    ghost: 'text-brand-purple hover:bg-brand-purple/10',
    link: 'text-brand-purple hover:underline',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-9 py-4 text-base', // Equivalent to original px-9 py-4
    lg: 'px-10 py-5 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
