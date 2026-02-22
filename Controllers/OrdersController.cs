using Microsoft.AspNetCore.Mvc;
using Order_Management_System.Models;
using System.Linq;

namespace Order_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {
        // In-memory storage
        private static List<Order> orders = new List<Order>();
        private static int nextId = 1;

        // GET: api/orders
        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetOrders()
        {
            return Ok(orders);
        }

        // POST: api/orders
        [HttpPost]
        public ActionResult<Order> CreateOrder(Order newOrder)
        {
            newOrder.Id = nextId++;
            newOrder.Status = "Pending";
            newOrder.CreatedAt = DateTime.Now;

            orders.Add(newOrder);

            return CreatedAtAction(nameof(GetOrders), new { id = newOrder.Id }, newOrder);
        }

        // PUT: api/orders/{id}/complete
        [HttpPut("{id}/complete")]
        public ActionResult<Order> CompleteOrder(int id)
        {
            var order = orders.FirstOrDefault(o => o.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            order.Status = "Completed";

            return Ok(order);
        }

        // DELETE: api/orders/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var order = orders.FirstOrDefault(o => o.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            orders.Remove(order);

            return NoContent();
        }
    }
}
