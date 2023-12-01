import { HTMLElementFromTemplate, StateObject } from "../types";
import { attributesToState } from "./helpers/attributesToState";
import { evaluateTemplate } from "./helpers/evaluateTemplate";
import { getAttributes } from "./helpers/getAttributes";
import { templatesStack } from "./templatesStack";

export function defineCustomElement(
    name: string,
    template: HTMLTemplateElement,
    state: StateObject
) {
    function CustomElement() {
        return Reflect.construct(HTMLElement, [], CustomElement);
    }

    CustomElement.prototype = Object.create(HTMLElement.prototype);
    CustomElement.prototype.constructor = CustomElement;

    CustomElement.prototype.connectedCallback = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const customElement: HTMLElement = this;

        const attributes = getAttributes(customElement);

        const tempDiv = document.createElement("div");

        tempDiv.innerHTML = template.innerHTML.replace(
            /\{\{\s*children\s*\}\}/g,
            customElement.innerHTML
        );

        const localState = attributesToState(attributes, state.value);

        const originalInvocation = tempDiv.innerHTML;

        const evaluatedTemplate = evaluateTemplate(
            tempDiv.innerHTML,
            localState
        );

        tempDiv.innerHTML = evaluatedTemplate;

        const newElement = tempDiv.firstChild as HTMLElementFromTemplate;

        customElement.parentNode?.insertBefore(newElement, customElement);

        if (!customElement.dataset.childOf && newElement) {
            newElement.lastTemplateEvaluation = evaluatedTemplate;
            templatesStack.add({
                element: newElement,
                template: originalInvocation,
                parentAttributes: attributes,
            });

            templatesStack.clean();
        }

        customElement.parentNode?.removeChild(customElement);
    };

    customElements.define(name, CustomElement as never);
}
