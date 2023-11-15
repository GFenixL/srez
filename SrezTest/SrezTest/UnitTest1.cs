using FlaUI.Core.AutomationElements;
using FlaUI.UIA3;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace SrezTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Login()
        {
            var app = FlaUI.Core.Application.Launch("C:\\Users\\pesba\\Desktop\\Srez\\Srez\\bin\\Debug\\Srez.exe");
            var automation = new UIA3Automation();
            var window = app.GetMainWindow(automation);
            var page = window.FindFirstDescendant(cf => cf.ByAutomationId("MainFrame"))?.AsGrid();
            var loginbox = page.FindFirstDescendant(cf => cf.ByAutomationId("LoginTextBox"))?.AsTextBox();
            loginbox.Text = "qwe";
            var passwordBox = page.FindFirstDescendant(cf => cf.ByAutomationId("PasswordTextBox"))?.AsTextBox();
            passwordBox.Text = "123";
            var button = page.FindFirstDescendant(cf => cf.ByAutomationId("LoginButton")).AsButton();
            button.Click();
        }
    }
}
