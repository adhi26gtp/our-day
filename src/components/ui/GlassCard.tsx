import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glow?: 'gold' | 'rose' | 'lavender' | 'none';
  variant?: 'frosted' | 'deep' | 'subtle';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = 'rose',
  variant = 'frosted',
  ...props
}) => {
  const glowClasses = {
    gold: 'border-[#E8C58A]/30 shadow-gold-glow hover:border-[#E8C58A]/60',
    rose: 'border-[#F2A7C6]/25 shadow-rose-glow hover:border-[#F2A7C6]/50',
    lavender: 'border-[#C7A5F5]/25 shadow-glass-glow hover:border-[#C7A5F5]/50',
    none: 'border-white/10 shadow-glass',
  };

  const variantClasses = {
    frosted: 'bg-[#180E2B]/55 backdrop-blur-xl',
    deep: 'bg-[#10091C]/80 backdrop-blur-2xl',
    subtle: 'bg-[#241331]/30 backdrop-blur-md',
  };

  return (
    <motion.div
      className={`rounded-2xl p-6 md:p-8 border transition-all duration-500 ${variantClasses[variant]} ${glowClasses[glow]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

