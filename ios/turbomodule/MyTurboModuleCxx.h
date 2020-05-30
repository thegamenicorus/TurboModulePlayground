//
//  MyTurboModuleCxx.hpp
//  TurboModulePlayground
//
//  Created by Watcharachai Kanjaikaew on 22/12/2562 BE.
//  Copyright © 2562 Facebook. All rights reserved.
//
#import "TurboModuleCxxSpec.h"

namespace facebook {
namespace react {

/**
 * A sample implementation of the C++ spec. In practice, this class can just
 * extend jsi::HostObject directly, but using the spec provides build-time
 * type-safety.
 */
class MyTurboModuleCxx : public NativeMyTurboModuleCxxSpecJSI {
 public:
  MyTurboModuleCxx(std::shared_ptr<CallInvoker> jsInvoker);  
  
  jsi::String greeting(jsi::Runtime &rt)override;
};

} // namespace react
} // namespace facebook
