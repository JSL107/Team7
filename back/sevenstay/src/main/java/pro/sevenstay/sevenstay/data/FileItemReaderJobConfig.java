package pro.sevenstay.sevenstay.data;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import pro.sevenstay.sevenstay.model.dto.AccommodationDTO;
import pro.sevenstay.sevenstay.model.entity.Accommodation;

@Configuration
public class FileItemReaderJobConfig {

    private JobBuilderFactory jobBuilderFactory;
    private StepBuilderFactory stepBuilderFactory;
    private CsvReader csvReader;
    private CsvWriter csvWriter;

    private static final int chunkSize = 1000;

    @Autowired
    public FileItemReaderJobConfig(JobBuilderFactory jobBuilderFactory, StepBuilderFactory stepBuilderFactory) {
        this.jobBuilderFactory = jobBuilderFactory;
        this.stepBuilderFactory = stepBuilderFactory;
    }

    @Bean
    public Job csvFileItemReaderJob(){
        return jobBuilderFactory.get("csvFileItemReaderJob")
        .start(csvFileItemReaderStep())
        .build();   
    }

    @Bean
    public Step csvFileItemReaderStep() {
        return stepBuilderFactory.get("csvFileItemReaderStep")
        .<Accommodation, Accommodation>chunk(chunkSize) // <JejuAccommodation, JejuAccommodation> Reader에서 읽어올 타입이 JejuAccommodation, Writer에 넘겨줄 타입이 JejuAccommodation
        .reader(csvReader.csvFileItemReader())
        .writer(csvWriter)
        .build();
    }

}
