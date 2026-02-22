namespace Order_Management_System.Models
{
    public class Order
    {

        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string ProductName { get; set; }

        public decimal Amount { get; set; }

        public string Status { get; set; }

        public DateTime CreatedAt { get; set; }


    }
}
