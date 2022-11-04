package com.example.case_study_module_4.service.customer.impl;

import com.example.case_study_module_4.model.customer.Customer;
import com.example.case_study_module_4.repository.customer.ICustomerRepository;
import com.example.case_study_module_4.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;


    @Override
    public Page<Customer> getAll(Pageable pageable) {
        return this.customerRepository.getAll(pageable);
    }

    @Override
    public List<Customer> getListAllCustomer() {
        return this.customerRepository.findAll();
    }

    @Override
    public void save(Customer customer) {
        if (customer.getId() == null){
            this.customerRepository.add(
                    customer.getName(),
                    customer.getDayOfBirth(),
                    customer.getGender(),
                    customer.getIdCard(),
                    customer.getPhoneNumber(),
                    customer.getEmail(),
                    customer.getAddress(),
                    customer.getCustomerType().getId());
        }else {
            this.customerRepository.update( customer.getName(),
                    customer.getDayOfBirth(),
                    customer.getGender(),
                    customer.getIdCard(),
                    customer.getPhoneNumber(),
                    customer.getEmail(),
                    customer.getAddress(),
                    customer.getCustomerType().getId(),
                    customer.getId());
        }
    }

    @Override
    public void delete(int id) {
        this.customerRepository.deleteByQuery(id);
    }

    @Override
    public Customer findById(Integer id) {
        return this.customerRepository.findById(id).orElse(null);
    }
}
