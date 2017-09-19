import SimpleMarkdown from "simple-markdown";

import * as plugin from "../";

const { embed, NAME, TYPE } = plugin;

export const createParser = () => {
    const name = NAME.replace(/\s/g, "-").toLowerCase();
    const parser = SimpleMarkdown.parserFor({
        newline: SimpleMarkdown.defaultRules.newline,
        text: SimpleMarkdown.defaultRules.text,
        [name]: {
            order: SimpleMarkdown.defaultRules.url.order,
            match: embed.match,
            parse: embed.parse,
        },
    });

    return message => {
        return parser(message, { inline: true }).filter(p => p.type !== "text");
    };
};

test("Plugin should be defined properly", () => {
    expect(embed).toBeDefined();
    expect(NAME).toEqual(expect.any(String));
    expect(NAME.length).toBeGreaterThan(0);
    expect(TYPE).toEqual(expect.any(String));
    expect(TYPE.length).toBeGreaterThan(0);
});

test("Plugin should implement 'endPointUrl' method", () => {
    expect(embed.endPointUrl).toBeDefined();
    expect(typeof embed.endPointUrl).toBe("function");
});

test("Plugin should implement 'match' method", () => {
    expect(embed.match).toBeDefined();
    expect(typeof embed.match).toBe("function");
});

test("Plugin should implement 'parse' method", () => {
    expect(embed.parse).toBeDefined();
    expect(typeof embed.parse).toBe("function");
});

test("Plugin should implement 'process' method", () => {
    expect(embed.process).toBeDefined();
    expect(typeof embed.process).toBe("function");
});
