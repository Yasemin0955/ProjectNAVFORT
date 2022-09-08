$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Logout.feature");
formatter.feature({
  "name": "Logout Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WIP"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Logout after successful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NAVF-919"
    }
  ]
});
formatter.step({
  "name": "the user logged in as \"\u003cuserType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the \"\u003cuserType\u003e\" logged out by using log out button inside the profile info",
  "keyword": "When "
});
formatter.step({
  "name": "the user ended up in login page after logging out",
  "keyword": "Then "
});
formatter.step({
  "name": "the user can not go to the home page again by clicking the step back button after successfully logged out.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType"
      ]
    },
    {
      "cells": [
        "driver"
      ]
    },
    {
      "cells": [
        "sales manager"
      ]
    },
    {
      "cells": [
        "store manager"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Logout after successful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WIP"
    },
    {
      "name": "@NAVF-919"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LoginStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"driver\" logged out by using log out button inside the profile info",
  "keyword": "When "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.the_logged_out_by_using_log_out_button_inside_the_profile_info(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Logout\"}\n  (Session info: chrome\u003d99.0.4844.82)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-ERH3KPPD\u0027, ip: \u0027192.168.169.134\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.82, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\Luton\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54002}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 027c7284f46e544409450140d9ead303\n*** Element info: {Using\u003dlink text, value\u003dLogout}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.Navfort.stepdefinitions.LogoutStepDefs.the_logged_out_by_using_log_out_button_inside_the_profile_info(LogoutStepDefs.java:27)\r\n\tat ✽.the \"driver\" logged out by using log out button inside the profile info(file:///C:/Users/Luton/IdeaProjects/ProjectNAVFORT/src/test/resources/features/Logout.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user ended up in login page after logging out",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.the_user_ended_up_in_login_page_after_logging_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user can not go to the home page again by clicking the step back button after successfully logged out.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.theUserCanNotGoToTheHomePageAgainByClickingTheStepBackButtonAfterSuccessfullyLoggedOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout after successful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WIP"
    },
    {
      "name": "@NAVF-919"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LoginStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"sales manager\" logged out by using log out button inside the profile info",
  "keyword": "When "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.the_logged_out_by_using_log_out_button_inside_the_profile_info(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"javascript: void(0);\" class\u003d\"dropdown-toggle\" data-toggle\u003d\"dropdown\"\u003e...\u003c/a\u003e is not clickable at point (1218, 16). Other element would receive the click: \u003cdiv class\u003d\"loader-mask shown\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d99.0.4844.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-ERH3KPPD\u0027, ip: \u0027192.168.169.134\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.82, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\Luton\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54021}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3c3fd2b3e69d05b3e80b090d133ad5a4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.Navfort.stepdefinitions.LogoutStepDefs.the_logged_out_by_using_log_out_button_inside_the_profile_info(LogoutStepDefs.java:25)\r\n\tat ✽.the \"sales manager\" logged out by using log out button inside the profile info(file:///C:/Users/Luton/IdeaProjects/ProjectNAVFORT/src/test/resources/features/Logout.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user ended up in login page after logging out",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.the_user_ended_up_in_login_page_after_logging_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user can not go to the home page again by clicking the step back button after successfully logged out.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.theUserCanNotGoToTheHomePageAgainByClickingTheStepBackButtonAfterSuccessfullyLoggedOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout after successful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WIP"
    },
    {
      "name": "@NAVF-919"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LoginStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"store manager\" logged out by using log out button inside the profile info",
  "keyword": "When "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.the_logged_out_by_using_log_out_button_inside_the_profile_info(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"javascript: void(0);\" class\u003d\"dropdown-toggle\" data-toggle\u003d\"dropdown\"\u003e...\u003c/a\u003e is not clickable at point (1218, 16). Other element would receive the click: \u003cdiv class\u003d\"loader-mask shown\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d99.0.4844.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-ERH3KPPD\u0027, ip: \u0027192.168.169.134\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.82, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\Luton\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54038}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2f57ebd9505f21de7176ec260ae8ea03\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.Navfort.stepdefinitions.LogoutStepDefs.the_logged_out_by_using_log_out_button_inside_the_profile_info(LogoutStepDefs.java:25)\r\n\tat ✽.the \"store manager\" logged out by using log out button inside the profile info(file:///C:/Users/Luton/IdeaProjects/ProjectNAVFORT/src/test/resources/features/Logout.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user ended up in login page after logging out",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.the_user_ended_up_in_login_page_after_logging_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user can not go to the home page again by clicking the step back button after successfully logged out.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Navfort.stepdefinitions.LogoutStepDefs.theUserCanNotGoToTheHomePageAgainByClickingTheStepBackButtonAfterSuccessfullyLoggedOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});