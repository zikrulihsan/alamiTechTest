//
//  Counter.swift
//  AlamiTechTest
//
//  Created by Justika Engineer on 12/06/22.
//

import Foundation

@objc(IosCustomModule)
class IosCustomModule: NSObject{
  
  
  private var deviceId = UIDevice.current.identifierForVendor!.uuidString
 
  @objc
  static func requiresMainQueueSetup() ->Bool{
    return true;
  }
  
  @objc
  func constantsToExport() -> [String: Any]!{
    return ["deviceId": ""];
  }
  
  @objc
  func getDeviceId(_ resolve:RCTPromiseResolveBlock,
                 reject:RCTPromiseRejectBlock)
  {
    if(deviceId == "") {
      let error = NSError(domain: "", code: 200, userInfo: nil);
      reject("ERROR_COUNT","count cannot be negative",error);
    } else {
      resolve(deviceId);
    }
  }
}
