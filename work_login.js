// Include the chrome driver
require("chromedriver");

// Include selenium webdriver
let driver = require("selenium-webdriver");
let browser = new driver.Builder();
let tab = browser.forBrowser("chrome").build();

// Get the credentials from the JSON file
let { username, password } = require("./credentials.json");

// Step 1 - Opening the geeksforgeeks sign in page
let tabToOpen =
	tab.get("https://www.instagram.com/accounts/login/");
tabToOpen
	.then(function () {

		// Timeout to wait if connection is slow
		let findTimeOutP =
			tab.manage().setTimeouts({
				implicit: 30000, // 30 seconds
			});
		return findTimeOutP;
	})
	.then(function () {

		// Finding the username input
		let promiseUsernameBox =
			tab.findElement(driver.By.name("username"));
		return promiseUsernameBox;
	})
	.then(function (usernameBox) {

		// Entering the username
		let promiseFillUsername =
			usernameBox.sendKeys(username);
		return promiseFillUsername;
	})
	.then(function () {
		console.log(
			"Username entered successfully in" +
			"'login test'"
		);

		// Finding the password input
		let promisePasswordBox =
			tab.findElement(driver.By.name("password"));
		return promisePasswordBox;
	})
	.then(function (passwordBox) {

		// Entering the password
		let promiseFillPassword =
			passwordBox.sendKeys(password);
		return promiseFillPassword;
	})
	.then(function () {
		console.log(
			"Password entered successfully in" +
			" 'login test'"
		);

		// Finding the Sign In button
		let promiseSignInBtn = tab.findElement(
			driver.By.css(".sqdOP.L3NKy.y3zKF")
		);
		return promiseSignInBtn;
	})
	.then(function (signInBtn) {

		// Clicking the Sign In button
		let promiseClickSignIn = signInBtn.click();
		return promiseClickSignIn;
	})
	.then(function () {
		console.log("Successfully signed!");
	})
	.catch(function (err) {
		console.log("Error ", err, " occurred!");
	});
    