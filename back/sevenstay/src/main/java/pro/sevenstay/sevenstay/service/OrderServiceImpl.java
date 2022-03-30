<<<<<<< HEAD
/*package pro.sevenstay.sevenstay.service;
=======
package pro.sevenstay.sevenstay.service;
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pro.sevenstay.sevenstay.model.dto.OrderDTO;
import pro.sevenstay.sevenstay.model.entity.Accommodation;
import pro.sevenstay.sevenstay.model.entity.Order;
import pro.sevenstay.sevenstay.model.repository.AccommodationRepository;
import pro.sevenstay.sevenstay.model.repository.OrderRepository;

<<<<<<< HEAD
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
=======
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
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654

    @Override
    public void insertOrder(OrderDTO orderDTO) {

        Accommodation accommodation = accommodationRepository.findByAccommodationName(orderDTO.getAccommodationName()); // getCity가 들어가는게 마잔?

        // Order 엔티티 생성
        Order order = new Order();
        order.setCity(orderDTO.getCity());
        order.setCheckIn(orderDTO.getCheckIn());
        order.setCheckOut(orderDTO.getCheckOut());
        order.setPeople(orderDTO.getPeople());

        // 연관관계 설정(맵핑)
        order.setAccomodation(accommodation);

        //저장
        orderRepository.save(order);
    }
   
<<<<<<< HEAD
}
*/
=======
    
}
>>>>>>> b1cd0cce39c74cef5661e148fd6560c1c162a654
