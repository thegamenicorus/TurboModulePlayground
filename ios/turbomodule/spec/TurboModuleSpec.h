
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// NOTE: This entire file should be codegen'ed.

#import <vector>

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>

#import <ReactCommon/RCTTurboModule.h>
#import <RCTRequired/RCTRequired.h>
#import <RCTTypeSafety/RCTTypedModuleConstants.h>
#import <React/RCTCxxConvert.h>
#import <React/RCTManagedPointer.h>
#import <RCTTypeSafety/RCTConvertHelpers.h>






@protocol NativeMyTurboModuleSpec <RCTTurboModule>
- (NSString *) greeting;
- (NSNumber *) getRandomNumber;
- (NSNumber *) addItBy30:(double)num;
- (NSNumber *) isBiggerThan100:(double)num;
- (NSArray<id<NSObject>> *) nativeReverse:(NSArray *)array;
- (void) simulateCallback:(double)waitingSeconds
   callback:(RCTResponseSenderBlock)callback;
- (void) simulatePromise:(BOOL)error
   waitingSeconds:(double)waitingSeconds
   resolve:(RCTPromiseResolveBlock)resolve
   reject:(RCTPromiseRejectBlock)reject;
- (NSDictionary *) getDeviceInfo;
@end


namespace facebook {
namespace react {

class JSI_EXPORT NativeMyTurboModuleSpecJSI : public ObjCTurboModule {
public:
  NativeMyTurboModuleSpecJSI(id<RCTTurboModule> instance, std::shared_ptr<JSCallInvoker> jsInvoker);
};

} // namespace react
} // namespace facebook
