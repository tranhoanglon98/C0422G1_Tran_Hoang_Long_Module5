package com.example.case_study_module_4.service.customer;

import com.example.case_study_module_4.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {

    Page<Customer> getAll(Pageable pageable);

    List<Customer> getListAllCustomer();

    void save(Customer customer);

    void delete(int id);

    Customer findById(Integer id);

}
