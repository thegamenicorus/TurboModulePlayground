
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "TurboModuleSpec.h"

namespace facebook {
namespace react {

static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_language(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, StringKind, "language", @selector(language), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_greeting(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, StringKind, "greeting", @selector(greeting), args, count);
}

NativeMyTurboModuleSpecJSI::NativeMyTurboModuleSpecJSI(id<RCTTurboModule> instance, std::shared_ptr<JSCallInvoker> jsInvoker)
  : ObjCTurboModule("MyTurboModule", instance, jsInvoker) {
  methodMap_["language"] = MethodMetadata {0, __hostFunction_NativeMyTurboModuleSpecJSI_language};
  methodMap_["greeting"] = MethodMetadata {0, __hostFunction_NativeMyTurboModuleSpecJSI_greeting};
}


} // namespace react
} // namespace facebook
