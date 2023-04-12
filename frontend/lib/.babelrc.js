/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

console.log("Using lib custom babel file to preserve modules")
module.exports = {
  presets: [["./scripts/babel-preset-dev-env.js"]],
  plugins: ["@emotion", [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["."],
      alias: {
        'src': "./src",
      },
      cwd: "babelrc"
    }
  ]],
  ignore: ["./src/autogen/**", "**/*.test.ts", "**/*.test.tsx"],
}
