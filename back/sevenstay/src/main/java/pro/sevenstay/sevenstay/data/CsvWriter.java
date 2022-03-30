// package pro.sevenstay.sevenstay.data;

// import java.util.ArrayList;
// import java.util.List;

// import org.springframework.batch.item.ItemWriter;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Configuration;

// import pro.sevenstay.sevenstay.model.entity.Accommodation;
// import pro.sevenstay.sevenstay.model.repository.AccommodationRepository;

// @Configuration
// public class CsvWriter implements ItemWriter<Accommodation> {
    
//     private AccommodationRepository accommodationRepository;

//     @Autowired
//     public CsvWriter(AccommodationRepository accommodationRepository){
//         this.accommodationRepository = accommodationRepository;

//  }

//     @Override
//     public void write(List<? extends Accommodation> items) throws Exception {
//         accommodationRepository.saveAll(new ArrayList<Accommodation>());   
//     }


// }
