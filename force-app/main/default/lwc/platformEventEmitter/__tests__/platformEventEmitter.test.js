import { createElement } from 'lwc';
import PlatformEventEmitter from 'c/platformEventEmitter';

describe('c-platform-event-emitter', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays a value', () => {
        const element = createElement('c-platform-event-emitter', {
            is: PlatformEventEmitter
        });

        document.body.appendChild(element);

        const h1 = element.shadowRoot.querySelector('h1');
        expect(h1.textContent).toBe('Cant fire Platform Event from LWC, but can handle them');
    });
});