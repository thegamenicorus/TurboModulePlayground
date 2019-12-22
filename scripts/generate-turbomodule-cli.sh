#!/bin/bash
# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

# This script collects the "core" component schemas used by fabric
# then uses react-native-codegen to generate the component headers
# to a location that the podspecs expect.

# shellcheck disable=SC2038

find "$PWD/src/turbomodules" -name "Native*.js" -print | xargs yarn flow-node packages/react-native-codegen/src/cli/combine/combine-js-to-schema-cli.js schema-turbomodules.json
yarn flow-node packages/react-native-codegen/buck_tests/generate-tests.js schema-turbomodules.json \'\' ios/turbomodule/spec TurboModuleSpec
