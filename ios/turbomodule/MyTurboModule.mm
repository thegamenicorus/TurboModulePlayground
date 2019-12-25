//
//  MyTurboModule.cpp
//  TurboModulePlayground
//
//  Created by Watcharachai Kanjaikaew on 22/12/2562 BE.
//  Copyright © 2562 Facebook. All rights reserved.
//

#import "MyTurboModule.h"

#import <UIKit/UIKit.h>

using namespace facebook::react;

@implementation MyTurboModule //TurboModule name

- (std::shared_ptr<TurboModule>)getTurboModuleWithJsInvoker:
(std::shared_ptr<JSCallInvoker>)jsInvoker
{
  return std::make_shared<NativeMyTurboModuleSpecJSI>(self, jsInvoker);
}

- (NSString *)greeting{
  return @"Hello from Objective-C Module";
}

- (NSNumber *) getRandomNumber{
  int number = arc4random() % 100;
  return @(number);
}

RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSNumber *, addItBy30:(double)num) {
  return @(num + 30);
}

RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSNumber *, isBiggerThan100:(double)num) {
  return @(num > 100);
}

RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSArray<id<NSObject>> *, nativeReverse : (NSArray *)array)
{
  NSArray *reversedArray = [[array reverseObjectEnumerator] allObjects];
  return reversedArray;
}

RCT_EXPORT_METHOD(simulateCallback:(double)waitingSeconds callback:(RCTResponseSenderBlock)callback){
  if(!callback){
    return;
  }
  
  dispatch_time_t delay = dispatch_time(DISPATCH_TIME_NOW, NSEC_PER_SEC * waitingSeconds);
  dispatch_after(delay, dispatch_get_main_queue(), ^(void){
    callback(@[ @"This is value from callback!!" ]);
  });
}

RCT_EXPORT_METHOD(simulatePromise: (BOOL)error
                  waitingSeconds: (double)waitingSeconds
                  resolve: (RCTPromiseResolveBlock)resolve
                  reject: (RCTPromiseRejectBlock)reject)
{
    if (!resolve || !reject) {
      return;
    }
    
  dispatch_time_t delay = dispatch_time(DISPATCH_TIME_NOW, NSEC_PER_SEC * waitingSeconds);
  dispatch_after(delay, dispatch_get_main_queue(), ^(void){
      if (error) {
        reject(
            @"code_1",
            @"intentional promise rejection",
            [NSError errorWithDomain:@"MyTurboModule" code:1 userInfo:nil]);
      } else {
        resolve(@"This is value from Promise<string>!!");
      }
  });
}

- (NSDictionary *) getDeviceInfo{
  UIDevice *device = [UIDevice currentDevice];
  NSUUID *uuid = [device identifierForVendor];
  NSString *name = device.name;
  NSString *systemName = device.systemName;
  NSString *model = device.model;
  NSString *uuidString = uuid.UUIDString;
  
  return @{
    @"name": name,
    @"systemName": systemName,
    @"model": model,
    @"uuid": uuidString ?: [NSNull null],
  };
}


@end
