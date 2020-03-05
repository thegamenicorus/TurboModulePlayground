package com.turbomoduleplayground.turbomodule.provider;

import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import com.turbomoduleplayground.turbomodule.MyTurboModule;

import java.util.HashMap;
import java.util.Map;

public class TurboModuleProvider extends TurboReactPackage {

    @Override
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        try {
            Class<?> reactModuleInfoProviderClass =
                    Class.forName("com.turbomoduleplayground.turbomodule.provider.TurboModuleProvider$$ReactModuleInfoProvider");
            return (ReactModuleInfoProvider) reactModuleInfoProviderClass.newInstance();
        } catch (ClassNotFoundException e) {
            // In OSS case, the annotation processor does not run. We fall back on creating this byhand
            Class<? extends NativeModule>[] moduleList =
                    new Class[] {
                            MyTurboModule.class,
                    };

            final Map<String, ReactModuleInfo> reactModuleInfoMap = new HashMap<>();
            for (Class<? extends NativeModule> moduleClass : moduleList) {
                ReactModule reactModule = moduleClass.getAnnotation(ReactModule.class);

                reactModuleInfoMap.put(
                        reactModule.name(),
                        new ReactModuleInfo(
                                reactModule.name(),
                                moduleClass.getName(),
                                reactModule.canOverrideExistingModule(),
                                reactModule.needsEagerInit(),
                                reactModule.hasConstants(),
                                reactModule.isCxxModule(),
                                TurboModule.class.isAssignableFrom(moduleClass)));
            }

            return new ReactModuleInfoProvider() {
                @Override
                public Map<String, ReactModuleInfo> getReactModuleInfos() {
                    return reactModuleInfoMap;
                }
            };
        }catch (InstantiationException e) {
            throw new RuntimeException(
                    "No ReactModuleInfoProvider for TurboModuleProvider$$ReactModuleInfoProvider", e);
        } catch (IllegalAccessException e) {
            throw new RuntimeException(
                    "No ReactModuleInfoProvider for TurboModuleProvider$$ReactModuleInfoProvider", e);
        }
    }

    @Override
    public NativeModule getModule(String name, ReactApplicationContext reactContext) {
        switch(name) {
            case MyTurboModule.NAME:
                return new MyTurboModule(reactContext);
            default:
                throw new IllegalArgumentException(
                        "In CoreModulesPackage, could not find Native module for " + name);
        }
    }
}
