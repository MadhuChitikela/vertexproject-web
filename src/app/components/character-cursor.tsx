import React, { useEffect, useRef } from 'react';

interface CharacterCursorProps {
    characters?: string[];
    colors?: string[];
    cursorOffset?: { x: number; y: number };
    font?: string;
    characterLifeSpanFunction?: () => number;
    initialCharacterVelocityFunction?: () => { x: number; y: number };
    characterVelocityChangeFunctions?: {
        x_func: (age: number, lifeSpan: number) => number;
        y_func: (age: number, lifeSpan: number) => number;
    };
    characterScalingFunction?: (age: number, lifeSpan: number) => number;
    characterNewRotationDegreesFunction?: (age: number, lifeSpan: number) => number;
    wrapperElement?: HTMLElement;
}

export function CharacterCursor({
    characters = ['h', 'e', 'l', 'l', 'o'],
    colors = ['#6622CC', '#A755C2', '#B07C9E', '#B59194', '#D2A1B8'],
    cursorOffset = { x: 0, y: 0 },
    font = '15px serif',
    characterLifeSpanFunction = () => Math.floor(Math.random() * 60 + 80),
    initialCharacterVelocityFunction = () => ({
        x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
        y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
    }),
    characterVelocityChangeFunctions = {
        x_func: () => (Math.random() < 0.5 ? -1 : 1) / 30,
        y_func: () => (Math.random() < 0.5 ? -1 : 1) / 15,
    },
    characterScalingFunction = (age, lifeSpan) =>
        Math.max(((lifeSpan - age) / lifeSpan) * 2, 0),
    characterNewRotationDegreesFunction = (age, lifeSpan) => (lifeSpan - age) / 5,
    wrapperElement,
}: CharacterCursorProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<InstanceType<ReturnType<typeof makeParticleClass>>[]>([]);
    const cursorRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number | null>(null);
    const canvImagesRef = useRef<HTMLCanvasElement[]>([]);

    // Pull props into stable refs so the effect never needs to re-run on prop changes
    // while still always reading the latest values.
    const propsRef = useRef({
        characters,
        colors,
        cursorOffset,
        font,
        characterLifeSpanFunction,
        initialCharacterVelocityFunction,
        characterVelocityChangeFunctions,
        characterScalingFunction,
        characterNewRotationDegreesFunction,
        wrapperElement,
    });

    useEffect(() => {
        propsRef.current = {
            characters,
            colors,
            cursorOffset,
            font,
            characterLifeSpanFunction,
            initialCharacterVelocityFunction,
            characterVelocityChangeFunctions,
            characterScalingFunction,
            characterNewRotationDegreesFunction,
            wrapperElement,
        };
    });

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        let canvas: HTMLCanvasElement | null = null;
        let context: CanvasRenderingContext2D | null = null;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const randomSign = () => (Math.random() < 0.5 ? -1 : 1);

        class Particle {
            rotationSign: number;
            age: number;
            initialLifeSpan: number;
            lifeSpan: number;
            velocity: { x: number; y: number };
            position: { x: number; y: number };
            canv: HTMLCanvasElement;

            constructor(x: number, y: number, canvasItem: HTMLCanvasElement) {
                const p = propsRef.current;
                const lifeSpan = p.characterLifeSpanFunction();
                this.rotationSign = randomSign();
                this.age = 0;
                this.initialLifeSpan = lifeSpan;
                this.lifeSpan = lifeSpan;
                this.velocity = p.initialCharacterVelocityFunction();
                this.position = {
                    x: x + p.cursorOffset.x,
                    y: y + p.cursorOffset.y,
                };
                this.canv = canvasItem;
            }

            update(ctx: CanvasRenderingContext2D) {
                const p = propsRef.current;
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                this.lifeSpan--;
                this.age++;

                this.velocity.x += p.characterVelocityChangeFunctions.x_func(this.age, this.initialLifeSpan);
                this.velocity.y += p.characterVelocityChangeFunctions.y_func(this.age, this.initialLifeSpan);

                const scale = p.characterScalingFunction(this.age, this.initialLifeSpan);
                const degrees = this.rotationSign * p.characterNewRotationDegreesFunction(this.age, this.initialLifeSpan);
                const radians = degrees * 0.0174533;

                ctx.translate(this.position.x, this.position.y);
                ctx.rotate(radians);
                ctx.drawImage(
                    this.canv,
                    (-this.canv.width / 2) * scale,
                    -this.canv.height / 2,
                    this.canv.width * scale,
                    this.canv.height * scale
                );
                ctx.rotate(-radians);
                ctx.translate(-this.position.x, -this.position.y);
            }
        }

        const init = () => {
            if (prefersReducedMotion.matches) {
                console.log('Cursor animation skipped: prefers-reduced-motion is enabled.');
                return;
            }

            canvas = canvasRef.current;
            if (!canvas) return;

            context = canvas.getContext('2d');
            if (!context) return;

            canvas.style.top = '0px';
            canvas.style.left = '0px';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '9999';

            const p = propsRef.current;

            if (p.wrapperElement) {
                canvas.style.position = 'absolute';
                p.wrapperElement.appendChild(canvas);
                canvas.width = p.wrapperElement.clientWidth;
                canvas.height = p.wrapperElement.clientHeight;
            } else {
                canvas.style.position = 'fixed';
                document.body.appendChild(canvas);
                canvas.width = width;
                canvas.height = height;
            }

            context.font = p.font;
            context.textBaseline = 'middle';
            context.textAlign = 'center';

            canvImagesRef.current = [];

            p.characters.forEach((char) => {
                const measurements = context!.measureText(char);
                const bgCanvas = document.createElement('canvas');
                const bgCtx = bgCanvas.getContext('2d');

                if (bgCtx) {
                    bgCanvas.width = measurements.width;
                    bgCanvas.height = measurements.actualBoundingBoxAscent * 2.5;

                    bgCtx.textAlign = 'center';
                    bgCtx.font = p.font;
                    bgCtx.textBaseline = 'middle';
                    bgCtx.fillStyle = p.colors[Math.floor(Math.random() * p.colors.length)];
                    bgCtx.fillText(char, bgCanvas.width / 2, measurements.actualBoundingBoxAscent);

                    canvImagesRef.current.push(bgCanvas);
                }
            });

            bindEvents();
            loop();
        };

        const onWindowResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            if (!canvasRef.current) return;

            const p = propsRef.current;
            if (p.wrapperElement) {
                canvasRef.current.width = p.wrapperElement.clientWidth;
                canvasRef.current.height = p.wrapperElement.clientHeight;
            } else {
                canvasRef.current.width = width;
                canvasRef.current.height = height;
            }
        };

        const onTouchMove = (e: TouchEvent) => {
            if (e.target instanceof Element && (e.target.closest('form') || e.target.closest('.no-cursor-animation'))) return;
            for (let i = 0; i < e.touches.length; i++) {
                addParticle(
                    e.touches[i].clientX,
                    e.touches[i].clientY,
                    canvImagesRef.current[Math.floor(Math.random() * canvImagesRef.current.length)]
                );
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            if (e.target instanceof Element && (e.target.closest('form') || e.target.closest('.no-cursor-animation'))) return;
            const p = propsRef.current;
            if (p.wrapperElement) {
                const rect = p.wrapperElement.getBoundingClientRect();
                cursorRef.current.x = e.clientX - rect.left;
                cursorRef.current.y = e.clientY - rect.top;
            } else {
                cursorRef.current.x = e.clientX;
                cursorRef.current.y = e.clientY;
            }

            addParticle(
                cursorRef.current.x,
                cursorRef.current.y,
                canvImagesRef.current[Math.floor(Math.random() * canvImagesRef.current.length)]
            );
        };

        const addParticle = (x: number, y: number, img: HTMLCanvasElement) => {
            if (img) particlesRef.current.push(new Particle(x, y, img));
        };

        const updateParticles = () => {
            if (!canvas || !context || particlesRef.current.length === 0) return;

            context.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesRef.current.length; i++) {
                particlesRef.current[i].update(context);
            }

            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                if (particlesRef.current[i].lifeSpan < 0) {
                    particlesRef.current.splice(i, 1);
                }
            }

            if (particlesRef.current.length === 0) {
                context.clearRect(0, 0, canvas.width, canvas.height);
            }
        };

        const loop = () => {
            updateParticles();
            animationFrameRef.current = requestAnimationFrame(loop);
        };

        const bindEvents = () => {
            const element = propsRef.current.wrapperElement || document.body;
            element.addEventListener('mousemove', onMouseMove);
            element.addEventListener('touchmove', onTouchMove as EventListener, { passive: true });
            element.addEventListener('touchstart', onTouchMove as EventListener, { passive: true });
            window.addEventListener('resize', onWindowResize);
        };

        init();

        return () => {
            if (canvas) canvas.remove();
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

            const element = propsRef.current.wrapperElement || document.body;
            element.removeEventListener('mousemove', onMouseMove);
            element.removeEventListener('touchmove', onTouchMove as EventListener);
            element.removeEventListener('touchstart', onTouchMove as EventListener);
            window.removeEventListener('resize', onWindowResize);

            particlesRef.current = [];
            canvImagesRef.current = [];
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <canvas ref={canvasRef} />;
}

// Helper type only used by the ref — keeps TypeScript happy without exporting internals
function makeParticleClass() {
    return class {
        lifeSpan!: number;
        update(_ctx: CanvasRenderingContext2D): void { /* placeholder */ }
    };
}
