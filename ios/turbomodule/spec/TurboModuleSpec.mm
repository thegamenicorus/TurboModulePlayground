
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "TurboModuleSpec.h"

namespace facebook {
namespace react {

static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_greeting(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, StringKind, "greeting", @selector(greeting), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_getRandomNumber(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, NumberKind, "getRandomNumber", @selector(getRandomNumber), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_addItBy30(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, NumberKind, "addItBy30", @selector(addItBy30:), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_isBiggerThan100(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, BooleanKind, "isBiggerThan100", @selector(isBiggerThan100:), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_nativeReverse(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, ArrayKind, "nativeReverse", @selector(nativeReverse:), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_simulateCallback(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, VoidKind, "simulateCallback", @selector(simulateCallback:callback:), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_simulatePromise(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, PromiseKind, "simulatePromise", @selector(simulatePromise:waitingSeconds:resolve:reject:), args, count);
}
static facebook::jsi::Value __hostFunction_NativeMyTurboModuleSpecJSI_getDeviceInfo(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  return static_cast<ObjCTurboModule &>(turboModule)
         .invokeObjCMethod(rt, ObjectKind, "getDeviceInfo", @selector(getDeviceInfo), args, count);
}

NativeMyTurboModuleSpecJSI::NativeMyTurboModuleSpecJSI(id<RCTTurboModule> instance, std::shared_ptr<JSCallInvoker> jsInvoker)
  : ObjCTurboModule("MyTurboModule", instance, jsInvoker) {
  methodMap_["greeting"] = MethodMetadata {0, __hostFunction_NativeMyTurboModuleSpecJSI_greeting};
  methodMap_["getRandomNumber"] = MethodMetadata {0, __hostFunction_NativeMyTurboModuleSpecJSI_getRandomNumber};
  methodMap_["addItBy30"] = MethodMetadata {1, __hostFunction_NativeMyTurboModuleSpecJSI_addItBy30};
  methodMap_["isBiggerThan100"] = MethodMetadata {1, __hostFunction_NativeMyTurboModuleSpecJSI_isBiggerThan100};
  methodMap_["nativeReverse"] = MethodMetadata {1, __hostFunction_NativeMyTurboModuleSpecJSI_nativeReverse};
  methodMap_["simulateCallback"] = MethodMetadata {2, __hostFunction_NativeMyTurboModuleSpecJSI_simulateCallback};
  methodMap_["simulatePromise"] = MethodMetadata {2, __hostFunction_NativeMyTurboModuleSpecJSI_simulatePromise};
  methodMap_["getDeviceInfo"] = MethodMetadata {0, __hostFunction_NativeMyTurboModuleSpecJSI_getDeviceInfo};
}


} // namespace react
} // namespace facebook
