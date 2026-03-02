'use client'
import React from 'react'
import { motion, useInView, Variants } from 'motion/react'

interface TimelineAnimationProps {
    children: React.ReactNode
    timelineRef: React.RefObject<any>
    animationNum: number
    as?: any
    className?: string
    src?: string
    alt?: string
    once?: boolean
    onClick?: () => void
}

export const TimelineAnimation = ({
    children,
    timelineRef,
    animationNum,
    as = 'div',
    className = '',
    src,
    alt,
    once = true,
    onClick,
}: TimelineAnimationProps) => {
    const isInView = useInView(timelineRef, { once })

    const MotionComponent = (motion as any)[as] || motion.div

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: animationNum * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
            }
        }
    }

    if (as === 'img') {
        return (
            <motion.img
                src={src}
                alt={alt}
                className={className}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                onClick={onClick}
            />
        )
    }

    return (
        <MotionComponent
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            onClick={onClick}
        >
            {children}
        </MotionComponent>
    )
}
