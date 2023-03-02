import React from 'react';
import { Page } from 'view/components/Page';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('components/Page', () => {
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    it('nominal', () => {
        act(() => {
            render(<Page />, container);
        });
        expect(container.textContent).toBe('Hello World!');
    });
});
