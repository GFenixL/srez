using Srez.Classes;
using Srez.Properties;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Windows;
using System.Windows.Controls;

namespace Srez.Pages
{
    /// <summary>
    /// Логика взаимодействия для LoginPage.xaml
    /// </summary>
    public partial class LoginPage : Page
    {
        private static readonly HttpClient client = new HttpClient();
        public LoginPage()
        {
            InitializeComponent();

            string token = Settings.Default.token;

            if ((token != null) || !string.IsNullOrEmpty(token))
            {

            }
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            string login = LoginTextBox.Text;
            string password = PasswordTextBox.Password;

            if (string.IsNullOrEmpty(login) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("Введите все необходимые данные.");
                return;
            }
            else
            {
                bool t = true;
                
                if
                    (HttpRequestHelper.HttpPost("https://localhost:7298/login",
                    "{\"Userlogin\":\"" + LoginTextBox.Text + "\"," +
                    "\"Userpassword\":\"" + PasswordTextBox.Password + "\"}", ref t).Contains("access_token"))
                {
                    NavigationService.Navigate(new ServicesListPage());
                }
                else
                {
                    MessageBox.Show("Неверный логин или пароль!","Ошибка!",MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }
    }
}
