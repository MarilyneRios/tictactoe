import { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';

function useConfetti() {
    const jsConfetti = useRef(null);

    useEffect(() => {
        jsConfetti.current = new JSConfetti();
    }, []);

    function confetti() {
        const commonOptions = {
            confettiRadius: 5,
            confettiNumber: 100,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        };

        jsConfetti.current.addConfetti(commonOptions);
    }

    return { confetti };
}

export default useConfetti;
