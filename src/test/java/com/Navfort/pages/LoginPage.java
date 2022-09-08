package com.Navfort.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{
    @FindBy(id="prependedInput")
    public WebElement usernameInput;

    @FindBy(id="prependedInput2")
    public WebElement passwordInput;
    @FindBy(id="_submit")
    public WebElement loginBtn;

    @FindBy(xpath = "//div[@class='alert alert-error']/div")
    public WebElement wrongUsernamOrPasswordMessage;

    @FindBy(css = ".custom-checkbox__text")
    public WebElement rememberMeOnThisComputer;
    @FindBy(css = ".custom-checkbox__icon")
    public WebElement rememberMeOnThisComputer_cb;


    public void login(String username,String password){
        usernameInput.sendKeys(username);
        passwordInput.sendKeys(password);
        loginBtn.click();

    }

}
