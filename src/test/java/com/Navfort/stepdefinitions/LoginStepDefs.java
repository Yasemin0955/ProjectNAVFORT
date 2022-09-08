package com.Navfort.stepdefinitions;

import com.Navfort.pages.LoginPage;
import com.Navfort.pages.MainPage;
import com.Navfort.utilities.BrowserUtils;
import com.Navfort.utilities.ConfigurationReader;
import com.Navfort.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginStepDefs {
    LoginPage loginPage=new LoginPage();



    @When("the user logged in as {string}")
    public void the_user_logged_in_as(String userType) {

        String username=null;
        String password=null;

        if(userType.equals("driver")){
            username=ConfigurationReader.get("driver_username");
            password=ConfigurationReader.get("driver_password");
        }else if(userType.equals("sales manager")){
            username=ConfigurationReader.get("salesmanager_username");
            password=ConfigurationReader.get("salesmanager_password");
        }else if(userType.equals("store manager")){
            username=ConfigurationReader.get("storemanager_username");
            password=ConfigurationReader.get("storemanager_password");
        }
        loginPage.login(username,password);

    }


    @Then("the user should land on {string}")
    public void theUserShouldLandOn(String pageSubtitle) {
        String actualTitle=loginPage.getPageSubTitle();
        Assert.assertEquals("title is not equal",pageSubtitle,actualTitle);
    }

    String currentUrl="";
    @And("the user logged out after getting the currentURL")
    public void theUserLoggedOutAfterGettingTheCurrentURL() {
       currentUrl = Driver.get().getCurrentUrl();
       new MainPage().logOut();
    }

    @Then("the user should not access to the application with that url without providing credentials")
    public void theUserShouldNotAccessToTheApplicationWithThatUrlWithoutProvidingCredentials() {
        BrowserUtils.waitFor(2);
        Driver.get().get(currentUrl);
        String expectedURL="https://qa.navfort.com/user/login";

        Assert.assertEquals("user accessed the application",expectedURL,Driver.get().getCurrentUrl());
    }


    @When("the user enter invalid {string} and {string}")
    public void theUserEnterInvalidAnd(String username, String password) {
        loginPage.login(username,password);

    }

    @Then("the user should see the warning message.")
    public void theUserShouldSeeTheWarningMessage() {
        Assert.assertTrue("message is not displayed",loginPage.wrongUsernamOrPasswordMessage.isDisplayed());
    }


    @Then("the user should see {string} message")
    public void the_user_should_see_message(String expectedMessage) {
        if(loginPage.usernameInput.getText()==null){
            String actualMessage=loginPage.usernameInput.getAttribute("validationMessage");
            Assert.assertEquals("not equal",expectedMessage,actualMessage);
        }else if(loginPage.passwordInput.getText()==null){
            String actualMessage=loginPage.passwordInput.getAttribute("validationMessage");
            Assert.assertEquals("not equal",expectedMessage,actualMessage);
        }else if(loginPage.passwordInput.getText()==null && loginPage.usernameInput.getText()==null)
        {
            String actualMessage=loginPage.usernameInput.getAttribute("validationMessage");
            Assert.assertEquals("not equal",expectedMessage,actualMessage);

        }

    }

    @When("the user clicks on login button without entering {string} and or {string}")
    public void theUserClicksOnLoginButtonWithoutEnteringAndOr(String username, String password) {
        loginPage.login(username,password);
    }


    @When("the user enters password")
    public void theUserEntersPassword() {
        loginPage.passwordInput.sendKeys(ConfigurationReader.get("driver_password"));

    }

    @Then("password is displayed in bullet signs")
    public void passwordIsDisplayedInBulletSigns() {

        boolean isEncrypted = loginPage.passwordInput.getAttribute("type").equals("password");
        Assert.assertTrue("password is not masked",isEncrypted);
    }

    @Then("{string} link is displayed and clickable")
    public void linkIsDisplayedAndClickable(String linkName) {
        Assert.assertTrue(linkName+" is not displayed",loginPage.rememberMeOnThisComputer.isDisplayed());
       WebDriverWait wait=new WebDriverWait(Driver.get(),10);
       wait.until(ExpectedConditions.visibilityOf(loginPage.rememberMeOnThisComputer_cb));
        loginPage.rememberMeOnThisComputer_cb.click();

        Assert.assertTrue(linkName+" is not selected",loginPage.rememberMeOnThisComputer_cb.isEnabled());

    }


    @When("the user enters username and hits enter key from keyboard")
    public void theUserEntersUsernameAndHitsEnterKeyFromKeyboard() {
        loginPage.usernameInput.sendKeys(ConfigurationReader.get("driver_username")+Keys.ENTER);

    }

    @And("the cursor is on the password inputbox")
    public void theCursorIsOnThePasswordInputbox() {
        WebElement passwordbox = Driver.get().switchTo().activeElement();
        Assert.assertEquals(loginPage.passwordInput,passwordbox);

    }

    @And("the user enters password and hits enter key again")
    public void theUserEntersPasswordAndHitsEnterKeyAgain() {
        loginPage.passwordInput.sendKeys(ConfigurationReader.get("driver_password")+Keys.ENTER);

    }

    @Then("login button is clicked")
    public void loginButtonIsClicked() {
        String expectedURL="https://qa.navfort.com/";
        String actualURL=Driver.get().getCurrentUrl();
        Assert.assertEquals(expectedURL,actualURL);
    }
}
