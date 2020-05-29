//
//  MyTurboModuleCxx.cpp
//  TurboModulePlayground
//
//  Created by Watcharachai Kanjaikaew on 22/12/2562 BE.
//  Copyright © 2562 Facebook. All rights reserved.
//

#include "MyTurboModuleCxx.h"
#import <ReactCommon/TurboModuleUtils.h>

using namespace facebook;

namespace facebook {
namespace react {

MyTurboModuleCxx::MyTurboModuleCxx(
    std::shared_ptr<JSCallInvoker> jsInvoker)
    : NativeMyTurboModuleCxxSpecJSI(jsInvoker) {}

jsi::String MyTurboModuleCxx::greeting(jsi::Runtime &rt) {
  return jsi::String::createFromUtf8(rt, "Hello from Cpp Module");
}

} // namespace react
} // namespace facebook
