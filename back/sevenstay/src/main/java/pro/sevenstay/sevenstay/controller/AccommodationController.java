package pro.sevenstay.sevenstay.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;
import pro.sevenstay.sevenstay.service.AccommodationService;

@CrossOrigin(origins = "*")
@RestController
<<<<<<< HEAD
@RequestMapping("/accommodation")
=======
@RequestMapping(path = "/accommodation") // /accommodation/get
>>>>>>> 4f0135991d4c7df6dcde2c60fc702766cc7828d9
public class AccommodationController {
    private final AccommodationService accommodationService;

    public AccommodationController(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @GetMapping("/get")
    public List<AccommodationDTO> findAllAccommo() {
        return accommodationService.findAllAccommo();
    }

    @PostMapping("/post") // POST
    public void insertAccommodation(@RequestBody AccommodationDTO accommodationDTO) {
        accommodationService.insertAccommodation(accommodationDTO);

    }
}