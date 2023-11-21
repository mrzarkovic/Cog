import "@testing-library/jest-dom";
import {
    Cog,
    evaluateExpression,
    findNextTemplateExpression,
    render,
    loadTree,
    addEventListeners,
    removeEventListeners,
    variable,
} from "../cog";
import { getByText, waitFor } from "@testing-library/dom";

const getWindowErrorPromise = () =>
    new Promise((resolve, reject) => {
        window.addEventListener("error", (event) => {
            event.preventDefault();
            reject(event.error);
        });
    });

describe("evaluateExpression", () => {
    beforeEach(() => {});

    afterEach(() => {});

    test("that expression evaluates in the given state", () => {
        const state = { x: 1, y: 2 };
        const expression = "x + y";
        const result = evaluateExpression(expression, state);

        expect(result).toBe(3);
    });

    test("expressions that evaluate to arrays", () => {
        const state = { users: [{ name: "John" }, { name: "Jane" }] };
        const expression = "users.map( user => `<div>${user.name}</div>` )";
        const result = evaluateExpression(expression, state);

        expect(result).toEqual("<div>John</div><div>Jane</div>");
    });

    test("handle expressions that reference undefined variables", () => {
        const state = { x: 1 };
        const expression = "x + y";

        expect(() => evaluateExpression(expression, state)).toThrow();
    });
});

describe("findNextTemplateExpression", () => {
    test("finds the next template expression start and end index", () => {
        const template = "Hello {{name}}!";
        const result = findNextTemplateExpression(template);

        expect(result).toEqual({ start: 6, end: 13 });
    });

    test("return -1 for end if no expression is found", () => {
        const template = "Hello }} world {{!";
        const result = findNextTemplateExpression(template);

        expect(result.end).toEqual(-1);
    });
});

describe("render", () => {
    test("renders a template with a single expression", async () => {
        const element = document.createElement("div");
        element.innerHTML = "<div>Hello {{ name }}!</div>";
        const template = element.innerHTML;
        const tree = [
            {
                element,
                template,
            },
        ];

        render(tree, { name: "John" });

        await waitFor(() => {
            expect(getByText(element, "Hello John!")).toBeTruthy();
        });
    });
});

describe("loadTree", () => {
    test("load a tree of elements with templates", () => {
        const element = document.createElement("div");
        element.innerHTML = `<div>
            <div id='first'>first {{ expression }}</div>
            <div>
                <div id='second'>second {{ expression }}</div>
            </div>
            <div id='third'>third {{ expression }}</div>
        </div>`;
        const tree = loadTree(element);

        expect(tree).toEqual([
            {
                element: element.querySelector("#first"),
                template: "first {{ expression }}",
            },
            {
                element: element.querySelector("#second"),
                template: "second {{ expression }}",
            },
            {
                element: element.querySelector("#third"),
                template: "third {{ expression }}",
            },
        ]);
    });
});

describe("eventListeners", () => {
    test("add/remove event listeners from elements", () => {
        const parent = document.createElement("div");
        parent.innerHTML =
            "<button data-on='click' data-handler='mock()'>Click</button>";
        const button = getByText(parent, "Click");

        const mock = jest.fn();
        const state = { mock };

        addEventListeners(parent, "click", state);
        button.click();

        expect(mock).toHaveBeenCalled();

        removeEventListeners(parent, "click");
        button.click();

        expect(mock).toHaveBeenCalledTimes(1);
    });

    test("handle event listeners that reference undefined variables", () => {
        const parent = document.createElement("div");
        parent.innerHTML =
            "<button data-on='click' data-handler='mock()'>Click</button>";
        const button = getByText(parent, "Click");
        const state = {};
        addEventListeners(parent, "click", state);

        const errorPromise = getWindowErrorPromise();
        button.click();

        expect(errorPromise).rejects.toThrow();
    });

    test("handle no handler attribute", () => {
        const parent = document.createElement("div");
        parent.innerHTML = "<button data-on='click'>Click</button>";
        const state = {};
        expect(() => addEventListeners(parent, "click", state)).toThrow();
    });
});

describe("api", () => {
    function dispatchDOMContentLoaded() {
        const event = new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: false,
        });
        document.dispatchEvent(event);
    }

    afterEach(() => {
        document.body.innerHTML = "";
    });

    test("fail if no #app element", () => {
        Cog(document);
        dispatchDOMContentLoaded();
        const errorPromise = getWindowErrorPromise();

        expect(errorPromise).rejects.toThrow();
    });

    test("render with #app element", () => {
        const element = document.createElement("div");
        element.innerHTML = "<div id='app'></div>";
        document.body.appendChild(element);

        Cog(document);

        dispatchDOMContentLoaded();

        expect(element.innerHTML).toEqual('<div id="app"></div>');
    });

    test("use variable in template", async () => {
        const element = document.createElement("div");
        element.innerHTML = "<div id='app'><div>Hello {{ name }}!</div></div>";
        document.body.appendChild(element);

        const variable = Cog(document).variable;
        variable("name", "John");

        dispatchDOMContentLoaded();

        await waitFor(() => {
            expect(getByText(element, "Hello John!")).toBeInTheDocument();
        });
    });

    test("update variable", async () => {
        const element = document.createElement("div");
        element.innerHTML = "<div id='app'><div>Hello {{ name }}!</div></div>";
        document.body.appendChild(element);

        const variable = Cog(document).variable;
        const name = variable("name", "John");

        dispatchDOMContentLoaded();

        name.set("Jane");

        await waitFor(() => {
            expect(getByText(element, "Hello Jane!")).toBeInTheDocument();
        });
    });

    test("read variable", () => {
        const variable = Cog(document).variable;
        const name = variable("name", "John");

        expect(name.value).toEqual("John");
    });
});
