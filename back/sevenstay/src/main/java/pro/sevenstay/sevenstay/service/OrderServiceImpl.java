/*package pro.sevenstay.sevenstay.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pro.sevenstay.sevenstay.model.dto.OrderDTO;
import pro.sevenstay.sevenstay.model.entity.Accommodation;
import pro.sevenstay.sevenstay.model.entity.Order;
import pro.sevenstay.sevenstay.model.repository.AccommodationRepository;
import pro.sevenstay.sevenstay.model.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    AccommodationRepository accommodationRepository;

    @Override
    public void insertOrder(OrderDTO orderDTO) {
        
        //accommodatiion.finyByCity()로 도시이름을 통해 Location을 찾고싶음
        Accommodation accommodation = accommodationRepository.findByCity(orderDTO.getLocation());

        Order order = new Order();
        order.setCheckIn(orderDTO.getCheckIn());
        order.setCheckOut(orderDTO.getCheckOut());
        order.setGuest(orderDTO.getGuest());
        order.setAccommodationName(orderDTO.getAccommodationName());

        order.setAccommodation(accommodation);
        orderRepository.save(order);
        
    }

   
}
*/