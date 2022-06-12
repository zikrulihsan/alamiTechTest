//
//  Counter.m
//  AlamiTechTest
//
//  Created by Justika Engineer on 12/06/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(IosCustomModule,NSObject)

RCT_EXTERN_METHOD(getDeviceId:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end
