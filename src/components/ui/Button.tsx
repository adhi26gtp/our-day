import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'luxury' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'luxury',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs tracking-wider',
    md: 'px-6 py-3 text-sm tracking-widest',
    lg: 'px-8 py-3.5 text-base tracking-widest',
    xl: 'px-10 py-4 text-base md:text-lg tracking-[0.2em]',
  };

  const variantClasses = {
    luxury:
      'relative group overflow-hidden rounded-full font-serif uppercase bg-gradient-to-r from-[#241331]/90 via-[#10091C]/90 to-[#241331]/90 border border-[#E8C58A]/50 text-[#FFF7FC] shadow-gold-glow hover:border-[#F2A7C6] hover:shadow-rose-glow transition-all duration-500 backdrop-blur-md',
    primary:
      'relative group overflow-hidden rounded-full font-medium bg-gradient-to-r from-[#F2A7C6] to-[#C7A5F5] text-[#10091C] font-semibold hover:opacity-95 shadow-rose-glow transition-all duration-300',
    secondary:
      'relative group overflow-hidden rounded-full font-medium bg-[#241331]/70 border border-[#F2A7C6]/30 text-[#FFF7FC] hover:bg-[#321A44]/90 hover:border-[#C7A5F5]/60 transition-all duration-300 backdrop-blur-sm',
    outline:
      'relative group overflow-hidden rounded-full border border-[#E8C58A]/40 text-[#E8C58A] hover:border-[#E8C58A] hover:bg-[#E8C58A]/10 transition-all duration-300',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center font-semibold cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer light sweep animation */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2.5">
        {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-1 duration-300">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-1 duration-300">{icon}</span>}
      </span>
    </motion.button>
  );
};

