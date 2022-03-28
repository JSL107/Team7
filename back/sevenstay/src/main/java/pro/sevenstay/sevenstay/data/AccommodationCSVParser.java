// package pro.sevenstay.sevenstay.data;

// import java.util.ArrayList;
// import java.util.List;

// import org.springframework.stereotype.Component;

// import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;

// @Component("accommodationParser")
// public class AccommodationCSVParser implements AccommodationParser {
    
//    @Override
//    public AccommodationDTO parseFrom(String line) {
//         String[] columns = line.split(",");
//         final String id = columns[0];
//         final String city = columns[1];
//         final String accommodationName = columns[2];
//         final String address = columns[3];
//         final String phoneNumber = columns[4];

//         AccommodationDTO accommodation = new AccommodationDTO(id, city, accommodationName, address, phoneNumber);
//         return accommodation;
//    }

//    @Override
//    public List<AccommodationDTO> parseLinesFrom(List<String> lines) {
//        List<AccommodationDTO> accommodations = new ArrayList<>();

//        for (String line: lines) {
//         accommodations.add(parseFrom(line));
//        }

//        return accommodations;
//    }
   
// }
