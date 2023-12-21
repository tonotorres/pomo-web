import SplitType from 'split-type';
import { wrapLines } from './utils';
import { gsap } from 'gsap';

export class TextLinesReveal {
    constructor(animationElems) {
        this.DOM = {
            animationElems: Array.isArray(animationElems) ? animationElems : [animationElems]
        };

        // array of SplitType instances
        this.SplitTypeInstances = [];
        // array of all HTML .line
        this.lines = [];

        for (const el of this.DOM.animationElems) {
            const SplitTypeInstance = new SplitType(el, { types: 'lines' });
            // wrap the lines (div with class .oh)
            // the inner child will be the one animating the transform
            wrapLines(SplitTypeInstance.lines, 'div', 'oh');
            this.lines.push(SplitTypeInstance.lines);
            // keep a reference to the SplitType instance
            this.SplitTypeInstances.push(SplitTypeInstance);
        }

        this.initEvents();
    }
    in() {
        // lines are visible
        this.isVisible = true;

        // animation
        gsap.killTweensOf(this.lines);
        return gsap.timeline({defaults: {duration: 1.2, ease: 'expo'}})
        .set(this.lines, {
            transform: 'translateY(150%) rotate(15deg)'
        })
        .to(this.lines, {
            transform: 'translateY(0%) rotate(0deg)',
            stagger: 0.04
        });
    }
    out() {
        // lines are invisible
        this.isVisible = false;

        // animation
        gsap.killTweensOf(this.lines);
        return gsap.timeline({
            defaults: {duration: 0.5, ease: 'expo.in'}
        })
        .to(this.lines, {
            transform: 'translateY(-150%) rotate(-5deg)',
            stagger: 0.02
        });
    }
    initEvents() {
        window.addEventListener('resize', () => {
            // empty the lines array
            this.lines = [];
            // re initialize the Split Text 
            for (const instance of this.SplitTypeInstances) {
                // re-split text
                instance.split();

                // need to wrap again the new lines elements (div with class .oh)
                wrapLines(instance.lines, 'div', 'oh');
                this.lines.push(instance.lines);
            }
            // hide the lines
            if ( !this.isVisible ) {
                gsap.set(this.lines, {y: '-150%'});
            }
        });
    }
}