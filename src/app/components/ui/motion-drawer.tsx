'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Menu } from 'lucide-react'

interface MotionDrawerProps {
    children: React.ReactNode
    direction?: 'left' | 'right'
    width?: number | string
    backgroundColor?: string
    clsBtnClassName?: string
    contentClassName?: string
    btnClassName?: string
}

export default function MotionDrawer({
    children,
    direction = 'left',
    width = 300,
    backgroundColor = '#000000',
    clsBtnClassName,
    contentClassName,
    btnClassName,
}: MotionDrawerProps) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const variants = {
        closed: { x: direction === 'left' ? '-100%' : '100%' },
        open: { x: 0 },
    }

    return (
        <>
            <button onClick={toggle} className={btnClassName}>
                <Menu size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggle}
                            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={variants}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                width,
                                backgroundColor,
                                position: 'fixed',
                                top: 0,
                                [direction]: 0,
                                bottom: 0,
                                zIndex: 50,
                            }}
                            className={contentClassName}
                        >
                            <div className="p-4 flex flex-col h-full">
                                <button
                                    onClick={toggle}
                                    className={`self-end p-2 rounded-full mb-4 ${clsBtnClassName}`}
                                >
                                    <X size={20} />
                                </button>
                                {children}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
