"use strict";

const buildTools = require("demurgos-web-build-tools");
const gulp = require("gulp");
const typescript = require("typescript");

// Project-wide options
const projectOptions = Object.assign(
  {},
  buildTools.config.DEFAULT_PROJECT_OPTIONS,
  {
    root: __dirname
  }
);

// `lib` target
const libTarget = Object.assign(
  {},
  buildTools.config.LIB_TARGET,
  {
    name: "lib-es2015",
    typescript: {
      compilerOptions: {
        skipLibCheck: true,
        target: "es2015",
        lib: ["es2015", "dom"]
      },
      typescript: typescript,
      tsconfigJson: ["lib/tsconfig.json"]
    }
  }
);

// `lib-es5` target
const es5Target = Object.assign(
  {},
  buildTools.config.LIB_TARGET,
  {
    name: "lib-es5",
    typescript: {
      compilerOptions: {
        skipLibCheck: true,
        target: "es5",
        lib: ["es2015", "dom"]
      },
      typescript: typescript,
      tsconfigJson: ["lib/es5.tsconfig.json"]
    }
  }
);

// `lib-test` target
const libTestTarget = Object.assign(
  {},
  buildTools.config.LIB_TEST_TARGET,
  {
    name: "lib-test",
    scripts: ["test/**/*.ts", "lib/**/*.ts"],
    typescript: {
      compilerOptions: {
        skipLibCheck: true,
        target: "es2015"
      },
      typescript: typescript,
      tsconfigJson: ["test/tsconfig.json"]
    },
    copy: [
      {
        name: "test-resources",
        files: ["test/test-resources/**/*"]
      }
    ]
  }
);

buildTools.projectTasks.registerAll(gulp, projectOptions);
buildTools.targetGenerators.node.generateTarget(gulp, projectOptions, libTarget);
buildTools.targetGenerators.node.generateTarget(gulp, projectOptions, es5Target);
buildTools.targetGenerators.test.generateTarget(gulp, projectOptions, libTestTarget);

gulp.task("all:tsconfig.json", gulp.parallel("lib-es2015:tsconfig.json", "lib-test:tsconfig.json"));
gulp.task("all:build", gulp.parallel("lib-es2015:build", "lib-es5:build"));
gulp.task("all:dist", gulp.parallel("lib-es2015:dist", "lib-es5:dist"));
