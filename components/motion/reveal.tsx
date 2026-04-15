'use client'

import { motion, type MotionProps } from 'framer-motion'

type RevealProps = MotionProps & {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 30, ...props }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)', scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = MotionProps & {
  children: React.ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export function Stagger({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.08,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -120px 0px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren, delayChildren } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, ...props }: MotionProps & { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 25, filter: 'blur(6px)', scale: 0.97 },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

