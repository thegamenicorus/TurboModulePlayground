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
(std::shared_ptr<CallInvoker>)jsInvoker
{
  return std::make_shared<NativeMyTurboModuleSpecJSI>(self, jsInvoker);
}

- (NSString *)greeting{
  return @"Hello from Objective-C Module";
}

@end
