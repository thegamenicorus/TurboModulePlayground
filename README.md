# TurboModulePlayground

## First things first

- This repository is nothing, just try to simulate how TurboModule, and CodeGen work together.

- TurboModule and CodeGen are not yet formally released. It may change in the future. **_Do not use this project for production._**

- only iOS is supported at the moment. PRs for Android are welcome.

<img src="https://user-images.githubusercontent.com/21040043/71474177-649f7580-282e-11ea-8d30-ba0025f1591d.png" width="300" /><img src="https://user-images.githubusercontent.com/21040043/71474178-65380c00-282e-11ea-903c-1c8083ba3dc3.png" width="300" />

## Getting started

1. Clone this repository.
2. Run `npm install` , all required components will be installed automatically.

   ### iOS

   1. Run `pod install` from `TurboModulePlayground/ios` folder.
   2. Start XCode and open generated `TurboModulePlayground.xcworkspace`.

   ### Android

   no steps required.

## Create your turbo module

### iOS

1. Create a Spec file at `src/turbomodules`. Each Spec file is named `Native*.js` for ObjC module **OR** `Native*Cxx.js` for C++ module, where `*` is the name of the NativeModule.

2. Run `npm run codegen`. Then TurboModuleSpec and TurboModuleCxxSpec will be generated at `Xcode/TurboModulePlayground/turbomodule/spec`

3. Add your native file into Xcode.

4. Add your turbo module name into `Xcode/TurboModulePlayground/turbomodule/TurboModuleProvider.mm`

### Android

    not yet supported.

## More about Spec file and supported types.

https://github.com/facebook/react-native/issues/24875#issue-444697876
