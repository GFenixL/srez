using Srez.Properties;
using System.Windows;
using System.Windows.Controls;

namespace Srez.Pages
{
    /// <summary>
    /// Логика взаимодействия для LoginPage.xaml
    /// </summary>
    public partial class LoginPage : Page
    {
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

            if (false)
            {
                return;
            }

            NavigationService.Navigate();
        }
    }
}
