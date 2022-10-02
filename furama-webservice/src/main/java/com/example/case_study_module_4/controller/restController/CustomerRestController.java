package com.example.case_study_module_4.controller.restController;

import com.example.case_study_module_4.model.customer.Customer;
import com.example.case_study_module_4.model.customer.CustomerType;
import com.example.case_study_module_4.service.customer.ICustomerService;
import com.example.case_study_module_4.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*")
public class CustomerRestController {
    @Autowired
    private ICustomerTypeService customerTypeService;

    @Autowired
    private ICustomerService customerService;


    @GetMapping("")
    public ResponseEntity<Page<Customer>> goCustomerPage(Pageable pageable) {
        Page<Customer> customerPage = this.customerService.getAll(pageable);

        if (customerPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(customerPage,HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Integer id){
        Customer customer = this.customerService.findById(id);
        return new ResponseEntity<>(customer,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Void> save(@RequestBody Customer customer){
        this.customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        this.customerService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("")
    public ResponseEntity<Void> update(@RequestBody Customer customer){
        this.customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("customerType")
    public ResponseEntity<List<CustomerType>> getAllCustomerType(){
        List<CustomerType> customerTypes = this.customerTypeService.findAll();
        return new ResponseEntity<>(customerTypes,HttpStatus.OK);
    }
}
