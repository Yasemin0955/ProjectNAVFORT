package com.Navfort.stepdefinitions;

import com.Navfort.pages.MainPage;
import com.Navfort.utilities.BrowserUtils;
import com.Navfort.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LogoutStepDefs {
    Logger logger= LogManager.getLogger(LogoutStepDefs.class);
    @When("the {string} logged out by using log out button inside the profile info")
    public void the_logged_out_by_using_log_out_button_inside_the_profile_info(String string) {
        logger.info("this is an information message");
        logger.error("this is an error message");
        logger.warn("this is a warning  message");
        logger.fatal("this is a fatal message");
        MainPage mainPage=new MainPage();
       mainPage.waitUntilLoaderScreenDisappear();
       BrowserUtils.waitFor(2);
        mainPage.userName.click();
        BrowserUtils.waitFor(2);
        mainPage.logOutLink.click();


    }

    @Then("the user ended up in login page after logging out")
    public void the_user_ended_up_in_login_page_after_logging_out() {
        String expectedURL="https://qa.navfort.com/user/login";
        String actualURL= Driver.get().getCurrentUrl();
        Assert.assertEquals("user is not ended up in login page",expectedURL,actualURL);

    }

    @Then("the user can not go to the home page again by clicking the step back button after successfully logged out.")
    public void theUserCanNotGoToTheHomePageAgainByClickingTheStepBackButtonAfterSuccessfullyLoggedOut() {
        Driver.get().navigate().back();
        String expectedURL="https://qa.navfort.com/";
        String actualURL=Driver.get().getCurrentUrl();
        Assert.assertNotEquals("user is able to go to home page",expectedURL,actualURL);
    }
}
