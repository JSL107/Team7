package pro.sevenstay.sevenstay.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;
import pro.sevenstay.sevenstay.model.entity.Accommodation;
import pro.sevenstay.sevenstay.model.repository.AccommodationRepository;

@Service
public class AccommodationServiceImpl implements AccommodationService{
    
    @Autowired
    private AccommodationRepository accommodationRepository;
    
    @Override
    public List<AccommodationDTO> findAllAccommo(){
        List<Accommodation> list = accommodationRepository.findAll();
        
        List<AccommodationDTO> result = list.stream().map(r -> new AccommodationDTO(r)).collect(Collectors.toList());
        return result;
    }

    // @Override
    //     public void insertAccommodation(AccommodationDTO accommodationDTO) {
    
    //             Accommodation accommo = new Accommodation();
    //             accommo.setAccommodationName("석이네 민박");
    //             accommo.setAddress("서귀포시");
    //             accommo.setCity("제주");
    //             accommo.setId(2l);
    //             accommo.setPhoneNumber("010-0000-0000");
        
    //             accommodationRepository.save(accommo);
                
    //         }

}
