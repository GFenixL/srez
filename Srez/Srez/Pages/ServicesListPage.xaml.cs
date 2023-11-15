using Srez.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Web.Script.Serialization;
using Srez.Classes;
using System.Text.Json;

namespace Srez.Pages
{
    /// <summary>
    /// Логика взаимодействия для ServicesListPage.xaml
    /// </summary>
    public partial class ServicesListPage : Page
    {
        public ServicesListPage()
        {
            InitializeComponent();
        }

        private void Load()
        {
            var json = HttpRequestHelper.HttpGet("https://localhost:7298/OrdersForApp", "");
            List<Order> orderList = JsonSerializer.Deserialize<List<Order>>(json);
            OrdersListView.ItemsSource = orderList;
        }

        private void AddMenuItem_Click(object sender, RoutedEventArgs e)
        {

        }

        private void EditMenuItem_Click(object sender, RoutedEventArgs e)
        {

        }

        private void DeleteMenuItem_Click(object sender, RoutedEventArgs e)
        {
            MenuItem menu = (MenuItem)sender;
            Order order = menu.DataContext as Order;

        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            Load();
        }
        //public T CallWebAPi<T>(Uri url, out bool isSuccessStatusCode)
        //{
        //    T result = default(T);

        //    using (HttpClient client = new HttpClient())
        //    {
        //        client.BaseAddress = url;
        //        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        //        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(
        //            System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", Userlogin, Userpassword))));

        //        HttpResponseMessage response = client.GetAsync(url).Result;
        //        isSuccessStatusCode = response.IsSuccessStatusCode;
        //        var javaScriptSerializer = new JavaScriptSerializer();
        //        if (isSuccessStatusCode)
        //        {
        //            var dataobj = response.Content.ReadAsStringAsync();
        //            result = javaScriptSerializer.Deserialize<T>(dataobj.Result);
        //        }
        //        else if (Convert.ToString(response.StatusCode) != "InternalServerError")
        //        {
        //            result = javaScriptSerializer.Deserialize<T>("{ \"APIMessage\":\"" + response.ReasonPhrase + "\" }");
        //        }
        //        else
        //        {
        //            result = javaScriptSerializer.Deserialize<T>("{ \"APIMessage\":\"InternalServerError\" }");
        //        }
        //    }
        //    return result;
        //}
    }
}
