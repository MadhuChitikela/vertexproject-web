import { useState, useEffect } from 'react';

export function useWebGLCheck() {
    const [isWebGLAvailable, setIsWebGLAvailable] = useState<boolean | null>(null);

    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const isAvailable = !!(
                window.WebGLRenderingContext &&
                (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
            );
            setIsWebGLAvailable(isAvailable);
        } catch (e) {
            setIsWebGLAvailable(false);
        }
    }, []);

    return isWebGLAvailable;
}
