<<<<<<< HEAD
/*package pro.sevenstay.sevenstay.controller;
=======
package pro.sevenstay.sevenstay.controller;
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pro.sevenstay.sevenstay.model.dto.OrderDTO;
import pro.sevenstay.sevenstay.service.OrderService;

@CrossOrigin(origins = "*")
@RestController
<<<<<<< HEAD
@RequestMapping("/orders")
=======
@RequestMapping("/accommodation")
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654
public class OrderController {
    
    private final OrderService orderService;
    
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

<<<<<<< HEAD
    @PostMapping() // Post: ~/api/v1/orders
=======
    @PostMapping() // POST: ~/accommodation
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654
    public void insertOrder(@RequestBody OrderDTO orderDTO) {
        
        orderService.insertOrder(orderDTO);
    }
}
<<<<<<< HEAD
*/
=======
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654
