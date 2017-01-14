import {assert} from "chai";
import {DotPath, parse, ParsedDotPath} from "./dot-path";

describe("dotPath", function() {
  describe("parse", function() {
    interface Item {
      path: DotPath;
      expected: ParsedDotPath;
    }

    const items: Item[] = [
      {
        path: "foo",
        expected: ["foo"]
      },
      {
        path: "bar",
        expected: ["bar"]
      },
      {
        path: "10",
        expected: [10]
      },
      {
        path: "-1",
        expected: [-1]
      },
      {
        path: "foo.bar",
        expected: ["foo", "bar"]
      }
    ];

    for (const item of items) {
      it(`should parse ${JSON.stringify(item)}`, function() {
        const actual: ParsedDotPath = parse(item.path);
        assert.deepEqual(actual, item.expected);
      });
    }
  });
});
