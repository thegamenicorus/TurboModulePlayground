
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <ReactCommon/TurboModule.h>

namespace facebook {
namespace react {

class JSI_EXPORT NativeMyTurboModuleCxxSpecJSI : public TurboModule {
protected:
  NativeMyTurboModuleCxxSpecJSI(std::shared_ptr<JSCallInvoker> jsInvoker);

public:
virtual jsi::String language(jsi::Runtime &rt) = 0;
virtual jsi::String greeting(jsi::Runtime &rt) = 0;

};

} // namespace react
} // namespace facebook
