// package pro.sevenstay.sevenstay.data;

// import org.springframework.batch.item.file.FlatFileItemReader;
// import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
// import org.springframework.batch.item.file.mapping.DefaultLineMapper;
// import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.core.io.ClassPathResource;

// import pro.sevenstay.sevenstay.model.entity.Accommodation;

// @Configuration
// public class CsvReader {
//     @Bean
//     public FlatFileItemReader<Accommodation> csvFileItemReader() {
//         /* file read*/
//         FlatFileItemReader<Accommodation> flatFileItemReader = new FlatFileItemReader<>();
//         flatFileItemReader.setResource(new ClassPathResource("/jeju-accommodation-data.csv"));
//         flatFileItemReader.setLinesToSkip(1); // header line skip
//         flatFileItemReader.setEncoding("UTF-8"); // encoding

//         /* read하는 데이터를 내부적으로 LineMapper을 통해 Mapping */
//         DefaultLineMapper<Accommodation> defaultLineMapper = new DefaultLineMapper<>();

//         /* delimitedLineTokenizer : setNames를 통해 각각의 데이터의 이름 설정 */
//         DelimitedLineTokenizer delimitedLineTokenizer = new DelimitedLineTokenizer(",");
//         delimitedLineTokenizer.setNames("id", "name");
//         defaultLineMapper.setLineTokenizer(delimitedLineTokenizer);

//         /* beanWrapperFieldSetMapper : Tokenizer에서 가지고온 데이터들을 VO로 바인드하는 역할 */
//         BeanWrapperFieldSetMapper<Accommodation> beanWrapperFieldSetMapper = new BeanWrapperFieldSetMapper<>();
//         beanWrapperFieldSetMapper.setTargetType(Accommodation.class);

//         defaultLineMapper.setFieldSetMapper(beanWrapperFieldSetMapper);

//          /* lineMapper 지정 */
//          flatFileItemReader.setLineMapper(defaultLineMapper);

//          return flatFileItemReader;
//     }
// }
