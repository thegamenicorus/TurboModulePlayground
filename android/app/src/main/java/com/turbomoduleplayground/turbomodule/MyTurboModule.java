package com.turbomoduleplayground.turbomodule;


import com.turbomoduleplayground.turbomodule.spec.TurboModuleSpec;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Module that exposes the URL to the source code map (used for exception stack trace parsing) to JS
 */
@ReactModule(name = MyTurboModule.NAME)
public class MyTurboModule extends TurboModuleSpec {

    public static final String NAME = "MyTurboModule";

    public MyTurboModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        HashMap<String, Object> constants = new HashMap<>();
        constants.put("name", "TheGame Nicorus");
        return constants;
    }

    @Nullable
    @Override
    public String greeting() {
        return "Hello from Java.";
    }
}