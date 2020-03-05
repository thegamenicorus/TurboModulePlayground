
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "TurboModuleCxxSpec.h"

namespace facebook {
namespace react {

static jsi::Value __hostFunction_NativeMyTurboModuleCxxSpecJSI_language(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeMyTurboModuleCxxSpecJSI *>(&turboModule)->language(rt);
}
static jsi::Value __hostFunction_NativeMyTurboModuleCxxSpecJSI_greeting(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeMyTurboModuleCxxSpecJSI *>(&turboModule)->greeting(rt);
}

NativeMyTurboModuleCxxSpecJSI::NativeMyTurboModuleCxxSpecJSI(std::shared_ptr<JSCallInvoker> jsInvoker)
  : TurboModule("MyTurboModuleCxx", jsInvoker) {
  methodMap_["language"] = MethodMetadata {0, __hostFunction_NativeMyTurboModuleCxxSpecJSI_language};
  methodMap_["greeting"] = MethodMetadata {0, __hostFunction_NativeMyTurboModuleCxxSpecJSI_greeting};
}


} // namespace react
} // namespace facebook
